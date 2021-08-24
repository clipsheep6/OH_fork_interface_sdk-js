/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

interface IPropertySubscriber {
  id(): number;
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

interface ISinglePropertyChangeSubscriber<T> extends IPropertySubscriber {
  hasChanged(newValue: T): void;
}

declare abstract class SubscribedAbstractProperty<T> {
  protected subscribers_: Set<number>;
  private id_;
  private info_?;
  constructor(subscribeMe?: IPropertySubscriber, info?: string);
  id(): number;
  info(): string;
  abstract get(): T;
  abstract set(newValue: T): void;
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;
  unlinkSuscriber(subscriberId: number): void;
  protected notifyHasChanged(newValue: T): void;
  protected notifyPropertyRead(): void;
  numberOfSubscrbers(): number;
}

declare class SyncedPropertyTwoWay<T> extends SubscribedAbstractProperty<T> implements ISinglePropertyChangeSubscriber<T> {
  private source_;
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;
  hasChanged(newValue: T): void;
  get(): T;
  set(newValue: T): void;
}

declare class SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T> implements ISinglePropertyChangeSubscriber<T> {
  private wrappedValue_;
  private source_;
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;
  hasChanged(newValue: T): void;
  get(): T;
  set(newValue: T): void;
}

export declare class AppStorage {
  static GetOrCreate(): AppStorage;
  static Get(): AppStorage | undefined;
  link<T>(propName: string): SubscribedAbstractProperty<T> | undefined;
  setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;
  prop<S>(propName: string): SubscribedAbstractProperty<S> | undefined;
  setAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;
  has(propName: string): boolean;
  get<T>(propName: string): T | undefined;
  set<T>(propName: string, newValue: T): boolean;
  setOrCreate<T>(propName: string, newValue: T): void;
  delete(propName: string): boolean;
  keys(): IterableIterator<string>;
  protected clear(): boolean;
  getOrCreatePersistentStorage(): PersistentStorage;
}

export declare class Environment {
  constructor();
  static Prop(key:string, defaultValue:any): boolean;
  static Props(props: Array<{key: string, defaultValue: any}>): void;
  static Keys(): Array<string>;
}

export declare enum ColorMode {
  LIGHT = 0,
  DARK,
}

export declare enum LayoutDirection {
  LTR = 0,
  RTL,
}

export declare class PersistentStorage {
  link(propName: string): void;
  links(props: Array<string>): void;
  unlink(propName: string): void;
  keys(): IterableIterator<string>;
}

export declare abstract class SubscribaleAbstract {
  private owningProperties_: Set<number>;
  constructor();
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;
  public addOwningProperty(subscriber: IPropertySubscriber): void;
  public removeOwningProperty(property: IPropertySubscriber): void;
  public removeOwningPropertyById(subscriberId: number): void;
}

export declare const appStorage: AppStorage;
