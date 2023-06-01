/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');
const cm = require('comment-parser');
function requireTypescriptModule() {
  const buildOption = require('./build.json');
  if (buildOption.isBundle) {
    return require('typescript');
  }
  const tsPathArray = [
    path.resolve(__dirname, "../node_modules/typescript"),
    path.resolve(__dirname, "../../node_modules/typescript")
  ];
  if (fs.existsSync(tsPathArray[0])) {
    return require(tsPathArray[0]);
  } else if (fs.existsSync(tsPathArray[1])) {
    return require(tsPathArray[1]);
  }
}
exports.requireTypescriptModule = requireTypescriptModule;
const ts = requireTypescriptModule();

const commentNodeWhiteList = [
  ts.SyntaxKind.PropertySignature, ts.SyntaxKind.CallSignature, ts.SyntaxKind.MethodSignature,
  ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.EnumMember, ts.SyntaxKind.VariableStatement,
  ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.Constructor, ts.SyntaxKind.ModuleDeclaration,
  ts.SyntaxKind.NamespaceExportDeclaration, ts.SyntaxKind.ClassDeclaration, ts.SyntaxKind.InterfaceDeclaration,
  ts.SyntaxKind.EnumDeclaration, ts.SyntaxKind.Parameter, ts.SyntaxKind.TypeLiteral, ts.SyntaxKind.FunctionDeclaration,
  ts.SyntaxKind.LabeledStatement, ts.SyntaxKind.TypeAliasDeclaration
];
exports.commentNodeWhiteList = commentNodeWhiteList;

const tagsArrayOfOrder = [
  'namespace', 'extends', 'typedef', 'interface', 'permission', 'enum', 'constant', 'type', 'param', 'default',
  'returns', 'readonly', 'throws', 'static', 'fires', 'syscap', 'systemapi', 'famodelonly', 'FAModelOnly',
  'stagemodelonly', 'StageModelOnly', 'crossplatform', 'since', 'deprecated', 'useinstead', 'test', 'form', 'example'
];
exports.tagsArrayOfOrder = tagsArrayOfOrder;

function getAPINote(node) {
  const apiLength = node.getText().length;
  const apiFullLength = node.getFullText().length;
  return node.getFullText().substring(0, apiFullLength - apiLength);
}
exports.getAPINote = getAPINote;

function hasAPINote(node) {
  if (!node) {
    return false;
  }
  const apiNote = getAPINote(node).replace(/[\s]/g, '');
  if (apiNote && apiNote.length !== 0) {
    return true;
  }
  return false;
}
exports.hasAPINote = hasAPINote;

function removeDir(url) {
  let statObj = fs.statSync(url);
  if (statObj.isDirectory()) {
    let dirs = fs.readdirSync(url);
    dirs = dirs.map(dir => path.join(url, dir));
    for (let i = 0; i < dirs.length; i++) {
      removeDir(dirs[i]);
    }
    fs.rmdirSync(url);
  } else {
    fs.unlinkSync(url);
  }
}
exports.removeDir = removeDir;

function writeResultFile(resultData, outputPath, option) {
  fs.writeFile(path.resolve(__dirname, outputPath), JSON.stringify(resultData, null, 2), option, err => {
    if (err) {
      console.error(`ERROR FOR CREATE FILE:${err}`);
    } else {
      console.log('API CHECK FINISH!');
    }
  });
}
exports.writeResultFile = writeResultFile;

function overwriteIndexOf(item, array) {
  let indexArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      indexArr.push(i);
    }
  }
  return indexArr;
}
exports.overwriteIndexOf = overwriteIndexOf;

const ErrorType = {
  UNKNOW_DECORATOR: {
    id: 0,
    description: 'unknow decorator'
  },
  MISSPELL_WORDS: {
    id: 1,
    description: 'misspell words'
  },
  NAMING_ERRORS: {
    id: 2,
    description: 'naming errors'
  },
  UNKNOW_PERMISSION: {
    id: 3,
    description: 'unknow permission'
  },
  UNKNOW_SYSCAP: {
    id: 4,
    description: 'unknow syscap'
  },
  UNKNOW_DEPRECATED: {
    id: 5,
    description: 'unknow deprecated'
  },
  WRONG_ORDER: {
    id: 6,
    description: 'wrong order'
  },
  WRONG_VALUE: {
    id: 7,
    description: 'wrong value'
  },
  WRONG_SCENE: {
    id: 8,
    description: 'wrong scene'
  },
  PARAMETER_ERRORS: {
    id: 9,
    description: 'wrong parameter'
  },
  API_PAIR_ERRORS: {
    id: 10,
    description: 'limited api pair errors'
  },
  ILLEGAL_ANY: {
    id: 11,
    description: 'illegal any'
  }
};
exports.ErrorType = ErrorType;

const LogType = {
  LOG_API: 'Api',
  LOG_JSDOC: 'JsDoc',
  LOG_FILE: 'File'
};
exports.LogType = LogType;

const ErrorLevel = {
  HIGH: 3,
  MIDDLE: 2,
  LOW: 1
};
exports.ErrorLevel = ErrorLevel;

const FileType = {
  API: 'Api',
  JSDOC: 'JsDoc'
};
exports.FileType = FileType;

let apiCheckArr = [];
exports.apiCheckArr = apiCheckArr;

let apiCheckInfoArr = [];
exports.apiCheckInfoArr = apiCheckInfoArr;

class ApiCheckResultClass {
  format_check_result = true;
}
exports.ApiCheckResult = new ApiCheckResultClass();

async function excelApiCheckResult(apiCheckArr) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Js Api', { views: [{ xSplit: 1 }] });
  sheet.getRow(1).values = ['order', 'errorType', 'fileName', 'apiName', 'apiContent', 'type', 'errorInfo', 'version', 'model'];
  for (let i = 1; i <= apiCheckArr.length; i++) {
    const apiData = apiCheckArr[i - 1];
    sheet.getRow(i + 1).values = [i, apiData.errorType, apiData.fileName, apiData.apiName, apiData.apiFullText,
      apiData.type, apiData.errorInfo, apiData.version, apiData.basename];
  }
  const buffer = await workbook.xlsx.writeBuffer();
  fs.writeFile('Js_Api.xlsx', buffer, function (err) {
    if (err) {
      console.error(err);
      return;
    }
  });
  return buffer;
}
exports.excelApiCheckResult = excelApiCheckResult;

function getApiInfo(node) {
  const notesStr = getAPINote(node);
  let apiInfo = {};
  let versionArr = [];
  if (notesStr !== '') {
    if (/\@systemapi/g.test(notesStr)) {
      apiInfo.isSystemApi = 'system api';
    }
    if (/\@constant/g.test(notesStr)) {
      apiInfo.isConstant = true;
    }
    if (/\@since\s*(\d+)/g.test(notesStr)) {
      notesStr.replace(/\@since\s*(\d+)/g, (versionInfo) => {
        versionArr.push(versionInfo)
        apiInfo.version = versionInfo.replace(/\@since/g, '').trim();
      });
      apiInfo.humpVersion = versionArr[0].replace(/\@since/g, '').trim();
    }
    if (/\@deprecated.*since\s*(\d+)/g.test(notesStr)) {
      notesStr.replace(/\@deprecated.*since\s*(\d+)/g,
        versionInfo => {
          apiInfo.deprecated = versionInfo.replace(
            /\@deprecated.*since\s*/g, '').trim();
        });
    }
    if (/\@famodelonly/g.test(notesStr)) {
      notesStr.replace(/\@famodelonly/g, modelInfo => {
        apiInfo.model = modelInfo;
      });
    } else if (/\@stagemodelonly/g.test(notesStr)) {
      notesStr.replace(/\@stagemodelonly/g, modelInfo => {
        apiInfo.model = modelInfo;
      });
    }
    if (/\@syscap\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
      notesStr.replace(/\@syscap\s*((\w|\.|\/|\{|\@|\}|\s)+)/g, sysCapInfo => {
        apiInfo.sysCap = sysCapInfo.replace(/\@syscap/g, '').trim();
      });
    }
    if (/\@permission\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
      notesStr.replace(/\@permission\s*((\w|\.|\/|\{|\@|\}|\s)+)/g,
        permissionInfo => {
          apiInfo.permission =
            permissionInfo.replace(/\@permission/g, '').trim();
        });
    }
  }
  return apiInfo;
}
exports.getApiInfo = getApiInfo;

function getApiVersion(node) {
  if (getApiInfo(node).humpVersion) {
    return getApiInfo(node).humpVersion;
  } else if (node.parent) {
    return getApiVersion(node.parent);
  } else {
    return 'NA';
  }
}
exports.getApiVersion = getApiVersion;

function parseJsDoc(node) {
  if (!hasAPINote(node)) {
    return [];
  } else {
    return cm.parse(getAPINote(node));
  }
}
exports.parseJsDoc = parseJsDoc;

let systemPermissionFile = path.resolve(__dirname, '../../../../../',
  "base/global/system_resources/systemres/main/config.json");

exports.systemPermissionFile = systemPermissionFile;

exports.checkOption = {
  permissionContent: undefined
};

const inheritArr = ['test', 'famodelonly', 'FAModelOnly', 'stagemodelonly', 'StageModelOnly', 'deprecated',
  'systemapi'];
exports.inheritArr = inheritArr;

const ErrorValueInfo = {
  ERROR_INFO_VALUE_EXTENDS: 'In the JSDoc section [$$], the [extends] tag value is incorrect. Please check if the tag value matches the inherited class name.',
  ERROR_INFO_VALUE_ENUM: 'In the JSDoc section [$$], the [enum] tag type is incorrect. Please check if the tag type is { string } or { number }',
  ERROR_INFO_VALUE_SINCE: 'In the JSDoc section [$$], the [since] tag value is incorrect. Please check if the tag value is a numerical value',
  ERROR_INFO_RETURNS: 'In the JSDoc section [$$], the [returns] tag was used incorrectly. The returns tag should not be used when the return type is void',
  ERROR_INFO_VALUE_RETURNS: 'In the JSDoc section [$$], the [returns] tag type is incorrect. Please check if the tag type is consistent with the return type',
  ERROR_INFO_VALUE_USEINSTEAD: 'In the JSDoc section [$$], the [useinstead] tag value is incorrect. Please check the usage method',
  ERROR_INFO_VALUE_TYPE: 'In the JSDoc section [$$], the [type] tag type is incorrect. Please check if the type matches the attribute type',
  ERROR_INFO_VALUE_DEFAULT: 'In the JSDoc section [$$], the [default] tag value is incorrect. Please supplement the default value',
  ERROR_INFO_VALUE_PERMISSION: 'In the JSDoc section [$$], the [permission] tag value is incorrect. Please check if the permission field has been configured or update the configuration file',
  ERROR_INFO_VALUE_DEPRECATED: 'In the JSDoc section [$$], the [deprecated] tag value is incorrect. Please check the usage method',
  ERROR_INFO_VALUE_SYSCAP: 'In the JSDoc section [$$], the [syscap] tag value is incorrect. Please check if the sysnap field is configured',
  ERROR_INFO_VALUE_NAMESPACE: 'In the JSDoc section [$$], the [namespace] tag value is incorrect. Please check if it matches the namespace name',
  ERROR_INFO_VALUE_INTERFACE: 'In the JSDoc section [$$], the [interface] label value is incorrect. Please check if it matches the interface name',
  ERROR_INFO_VALUE_TYPEDEF: 'In the JSDoc section [$$], the [typedef] tag value is incorrect. Please check if it matches the interface name',
  ERROR_INFO_TYPE_PARAM: 'In the JSDoc section [$$], the type of the [$$] [param] tag is incorrect. Please check if it matches the type of the [$$] parameter',
  ERROR_INFO_VALUE_PARAM: 'In the JSDoc section [$$], the value of the [$$] [param] tag is incorrect. Please check if it matches the [$$] parameter name',
  ERROR_INFO_VALUE1_THROWS: 'In the JSDoc section [$$], the type of the [$$] [throws] tag is incorrect. Please fill in [BusinessError]',
  ERROR_INFO_VALUE2_THROWS: 'In the JSDoc section [$$], the type of the [$$] [throws] tag is incorrect. Please check if the tag value is a numerical value',
  ERROR_INFO_INHERIT: 'In the JSDoc section [$$], it was detected that there is an inheritable label [$$] in the current file, but there are child nodes without this label',
  ERROR_ORDER: 'JSDoc label order error, please make adjustments',
  ERROR_LABELNAME: 'In the JSDoc section [$$], the [$$] tag does not exist. Please use a valid JSDoc tag',
  ERROR_LOST_LABEL: 'JSDoc tag validity verification failed. Please confirm if the [$$] tag is missing',
  ERROR_USE: 'JSDoc label validity verification failed. The [$$] label is not allowed. Please check the label usage method.',
  ERROR_MORELABEL: 'JSDoc tag validity verification failed. The [$$] tag is redundant. Please check if the tag should be deleted.',
  ERROR_REPEATLABEL: 'In the JSDoc section [$$], the validity verification of the JSDoc tag failed. The [$$] tag is not allowed to be reused, please delete the extra tags',
  ERROR_USE_INTERFACE: 'In paragraph [$$] of JSDoc, the validity verification of the JSDoc tag failed. The interface tag and typedef tag are not allowed to be used simultaneously. Please confirm the interface class.',
  ILLEGAL_USE_ANY: 'Illegal [any] keyword used in the API'
};
exports.ErrorValueInfo = ErrorValueInfo;

/**
 * link error message
 */
function createErrorInfo(errorInfo, params) {
  params.forEach((param) => {
    errorInfo = errorInfo.replace('$$', param);
  });
  return errorInfo;
}
exports.createErrorInfo = createErrorInfo;

/**
 * judge if it is an API file for Arkui
 */
function isArkUIApiFile(fileName) {
  if (fileName.indexOf("component\\ets\\") >= 0 || fileName.indexOf("component/ets/") >= 0) {
    return true;
  }
  return false;
}
exports.isArkUIApiFile = isArkUIApiFile;

function isWhiteListFile(fileName, whiteList) {
  for (let i = 0; i < whiteList.length; i++) {
    if (path.normalize(fileName).indexOf(path.normalize(whiteList[i])) !== -1) {
      return true
    }
  }
  return false
}
exports.isWhiteListFile = isWhiteListFile;

function getCheckApiVersion() {
  const packageJsonPath = path.join(__dirname, "../package.json");
  let packageJson;
  let checkApiVersion;
  try {
    const packageJsonContent = fs.readFileSync(packageJsonPath, "utf8");
    packageJson = JSON.parse(packageJsonContent);
    checkApiVersion = packageJson.checkApiVersion;
  } catch (error) {
    throw `Failed to read package.json or parse JSON content: ${error}`;
  }
  if (!checkApiVersion) {
    throw `Please configure the correct API version to be verified`;
  }
  return checkApiVersion;
}
exports.getCheckApiVersion = getCheckApiVersion;

const OPTIONAL_SYMBOL = '?';
exports.OPTIONAL_SYMBOL = OPTIONAL_SYMBOL;

function removeDuplicateObj(array) {
  let newArr = [];
  let errorInfoSet = new Set();
  for (const errorInfo of array) {
    if (!errorInfoSet.has(JSON.stringify(errorInfo))) {
      errorInfoSet.add(JSON.stringify(errorInfo));
      newArr.push(errorInfo);
    }
  }
  return newArr;
};
exports.removeDuplicateObj = removeDuplicateObj;
