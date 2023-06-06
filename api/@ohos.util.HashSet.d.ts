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

declare class HashSet<T> {
  /**
   * A constructor used to create a HashSet object.
   *
   * @throws { BusinessError } 10200012 - The HashSet's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  constructor();
  /**
   * Gets the element number of the hashset.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  length: number;
  /**
   * Returns whether the Set object contains elements
   *
   * @returns the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  isEmpty(): boolean;
  /**
   * Returns whether the Set object contain s the elements
   *
   * @param value need to determine whether to include the element
   * @returns the boolean type
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  has(value: T): boolean;
  /**
   * If the set does not contain the element, the specified element is added
   *
   * @param value Added element
   * @returns the boolean type(Is there contain this element)
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  add(value: T): boolean;
  /**
   * Remove a specified element from a Set object
   *
   * @param value Target to be deleted
   * @returns the boolean type(Is there contain this element)
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  remove(value: T): boolean;
  /**
   * Clears all element groups in a set
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  clear(): void;
  /**
   * Executes a provided function once for each value in the Set object.
   *
   * @param { function } callbackFn
   * @param { Object } thisArg
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  forEach(callbackFn: (value?: T, key?: T, set?: HashSet<T>) => void, thisArg?: Object): void;
  /**
   * Returns a new Iterator object that contains the values contained in this set
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  values(): IterableIterator<T>;
  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the Set object in insertion order
   *
   * @returns { IterableIterator<[T, T]> }
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  entries(): IterableIterator<[T, T]>;
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   */
  [Symbol.iterator](): IterableIterator<T>;
}

export default HashSet;
