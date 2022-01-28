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
declare namespace util {
  class LightWeightSet<T> {
    /**
     * A constructor used to create a LightWeightSet object.
     * @since 8
     */
    constructor();
    /**
     * Gets the element number of the LightWeightSet.
     * @since 8
     */
    length: number;
    /**
     * If the set does not contain the element, the specified element is added
     * @param value Added element
     * @returns the boolean type(Is there contain this element)
     * @since 8
     */
    add(value: T): boolean;
    /**
     * Adds all the objects in a specified LightWeightSet container to the current LightWeightSet container
     * @param set the Map object to provide the added element
     * @returns the boolean type(Is there any new data added successfully)
     * @since 8
     */
    addAll(set: LightWeightMap<T>): boolean;
    /**
     * Returns whether this set has all the object in a specified set
     * @param set the Set object to compare
     * @return the boolean type
     * @since 8
     */
    hasAll(set: LightWeightSet<T>): boolean;
    /**
     * Checks whether an LightWeightSet container has a specified key
     * @param key need to determine whether to include the key
     * @return the boolean type
     * @since 8
     */
    has(key: T): boolean;
    /**
     * Checks whether an the objects of an LightWeighSet containeer are of the same type as a specified Object LightWeightSet
     * @param obj need to determine whether to include the obj
     * @return the boolean type
     * @since 8
     */
    equal(obj: Object): boolean;
    /**
     * Ensures that the capacity of an LightWeightSet container is greater than or equal to a apecified value,
     * and that the container has all the original objects after capacity expansion
     * @param minimumCapacity Minimum capacity to be reserved
     * @since 8
     */
    ensureCapacityTo(minimumCapacity: number): void;
    /**
     * Obtains the index of s key of a specified Object type in an LightWeightSet container
     * @param key Looking for goals
     * @return Subscript corresponding to target
     * @since 8
     */
    getIndexOf(key: T): number;
    /**
     * Deletes an object of a specified Object type from an LightWeightSet container
     * @param key  Target to be deleted
     * @return Target element
     * @since 8
     */
    remove(key: T): T;
    /**
     * Deletes an object at the loaction identified by index from an LightWeightSet container
     * @param index  Target subscript for search
     * @return the boolean type(Is there a delete value)
     * @since 8
     */
    removeAt(index: number): boolean;
    /**
     * Removes all of the mapping from this map
     * The map will be empty after this call returns
     * @since 8
     */
    clear(): void;
    /**
     * Executes the given callback function once for each real key in the map.
     * It does not perform functions on deleted keys
     * @since 8
     */
    forEach(callbackfn: (value?: T, key?: T, map?: LightWeightSet<T>) => void,
    thisArg?: Object): void;
    /**
     * returns an ES6 iterator.Each item of the iterator is a Javascript Object
     * @since 8
     */
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * Obtains a string that contains all the keys and values in an LightWeightSet container
     * @since 8
     */
    toString(): String;
    /**
     * Obtains an Array that contains all the objects of an LightWeightSet container.
     * @since 8
     */
    toArray(): Array<T>;
    /**
     * Obtains the object at the location  identified by index in an LightWeightSet container
     * @param index Target subscript for search
     * @return the value of key-value pairs
     * @since 8
     */
    getValueAt(index: number): T;
    /**
     * Returns a ES6 iterator of the values contained in this Set
     * @since 8
     */
    values(): IterableIterator<T>;
    /**
     * Returns a Iterator object that contains the [key, value] pairs for each element in the Set object in insertion order
     * @since 8
     */
    entries(): IterableIterator<[T, T]>;
  }
}
export default util;