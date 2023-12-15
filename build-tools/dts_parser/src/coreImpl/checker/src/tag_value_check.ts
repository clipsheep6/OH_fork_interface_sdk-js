/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ErrorTagFormat, ErrorMessage, PermissionData } from '../../../typedef/checker/result_type';
import { Comment } from '../../../typedef/parser/Comment';
import { CommonFunctions } from '../../../utils/checkUtils';
import { ApiInfo, ApiType, ClassInfo } from '../../../typedef/parser/ApiInfoDefination';
import { MethodInfo, PropertyInfo, ParamInfo } from '../../../typedef/parser/ApiInfoDefination';
import { PunctuationMark } from '../../../utils/Constant';
import { SystemCapability } from '../config/syscapConfigFile.json';
import { module } from '../config/permissionConfigFile.json';

export class TagValueCheck {
  /**
   * all jsdoc tag value check
   * @param { ApiInfo } singleApi
   * @param { Comment.JsDocInfo } apiJsdoc
   * @returns { ErrorTagFormat[] }
   */
  static tagValueCheck(singleApi: ApiInfo, apiJsdoc: Comment.JsDocInfo): ErrorTagFormat[] {
    const tagValueError: ErrorTagFormat[] = [];
    const tagsName: Comment.CommentTag[] | undefined = apiJsdoc.tags;
    let throwsIndex: number = 0;
    let paramIndex: number = -1;
    if (tagsName === undefined) {
      return tagValueError;
    }
    tagsName.forEach((tag) => {
      if (tag.tag === 'since') {
        const sincevalueCheckResult = TagValueCheck.sinceTagValueCheck(tag);
        if (!sincevalueCheckResult.state) {
          tagValueError.push(sincevalueCheckResult);
        }
      }
      if (tag.tag === 'extends') {
        const extendsvalueCheckResult = TagValueCheck.extendsTagValueCheck(singleApi, tag);
        if (!extendsvalueCheckResult.state) {
          tagValueError.push(extendsvalueCheckResult);
        }
      }
      if (tag.tag === 'enum') {
        const enumvalueCheckResult = TagValueCheck.enumTagValueCheck(tag);
        if (!enumvalueCheckResult.state) {
          tagValueError.push(enumvalueCheckResult);
        }
      }
      if (tag.tag === 'returns') {
        const returnsvalueCheckResult = TagValueCheck.returnsTagValueCheck(singleApi, tag);
        if (!returnsvalueCheckResult.state) {
          tagValueError.push(returnsvalueCheckResult);
        }
      }
      if (tag.tag === 'namespace' || tag.tag === 'interface' || tag.tag === 'typedef') {
        const outerValueCheckResult = TagValueCheck.outerTagValueCheck(singleApi as ClassInfo, tag);
        if (!outerValueCheckResult.state) {
          tagValueError.push(outerValueCheckResult);
        }
      }
      if (tag.tag === 'type') {
        const typeValueCheckResult = TagValueCheck.typeTagValueCheck(singleApi, tag);
        if (!typeValueCheckResult.state) {
          tagValueError.push(typeValueCheckResult);
        }
      }
      if (tag.tag === 'syscap') {
        const syscapValueCheckResult = TagValueCheck.syscapTagValueCheck(tag);
        if (!syscapValueCheckResult.state) {
          tagValueError.push(syscapValueCheckResult);
        }
      }
      if (tag.tag === 'default') {
        const defaultValueCheckResult = TagValueCheck.defaultTagValueCheck(tag);
        if (!defaultValueCheckResult.state) {
          tagValueError.push(defaultValueCheckResult);
        }
      }
      if (tag.tag === 'deprecated') {
        const deprecatedValueCheckResult = TagValueCheck.deprecatedTagValueCheck(tag);
        if (!deprecatedValueCheckResult.state) {
          tagValueError.push(deprecatedValueCheckResult);
        }
      }
      if (tag.tag === 'permission') {
        const permissionValueCheckResult = TagValueCheck.permissionTagValueCheck(tag);
        if (!permissionValueCheckResult.state) {
          tagValueError.push(permissionValueCheckResult);
        }
      }
      if (tag.tag === 'throws') {
        throwsIndex += 1;
        const throwsValueCheckResult = TagValueCheck.throwsTagValueCheck(tag, throwsIndex);
        if (!throwsValueCheckResult.state) {
          tagValueError.push(throwsValueCheckResult);
        }
      }
      if (tag.tag === 'param') {
        paramIndex += 1;
        const paramValueCheckResult = TagValueCheck.paramTagValueCheck(singleApi, tag, paramIndex);
        if (!paramValueCheckResult.state) {
          tagValueError.push(paramValueCheckResult);
        }
      }
      if (tag.tag === 'useinstead') {
        const useinsteadValueCheckResult = TagValueCheck.useinsteadTagValueCheck(tag);
        if (!useinsteadValueCheckResult.state) {
          tagValueError.push(useinsteadValueCheckResult);
        }
      }
    });
    return tagValueError;
  }

  /**
   * since tag value check
   * @param { Comment.CommentTag } tag
   * @returns { ErrorTagFormat }
   */
  static sinceTagValueCheck(tag: Comment.CommentTag): ErrorTagFormat {
    const sinceValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const sinceValue: boolean = /^\d+$/.test(tag.name);
    if (!sinceValue) {
      sinceValueCheckResult.state = false;
      sinceValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_SINCE;
    }
    return sinceValueCheckResult;
  }

  /**
   * extends tag value check
   * @param { ApiInfo } singleApi
   * @param { Comment.CommentTag } tag
   * @returns { ErrorTagFormat }
   */
  static extendsTagValueCheck(singleApi: ApiInfo, tag: Comment.CommentTag): ErrorTagFormat {
    const extendsValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    let extendsTagValue: string = tag.name;
    if (singleApi.getApiType() === ApiType.CLASS || singleApi.getApiType() === ApiType.INTERFACE) {
      let extendsApiValue = (singleApi as ClassInfo).getParentClasses();
      if (extendsTagValue !== extendsApiValue[0]) {
        extendsValueCheckResult.state = false;
        extendsValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_EXTENDS;
      }
    }

    return extendsValueCheckResult;
  }

  /**
   * enum tag value check
   * @param { Comment.CommentTag } tag
   * @returns { ErrorTagFormat }
   */
  static enumTagValueCheck(tag: Comment.CommentTag): ErrorTagFormat {
    const enumValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const enumValues = ['string', 'number'];
    if (enumValues.indexOf(tag.type) === -1) {
      enumValueCheckResult.state = false;
      enumValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_ENUM;
    }
    return enumValueCheckResult;
  }

  /**
   * retuens tag value check
   * @param { ApiInfo } singleApi
   * @param { Comment.CommentTag } tag
   * @returns { ErrorTagFormat }
   */
  static returnsTagValueCheck(singleApi: ApiInfo, tag: Comment.CommentTag): ErrorTagFormat {
    const returnsValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const returnsTagValue: string = tag.type;
    const returnsApiValue: string[] = (singleApi as MethodInfo).getReturnValue();
    if (returnsApiValue.length === 0) {
      returnsValueCheckResult.state = false;
      returnsValueCheckResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_USE, ['returns']);
    } else if (returnsTagValue !== returnsApiValue[0]) {
      returnsValueCheckResult.state = false;
      returnsValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_RETURNS;
    }
    return returnsValueCheckResult;
  }

  /**
   * namespace tag value check
   * @param { ClassInfo } singleApi
   * @param { Comment.CommentTag } tag
   * @returns { ErrorTagFormat }
   */
  static outerTagValueCheck(singleApi: ClassInfo, tag: Comment.CommentTag): ErrorTagFormat {
    const outerValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    let tagValue: string = tag.name;
    let apiValue: string = singleApi.getApiName();
    if (tag.tag === 'namespace' && tagValue !== apiValue) {
      outerValueCheckResult.state = false;
      outerValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_NAMESPACE;
    }
    if (tag.tag === 'interface' && tagValue !== apiValue) {
      outerValueCheckResult.state = false;
      outerValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_INTERFACE;
    }
    if (tag.tag === 'typedef' && tagValue !== apiValue) {
      outerValueCheckResult.state = false;
      outerValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_TYPEDEF;
    }
    return outerValueCheckResult;
  }

  /**
   * type tag value check
   * @param { ApiInfo } singleApi
   * @param { Comment.CommentTag } tag
   * @returns { ErrorTagFormat }
   */
  static typeTagValueCheck(singleApi: ApiInfo, tag: Comment.CommentTag): ErrorTagFormat {
    const typeValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    if (singleApi.getApiType() !== ApiType.PROPERTY) {
      return typeValueCheckResult;
    }
    let typeTagValue: string = tag.type.replace(/\s/g, '');
    let typeApiValue: string[] = (singleApi as PropertyInfo).type;
    let typeApiUnionValue: string = typeApiValue.join('|');
    const isOptional: boolean = !(singleApi as PropertyInfo).getIsRequired();
    if (isOptional && typeApiValue.length === 1) {
      typeApiUnionValue = '?' + typeApiUnionValue;
    } else if (isOptional && typeApiValue.length > 1) {
      typeApiUnionValue = '?(' + typeApiUnionValue + ')';
    }
    if (typeTagValue !== typeApiUnionValue) {
      typeValueCheckResult.state = false;
      typeValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_TYPE;
    }
    return typeValueCheckResult;
  }
  /**
   * syacap tag value check
   * @param { Comment.CommentTag } tag
   * @returns { ErrorTagFormat }
   */
  static syscapTagValueCheck(tag: Comment.CommentTag): ErrorTagFormat {
    const syscapValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const syscapRule: string[] = SystemCapability;
    const syscapTagValue: string = tag.name;
    if (!syscapRule.includes(syscapTagValue)) {
      syscapValueCheckResult.state = false;
      syscapValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_SYSCAP;
    }
    return syscapValueCheckResult;
  }
  /**
   * default tag value check
   * @param { Comment.CommentTag } tag
   * @returns { ErrorTagFormat }
   */
  static defaultTagValueCheck(tag: Comment.CommentTag): ErrorTagFormat {
    const defaultValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const defaultTagValue: string = tag.name;
    if (defaultTagValue.length === 0) {
      defaultValueCheckResult.state = false;
      defaultValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_DEFAULT;
    }
    return defaultValueCheckResult;
  }

  /**
   * deprecated tag value check
   * @param { Comment.CommentTag } tag
   * @returns { ErrorTagFormat }
   */
  static deprecatedTagValueCheck(tag: Comment.CommentTag): ErrorTagFormat {
    const deprecatedValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const deprecatedFixedField: string = tag.name;
    const deprecatedVersion: string = tag.description;
    const isNumber: boolean = /^\d+$/.test(deprecatedVersion);
    if (deprecatedFixedField !== 'since' || !isNumber) {
      deprecatedValueCheckResult.state = false;
      deprecatedValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_DEPRECATED;
    }
    return deprecatedValueCheckResult;
  }
  /**
   * permission tag value check
   * @param { Comment.CommentTag } tag
   * @returns { ErrorTagFormat }
   */
  static permissionTagValueCheck(tag: Comment.CommentTag): ErrorTagFormat {
    const permissionValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };

    const permissionRuleDatas: PermissionData[] = module.definePermissions as PermissionData[];
    const permissionRule: string[] = [];
    permissionRuleDatas.forEach((permissionRuleData: PermissionData) => {
      permissionRule.push(permissionRuleData.name);
    });
    const permissionTagValue: string = tag.name + tag.description;
    const permissionArr = permissionTagValue
      .replace(/(\s|\(|\))/g, '')
      .replace(/(or|and)/g, '$')
      .split('$');
    permissionArr.forEach((permissionItem) => {
      if (!permissionRule.includes(permissionItem)) {
        permissionValueCheckResult.state = false;
        permissionValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_PERMISSION;
      }
    });
    return permissionValueCheckResult;
  }

  /**
   * throws tag value check
   * @param { Comment.CommentTag } tag
   * @param { number } throwsIndex
   * @returns { ErrorTagFormat }
   */
  static throwsTagValueCheck(tag: Comment.CommentTag, throwsIndex: number): ErrorTagFormat {
    const throwsValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const throwsTagType: string = tag.type;
    const throwsTagName: string = tag.name;
    const isNumber: boolean = /^\d+$/.test(throwsTagName);
    if (throwsTagType !== 'BusinessError') {
      throwsValueCheckResult.state = false;
      throwsValueCheckResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_INFO_VALUE1_THROWS, [
        JSON.stringify(throwsIndex),
      ]);
    } else if (!isNumber) {
      throwsValueCheckResult.state = false;
      throwsValueCheckResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_INFO_VALUE2_THROWS, [
        JSON.stringify(throwsIndex),
      ]);
    }
    return throwsValueCheckResult;
  }

  /**
   * param tag value check
   * @param { ApiInfo } singleApi
   * @param { Comment.CommentTag } tag
   * @param { number } paramIndex
   * @returns { ErrorTagFormat }
   */
  static paramTagValueCheck(singleApi: ApiInfo, tag: Comment.CommentTag, paramIndex: number): ErrorTagFormat {
    const paramValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    if (singleApi.getApiType() !== ApiType.METHOD) {
      return paramValueCheckResult;
    }
    const paramTagType: string = tag.type;
    const paramTagName: string = tag.name;
    const paramApiInfos: ParamInfo[] = (singleApi as MethodInfo).getParams();
    const paramApiName: string = paramApiInfos[paramIndex]?.getApiName();
    const paramApiType: string[] = paramApiInfos[paramIndex]?.getType();

    if (paramTagName !== paramApiName) {
      paramValueCheckResult.state = false;
      paramValueCheckResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_INFO_VALUE_PARAM, [
        JSON.stringify(paramIndex + 1),
        JSON.stringify(paramIndex + 1),
      ]);
    }
    if (paramApiType === undefined || paramTagType !== paramApiType[0]) {
      paramValueCheckResult.state = false;
      paramValueCheckResult.errorInfo =
        paramValueCheckResult.errorInfo +
        CommonFunctions.createErrorInfo(ErrorMessage.ERROR_INFO_TYPE_PARAM, [
          JSON.stringify(paramIndex + 1),
          JSON.stringify(paramIndex + 1),
        ]);
    }

    return paramValueCheckResult;
  }

  /**
   *
   * 1.引用不同文件的api接口
   * xxx.xxx#xxx
   *
   * 2.引用不同文件的模块接口
   * xxx.xxx
   *
   * 3.引用不同文件的api事件接口
   * xxx.xxx#event:xxx
   */
  /**
   * useinstead format check
   * @param { string } moduleValue
   * @returns { boolean }
   */
  static checkModule(moduleValue: string): boolean {
    return (
      /^[A-Za-z0-9_]+\b(\.[A-Za-z0-9_]+\b)*$/.test(moduleValue) ||
      /^[A-Za-z0-9_]+\b(\.[A-Za-z0-9_]+\b)*\#[A-Za-z0-9_]+\b$/.test(moduleValue) ||
      /^[A-Za-z0-9_]+\b(\.[A-Za-z0-9_]+\b)*\#event:[A-Za-z0-9_]+\b$/.test(moduleValue)
    );
  }
  /**
   * Split useinstead value to determine if the file belongs to arkui.
   * @param { string } useinsteadTagValue
   * @param { ErrorTagFormat } useinsteadValueCheckResult
   */
  static splitUseinsteadValue(useinsteadTagValue: string, useinsteadValueCheckResult: ErrorTagFormat): void {
    if (!useinsteadTagValue || useinsteadTagValue === '') {
      useinsteadValueCheckResult.state = false;
      useinsteadValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_USEINSTEAD;
    }
    // 拆分字符串
    const splitArray: string[] = useinsteadTagValue.split(/\//g);
    const MODEL_COUNT: number = 1;
    const MODEL_COUNTS: number = 2;
    const FILENAME_MODEL_COUNT: number = 1;
    if (splitArray.length === MODEL_COUNT) {
      if (
        splitArray[0].indexOf(PunctuationMark.LEFT_BRACKET) === -1 &&
        splitArray[0].indexOf(PunctuationMark.RIGHT_BRACKET) === -1
      ) {
        // 同一文件
        useinsteadValueCheckResult.state = TagValueCheck.checkModule(splitArray[0]);
      }
    } else if (splitArray.length === MODEL_COUNTS) {
      // 不同文件
      const fileNameArray: string[] = splitArray[0].split('.');
      if (fileNameArray.length === FILENAME_MODEL_COUNT) {
        // arkui
        if (!/^[A-Za-z0-9_]+\b$/.test(fileNameArray[0]) || !TagValueCheck.checkModule(splitArray[1])) {
          useinsteadValueCheckResult.state = false;
        }
      } else {
        // 非arkui
        let checkFileName: boolean = true;
        for (let i = 0; i < fileNameArray.length; i++) {
          if (fileNameArray[0] !== 'ohos' || !/^[A-Za-z0-9_]+\b$/.test(fileNameArray[i])) {
            checkFileName = false;
          }
        }
        if (
          !checkFileName ||
          (!TagValueCheck.checkModule(splitArray[1]) &&
            splitArray[1].indexOf(PunctuationMark.LEFT_BRACKET) === -1 &&
            splitArray[1].indexOf(PunctuationMark.RIGHT_BRACKET) === -1)
        ) {
          useinsteadValueCheckResult.state = false;
        }
      }
    } else {
      // 格式错误
      useinsteadValueCheckResult.state = false;
    }
    if (!useinsteadValueCheckResult.state) {
      useinsteadValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_USEINSTEAD;
    }
  }
  /**
   * useinstead tag value check
   * @param { Comment.CommentTag } tag
   * @returns { ErrorTagFormat }
   */
  static useinsteadTagValueCheck(tag: Comment.CommentTag): ErrorTagFormat {
    let useinsteadValueCheckResult: ErrorTagFormat = {
      state: true,
      errorInfo: '',
    };
    const useinsteadTagValue: string = tag.name;
    if (useinsteadTagValue === '') {
      useinsteadValueCheckResult.state = false;
      useinsteadValueCheckResult.errorInfo = ErrorMessage.ERROR_INFO_VALUE_USEINSTEAD;
    } else {
      TagValueCheck.splitUseinsteadValue(useinsteadTagValue, useinsteadValueCheckResult);
    }
    return useinsteadValueCheckResult;
  }
}
