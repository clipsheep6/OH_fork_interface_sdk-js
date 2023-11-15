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

import ts from 'typescript';

import { Comment } from './Comment';
import { DecoratorInfo } from './Decorator';
import { JsDocProcessorHelper } from '../../coreImpl/parser/JsDocProcessor';

export enum ApiType {
  SOURCE_FILE = 'SourceFile',
  REFERENCE_FILE = 'Reference',
  PROPERTY = 'Property',
  CLASS = 'Class',
  INTERFACE = 'Interface',
  NAMESPACE = 'Namespace',
  METHOD = 'Method',
  MODULE = 'Module',
  EXPORT = 'Export',
  EXPORT_DEFAULT = 'ExportDefault',
  CONSTANT = 'Constant',
  IMPORT = 'Import',
  DECLARE_CONST = 'DeclareConst',
  ENUM_VALUE = 'EnumValue',
  TYPE_ALIAS = 'TypeAlias',
  PARAM = 'Param',
  ENUM = 'Enum',
  STRUCT = 'Struct',
}

export enum TypeAliasType {
  UNION_TYPE = 'UnionType',
  OBJECT_TYPE = 'ObjectType',
  TUPLE_TYPE = 'TupleType',
  REFERENCE_TYPE = 'ReferenceType',
}

export class BasicApiInfo {
  private node: ts.Node | undefined = undefined; //astnode节点
  filePath: string = ''; // api所在文件的路径
  apiType: ApiType = '' as ApiType; // api的类型
  // api的定义语句，如果为namespace、class、interface、enum等节点的话，则仅为定义的那行
  definedText: string = '';
  pos: ts.LineAndCharacter = { line: -1, character: -1 }; // api所在的位置信息
  parentApi: BasicApiInfo | undefined = undefined; // 定义api节点的父节点的api信息
  isExport: boolean = false; // api节点是否有export关键字进行导出
  apiName: string = ''; // api的名称
  hierarchicalRelations: string[] = []; // api所属的层级关系
  decorators: DecoratorInfo[] | undefined = undefined; //decorators修饰器集合
  isStruct: boolean = false; //是否为structDeclaration内部api
  syscap: string = '';

  constructor(apiType: string = '', node: ts.Node, parentApi: BasicApiInfo | undefined) {
    this.node = node;
    this.setParentApi(parentApi);
    if (parentApi) {
      this.setFilePath(parentApi.getFilePath());
      this.setIsStruct(parentApi.getIsStruct());
    }
    this.setApiType(apiType);
    const sourceFile: ts.SourceFile = node.getSourceFile();
    const start: number = node.getStart();
    const pos: ts.LineAndCharacter = sourceFile.getLineAndCharacterOfPosition(start);
    pos.character++;
    pos.line++;
    this.setPos(pos);
    if (node.decorators) {
      node.decorators.forEach((decorator: ts.Decorator) => {
        this.addDecorators([new DecoratorInfo(decorator)]);
      });
    }
  }

  getNode(): ts.Node | undefined {
    return this.node;
  }

  removeNode() {
    this.node = undefined;
  }

  setFilePath(fileFilePath: string): void {
    this.filePath = fileFilePath;
  }

  getFilePath(): string {
    return this.filePath;
  }

  setApiType(apiType: string): void {
    this.apiType = apiType as ApiType;
  }

  getApiType(): string {
    return this.apiType;
  }

  setDefinedText(definedText: string): void {
    this.definedText = definedText;
  }

  getDefinedText(): string {
    return this.definedText;
  }

  setPos(pos: ts.LineAndCharacter): void {
    this.pos = pos;
  }

  getPos(): ts.LineAndCharacter {
    return this.pos;
  }

  setParentApi(parentApi: BasicApiInfo | undefined): void {
    this.parentApi = parentApi;
  }

  getParentApi(): BasicApiInfo | undefined {
    return this.parentApi;
  }

  setIsExport(isExport: boolean): void {
    this.isExport = isExport;
  }

  getIsExport(): boolean {
    return this.isExport;
  }

  setApiName(apiName: string): void {
    this.apiName = apiName;
    if (this.parentApi) {
      this.setHierarchicalRelations(this.parentApi.getHierarchicalRelations());
    }
    this.addHierarchicalRelation([apiName]);
  }

  getApiName(): string {
    return this.apiName;
  }

  setHierarchicalRelations(hierarchicalRelations: string[]): void {
    this.hierarchicalRelations = [...hierarchicalRelations];
  }

  getHierarchicalRelations(): string[] {
    return this.hierarchicalRelations;
  }

  addHierarchicalRelation(hierarchicalRelation: string[]): void {
    this.hierarchicalRelations.push(...hierarchicalRelation);
  }

  setDecorators(decorators: DecoratorInfo[]): void {
    this.decorators = decorators;
  }

  addDecorators(decorators: DecoratorInfo[]): void {
    if (!this.decorators) {
      this.decorators = [];
    }
    this.decorators.push(...decorators);
  }

  getDecorators(): DecoratorInfo[] | undefined {
    return this.decorators;
  }

  setIsStruct(isStruct: boolean): void {
    this.isStruct = isStruct;
  }

  getIsStruct(): boolean {
    return this.isStruct;
  }

  setSyscap(syscap: string): void {
    this.syscap = syscap;
  }

  getSyscap(): string {
    return this.syscap;
  }
}

export class ExportDefaultInfo extends BasicApiInfo {}

export class ReferenceInfo extends BasicApiInfo {
  pathName: string = '';

  setPathName(pathName: string): ReferenceInfo {
    this.pathName = pathName;
    return this;
  }

  getPathName(): string {
    return this.pathName;
  }
}

export class ExportDeclareInfo extends BasicApiInfo {
  exportValues: Array<exportImportValue> = [];

  addExportValues(name: string, type: string): void {
    this.exportValues.push({ key: name, value: type || name });
  }

  getExportValues(): Array<exportImportValue> {
    return this.exportValues;
  }
}

/**
 * import导入的信息，包含导入的值和路径信息
 */
export class ImportInfo extends BasicApiInfo {
  importValues: Array<exportImportValue> = [];
  importPath: string = '';

  addImportValue(name: string, type: string): void {
    this.importValues.push({ key: name, value: type || name });
  }

  getImportValues(): Array<exportImportValue> {
    return this.importValues;
  }

  setImportPath(importPath: string): void {
    this.importPath = importPath;
  }

  getImportPath(): string {
    return this.importPath;
  }
}

export class ApiInfo extends BasicApiInfo {
  jsDocInfos: Comment.JsDocInfo[] = []; // 所有的JsDoc信息

  constructor(apiType: string = '', node: ts.Node, parentApi: BasicApiInfo) {
    super(apiType, node, parentApi);
    const jsDocInfos: Comment.JsDocInfo[] = JsDocProcessorHelper.processJsDocInfos(node);
    this.jsDocInfos = jsDocInfos;
  }

  getJsDocInfos(): Comment.JsDocInfo[] {
    return this.jsDocInfos;
  }

  getLatestJsDocInfo(): Comment.JsDocInfo | undefined {
    const length: number = this.jsDocInfos.length;
    if (length === 0) {
      return undefined;
    }
    return this.jsDocInfos[length - 1];
  }

  addJsDocInfos(jsDocInfos: Comment.JsDocInfo[]): void {
    this.jsDocInfos.push(...jsDocInfos);
  }

  addJsDocInfo(jsDocInfo: Comment.JsDocInfo): void {
    this.jsDocInfos.push(jsDocInfo);
  }
}

export class ClassInfo extends ApiInfo {
  parentClasses: string[] = []; // 继承的父类
  childApis: BasicApiInfo[] = []; // 子节点的信息

  setParentClasses(parentClasses: string[]): void {
    this.parentClasses.push(...parentClasses);
  }

  getParentClasses(): string[] {
    return this.parentClasses;
  }

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

export class InterfaceInfo extends ApiInfo {
  parentClasses: string[] = []; // 继承的父类
  childApis: BasicApiInfo[] = []; // 子节点的信息

  setParentClasses(parentClasses: string[]): void {
    this.parentClasses.push(...parentClasses);
  }

  getParentClasses(): string[] {
    return this.parentClasses;
  }

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

export class NamespaceInfo extends ApiInfo {
  childApis: BasicApiInfo[] = [];

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

export class StructInfo extends ApiInfo {
  childApis: BasicApiInfo[] = [];

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

export class ModuleInfo extends ApiInfo {
  childApis: BasicApiInfo[] = [];

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

export class EnumInfo extends ApiInfo {
  childApis: BasicApiInfo[] = [];

  addChildApis(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }

  addChildApi(childApi: BasicApiInfo): void {
    this.childApis.push(childApi);
  }

  getChildApis(): BasicApiInfo[] {
    return this.childApis;
  }
}

/**
 * 属性会包含declare const定义的节点
 */
export class PropertyInfo extends ApiInfo {
  type: string[] = []; // 属性的类型，数组是由于可能为联合类型
  isReadOnly: boolean = false; // 属性是否为只读
  isRequired: boolean = false; // 属性是否为必选
  isStatic: boolean = false; // 属性是否为静态

  addType(type: string[]): void {
    this.type.push(...type);
  }

  getType(): string[] {
    return this.type;
  }

  setIsReadOnly(isReadOnly: boolean): void {
    this.isReadOnly = isReadOnly;
  }

  getIsReadOnly(): boolean {
    return this.isReadOnly;
  }

  setIsRequired(isRequired: boolean): void {
    this.isRequired = isRequired;
  }

  getIsRequired(): boolean {
    return this.isRequired;
  }

  setIsStatic(isStatic: boolean): void {
    this.isStatic = isStatic;
  }

  getIsStatic(): boolean {
    return this.isStatic;
  }
}

export class ConstantInfo extends ApiInfo {
  value: string = ''; // 常量的取值

  setValue(value: string): void {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}

/**
 * 使用type关键字定义的节点，归为自定义类型的范畴
 */
export class TypeAliasInfo extends ApiInfo {
  type: string[] = []; // type定义的类型
  typeName: TypeAliasType = '' as TypeAliasType; //type的类型

  addType(type: string[]): void {
    this.type.push(...type);
  }

  getType(): string[] {
    return this.type;
  }

  setTypeName(typeName: string): TypeAliasInfo {
    this.typeName = typeName as TypeAliasType;
    return this;
  }

  getTypeName(): string {
    return this.typeName;
  }
}

export class EnumValueInfo extends ApiInfo {
  value: string = ''; // 枚举值

  setValue(value: string): void {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}

export class MethodInfo extends ApiInfo {
  callForm: string = ''; // 方法的调用形式
  params: ParamInfo[] = []; // 方法的参数列表
  returnValue: string[] = []; // 方法的返回值类型
  isStatic: boolean = false; // 方法是否是静态
  sync: string = ''; //同步函数标志

  setCallForm(callForm: string): void {
    this.callForm = callForm;
  }

  getCallForm(): string {
    return this.callForm;
  }

  addParam(paramInfo: ParamInfo): void {
    this.params.push(paramInfo);
  }

  getParams(): ParamInfo[] {
    return this.params;
  }

  setReturnValue(returnValue: string[]): void {
    this.returnValue.push(...returnValue);
  }

  getReturnValue(): string[] {
    return this.returnValue;
  }

  setIsStatic(isStatic: boolean): void {
    this.isStatic = isStatic;
  }

  getIsStatic(): boolean {
    return this.isStatic;
  }

  setSync(sync: string): void {
    this.sync = sync;
  }

  getSync(): string {
    return this.sync;
  }
}

export class ParamInfo {
  apiType: string = ''; // api的类型为方法参数
  apiName: string = ''; // 参数名
  paramType: ts.SyntaxKind = -1; // 参数类型的kind
  type: string[] = []; // 参数的类型
  isRequired: boolean = false; // 参数是否必选
  definedText: string = '';

  constructor(apiType: string) {
    this.apiType = apiType;
  }

  getApiType(): string {
    return this.apiType;
  }

  setApiName(apiName: string) {
    this.apiName = apiName;
  }

  getApiName(): string {
    return this.apiName;
  }

  setType(type: string[]): void {
    this.type.push(...type);
  }

  getParamType(): ts.SyntaxKind {
    return this.paramType;
  }

  setParamType(paramType: ts.SyntaxKind): void {
    this.paramType = paramType;
  }

  getType(): string[] {
    return this.type;
  }

  setIsRequired(isRequired: boolean): void {
    this.isRequired = isRequired;
  }

  getIsRequired(): boolean {
    return this.isRequired;
  }

  setDefinedText(definedText: string): void {
    this.definedText = definedText;
  }

  getDefinedText(): string {
    return this.definedText;
  }
}

export type exportImportValue = { key: string; value: string };
export interface NodeProcessorInterface {
  (node: ts.Node, parentApiInfo: BasicApiInfo): BasicApiInfo;
}

export type PropertyNode = ts.PropertyDeclaration | ts.PropertySignature;

export interface ModifierProcessorInterface {
  (propertyInfo: BasicApiInfo): void;
}

/**
 * ts中所有方法节点
 */
export type MethodType =
  | ts.MethodDeclaration
  | ts.MethodSignature
  | ts.FunctionDeclaration
  | ts.CallSignatureDeclaration
  | ts.ConstructorDeclaration
  | ts.ConstructSignatureDeclaration;

/**
 * 拥有子节点的class，处理数据时需要addChildApi，获取数据时可以getChildApis
 */
export type ContainerApiInfo = NamespaceInfo | ClassInfo | InterfaceInfo | EnumInfo | ModuleInfo | StructInfo;

/**
 * 将节点强制转换为ContainerApiInfo节点时需要根据ApiType来判断哪些apiInfo节点有childApi
 */
export const containerApiTypes: Set<string> = new Set([
  ApiType.NAMESPACE,
  ApiType.CLASS,
  ApiType.INTERFACE,
  ApiType.ENUM,
  ApiType.MODULE,
  ApiType.STRUCT,
]);

/**
 * 不存在jsdoc信息的节点
 */
export const notJsDocApiTypes: Set<string> = new Set([
  ApiType.SOURCE_FILE,
  ApiType.IMPORT,
  ApiType.EXPORT,
  ApiType.EXPORT_DEFAULT,
  ApiType.MODULE,
  ApiType.REFERENCE_FILE,
]);
