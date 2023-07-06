/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * AppStorage singleton is sub-class of see LocalStorage for
 * UI state of app-wide access and same life cycle as the app.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * AppStorage singleton is sub-class of see LocalStorage for
 * UI state of app-wide access and same life cycle as the app.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class AppStorage {
  /**
   * Called when a link is set.
   *
   * @param { string } propName
   * @returns { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when a link is set.
   *
   * @param { string } propName
   * @returns { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static Link(propName: string): any;

  /**
   * Like see Link(), but will create and initialize a new source property in AppStorage if missing
   * Same as see LocalStorage.setAndLink()
   *
   * @param { string } propName name of source property in AppStorage
   * @param { T } defaultValue value to be used for initializing if new creating new property in AppStorage
   *        default value must be of type T, must not be 'undefined' or 'null'.
   * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Like see Link(), but will create and initialize a new source property in AppStorage if missing
   * Same as see LocalStorage.setAndLink()
   *
   * @param { string } propName name of source property in AppStorage
   * @param { T } defaultValue value to be used for initializing if new creating new property in AppStorage
   *        default value must be of type T, must not be 'undefined' or 'null'.
   * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Called when a property is set.
   *
   * @param { string } propName
   * @returns { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when a property is set.
   *
   * @param { string } propName
   * @returns { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static Prop(propName: string): any;

  /**
   * Like see prop(), will create and initialize a new source property in AppStorage if missing
   * Same as see LocalStorage.setAndProp()
   *
   * @param { string } propName name of source property in AppStorage
   * @param { S } defaultValue value to be used for initializing if new creating new property in AppStorage.
   *        default value must be of type T, must not be undefined or null.
   * @returns { SubscribedAbstractProperty<S> } instance of  SubscribedAbstractProperty<S>
   *           return undefined if named property does not already exist in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Like see prop(), will create and initialize a new source property in AppStorage if missing
   * Same as see LocalStorage.setAndProp()
   *
   * @param { string } propName name of source property in AppStorage
   * @param { S } defaultValue value to be used for initializing if new creating new property in AppStorage.
   *        default value must be of type T, must not be undefined or null.
   * @returns { SubscribedAbstractProperty<S> } instance of  SubscribedAbstractProperty<S>
   *           return undefined if named property does not already exist in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * Checks if AppStorage has a property with given name
   * returns true if property with given name exists
   * same as ES6 Map.prototype.has()
   * Same as see LocalStorage.has()
   *
   * @param { string } propName searched property
   * @returns { boolean } true if property with such name exists in AppStorage
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Checks if AppStorage has a property with given name
   * returns true if property with given name exists
   * same as ES6 Map.prototype.has()
   * Same as see LocalStorage.has()
   *
   * @param { string } propName searched property
   * @returns { boolean } true if property with such name exists in AppStorage
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static Has(propName: string): boolean;

  /**
   * Same as see LocalStorage.get()
   * Obtain the value of property with given name, returns undefined if the property does not exist in AppStorage.
   *
   * @param { string } propName
   * @returns { T | undefined } property value of type T if found or undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Same as see LocalStorage.get()
   * Obtain the value of property with given name, returns undefined if the property does not exist in AppStorage.
   *
   * @param { string } propName
   * @returns { T | undefined } property value of type T if found or undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static Get<T>(propName: string): T | undefined;

  /**
   * Set value of given property in AppStorage
   * Method sets nothing and returns false if property with this name does not exist
   * or if newValue is `undefined` or `null`.
   * Same as see LocalStorage.set
   *
   * @param { string } propName
   * @param { T } newValue must be of type T and must not be undefined or null
   * @returns { boolean } true on success, i.e. when above conditions are satisfied, otherwise false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set value of given property in AppStorage
   * Method sets nothing and returns false if property with this name does not exist
   * or if newValue is `undefined` or `null`.
   * Same as see LocalStorage.set
   *
   * @param { string } propName
   * @param { T } newValue must be of type T and must not be undefined or null
   * @returns { boolean } true on success, i.e. when above conditions are satisfied, otherwise false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static Set<T>(propName: string, newValue: T): boolean;

  /**
   * Set value of given property, if it exists, see set() .
   * Add property if no property with given name in AppStorage,. yet, and initialize with given value.
   * Do nothing and return false if newValue is undefined or null
   * see LocalStorage.setOrCreate()
   *
   * @param { string } propName
   * @param { T } newValue must be of type T and must not be undefined or null
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set value of given property, if it exists, see set() .
   * Add property if no property with given name in AppStorage,. yet, and initialize with given value.
   * Do nothing and return false if newValue is undefined or null
   * see LocalStorage.setOrCreate()
   *
   * @param { string } propName
   * @param { T } newValue must be of type T and must not be undefined or null
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static SetOrCreate<T>(propName: string, newValue: T): void;

  /**
   * Delete property with given name from AppStorage
   * Use with caution:
   * Before deleting a prop from AppStorage all its subscribers need to
   * unsubscribe from the property.
   * This method fails and returns false if given property still has subscribers
   * Another reason for failing is unknown property name.
   * Developer advise:
   * Subscribers to a property in AppStorage are created with see link(), see prop()
   * and also via @StorageLink and @StorageProp state variable decorators.
   * That means as long as their is a @Component instance that uses such decorated variable
   * or a sync relationship with a SubscribedAbstractProperty variable the property can not
   * (and also should not!) be deleted from AppStorage.
   * Same as see LocalStorage.delete()
   *
   * @param { string } propName
   * @returns { boolean } false if method failed
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Delete property with given name from AppStorage
   * Use with caution:
   * Before deleting a prop from AppStorage all its subscribers need to
   * unsubscribe from the property.
   * This method fails and returns false if given property still has subscribers
   * Another reason for failing is unknown property name.
   * Developer advise:
   * Subscribers to a property in AppStorage are created with see link(), see prop()
   * and also via @StorageLink and @StorageProp state variable decorators.
   * That means as long as their is a @Component instance that uses such decorated variable
   * or a sync relationship with a SubscribedAbstractProperty variable the property can not
   * (and also should not!) be deleted from AppStorage.
   * Same as see LocalStorage.delete()
   *
   * @param { string } propName
   * @returns { boolean } false if method failed
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static Delete(propName: string): boolean;

  /**
   * Provide names of all properties in AppStorage
   * same as ES6 Map.prototype.keys()
   * Same as see LocalStorage.keys()
   *
   * @returns { IterableIterator<string> } return a Map Iterator
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Provide names of all properties in AppStorage
   * same as ES6 Map.prototype.keys()
   * Same as see LocalStorage.keys()
   *
   * @returns { IterableIterator<string> } return a Map Iterator
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static Keys(): IterableIterator<string>;

  /**
   * Called when a cleanup occurs.
   *
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   * @useinstead AppStorage.Clear
   */
  static staticClear(): boolean;

  /**
   * Delete all properties from the AppStorage.
   * Precondition is that there are no subscribers, see Delete().
   *
   * @returns { boolean } false and deletes no properties if there is any property
   * that still has subscribers.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Delete all properties from the AppStorage.
   * Precondition is that there are no subscribers, see Delete().
   *
   * @returns { boolean } false and deletes no properties if there is any property
   * that still has subscribers.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static Clear(): boolean;

  /**
   * Called when the data can be changed.
   *
   * @param { string } propName
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the data can be changed.
   *
   * @param { string } propName
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static IsMutable(propName: string): boolean;

  /**
   * Method returns the number of properties currently in AppStorage
   *
   * @returns { number } Returns the number of properties currently in AppStorage
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Method returns the number of properties currently in AppStorage
   *
   * @returns { number } Returns the number of properties currently in AppStorage
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static Size(): number;
}

/**
 * Defines the subscribed abstract property.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 *   SubscribedAbstractProperty<T> is the return value of
 *   - AppStorage static functions Link(), Prop(), SetAndLink(), and SetAndProp()
 *   - LocalStorage member methods link(), prop(), setAndLink(), and setAndProp()
 *   'T' can be boolean, string, number or custom class.
 * Main functions
 *   see get() reads the linked AppStorage/LocalStorage property value,
 *   see set(newValue) write a new value to the synched AppStorage/LocalStorage property
 *   see aboutToBeDeleted() ends the sync relationship with the AppStorage/LocalStorage property
 *        The app must call this function before the SubscribedAbstractProperty<T> object
 *        goes out of scope.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 *   SubscribedAbstractProperty<T> is the return value of
 *   - AppStorage static functions Link(), Prop(), SetAndLink(), and SetAndProp()
 *   - LocalStorage member methods link(), prop(), setAndLink(), and setAndProp()
 *   'T' can be boolean, string, number or custom class.
 * Main functions
 *   see get() reads the linked AppStorage/LocalStorage property value,
 *   see set(newValue) write a new value to the synched AppStorage/LocalStorage property
 *   see aboutToBeDeleted() ends the sync relationship with the AppStorage/LocalStorage property
 *        The app must call this function before the SubscribedAbstractProperty<T> object
 *        goes out of scope.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare abstract class SubscribedAbstractProperty<T> {
  /**
   * Setting Subscribers.
   *
   * @type { Set<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  protected subscribers_: Set<number>;

  /**
   * Private user ID.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  private id_;

  /**
   * Private user information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  private info_?;

  /**
   * @param { ?IPropertySubscriber } subscribeMe
   * @param { ?string } info
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  constructor(
    /**
     * Subscriber IPropertySubscriber.
     * 
     * @type { ?IPropertySubscriber }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 7
     * 
     */
    subscribeMe?: IPropertySubscriber,
    /**
     * Subscriber info.
     * 
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 7
     * 
     */
    info?: string,
  );

  /**
   * Called when the subscriber ID is entered.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  id(): number;

  /**
   * Returns the property name,
   * e.g. let link = AppStorage.Link("foo") then link.info() == "foo"
   *
   * @returns { string } the property name if set or undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  info(): string;

  /**
   * Reads value of the sync'ed AppStorage/LocalStorage property.
   * `let link : SubscribedAbstractProperty<string> =AppStorage.Link<string>("foo")`
   * then `link.get()` returns the value of "foo" property in AppStorage.
   *
   * @returns { T } the value of the sync'ed AppStorage/LocalStorage property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Reads value of the sync'ed AppStorage/LocalStorage property.
   * `let link : SubscribedAbstractProperty<string> =AppStorage.Link<string>("foo")`
   * then `link.get()` returns the value of "foo" property in AppStorage.
   *
   * @returns { T } the value of the sync'ed AppStorage/LocalStorage property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  abstract get(): T;

  /**
   * Updates the value of value of the sync'ed AppStorage/LocalStorage property.
   * Sets new value, must be of type T, and must not be 'undefined' or 'null'.
   * `let link : SubscribedAbstractProperty<string> =AppStorage.Link<string>("foo")`
   * then `link.set("Hello")` will set the value of "foo" property in AppStorage.
   *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Updates the value of value of the sync'ed AppStorage/LocalStorage property.
   * Sets new value, must be of type T, and must not be 'undefined' or 'null'.
   * `let link : SubscribedAbstractProperty<string> =AppStorage.Link<string>("foo")`
   * then `link.set("Hello")` will set the value of "foo" property in AppStorage.
   *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  abstract set(newValue: T): void;

  /**
   * Called when a two-way synchronization is created.
   *
   * @param { ?IPropertySubscriber } subscribeMe
   * @param { ?string } info
   * @returns { SyncedPropertyTwoWay<T> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;

  /**
   * Called when a one-way synchronization is created.
   *
   * @param { ?IPropertySubscriber } subscribeMe
   * @param { ?string } info
   * @returns { SyncedPropertyOneWay<T> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;

  /**
   * Called when the subscriber is unlinked.
   *
   * @param { number } subscriberId
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  unlinkSuscriber(subscriberId: number): void;

  /**
   * Called when the notification has changed.
   *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  protected notifyHasChanged(newValue: T): void;

  /**
   * Called when the notification property is read.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  protected notifyPropertyRead(): void;

  /**
   * Called when the number of users is queried.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  numberOfSubscrbers(): number;

  /**
   * An app needs to call this function before the instance of SubscribedAbstractProperty
   * goes out of scope / is subject to garbage collection. Its purpose is to unregister the
   * variable from the two-way/one-way sync relationship that AppStorage/LocalStorage.link()/prop()
   * and related functions create.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  abstract aboutToBeDeleted(): void;
}

/**
 * Provides an interface for attribute subscribers.
 *
 * @interface IPropertySubscriber
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
interface IPropertySubscriber {
  /**
   * Called when the ID of the property subscriber is queried.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  id(): number;

  /**
   * Provides a single attribute change user interface.
   *
   * @param { ?IPropertySubscriber } owningView
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

/**
 * Defines the state value.
 *
 * @extends SubscribedAbstractProperty
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
declare class SyncedPropertyTwoWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Sources of synchronization attributes bidirectionally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  private source_;

  /**
   * constructor parameters.
   *
   * @param { SubscribedAbstractProperty<T> } source
   * @param { ?IPropertySubscriber } subscribeMe
   * @param { ?string } info
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   *
   * @param { IPropertySubscriber } unsubscribeMe
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   *
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  get(): T;

  /**
   * Called when data is created.
   *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  set(newValue: T): void;
}

/**
 * Defines the prop state value.
 *
 * @extends SubscribedAbstractProperty
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
declare class SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Pack value for single-item binding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  private wrappedValue_;

  /**
   * Sources of synchronization attributes bidirectionally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  private source_;

  /**
   * Constructor parameters.
   *
   * @param { SubscribedAbstractProperty<T> } source
   * @param { ?IPropertySubscriber } subscribeMe
   * @param { ?string } info
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   *
   * @param { IPropertySubscriber } unsubscribeMe
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   *
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  get(): T;

  /**
   * Called when data is created.
   *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  set(newValue: T): void;
}

/**
 * Defines the subscriber.
 *
 * @interface ISinglePropertyChangeSubscriber
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
interface ISinglePropertyChangeSubscriber<T> extends IPropertySubscriber {
  /**
   * Provides a single attribute change user interface.
   *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  hasChanged(newValue: T): void;
}

/**
 * Defines the Subscribale base class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
declare abstract class SubscribaleAbstract {
  /**
   * Returns the ownership attribute set by the.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  private owningProperties_: Set<number>;

  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  constructor();

  /**
   * Called when the notification property has changed.
   *
   * @param { string } propName
   * @param { any } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;

  /**
   * Called when adding an already owned property.
   *
   * @param { IPropertySubscriber } subscriber
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  public addOwningProperty(subscriber: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted.
   *
   * @param { IPropertySubscriber } property
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  public removeOwningProperty(property: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted by ID
   *
   * @param { number } subscriberId
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  public removeOwningPropertyById(subscriberId: number): void;
}

/**
 * Defines the Environment interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the Environment interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class Environment {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  constructor();

  /**
   * Called when a property value is checked.
   *
   * @param { string } key
   * @param { S } value
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when a property value is checked.
   *
   * @param { string } key
   * @param { S } value
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static EnvProp<S>(key: string, value: S): boolean;

  /**
   * Called when multiple property values are checked.
   *
   * @param { {key: string; defaultValue: any;}[] } props
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when multiple property values are checked.
   *
   * @param { {key: string; defaultValue: any;}[] } props
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static EnvProps(
    props: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Set the key value.
   *
   * @returns { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the key value.
   *
   * @returns { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static Keys(): Array<string>;
}

/**
 * Defines the PersistentStorage interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the PersistentStorage interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class PersistentStorage {
  /**
   * Constructor parameters.
   *
   * @param { AppStorage } appStorage
   * @param { Storage } storage
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  constructor(appStorage: AppStorage, storage: Storage);

  /**
   * Called when a persistence property is stored.
   *
   * @param { string } key
   * @param { T } defaultValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when a persistence property is stored.
   *
   * @param { string } key
   * @param { T } defaultValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static PersistProp<T>(key: string, defaultValue: T): void;

  /**
   * Called when a property is deleted.
   *
   * @param { string } key
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when a property is deleted.
   *
   * @param { string } key
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static DeleteProp(key: string): void;

  /**
   * Called when multiple persistence properties are stored.
   *
   * @param { {key: string; defaultValue: any;}[] } properties
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when multiple persistence properties are stored.
   *
   * @param { {key: string; defaultValue: any;}[] } properties
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static PersistProps(
    properties: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Set the key value.
   *
   * @returns { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the key value.
   *
   * @returns { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static Keys(): Array<string>;
}

/**
 * Used for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
declare const appStorage: AppStorage;

/**
 * LocalStorage
 * Class implements a Map of ObservableObjectBase UI state variables.
 * Instances can be created to manage UI state within a limited "local"
 * access, and life cycle as defined by the app.
 * AppStorage singleton is sub-class of LocalStorage for
 * UI state of app-wide access and same life cycle as the app.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * LocalStorage
 * Class implements a Map of ObservableObjectBase UI state variables.
 * Instances can be created to manage UI state within a limited "local"
 * access, and life cycle as defined by the app.
 * AppStorage singleton is sub-class of LocalStorage for
 * UI state of app-wide access and same life cycle as the app.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare class LocalStorage {
  /**
   * Construct new instance of LocalStorage
   * initialize with all properties and their values that Object.keys(params) returns
   * Property values must not be undefined.
   *
   * @param { ?Object } initializingProperties Object containing keys and values. see set() for valid values
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Construct new instance of LocalStorage
   * initialize with all properties and their values that Object.keys(params) returns
   * Property values must not be undefined.
   *
   * @param { ?Object } initializingProperties Object containing keys and values. see set() for valid values
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  constructor(initializingProperties?: Object);

  /**
   * Get current LocalStorage shared from stage.
   *
   * @returns { LocalStorage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @StageModelOnly
   * @since 9
   * @form
   */
  /**
   * Get current LocalStorage shared from stage.
   *
   * @returns { LocalStorage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @StageModelOnly
   * @crossplatform
   * @since 10
   * @form
   */
  static GetShared(): LocalStorage;

  /**
   * Check if LocalStorage has a property with given name
   * return true if property with given name exists
   * same as ES6 Map.prototype.has()
   *
   * @param { string } propName searched property
   * @returns { boolean } true if property with such name exists in LocalStorage
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Check if LocalStorage has a property with given name
   * return true if property with given name exists
   * same as ES6 Map.prototype.has()
   *
   * @param { string } propName searched property
   * @returns { boolean } true if property with such name exists in LocalStorage
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  has(propName: string): boolean;

  /**
   * Provide names of all properties in LocalStorage
   * same as ES6 Map.prototype.keys()
   *
   * @returns { IterableIterator<string> } return a Map Iterator
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Provide names of all properties in LocalStorage
   * same as ES6 Map.prototype.keys()
   *
   * @returns { IterableIterator<string> } return a Map Iterator
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  keys(): IterableIterator<string>;

  /**
   * Returns number of properties in LocalStorage
   * same as Map.prototype.size()
   *
   * @returns { number } return number of properties
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Returns number of properties in LocalStorage
   * same as Map.prototype.size()
   *
   * @returns { number } return number of properties
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  size(): number;

  /**
   * Returns value of given property
   * return undefined if no property with this name
   *
   * @param { string } propName
   * @returns { T | undefined } property value if found or undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Returns value of given property
   * return undefined if no property with this name
   *
   * @param { string } propName
   * @returns { T | undefined } property value if found or undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  get<T>(propName: string): T | undefined;

  /**
   * Set value of given property in LocalStorage
   * Method sets nothing and returns false if property with this name does not exist
   * or if newValue is `undefined` or `null` (`undefined`, `null` value are not allowed for state variables).
   *
   * @param { string } propName
   * @param { T } newValue must be of type T and must not be undefined or null
   * @returns { boolean } true on success, i.e. when above conditions are satisfied, otherwise false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Set value of given property in LocalStorage
   * Method sets nothing and returns false if property with this name does not exist
   * or if newValue is `undefined` or `null` (`undefined`, `null` value are not allowed for state variables).
   *
   * @param { string } propName
   * @param { T } newValue must be of type T and must not be undefined or null
   * @returns { boolean } true on success, i.e. when above conditions are satisfied, otherwise false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  set<T>(propName: string, newValue: T): boolean;

  /**
   * Set value of given property, if it exists, see set() .
   * Add property if no property with given name and initialize with given value.
   * Do nothing and return false if newValue is undefined or null
   * (undefined, null value is not allowed for state variables)
   *
   * @param { string } propName
   * @param { T } newValue must be of type T and must not be undefined or null
   * @returns { boolean } true on success, i.e. when above conditions are satisfied, otherwise false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Set value of given property, if it exists, see set() .
   * Add property if no property with given name and initialize with given value.
   * Do nothing and return false if newValue is undefined or null
   * (undefined, null value is not allowed for state variables)
   *
   * @param { string } propName
   * @param { T } newValue must be of type T and must not be undefined or null
   * @returns { boolean } true on success, i.e. when above conditions are satisfied, otherwise false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  setOrCreate<T>(propName: string, newValue: T): boolean;

  /**
   * Create and return a two-way sync "(link") to named property
   *
   * @param { string } propName name of source property in LocalStorage
   * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
   *           return undefined if named property does not already exist in LocalStorage
   *           Apps can use SDK functions of base class SubscribedPropertyAbstract<T>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Create and return a two-way sync "(link") to named property
   *
   * @param { string } propName name of source property in LocalStorage
   * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
   *           return undefined if named property does not already exist in LocalStorage
   *           Apps can use SDK functions of base class SubscribedPropertyAbstract<T>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  link<T>(propName: string): SubscribedAbstractProperty<T>;

  /**
   * Like see link(), but will create and initialize a new source property in LocalStorage if missing
   *
   * @param { string } propName name of source property in LocalStorage
   * @param { T } defaultValue value to be used for initializing if new creating new property in LocalStorage
   *        default value must be of type T, must not be undefined or null.
   * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
   *          Apps can use SDK functions of base class SubscribedAbstractProperty<T>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Like see link(), but will create and initialize a new source property in LocalStorage if missing
   *
   * @param { string } propName name of source property in LocalStorage
   * @param { T } defaultValue value to be used for initializing if new creating new property in LocalStorage
   *        default value must be of type T, must not be undefined or null.
   * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
   *          Apps can use SDK functions of base class SubscribedAbstractProperty<T>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Create and return a one-way sync ('prop') to named property
   *
   * @param { string } propName name of source property in LocalStorage
   * @returns { SubscribedAbstractProperty<S> } instance of  SubscribedAbstractProperty<S>
   *           return undefined if named property does not already exist in LocalStorage
   *           Apps can use SDK functions of base class SubscribedAbstractProperty<S>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Create and return a one-way sync ('prop') to named property
   *
   * @param { string } propName name of source property in LocalStorage
   * @returns { SubscribedAbstractProperty<S> } instance of  SubscribedAbstractProperty<S>
   *           return undefined if named property does not already exist in LocalStorage
   *           Apps can use SDK functions of base class SubscribedAbstractProperty<S>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  prop<S>(propName: string): SubscribedAbstractProperty<S>;

  /**
   * Like see prop(), will create and initialize a new source property in LocalStorage if missing
   *
   * @param { string } propName name of source property in LocalStorage
   * @param { S } defaultValue value to be used for initializing if new creating new property in LocalStorage.
   *         Default value must be of type T, must not be undefined or null.
   * @returns { SubscribedAbstractProperty<S> } instance of  SubscribedAbstractProperty<S>
   *           Apps can use SDK functions of base class SubscribedAbstractProperty<S>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Like see prop(), will create and initialize a new source property in LocalStorage if missing
   *
   * @param { string } propName name of source property in LocalStorage
   * @param { S } defaultValue value to be used for initializing if new creating new property in LocalStorage.
   *         Default value must be of type T, must not be undefined or null.
   * @returns { SubscribedAbstractProperty<S> } instance of  SubscribedAbstractProperty<S>
   *           Apps can use SDK functions of base class SubscribedAbstractProperty<S>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  setAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * Delete property from StorageBase
   * Use with caution:
   * Before deleting a prop from LocalStorage all its subscribers need to
   * unsubscribe from the property.
   * This method fails and returns false if given property still has subscribers
   * Another reason for failing is unknown property.
   * Developer advise:
   * Subscribers are created with see link(), see prop()
   * and also via @LocalStorageLink and @LocalStorageProp state variable decorators.
   * That means as long as their is a @Component instance that uses such decorated variable
   * or a sync relationship with a SubscribedAbstractProperty variable the property can nit
   * (and also should not!) be deleted from LocalStorage.
   *
   * @param { string } propName
   * @returns { boolean } false if method failed
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Delete property from StorageBase
   * Use with caution:
   * Before deleting a prop from LocalStorage all its subscribers need to
   * unsubscribe from the property.
   * This method fails and returns false if given property still has subscribers
   * Another reason for failing is unknown property.
   * Developer advise:
   * Subscribers are created with see link(), see prop()
   * and also via @LocalStorageLink and @LocalStorageProp state variable decorators.
   * That means as long as their is a @Component instance that uses such decorated variable
   * or a sync relationship with a SubscribedAbstractProperty variable the property can nit
   * (and also should not!) be deleted from LocalStorage.
   *
   * @param { string } propName
   * @returns { boolean } false if method failed
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  delete(propName: string): boolean;

  /**
   * Delete all properties from the LocalStorage instance
   * Precondition is that there are no subscribers.
   * method returns false and deletes no properties if there is any property
   * that still has subscribers
   *
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Delete all properties from the LocalStorage instance
   * Precondition is that there are no subscribers.
   * method returns false and deletes no properties if there is any property
   * that still has subscribers
   *
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  clear(): boolean;
}

declare module "StateManagement" {
  module "StateManagement" {
    // @ts-ignore
    export { LocalStorage };
  }
}
