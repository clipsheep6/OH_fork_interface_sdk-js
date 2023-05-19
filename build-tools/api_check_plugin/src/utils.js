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
  UNKNOW_DECORATOR: '1 unknow decorator',
  MISSPELL_WORDS: '2 misspell words',
  NAMING_ERRORS: '0 naming errors',
  UNKNOW_PERMISSION: '5 unknow permission',
  UNKNOW_SYSCAP: '5 unknow syscap',
  UNKNOW_DEPRECATED: '5 unknow deprecated',
  INVALID_IMPORT: '4 invalid import',
  WRONG_ORDER: '3 wrong order',
  WRONG_VALUE: '5 wrong value',
  WRONG_SCENE: '4 wrong scene',
  PARAMETER_ERRORS: '5 wrong parameter',
  API_PAIR_ERRORS: '4 limited api pair errors',
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

const ErrorValueInfoCh = {
  ERROR_INFO_VALUE_EXTENDS: '��[$$]��JSDoc��, extends��ǩֵ����, �����ǩֵ�Ƿ���̳���������һ��.',
  ERROR_INFO_VALUE_ENUM: '��[$$]��JSDoc��,enum��ǩ���ʹ���, �����ǩ�����Ƿ�Ϊstring��number.',
  ERROR_INFO_VALUE_SINCE: '��[$$]��JSDoc��,since��ǩֵ����, �����ǩֵ�Ƿ�Ϊ��ֵ.',
  ERROR_INFO_RETURNS: '��[$$]��JSDoc��,returns��ǩʹ�ô���, ��������Ϊvoidʱ��Ӧ��ʹ��returns��ǩ.',
  ERROR_INFO_VALUE_RETURNS: '��[$$]��JSDoc��,returns��ǩ���ʹ���, �����ǩ�����Ƿ��뷵������һ��.',
  ERROR_INFO_VALUE_USEINSTEAD: '��[$$]��JSDoc��,useinstead��ǩֵ����, ����ʹ�÷���.',
  ERROR_INFO_VALUE_TYPE: '��[$$]��JSDoc��,type��ǩ���ʹ���, ���������Ƿ�����������һ��.',
  ERROR_INFO_VALUE_DEFAULT: '��[$$]��JSDoc��,default��ǩֵ����, �벹��Ĭ��ֵ.',
  ERROR_INFO_VALUE_PERMISSION: '��[$$]��JSDoc��,permission��ǩֵ��д����, ����Ȩ���ֶ��Ƿ������û��߸��������ļ�.',
  ERROR_INFO_VALUE_DEPRECATED: '��[$$]��JSDoc��,deprecated��ǩֵ����, ����ʹ�÷���.',
  ERROR_INFO_VALUE_SYSCAP: '��[$$]��JSDoc��,syscap��ǩֵ����, ����syscap�ֶ��Ƿ�������.',
  ERROR_INFO_VALUE_NAMESPACE: '��[$$]��JSDoc��,namespace��ǩֵ����, �����Ƿ���namespace���Ʊ���һ��.',
  ERROR_INFO_VALUE_INTERFACE: '��[$$]��JSDoc��,interface��ǩֵ����, �����Ƿ���interface���Ʊ���һ��.',
  ERROR_INFO_VALUE_TYPEDEF: '��[$$]��JSDoc��,typedef��ǩֵ����, �����Ƿ���interface���Ʊ���һ��.',
  ERROR_INFO_TYPE_PARAM: '��[$$]��JSDoc��,��[$$]��param��ǩ���ʹ���, �����Ƿ����[$$]���������ͱ���һ��.',
  ERROR_INFO_VALUE_PARAM: '��[$$]��JSDoc��,��[$$}]��param��ǩֵ����, �����Ƿ����[$$]������������һ��.',
  ERROR_INFO_VALUE1_THROWS: '��[$$]��JSDoc��,��[$$}]��throws��ǩ���ʹ���, ����дBusinessError.',
  ERROR_INFO_VALUE2_THROWS: '��[$$]��JSDoc��,��[$$}]��throws��ǩ���ʹ���, �����ǩֵ�Ƿ�Ϊ��ֵ.',
  ERROR_INFO_INHERIT: '��[$$]��JSDoc��,��⵽��ǰ�ļ��д��ڿɼ̳б�ǩ[$$]���������ӽڵ�û�д˱�ǩ.',
  ERROR_ORDER: 'JSDoc��ǩ˳�����,����е���',
  ERROR_LABELNAME: '��[$$]��JSDoc��,[$$]��ǩ������, ��ʹ�úϷ���JSDoc��ǩ.',
  ERROR_LOST_LABEL: 'JSDoc��ǩ�Ϸ���У��ʧ��,��ȷ���Ƿ���ʧ$$��ǩ.',
  ERROR_USE: 'JSDoc��ǩ�Ϸ���У��ʧ��,������ʹ��[$$]��ǩ, �����ǩʹ�÷���.',
  ERROR_MORELABEL: 'JSDoc��ǩ�Ϸ���У��ʧ��,��[$$]��[$$]��ǩ����, �����Ƿ�Ӧ��ɾ����ǩ',
  ERROR_REPEATLABEL: '��[$$]��JSDoc��,JSDoc��ǩ�Ϸ���У��ʧ��,[$$]��ǩ�������ظ�ʹ��, ��ɾ�������ǩ.',
  ERROR_USE_INTERFACE: '��[$$]��JSDoc��,JSDoc��ǩ�Ϸ���У��ʧ��,interface��ǩ��typedef��ǩ������ͬʱʹ��, ��ȷ�Ͻӿ�����.',
};

const ErrorValueInfo = {
  ERROR_INFO_VALUE_EXTENDS: 'In the JSDoc section [$$], the [extens] tag value is incorrect. Please check if the tag value matches the inherited class name.',
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
  ERROR_INFO_VALUE_PARAM: 'In the JSDoc section [$$], the value of the [$$}] [param] tag is incorrect. Please check if it matches the [$$] parameter name',
  ERROR_INFO_VALUE1_THROWS: 'In the JSDoc section [$$], the type of the [$$}] [throws] tag is incorrect. Please fill in [BusinessError]',
  ERROR_INFO_VALUE2_THROWS: 'In the JSDoc section [$$], the type of the [$$}] [throws] tag is incorrect. Please check if the tag value is a numerical value',
  ERROR_INFO_INHERIT: 'In the JSDoc section [$$], it was detected that there is an inheritable label [$$] in the current file, but there are child nodes without this label',
  ERROR_ORDER: 'JSDoc label order error, please make adjustments',
  ERROR_LABELNAME: 'In the JSDoc section [$$], the [$$] tag does not exist. Please use a valid JSDoc tag',
  ERROR_LOST_LABEL: 'JSDoc tag validity verification failed. Please confirm if the $$tag is missing',
  ERROR_USE: 'JSDoc label validity verification failed. The [$$] label is not allowed. Please check the label usage method.',
  ERROR_MORELABEL: 'JSDoc tag validity verification failed. The [$$] tag is redundant. Please check if the tag should be deleted.',
  ERROR_REPEATLABEL: 'In the JSDoc section [$$], the validity verification of the JSDoc tag failed. The [$$] tag is not allowed to be reused, please delete the extra tags',
  ERROR_USE_INTERFACE: 'In paragraph [$$] of JSDoc, the validity verification of the JSDoc tag failed. The interface tag and typedef tag are not allowed to be used simultaneously. Please confirm the interface class.',
};
exports.ErrorValueInfo = ErrorValueInfo;

/**
   * ��װ������Ϣ
   */
function createErrorInfo(errorInfo, params) {
  params.forEach((param) => {
    errorInfo = errorInfo.replace('$$', param);
  });
  return errorInfo;
}
exports.createErrorInfo = createErrorInfo;

/**
 * �ж��Ƿ�Ϊarkui��api�ļ�
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

function getcheckApiVersion() {
  const packageJsonPath = path.join(__dirname, "../package.json");
  let packageJson;
  let checkApiVersion;
  try {
    const packageJsonContent = fs.readFileSync(packageJsonPath, "utf8");
    packageJson = JSON.parse(packageJsonContent);
    checkApiVersion = packageJson.checkApiVersion;
  } catch (error) {
    console.error("Failed to read package.json or parse JSON content:", error);
  }
  if (!checkApiVersion) {
    console.error("Invalid checkApiVersion:", checkApiVersion);
  }
  return checkApiVersion;
}
exports.getcheckApiVersion = getcheckApiVersion;

function removeDuplicateObj(array) {
  let newArr = [];
  for (const errorInfo of array) {
    if (newArr.find((newErrorInfo) => newErrorInfo.location === errorInfo.location &&
      newErrorInfo.errorInfo === errorInfo.errorInfo)) {
      continue;
    }
    newArr.push(errorInfo);
  }
  return newArr;
};
exports.removeDuplicateObj = removeDuplicateObj;

