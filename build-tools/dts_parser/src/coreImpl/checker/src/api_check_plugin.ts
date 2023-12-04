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
import fs from 'fs';
import { Parser, FilesMap } from '../../parser/parser';
import { ApiInfo, BasicApiInfo, notJsDocApiTypes, ApiType } from '../../../typedef/parser/ApiInfoDefination';
import {
  ErrorType,
  ErrorID,
  LogType,
  ErrorLevel,
  ErrorTagFormat,
  ErrorMessage,
} from '../../../typedef/checker/result_type';
import { ClassInfo } from '../../../typedef/parser/ApiInfoDefination';
import { Comment } from '../../../typedef/parser/Comment';
import { compositiveResult, compositiveLocalResult } from '../../../utils/checkUtils';
import { OrderCheck } from './tag_order_check';
import { TagNameCheck } from './tag_name_check';
import { LegalityCheck } from './tag_legality_check';
import { TagRepeatCheck } from './tag_repeat_check';
import { AddErrorLogs } from './compile_info';
import { toNumber } from 'lodash';
import { TagValueCheck } from './tag_value_check';
import { WordsCheck } from './words_check';
import { ForbiddenWordsCheck } from './forbidden_words_check';
import { ApiNamingCheck } from './naming_check';
import { CheckHump } from './check_hump';
import { ApiChangeCheck } from './check_api_diff'

export class Check {
  /**
   * checker tool main entrance
   * @param { string } url -File path for storing file information.
   */
  static scanEntry(url: string): void {
    if (fs.existsSync(url)) {
      const files: Array<string> = Check.getMdFiles(url);
      ApiChangeCheck.checkApiChange();
      files.forEach((filePath: string) => {
        const fileParseResult: FilesMap = Check.parseAPICodeStyle(filePath);
        const baseInfos: BasicApiInfo[] = Parser.getAllBasicApi(fileParseResult);
        Check.checkNodeInfos(baseInfos as ClassInfo[]);
        const currFileInfo = fileParseResult.get(filePath);
        if (currFileInfo) {
          CheckHump.checkAPIFileName(currFileInfo);
        }
        CheckHump.checkAllAPINameOfHump(baseInfos);
        //words check
        WordsCheck.wordCheckResultsProcessing(baseInfos);
      });
    }
  }

  /**
   * Obtain the path of the file to be checked.
   * @param { string } url -File path for storing file information.
   * @returns { Array<string> } -file path array
   */
  static getMdFiles(url: string): Array<string> {
    const content: string = fs.readFileSync(url, 'utf-8');
    const mdFiles: Array<string> = content.split(/[(\r\n)\r\n]+/);
    return mdFiles;
  }

  /**
   * Based on a single file path,parse it using the Parser method.
   * @param { string } filePath -single file path to be checked
   * @returns { FilesMap }
   */
  static parseAPICodeStyle(filePath: string): FilesMap {
    const fileDir: string = filePath.substring(0, filePath.lastIndexOf('\\'));
    const parseResult: FilesMap = Parser.parseFile(fileDir, filePath);
    return parseResult;
  }

  /**
   * Obtain all API information and check api jsdoc
   * @param { ClassInfo[] } baseInfos
   */
  static checkNodeInfos(baseInfos: ClassInfo[]): void {
    let allNodeInfos: ApiInfo[] = [];
    Check.getHasJsdocApiInfos(baseInfos, allNodeInfos);

    // for all nodes of the current file
    allNodeInfos.forEach((singleApi: ApiInfo) => {
      const apiJsdoc: Comment.JsDocInfo = singleApi.getLatestJsDocInfo() as Comment.JsDocInfo;
      // legality check
      const tagLegalityCheckResult: ErrorTagFormat[] = LegalityCheck.apiLegalityCheck(singleApi, apiJsdoc);
      // order check
      const orderCheckResult: ErrorTagFormat = OrderCheck.orderCheck(apiJsdoc);
      // api naming check
      const namingCheckResult: ErrorTagFormat = ApiNamingCheck.namingCheck(singleApi);
      // tags name check
      const tagNamseCheckResult: ErrorTagFormat = TagNameCheck.tagNameCheck(apiJsdoc);
      // tags inherit check
      // tags value check
      const tagValueCheckResult: ErrorTagFormat[] = TagValueCheck.tagValueCheck(singleApi, apiJsdoc);
      // tags repeat check
      const tagRepeatCheckResult: ErrorTagFormat[] = TagRepeatCheck.tagRepeatCheck(apiJsdoc);
      // api forbidden wors check
      const forbiddenWorsCheckResult: ErrorTagFormat = ForbiddenWordsCheck.forbiddenWordsCheck(singleApi as ClassInfo);

      if (!orderCheckResult.state) {
        AddErrorLogs.addAPICheckErrorLogs(
          ErrorID.WRONG_ORDER_ID,
          ErrorLevel.MIDDLE,
          singleApi.getFilePath(),
          singleApi.getPos(),
          ErrorType.WRONG_ORDER,
          LogType.LOG_JSDOC,
          toNumber(apiJsdoc.since),
          singleApi.getApiName(),
          singleApi.getDefinedText(),
          orderCheckResult.errorInfo,
          compositiveResult,
          compositiveLocalResult
        );
      }
      if (!tagNamseCheckResult.state) {
        AddErrorLogs.addAPICheckErrorLogs(
          ErrorID.UNKNOW_DECORATOR_ID,
          ErrorLevel.MIDDLE,
          singleApi.getFilePath(),
          singleApi.getPos(),
          ErrorType.UNKNOW_DECORATOR,
          LogType.LOG_JSDOC,
          toNumber(apiJsdoc.since),
          singleApi.getApiName(),
          singleApi.getDefinedText(),
          tagNamseCheckResult.errorInfo,
          compositiveResult,
          compositiveLocalResult
        );
      }
      if (!forbiddenWorsCheckResult.state) {
        AddErrorLogs.addAPICheckErrorLogs(
          ErrorID.FORBIDDEN_WORDS_ID,
          ErrorLevel.MIDDLE,
          singleApi.getFilePath(),
          singleApi.getPos(),
          ErrorType.FORBIDDEN_WORDS,
          LogType.LOG_API,
          toNumber(apiJsdoc.since),
          singleApi.getApiName(),
          singleApi.getDefinedText(),
          forbiddenWorsCheckResult.errorInfo,
          compositiveResult,
          compositiveLocalResult
        );
      }
      if (!namingCheckResult.state) {
        AddErrorLogs.addAPICheckErrorLogs(
          ErrorID.NAMING_ERRORS_ID,
          ErrorLevel.MIDDLE,
          singleApi.getFilePath(),
          singleApi.getPos(),
          ErrorType.NAMING_ERRORS,
          LogType.LOG_API,
          toNumber(apiJsdoc.since),
          singleApi.getApiName(),
          singleApi.getDefinedText(),
          namingCheckResult.errorInfo,
          compositiveResult,
          compositiveLocalResult
        );
      }
      tagLegalityCheckResult.forEach((legalityResult) => {
        if (legalityResult.state === false) {
          AddErrorLogs.addAPICheckErrorLogs(
            ErrorID.WRONG_SCENE_ID,
            ErrorLevel.MIDDLE,
            singleApi.getFilePath(),
            singleApi.getPos(),
            ErrorType.WRONG_SCENE,
            LogType.LOG_JSDOC,
            toNumber(apiJsdoc.since),
            singleApi.getApiName(),
            singleApi.getDefinedText(),
            legalityResult.errorInfo,
            compositiveResult,
            compositiveLocalResult
          );
        }
      });
      tagValueCheckResult.forEach((valueResult) => {
        if (valueResult.state === false) {
          AddErrorLogs.addAPICheckErrorLogs(
            ErrorID.WRONG_SCENE_ID,
            ErrorLevel.MIDDLE,
            singleApi.getFilePath(),
            singleApi.getPos(),
            ErrorType.WRONG_SCENE,
            LogType.LOG_JSDOC,
            toNumber(apiJsdoc.since),
            singleApi.getApiName(),
            singleApi.getDefinedText(),
            valueResult.errorInfo,
            compositiveResult,
            compositiveLocalResult
          );
        }
      });
      tagRepeatCheckResult.forEach((repeatResult) => {
        if (repeatResult.state === false) {
          AddErrorLogs.addAPICheckErrorLogs(
            ErrorID.WRONG_SCENE_ID,
            ErrorLevel.MIDDLE,
            singleApi.getFilePath(),
            singleApi.getPos(),
            ErrorType.WRONG_SCENE,
            LogType.LOG_JSDOC,
            toNumber(apiJsdoc.since),
            singleApi.getApiName(),
            singleApi.getDefinedText(),
            repeatResult.errorInfo,
            compositiveResult,
            compositiveLocalResult
          );
        }
      });
    });
  }
  /**
   * Filter out all nodes with comments.
   * @param { BasicApiInfo[] } childNodeApis -original data.
   * @param { ApiInfo[] } childNodeInfos -processed data.
   */
  static getHasJsdocApiInfos(childNodeApis: BasicApiInfo[], childNodeInfos: ApiInfo[]): void {
    childNodeApis.forEach((childNodeApi) => {
      if (!notJsDocApiTypes.has(childNodeApi.getApiType())) {
        childNodeInfos.push(childNodeApi as ApiInfo);
      }
    });
    return;
  }
}
