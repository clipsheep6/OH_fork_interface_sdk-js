#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright (c) 2024 Huawei Device Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from utils.util import (get_start_characters, get_remaining_characters, json_file_data, label_type_conversion,
                        get_check_labels, generate_excel, get_position_information,
                        set_label_to_result, get_js_doc_info)
from utils.constants import mutex_label_dist, contrast_function, label_name_dist, one_to_many_function
from typedef.detection import Output, ErrorMessage, ErrorType


result_list = []


def judgement_dict_data(result, result_key):
    my_dict = dict()
    for dict_data in result[result_key]:  # 代表对应文件的解析数据
        # 互斥标签
        if 'jsDocInfos' in dict_data:
            if len(dict_data['jsDocInfos']) > 0:
                get_mutex_label(dict_data)
        # 枚举类标签检测
        if dict_data['apiType'] == 'Enum':
            enum_label_detection(dict_data)
        my_dict[dict_data['definedText']] = dict_data
        dict_keys = dict_data.keys()
        if 'childApis' in dict_keys:  # 递归处理child
            judgement_dict_data(dict_data, 'childApis')
    #校验成对函数漏标
    paired_function_omission_label(my_dict)


def enum_label_detection(parent_enum_info: dict):
    if 'jsDocInfos' not in parent_enum_info:
        return
    parent_js_doc_info = get_js_doc_info(parent_enum_info['jsDocInfos'])
    if parent_js_doc_info is None:
        return
    if not parent_js_doc_info['isAtomicService']:
        return
    children_list = parent_enum_info['childApis']
    count = 0
    for child_info in children_list:
        child_doc_info = get_js_doc_info(child_info['jsDocInfos'])
        if child_doc_info is None:
            continue
        if child_doc_info['isAtomicService']:
            count = count + 1
    if count == 0:
        result = Output(parent_enum_info['filePath'], ErrorType.ENUM_LABEL.value, parent_enum_info['definedText'],
                        get_position_information(parent_enum_info['pos']),
                        set_label_to_result(ErrorMessage.ENUM_LABEL.value,
                                            parent_enum_info['apiName'], label_name_dist.get('isAtomicService')))
        result_list.append(result)


#成对出现的函数漏标
def paired_function_omission_label(my_dict: dict):
    filter_duplicates_dist = []  # 存储结果，防止重复
    for defined_text in my_dict:
        if is_pairing_function(defined_text, my_dict):
            pairing(defined_text, my_dict, filter_duplicates_dist)


def is_pairing_function(defined_text, my_dict: dict):
    target_api_info = my_dict[defined_text]
    api_type = target_api_info['apiType']
    if api_type != 'Method':
        return False
    start = get_start_characters(target_api_info['apiName'])
    return start in contrast_function.keys()


def pairing(defined_text, my_dict, filter_duplicates_dist):
    function_name = my_dict[defined_text]['apiName']
    start = get_start_characters(function_name)
    api_name_list = []
    # 4个中的其中之一
    if start in one_to_many_function:
        dismantle_one_to_many(my_dict, start, function_name, api_name_list)
    else:
        dismantle_ordinary(start, my_dict, function_name, api_name_list)

    # 找到对应的函数
    if len(api_name_list) != 0:
        function_target_data = my_dict[defined_text]
        for api_name in api_name_list:
            api_info = my_dict[api_name]
            handling_missing_labels(function_target_data, api_info, filter_duplicates_dist)


def dismantle_one_to_many(my_dict: dict, start, function_name, api_name_list):
    for defined_text in my_dict:
        api_name = my_dict[defined_text]['apiName']
        if get_start_characters(api_name) in one_to_many_function:
            if (get_remaining_characters(get_start_characters(api_name), api_name)
                    == get_remaining_characters(start, function_name)):
                api_name_list.append(defined_text)


def dismantle_ordinary(start, my_dict: dict, function_name, api_name_list):
    relative_function = contrast_function.get(start)
    for defined_text in my_dict:
        api_name = my_dict[defined_text]['apiName']
        if get_start_characters(api_name) == relative_function:
            if (get_remaining_characters(relative_function, api_name)
                    == get_remaining_characters(start, function_name)):
                api_name_list.append(defined_text)


# 处理成对函数漏标问题
def handling_missing_labels(function_target_data: dict, function_relative_data: dict, filter_duplicates_dist):
    #目标函数与相对函数Doc信息都为空，直接返回不做判断
    if 'jsDocInfos' not in function_target_data and 'jsDocInfos' not in function_relative_data:
        return
    #目标函数Doc信息为空，相对函数标记的标签全部为目标函数漏标
    if 'jsDocInfos' not in function_target_data:
        relative_doc_info = get_js_doc_info(function_relative_data['jsDocInfos'])
        if relative_doc_info is None:
            return
        #判断相对函数中标记的标签
        one_function_is_empty(function_relative_data, filter_duplicates_dist)
        return
    #相对函数Doc信息为空，目标函数标记的标签全部为相对函数漏标
    if 'jsDocInfos' not in function_relative_data:
        relative_doc_info = get_js_doc_info(function_target_data['jsDocInfos'])
        if relative_doc_info is None:
            return
        # 判断相对函数中标记的标签
        one_function_is_empty(function_target_data, filter_duplicates_dist)
        return

    #目标函数和相对函数Doc信息都不为空
    target_doc_info = get_js_doc_info(function_target_data['jsDocInfos'])
    relative_doc_info = get_js_doc_info(function_relative_data['jsDocInfos'])
    target_label_info = get_check_labels(target_doc_info)
    relative_label_info = get_check_labels(relative_doc_info)
    diff = target_label_info.keys() & relative_label_info
    diff_vals = [k for k in diff if target_label_info[k] != relative_label_info[k]]
    if len(diff_vals) == 0:
        return
    for val in diff_vals:
        if target_label_info.get(val):
            get_label_exclusivity_results(function_relative_data, filter_duplicates_dist, val)
        else:
            get_label_exclusivity_results(function_target_data, filter_duplicates_dist, val)


def one_function_is_empty(function_info: dict, filter_duplicates_dist):
    doc_info = get_js_doc_info(function_info['jsDocInfos'])
    if doc_info is None:
        return
    #判断需要校验的标签
    if doc_info['isAtomicService']:
        get_label_exclusivity_results(function_info, filter_duplicates_dist, 'isAtomicService')
    if doc_info['isForm']:
        get_label_exclusivity_results(function_info, filter_duplicates_dist, 'isForm')
    if doc_info['isCrossPlatForm']:
        get_label_exclusivity_results(function_info, filter_duplicates_dist, 'isCrossPlatForm')


def get_label_exclusivity_results(relative_data: dict, filter_duplicates_dist, val):
    defined_text = relative_data['definedText'] + val
    if defined_text not in filter_duplicates_dist:
        result = Output(relative_data['filePath'], ErrorType.RELATIVE_LABEL.value, relative_data['definedText'],
                        get_position_information(relative_data['pos']),
                        set_label_to_result(ErrorMessage.RELATIVE_LABEL.value,
                                            relative_data['apiName'], label_name_dist.get(val)))
        result_list.append(result)
        filter_duplicates_dist.append(relative_data['definedText'] + val)


# 互斥标签排查
def get_mutex_label(api_info: dict):
    doc_info = get_js_doc_info(api_info['jsDocInfos'])
    if doc_info is None:
        return
    for label in mutex_label_dist:
        mutex_label_list = mutex_label_dist.get(label)
        is_label_consistent(doc_info, label, mutex_label_list, api_info)


def is_label_consistent(doc_info: dict, label, mutex_label_list, api_info):
    is_dimension = label_type_conversion(doc_info[label])
    if not is_dimension:
        return
    for mutex_label in mutex_label_list:
        if label_type_conversion(doc_info[mutex_label]):
            result = Output(api_info['filePath'], ErrorType.MUTEX_LABEL.value, api_info['definedText'],
                            get_position_information(api_info['pos']),
                            set_label_to_result(ErrorMessage.MUTEX_LABEL.value, label_name_dist.get(label),
                                                label_name_dist.get(mutex_label)))
            result_list.append(result)


# 按装订区域中的绿色按钮以运行脚本。
def detection_label(result_json_path, output_path):
    data = json_file_data(result_json_path)
    for key in data:   # 代表每个ts文件
        judgement_dict_data(data, key)
    generate_excel(result_list, output_path)
