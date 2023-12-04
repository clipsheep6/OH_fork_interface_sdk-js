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

/**
 * error message type
 * @enum { string }
 */
export enum ErrorType {
  UNKNOW_DECORATOR = 'unknow decorator',
  MISSPELL_WORDS = 'misspell words',
  NAMING_ERRORS = 'naming errors',
  UNKNOW_PERMISSION = 'unknow permission',
  UNKNOW_SYSCAP = 'unknow syscap',
  UNKNOW_DEPRECATED = 'unknow deprecated',
  WRONG_ORDER = 'wrong order',
  WRONG_VALUE = 'wrong value',
  WRONG_SCENE = 'wrong scene',
  PARAMETER_ERRORS = 'wrong parameter',
  API_PAIR_ERRORS = 'limited api pair errors',
  FORBIDDEN_WORDS = 'forbidden word',
  API_CHANGE_ERRORS = 'api change errors',
  TS_SYNTAX_ERROR = 'TS syntax error',
  NO_JSDOC = 'No jsdoc',
}

/**
 * error message id
 * @enum { number }
 */
export enum ErrorID {
  UNKNOW_DECORATOR_ID = 0,
  MISSPELL_WORDS_ID = 1,
  NAMING_ERRORS_ID = 2,
  UNKNOW_PERMISSION_ID = 3,
  UNKNOW_SYSCAP_ID = 4,
  UNKNOW_DEPRECATED_ID = 5,
  WRONG_ORDER_ID = 6,
  WRONG_VALUE_ID = 7,
  WRONG_SCENE_ID = 8,
  PARAMETER_ERRORS_ID = 9,
  API_PAIR_ERRORS_ID = 10,
  FORBIDDEN_WORDS_ID = 11,
  API_CHANGE_ERRORS_ID = 12,
  TS_SYNTAX_ERROR_ID = 13,
  NO_JSDOC_ID = 14,
}

/**
 * error type
 * @enum { string }
 */
export enum LogType {
  LOG_API = 'Api',
  LOG_JSDOC = 'JsDoc',
  LOG_FILE = 'File',
}

/**
 * error message level
 * @enum { number }
 */
export enum ErrorLevel {
  HIGH = 3,
  MIDDLE = 2,
  LOW = 1,
}

/**
 * error message infomation
 * @enum { string }
 */
export enum ErrorMessage {
  ERROR_INFO_VALUE_EXTENDS = 'the [extends] tag value is incorrect. Please check if the tag value matches the inherited class name.',
  ERROR_INFO_VALUE_ENUM = 'the [enum] tag type is incorrect. Please check if the tag type is { string } or { number }',
  ERROR_INFO_VALUE_SINCE = 'the [since] tag value is incorrect. Please check if the tag value is a numerical value',
  ERROR_INFO_RETURNS = 'the [returns] tag was used incorrectly. The returns tag should not be used when the return type is void',
  ERROR_INFO_VALUE_RETURNS = 'the [returns] tag type is incorrect. Please check if the tag type is consistent with the return type',
  ERROR_INFO_VALUE_USEINSTEAD = 'the [useinstead] tag value is incorrect. Please check the usage method',
  ERROR_INFO_VALUE_TYPE = 'the [type] tag type is incorrect. Please check if the type matches the attribute type',
  ERROR_INFO_VALUE_DEFAULT = 'the [default] tag value is incorrect. Please supplement the default value',
  ERROR_INFO_VALUE_PERMISSION = 'the [permission] tag value is incorrect. Please check if the permission field has been configured or update the configuration file',
  ERROR_INFO_VALUE_DEPRECATED = 'the [deprecated] tag value is incorrect. Please check the usage method.',
  ERROR_INFO_VALUE_SYSCAP = 'the [syscap] tag value is incorrect. Please check if the syscap field is configured.',
  ERROR_INFO_VALUE_NAMESPACE = 'the [namespace] tag value is incorrect. Please check if it matches the namespace name.',
  ERROR_INFO_VALUE_INTERFACE = 'the [interface] label value is incorrect. Please check if it matches the interface name.',
  ERROR_INFO_VALUE_TYPEDEF = 'the [typedef] tag value is incorrect. Please check if it matches the interface name.',
  ERROR_INFO_TYPE_PARAM = 'the type of the [$$] [param] tag is incorrect. Please check if it matches the type of the [$$] parameter.',
  ERROR_INFO_VALUE_PARAM = 'the value of the [$$] [param] tag is incorrect. Please check if it matches the [$$] parameter name.',
  ERROR_INFO_VALUE1_THROWS = 'the type of the [$$] [throws] tag is incorrect. Please fill in [BusinessError].',
  ERROR_INFO_VALUE2_THROWS = 'the type of the [$$] [throws] tag is incorrect. Please check if the tag value is a numerical value',
  ERROR_INFO_INHERIT = 'it was detected that there is an inheritable label [$$] in the current file, but there are child nodes without this label',
  ERROR_ORDER = 'JSDoc label order error, please make adjustments',
  ERROR_LABELNAME = 'the [$$] tag does not exist. Please use a valid JSDoc tag',
  ERROR_LOST_LABEL = 'JSDoc tag validity verification failed. Please confirm if the [$$] tag is missing',
  ERROR_USE = 'JSDoc label validity verification failed. The [$$] label is not allowed. Please check the label usage method.',
  ERROR_MORELABEL = 'JSDoc tag validity verification failed.There are [$$] redundant [$$]. Please check if the tag should be deleted.',
  ERROR_REPEATLABEL = 'the validity verification of the JSDoc tag failed. The [$$] tag is not allowed to be reused, please delete the extra tags',
  ERROR_USE_INTERFACE = 'the validity verification of the JSDoc tag failed. The [interface] tag and [typedef] tag are not allowed to be used simultaneously. Please confirm the interface class.',
  ERROR_EVENT_NAME_STRING = 'The event name should be string.',
  ERROR_EVENT_NAME_NULL = 'The event name cannot be Null value.',
  ERROR_EVENT_NAME_SMALL_HUMP = "The event name should be named by small hump. (Received ['$$'])",
  ERROR_EVENT_CALLBACK_OPTIONAL = 'The callback parameter of off function should be optional.',
  ERROR_EVENT_CALLBACK_MISSING = 'The off functions of one single event should have at least one callback parameter, and the callback parameter should be the last parameter.',
  ERROR_EVENT_ON_AND_OFF_PAIR = 'The on and off event subscription methods do not appear in pair.',
  ERROR_EVENT_WITHOUT_PARAMETER = 'The event subscription methods should has at least one parameter named [type].',
  ILLEGAL_USE_ANY = 'Illegal [any] keyword used in the API',
  ERROR_CHANGES_VERSION = 'Please check if the changed API version number is 10.',
  ERROR_CHANGES_API_HISTORY_PARAM_REQUIRED_CHANGE = 'Forbid changes: Optional parameters cannot be changed to required parameters.',
  ERROR_CHANGES_API_HISTORY_PARAM_RANGE_CHANGE = 'Forbid changes: Parameters type range cannot be reduced.',
  ERROR_CHANGES_API_HISTORY_PARAM_WITHOUT_TYPE_CHANGE = 'Forbid changes: Parameters Parameter must be defined by type.',
  ERROR_CHANGES_API_HISTORY_PARAM_TYPE_CHANGE = 'Forbid changes: Parameters type cannot be modified.',
  ERROR_CHANGES_API_HISTORY_PARAM_POSITION_CHANGE = 'Forbid changes: Parameters position not be allowed to be modified.',
  ERROR_CHANGES_API_NEW_REQUIRED_PARAM = 'Forbid changes: Required parameters cannot be created.',
  ERROR_CHANGES_API_DELETE_PARAM = 'Forbid changes: Parameters cannot be deleted.',
  ERROR_CHANGES_DEPRECATED = 'Forbid changes: The api has deprecated tag.',
  ERROR_CHANGES_JSDOC_NUMBER = 'Forbid changes: API changes must add a new section of JSDoc.',
  ERROR_CHANGES_JSDOC_CHANGE = 'Forbid changes: Previous JSDoc cannot be changed.',
  ERROR_CHANGES_JSDOC_TRROWS = 'Forbid changes: Throws tag cannot be created.',
  ERROR_CHANGES_JSDOC_PERMISSION = 'Forbid changes: Permission tag cannot be created or modified.',
  ERROR_WORD = 'The current word [$$] is incompatible with the regulaion, please confirm whether it needs to be corrected to a common word.',
  ERROR_NAMING = 'Prohibited word in [$$]:{$$}.The word allowed is [$$]',
  ERROR_SCENARIO = 'Prohibited word in [$$]:{$$} in the [$$] file',
  ERROR_UPPERCASE_NAME = 'This name [$$] should be named by all uppercase.',
  ERROR_LARGE_HUMP_NAME = 'This name [$$] should be named by large hump.',
  ERROR_SMALL_HUMP_NAME = 'This name [$$] should be named by small hump.',
  ERROR_SMALL_HUMP_NAME_FILE = 'This API file should be named by small hump.',
  ERROR_LARGE_HUMP_NAME_FILE = 'This API file should be named by large hump.',
  ERROR_NO_JSDOC = 'Jsdoc needs to be added to the current API.'
}

/**
 * online error message format
 */
export class ApiResultSimpleInfo {
  id: number = -1;
  level: number = -1;
  filePath: string = '';
  location: string = '';
  message: string = '';

  setID(id: number): ApiResultSimpleInfo {
    this.id = id;
    return this;
  }

  getID(): number {
    return this.id;
  }

  setLevel(level: number): ApiResultSimpleInfo {
    this.level = level;
    return this;
  }

  getLevel(): number {
    return this.level;
  }

  setLocation(location: string): ApiResultSimpleInfo {
    this.location = location;
    return this;
  }

  getLocation(): string {
    return this.location;
  }

  setFilePath(fileFilePath: string): ApiResultSimpleInfo {
    this.filePath = fileFilePath;
    return this;
  }

  getFilePath(): string {
    return this.filePath;
  }

  setMessage(message: string): ApiResultSimpleInfo {
    this.message = message;
    return this;
  }

  getMessage(): string {
    return this.message;
  }
}

/**
 * local excel table error message format
 */
export class ApiResultInfo {
  errorType: string = '';
  location: string = '';
  apiType: string = '';
  message: string = '';
  version: number = -1;
  level: number = -1;
  apiName: string = '';
  apiFullText: string = '';
  baseName: string = '';

  setErrorType(errorType: string): ApiResultInfo {
    this.errorType = errorType;
    return this;
  }

  getErrorType(): string {
    return this.errorType;
  }

  setLocation(location: string): ApiResultInfo {
    this.location = location;
    return this;
  }

  getLocation(): string {
    return this.location;
  }
  setApiType(apiType: string): ApiResultInfo {
    this.apiType = apiType;
    return this;
  }

  getApiType(): string {
    return this.apiType;
  }

  setMessage(message: string): ApiResultInfo {
    this.message = message;
    return this;
  }

  getMessage(): string {
    return this.message;
  }

  setVersion(version: number): ApiResultInfo {
    this.version = version;
    return this;
  }

  getVersion(): number {
    return this.version;
  }

  setLevel(level: number): ApiResultInfo {
    this.level = level;
    return this;
  }

  getLevel(): number {
    return this.level;
  }

  setApiName(apiName: string): ApiResultInfo {
    this.apiName = apiName;
    return this;
  }

  getApiName(): string {
    return this.apiName;
  }

  setApiFullText(apiFullText: string): ApiResultInfo {
    this.apiFullText = apiFullText;
    return this;
  }

  getApiFullText(): string {
    return this.apiFullText;
  }
  setBaseName(baseName: string): ApiResultInfo {
    this.baseName = baseName;
    return this;
  }

  getBaseName(): string {
    return this.baseName;
  }
}

/**
 * error message format
 */
export interface ErrorTagFormat {
  state: boolean;
  errorInfo: string;
}

/**
 * permission message format
 */
export interface PermissionData {
  name: string;
  grantMode: string;
  since: number;
  deprecated: string;
  availableLevel: string;
  provisionEnable: boolean;
  distributedSceneEnable: boolean;
  label: string;
  description: string;
}

/**
 * naming dictionary format
 */
export interface NameDictionaryType {
  badWord: string;
  suggestion: string;
  ignore: string[];
}

/**
 * naming dictionary format for file
 */
export interface NameScenarioType {
  word: string;
  files: string[];
}
