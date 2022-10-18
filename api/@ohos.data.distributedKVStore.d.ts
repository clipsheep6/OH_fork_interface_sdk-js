/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './basic';
import { ValuesBucket } from './@ohos.data.ValuesBucket';
import dataSharePredicates from './@ohos.data.dataSharePredicates';
import Context from './application/Context';

/**
 * Providers interfaces to create a {@link KVManager} istances.
 * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
 * @import N/A
 * @since 9
 */
declare namespace distributedKVStore {
    /**
     * Provides configuration information for {@link KVManager} instances,
     * including the caller's package name and distributed network type.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    interface KVManagerConfig {
        /**
         * Indicates the bundleName
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        bundleName: string;

        /**
         * Indicates the ability or hap context
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @Note: if swap the area, you should close all the KV store and use the new Context to create the KVManager
         * @since 9
         */
        context: Context;
    }

    /**
     * KVStore constants
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    namespace Constants {
        /**
         * max key length.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        const MAX_KEY_LENGTH = 1024;

        /**
         * max value length.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        const MAX_VALUE_LENGTH = 4194303;

        /**
         * max device coordinate key length.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        const MAX_KEY_LENGTH_DEVICE = 896;

        /**
         * max store id length.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        const MAX_STORE_ID_LENGTH = 128;

        /**
         * max query length.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        const MAX_QUERY_LENGTH = 512000;

        /**
         * max batch operation size.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        const MAX_BATCH_SIZE = 128;
    }

    /**
     * Indicates the {@code ValueType}.
     *
     * <p>{@code ValueType} is obtained based on the value.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    enum ValueType {
        /** 
         * Indicates that the value type is string. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        STRING,

        /**
         * Indicates that the value type is int. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        INTEGER,

        /** 
         * Indicates that the value type is float. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        FLOAT,

        /** 
         * Indicates that the value type is byte array. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         * */
        BYTE_ARRAY,

        /** 
         * Indicates that the value type is boolean. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         * */
        BOOLEAN,

        /** 
         * Indicates that the value type is double. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        DOUBLE,
    }

    /**
     * Obtains {@code Value} objects stored in a {@link SingleKVStore} or {@link DeviceKVStore} database.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    interface Value {
        /**
         * Indicates value type
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @see ValueType
         * @type {number}
         * @memberof Value
         * @since 9
         */
        type: ValueType;
        /**
         * Indicates value
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        value: Uint8Array | string | number | boolean;
    }

    /**
     * Provides key-value pairs stored in the distributed database.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    interface Entry {
        /**
         * Indicates key
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        key: string;
        /**
         * Indicates value
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        value: Value;
    }

    /**
     * Receives notifications of all data changes, including data insertion, update, and deletion.
     *
     * <p>If you have subscribed to {@code SingleKVStore} or {@code DeviceKVStore}, you will receive
     * data change notifications and obtain the changed data from the parameters in callback methods
     * upon data insertion, update, or deletion.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    interface ChangeNotification {
        /**
         * Indicates data addition records.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        insertEntries: Entry[];
        /**
         * Indicates data update records.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        updateEntries: Entry[];
        /**
         * Indicates data deletion records.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        deleteEntries: Entry[];
        /**
         * Indicates from device id.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        deviceId: string;
    }

    /**
     * Indicates the database synchronization mode.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    enum SyncMode {
        /**
         * Indicates that data is only pulled from the remote end.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        PULL_ONLY,
        /**
         * Indicates that data is only pushed from the local end.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        PUSH_ONLY,
        /**
         * Indicates that data is pushed from the local end, and then pulled from the remote end.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        PUSH_PULL,
    }

    /**
     * Describes the subscription type.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    enum SubscribeType {
        /**
         * Subscription to local data changes
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
        */
        SUBSCRIBE_TYPE_LOCAL,

        /**
         * Subscription to remote data changes
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
        */
        SUBSCRIBE_TYPE_REMOTE,

        /**
         * Subscription to both local and remote data changes
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        SUBSCRIBE_TYPE_ALL,
    }

    /**
     * Describes the KVStore type.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    enum KVStoreType {
        /**
         * Device-collaborated database, as specified by {@code DeviceKVStore}
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @import N/A
         * @since 9
         */
        DEVICE_COLLABORATION,

        /**
         * Single-version database, as specified by {@code SingleKVStore}
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        SINGLE_VERSION,
    }

    /**
     * Describes the KVStore security level.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    enum SecurityLevel {
        /**
         * S1: mains the db is low level security
         * There are some low impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        S1,

        /**
         * S2: mains the db is middle level security
         * There are some major impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        S2,

        /**
         * S3: mains the db is high level security
         * There are some severity impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        S3,

        /**
         * S4: mains the db is critical level security
         * There are some critical impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        S4,
    }

    /**
     * Provides configuration options for creating a {@code SingleKVStore} or {@code DeviceKVStore}.
     *
     * <p>You can determine whether to create another database if a KVStore database is missing,
     * whether to encrypt the database, and the database type.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    interface Options {
        /**
         * Indicates whether to createa database when the database file does not exist
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        createIfMissing?: boolean;
        /**
         * Indicates setting whether database files are encrypted
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        encrypt?: boolean;
        /**
         * Indicates setting whether to back up database files
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        backup?: boolean;
        /**
         * Indicates setting whether database files are automatically synchronized
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        autoSync?: boolean;
        /**
         * Indicates setting the databse type
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        kvStoreType?: KVStoreType;
        /**
         * Indicates setting the database security level
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 9
         */
        securityLevel: SecurityLevel;
        /**
         * Indicates schema object
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @import N/A
         * @since 9
         */
        schema?: Schema;
    }

    /**
     * Represents the database schema.
     *
     * You can create Schema objects and put them in Options when creating or opening the database.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @import N/A
     * @since 9
     */
    class Schema {
        /**
         * A constructor used to create a Schema instance.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        constructor()
        /**
         * Indicates the root json object.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
		root: FieldNode;
        /**
         * Indicates the string array of json.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        indexes: Array<string>;
        /**
         * Indicates the mode of schema.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        mode: number;
        /**
         * Indicates the skipsize of schema.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        skip: number;
    }

    /**
     * Represents a node of a {@link Schema} instance.
     *
     * <p>Through the {@link Schema} instance, you can define the fields contained in the values stored in a database.
     *
     * <p>A FieldNode of the {@link Schema} instance is either a leaf or a non-leaf node.
     *
     * <p>The leaf node must have a value; the non-leaf node must have a child {@code FieldNode}.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @import N/A
     * @since 9
     */
    class FieldNode {
        /**
         * A constructor used to create a FieldNode instance with the specified field.
         * name Indicates the field node name.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        constructor(name: string)
        /**
         * Adds a child node to this {@code FieldNode}.
         *
         * <p>Adding a child node makes this node a non-leaf node. Field value will be ignored if it has child node.
         *
         * @param {FieldNode} child - The field node to append.
         * @returns Returns true if the child node is successfully added to this {@code FieldNode}; returns false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        appendChild(child: FieldNode): boolean;
        /**
         * Indicates the default value of fieldnode.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
         default: string;
         /**
          * Indicates the nullable of database field.
          *
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @since 9
          */
         nullable: boolean;
         /**
          * Indicates the type of value.
          *
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @since 9
          */
         type: number;
    }

    /**
     * Provide methods to obtain the result set of the {@code SingleKVStore} or {@code DeviceKVStore} database.
     *
     * <p>The result set is created by using the {@code getResultSet} method in the {@code SingleKVStore} or
     * {@code DeviceKVStore} class. This interface also provides methods for moving the data read
     * position in the result set.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 9
     */
    interface KVStoreResultSet {
        /**
         * Obtains the number of lines in a result set.
         *
         * @returns Returns the number of lines.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getCount(): number;
        /**
         * Obtains the current read position in a result set.
         *
         * @returns Returns the current read position. The read position starts with 0.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getPosition(): number;
        /**
         * Moves the read position to the first line.
         *
         * <p>If the result set is empty, false is returned.
         *
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        moveToFirst(): boolean;
        /**
         * Moves the read position to the last line.
         *
         * <p>If the result set is empty, false is returned.
         *
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        moveToLast(): boolean;
        /**
         * Moves the read position to the next line.
         *
         * <p>If the result set is empty or the data in the last line is being read, false is returned.
         *
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        moveToNext(): boolean;
        /**
         * Moves the read position to the previous line.
         *
         * <p>If the result set is empty or the data in the first line is being read, false is returned.
         *
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        moveToPrevious(): boolean;
        /**
         * Moves the read position by a relative offset to the current position.
         *
         * @param {number} offset - Indicates the relative offset to the current position. Anegative offset indicates moving
         * backwards, and a positive offset indicates moving forewards. Forexample, if the current position is entry 1 and
         * thisoffset is 2, the destination position will be entry 3; ifthe current position is entry 3 and this offset is -2,
         * the destination position will be entry 1. The valid final position after moving forwards starts with 0. If the
         * final position is invalid, false will be returned.
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        move(offset: number): boolean;
        /**
         * Moves the read position from 0 to an absolute position.
         *
         * @param {number} position - Indicates the absolute position.
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        moveToPosition(position: number): boolean;
        /**
         * Checks whether the read position is the first line.
         *
         * @returns Returns true if the read position is the first line; returns false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        isFirst(): boolean;
        /**
         * Checks whether the read position is the last line.
         *
         * @returns Returns true if the read position is the last line; returns false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        isLast(): boolean;
        /**
         * Checks whether the read position is before the last line.
         *
         * @returns Returns true if the read position is before the first line; returns false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        isBeforeFirst(): boolean;
        /**
         * Checks whether the read position is after the last line.
         *
         * @returns Returns true if the read position is after the last line; returns false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        isAfterLast(): boolean;
        /**
         * Obtains a key-value pair.
         *
         * @returns Returns a key-value pair.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getEntry(): Entry;
    }

    /**
     * Represents a database query using a predicate.
     *
     * <p>This class provides a constructor used to create a {@code Query} instance, which is used to query data
     * matching specified conditions in the database.
     *
     * <p>This class also provides methods for adding predicates to the {@code Query} instance.
     *
     * @import N/A
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    class Query {
        /**
         * A constructor used to create a Query instance.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        constructor()
        /**
         * Resets this {@code Query} object.
         *
         * @returns Returns the reset {@code Query} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        reset(): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is equal to the specified long value.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {number|string|boolean} value - Indicates the value to be compared.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        equalTo(field: string, value: number | string | boolean): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is not equal to the specified int value.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {number|string|boolean} value - Indicates the value to be compared.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        notEqualTo(field: string, value: number | string | boolean): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is greater than or equal to the
         * specified int value.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {number|string|boolean} value - Indicates the value to be compared.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        greaterThan(field: string, value: number | string | boolean): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is less than the specified int value.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {number|string} value - Indicates the value to be compared.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        lessThan(field: string, value: number | string): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is greater than or
         * equal to the specified int value.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {number|string} value - Indicates the value to be compared.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        greaterThanOrEqualTo(field: string, value: number | string): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is less than or equal to the
         * specified int value.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {number|string} value - Indicates the value to be compared.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        lessThanOrEqualTo(field: string, value: number | string): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is null.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        isNull(field: string): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is within the specified int value list.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {number[]} valueList - Indicates the int value list.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        inNumber(field: string, valueList: number[]): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is within the specified string value list.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {string[]} valueList - Indicates the string value list.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        inString(field: string, valueList: string[]): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is not within the specified int value list.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {number[]} valueList - Indicates the int value list.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        notInNumber(field: string, valueList: number[]): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is not within the specified string value list.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {string[]} valueList - Indicates the string value list.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        notInString(field: string, valueList: string[]): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is similar to the specified string value.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {string} value - Indicates the string value.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        like(field: string, value: string): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is not similar to the specified string value.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @param {string} value - Indicates the string value.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        unlike(field: string, value: string): Query;
        /**
         * Constructs a {@code Query} object with the and condition.
         *
         * <p>Multiple predicates should be connected using the and or or condition.
         *
         * @returns Returns the {@coed Query} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        and(): Query;
        /**
         * Constructs a {@code Query} object with the or condition.
         *
         * <p>Multiple predicates should be connected using the and or or condition.
         *
         * @returns Returns the {@coed Query} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        or(): Query;
        /**
         * Constructs a {@code Query} object to sort the query results in ascending order.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        orderByAsc(field: string): Query;
        /**
         * Constructs a {@code Query} object to sort the query results in descending order.
         *
         * @param {string} field - Indicates the field, which must start with $. and cannot contain ^.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        orderByDesc(field: string): Query;
        /**
         * Constructs a {@code Query} object to specify the number of results and the start position.
         *
         * @param {number} total - Indicates the number of results.
         * @param {number} offset - Indicates the start position.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        limit(total: number, offset: number): Query;
        /**
         * Creates a {@code Query} condition with a specified field that is not null.
         *
         * @param {string} field - Indicates the specified field.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        isNotNull(field: string): Query;
        /**
         * Creates a query condition group with a left bracket.
         *
         * <p>Multiple query conditions in an {@code Query} object can be grouped. The query conditions in a group can be used as a
         * whole to combine with other query conditions.
         *
         * @returns Returns the {@coed Query} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        beginGroup(): Query;
        /**
         * Creates a query condition group with a right bracket.
         *
         * <p>Multiple query conditions in an {@code Query} object can be grouped. The query conditions in a group can be used as a
         * whole to combine with other query conditions.
         *
         * @returns Returns the {@coed Query} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        endGroup(): Query;
        /**
         * Creates a query condition with a specified key prefix.
         *
         * @param {string} prefix - Indicates the specified key prefix.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        prefixKey(prefix: string): Query;
        /**
         * Sets a specified index that will be preferentially used for query.
         *
         * @param {string} index - Indicates the index to set.
         * @returns Returns the {@coed Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        setSuggestIndex(index: string): Query;
        /**
         * Add device ID key prefix.Used by {@code DeviceKVStore}.
         *
         * @param {string} deviceId - Specify device id to query from.
         * @return Returns the {@code Query} object with device ID prefix added.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        deviceId(deviceId:string):Query;
        /**
         * Get a String that repreaents this {@code Query}.
         *
         * <p>The String would be parsed to DB query format.
         * The String length should be no longer than 500kb.
         *
         * @return String representing this {@code Query}.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getSqlLike():string;
    }

    /**
     * Provides methods related to single-version distributed databases.
     *
     * <p>To create a {@code SingleKVStore} database,
     * you can use the {@link data.distributed.common.KVManager#getKVStore​(Options, String)} method
     * with {@code KVStoreType} set to {@code SINGLE_VERSION} for the input parameter {@code Options}.
     * This database synchronizes data to other databases in time sequence.
     * The {@code SingleKVStore} database does not support
     * synchronous transactions, or data search using snapshots.
     *
     * @import N/A
     * @version 1
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    interface SingleKVStore {
        /**
         * Writes a key-value pair of the string type into the {@code SingleKVStore} database.
         *
         * <p>If you do not want to synchronize this key-value pair to other devices, set the write option in the local database.
         *
         * @param {string} key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
         * Spaces before and after the key will be cleared.
         * @param {Uint8Array|string|number|boolean} value - Indicates the value to be inserted.
         * @param {AsyncCallback<void>} callback - the callback of put.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        put(key: string, value: Uint8Array | string | number | boolean, callback: AsyncCallback<void>): void;

        /**
         * Writes a key-value pair of the string type into the {@code SingleKVStore} database.
         *
         * <p>If you do not want to synchronize this key-value pair to other devices, set the write option in the local database.
         *
         * @param {string} key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
         * Spaces before and after the key will be cleared.
         * @param {Uint8Array|string|number|boolean} value - Indicates the value to be inserted.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        put(key: string, value: Uint8Array | string | number | boolean): Promise<void>;

        /**
         * Inserts key-value pairs into the {@code SingleKVStore} database in batches.
         *
         * @param {Entry[]} entries - Indicates the key-value pairs to be inserted in batches.
         * @param {AsyncCallback<void>} callback - the callback of putBatch.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        putBatch(entries: Entry[], callback: AsyncCallback<void>): void;

        /**
         * Inserts key-value pairs into the {@code SingleKVStore} database in batches.
         *
         * @param {Entry[]} entries - Indicates the key-value pairs to be inserted in batches.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        putBatch(entries: Entry[]): Promise<void>;

        /**
         * Writes a value of the ValuesBucket type into the {@code SingleKVStore} database.
         *
         * @param {Array<ValuesBucket>} value - Indicates the ValuesBucket array to be inserted.
         * @param {AsyncCallback<void>} callback - the callback of putBatch.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @systemapi
         * @since 9
         */
        putBatch(value: Array<ValuesBucket>, callback: AsyncCallback<void>): void;

        /**
         * Writes a value of the ValuesBucket type into the {@code SingleKVStore} database.
         *
         * @param {Array<ValuesBucket>} value - Indicates the ValuesBucket array to be inserted.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @systemapi
         * @since 9
         */
        putBatch(value: Array<ValuesBucket>): Promise<void>;

        /**
         * Deletes the key-value pair based on a specified key.
         *
         * @param {string} key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
         * Spaces before and after the key will be cleared.
         * @param {AsyncCallback<void>} callback - the callback of delete.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the data not exist when delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        delete(key: string, callback: AsyncCallback<void>): void;

        /**
         * Deletes the key-value pair based on a specified key.
         *
         * @param {string} key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
         * Spaces before and after the key will be cleared.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the data not exist when delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        delete(key: string): Promise<void>;

        /**
         * Deletes the key-value pairs based on the dataSharePredicates.
         *
         * @param {dataSharePredicates.DataSharePredicates} predicates - Indicates the dataSharePredicates.
         * @param {AsyncCallback<void>} callback - the callback of delete.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the data not exist when delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
         * @systemapi
         * @since 9
         */
        delete(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<void>);

        /**
         * Deletes the key-value pairs based on the dataSharePredicates.
         *
         * @param {dataSharePredicates.DataSharePredicates} predicates - Indicates the dataSharePredicates.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the data not exist when delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
         * @systemapi
         * @since 9
         */
        delete(predicates: dataSharePredicates.DataSharePredicates): Promise<void>;

        /**
         * Deletes key-value pairs in batches from the {@code SingleKVStore} database.
         *
         * @param {string[]} keys - Indicates the key-value pairs to be deleted in batches.
         * @param {AsyncCallback<void>} callback - the callback of deleteBatch.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the data not exist when delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        deleteBatch(keys: string[], callback: AsyncCallback<void>): void;

        /**
         * Deletes key-value pairs in batches from the {@code SingleKVStore} database.
         *
         * @param {string[]} keys - Indicates the key-value pairs to be deleted in batches.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the data not exist when delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        deleteBatch(keys: string[]): Promise<void>;

        /**
         * Removes data of a specified device from the current database. This method is used to remove only the data
         * synchronized from remote devices. This operation does not synchronize data to other databases or affect
         * subsequent data synchronization.
         *
         * @param {string} deviceId - Identifies the device whose data is to be removed. The value cannot be the current device ID.
         * @param {AsyncCallback<void>} callback - the callback of removeDeviceData.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void;

        /**
         * Removes data of a specified device from the current database. This method is used to remove only the data
         * synchronized from remote devices. This operation does not synchronize data to other databases or affect
         * subsequent data synchronization.
         *
         * @param {string} deviceId - Identifies the device whose data is to be removed. The value cannot be the current device ID.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        removeDeviceData(deviceId: string): Promise<void>;

        /**
         * Obtains the value of a specified key.
         *
         * @param {string} key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
         * @param {AsyncCallback<boolean|string|number|Uint8Array>} callback -
         * {Uint8Array|string|boolean|number}: the returned value specified by the key.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the data not exist when query data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        get(key: string, callback: AsyncCallback<boolean | string | number | Uint8Array>): void;

        /**
         * Obtains the value of a specified key.
         *
         * @param {string} key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
         * @returns {Promise<boolean|string|number|Uint8Array>}
         * {Uint8Array|string|boolean|number}: the returned value specified by the key.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the data not exist when query data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        get(key: string): Promise<boolean | string | number | Uint8Array>;

        /**
         * Obtains all key-value pairs that match a specified key prefix.
         *
         * @param {string} keyPrefix - Indicates the key prefix to match.
         \* @param {AsyncCallback<Entry[]>} callback - {Entry[]}: the list of all key-value pairs
         * that match the specified key prefix.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void;

        /**
         * Obtains all key-value pairs that match a specified key prefix.
         *
         * @param {string} keyPrefix - Indicates the key prefix to match.
         * @returns {Promise<Entry[]>} {Entry[]}: the list of all key-value pairs that match the
         * specified key prefix.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getEntries(keyPrefix: string): Promise<Entry[]>;

        /**
         * Obtains the list of key-value pairs matching the specified {@code Query} object.
         *
         * @param {Query} query - Indicates the {@code Query} object.
         * @param {AsyncCallback<Entry[]>} callback - {Entry[]}: the list of all key-value pairs
         * matching the specified {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getEntries(query: Query, callback: AsyncCallback<Entry[]>): void;

        /**
         * Obtains the list of key-value pairs matching the specified {@code Query} object.
         *
         * @param {Query} query - Indicates the {@code Query} object.
         * @returns {Promise<Entry[]>} {Entry[]}: the list of all key-value pairs matching the
         * specified {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getEntries(query: Query): Promise<Entry[]>;

        /**
         * Obtains the result sets with a specified prefix from a {@code SingleKVStore} database. The {@code KVStoreResultSet}
         * object can be used to query all key-value pairs that meet the search criteria. Each {@code SingleKVStore}
         * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created
         * four objects, calling this method will return a failure. Therefore, you are advised to call the closeResultSet
         * method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
         *
         * @param {string} keyPrefix - Indicates the key prefix to match.
         * @param {AsyncCallback<KVStoreResultSet>} callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified keyPrefix.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getResultSet(keyPrefix: string, callback: AsyncCallback<KVStoreResultSet>): void;

        /**
         * Obtains the result sets with a specified prefix from a {@code SingleKVStore} database. The {@code KVStoreResultSet}
         * object can be used to query all key-value pairs that meet the search criteria. Each {@code SingleKVStore}
         * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created
         * four objects, calling this method will return a failure. Therefore, you are advised to call the closeResultSet
         * method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
         *
         * @param {string} keyPrefix - Indicates the key prefix to match.
         * @returns {Promise<KVStoreResultSet>} {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified keyPrefix.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getResultSet(keyPrefix: string): Promise<KVStoreResultSet>;

        /**
         * Obtains the {@code KVStoreResultSet} object matching the specified {@code Query} object.
         *
         * @param {Query} query - Indicates the {@code Query} object.
         * @param {AsyncCallback<KVStoreResultSet>} callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getResultSet(query: Query, callback: AsyncCallback<KVStoreResultSet>): void;

        /**
         * Obtains the {@code KVStoreResultSet} object matching the specified {@code Query} object.
         *
         * @param {Query} query - Indicates the {@code Query} object.
         * @returns {Promise<KVStoreResultSet>} {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getResultSet(query: Query): Promise<KVStoreResultSet>;

        /**
         * Obtains the KVStoreResultSet object matching the specified Predicate object.
         *
         * @param {dataSharePredicates.DataSharePredicates} predicates - Indicates the datasharePredicates.
         * @param {AsyncCallback<KVStoreResultSet>} callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified {@code dataSharePredicates.DataSharePredicates} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
         * @systemapi
         * @since 9
         */
        getResultSet(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KVStoreResultSet>): void;

        /**
         * Obtains the KVStoreResultSet object matching the specified Predicate object.
         *
         * @param {dataSharePredicates.DataSharePredicates} predicates - Indicates the datasharePredicates.
         * @returns {Promise<KVStoreResultSet>} {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified {@code dataSharePredicates.DataSharePredicates} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
         * @systemapi
         * @since 9
         */
        getResultSet(predicates: dataSharePredicates.DataSharePredicates): Promise<KVStoreResultSet>;

        /**
         * Closes a {@code KVStoreResultSet} object returned by getResultSet.
         *
         * @param {KVStoreResultSet} resultSet - Indicates the {@code KVStoreResultSet} object to close.
         * @param {AsyncCallback<void>} callback - the callback of closeResultSet.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>): void;

        /**
         * Closes a {@code KVStoreResultSet} object returned by getResultSet.
         *
         * @param {KVStoreResultSet} resultSet - Indicates the {@code KVStoreResultSet} object to close.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        closeResultSet(resultSet: KVStoreResultSet): Promise<void>;

        /**
         * Obtains the number of results matching the specified {@code Query} object.
         *
         * @param {Query} query - Indicates the {@code Query} object.
         * @param {AsyncCallback<number>} callback - {number}: the number of results matching the
         * specified {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getResultSize(query: Query, callback: AsyncCallback<number>): void;

        /**
         * Obtains the number of results matching the specified {@code Query} object.
         *
         * @param {Query} query - Indicates the {@code Query} object.
         * @returns {Promise<number>} {number}: the number of results matching the specified
         * {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getResultSize(query: Query): Promise<number>;

        /**
         * Backs up a database in a specified name.
         *
         * @param {string} file - Indicates the name that saves the database backup.
         * @param {AsyncCallback<void>} callback - the callback of backup.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        backup(file:string, callback: AsyncCallback<void>):void;

        /**
         * Backs up a database in a specified name.
         *
         * @param {string} file - Indicates the name that saves the database backup.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        backup(file:string): Promise<void>;

        /**
         * Restores a database from a specified database file.
         *
         * @param {string} file - Indicates the name that saves the database file.
         * @param {AsyncCallback<void>} callback - the callback of restore.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        restore(file:string, callback: AsyncCallback<void>):void;

        /**
         * Restores a database from a specified database file.
         *
         * @param {string} file - Indicates the name that saves the database file.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        restore(file:string): Promise<void>;

        /**
         * Delete a backup files based on a specified name.
         *
         * @param {Array<string>} files - Indicates the backup files to be deleted.
         * @param {AsyncCallback<Array<[string, number]>>} callback - {Array<[string, number]>}:
         * the list of backup file and it's corresponding delete result which 0 means delete success
         * and otherwise failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        deleteBackup(files:Array<string>, callback: AsyncCallback<Array<[string, number]>>):void;

        /**
         * Delete a backup files based on a specified name.
         *
         * @param {Array<string>} files - Indicates the backup files to be deleted.
         * @returns {Promise<Array<[string, number]>>} {Array<[string, number]>}: the list of backup
         * file and it's corresponding delete result which 0 means delete success and otherwise failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        deleteBackup(files:Array<string>): Promise<Array<[string, number]>>;

        /**
         * Starts a transaction operation in the {@code SingleKVStore} database.
         *
         * <p>After the database transaction is started, you can submit or roll back the operation.
         *
         * @param {AsyncCallback<void>} callback - the callback of startTransaction.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        startTransaction(callback: AsyncCallback<void>): void;

        /**
         * Starts a transaction operation in the {@code SingleKVStore} database.
         *
         * <p>After the database transaction is started, you can submit or roll back the operation.
         *
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        startTransaction(): Promise<void>;

        /**
         * Submits a transaction operation in the {@code SingleKVStore} database.
         *
         * @param {AsyncCallback<void>} callback - the callback of commit.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        commit(callback: AsyncCallback<void>): void;

        /**
         * Submits a transaction operation in the {@code SingleKVStore} database.
         *
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        commit(): Promise<void>;

        /**
         * Rolls back a transaction operation in the {@code SingleKVStore} database.
         *
         * @param {AsyncCallback<void>} callback - the callback of rollback.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        rollback(callback: AsyncCallback<void>): void;

        /**
         * Rolls back a transaction operation in the {@code SingleKVStore} database.
         *
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        rollback(): Promise<void>;

        /**
         * Sets whether to enable synchronization.
         *
         * @param {boolean} enabled - Specifies whether to enable synchronization. The value true
         * means to enable synchronization, and false means the opposite.
         * @param {AsyncCallback<void>} callback - the callback of enableSync.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        enableSync(enabled: boolean, callback: AsyncCallback<void>): void;

        /**
         * Sets whether to enable synchronization.
         *
         * @param {boolean} enabled - Specifies whether to enable synchronization. The value true
         * means to enable synchronization, and false means the opposite.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        enableSync(enabled: boolean): Promise<void>;

        /**
         * Sets synchronization range labels.
         *
         * <p>The labels determine the devices with which data will be synchronized.
         *
         * @param {string[]} localLabels - Indicates the synchronization labels of the local device.
         * @param  {string[]} remoteSupportLabels - Indicates the labels of the devices with which
         * data will be synchronized.
         * @param {AsyncCallback<void>} callback - the callback of setSyncRange.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        setSyncRange(localLabels: string[], remoteSupportLabels: string[], callback: AsyncCallback<void>): void;

        /**
         * Sets synchronization range labels.
         *
         * <p>The labels determine the devices with which data will be synchronized.
         *
         * @param {string[]} localLabels - Indicates the synchronization labels of the local device.
         * @param  {string[]} remoteSupportLabels - Indicates the labels of the devices with which
         * data will be synchronized.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        setSyncRange(localLabels: string[], remoteSupportLabels: string[]): Promise<void>;

        /**
         * Sets the default delay allowed for database synchronization
         *
         * @param {number} defaultAllowedDelayMs - Indicates the default delay allowed for the
         * database synchronization, in milliseconds.
         * @param {AsyncCallback<void>} callback - the callback of setSyncParam.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        setSyncParam(defaultAllowedDelayMs: number, callback: AsyncCallback<void>): void;

        /**
         * Sets the default delay allowed for database synchronization
         *
         * @param {number} defaultAllowedDelayMs - Indicates the default delay allowed for the
         * database synchronization, in milliseconds.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        setSyncParam(defaultAllowedDelayMs: number): Promise<void>;

        /**
         * Synchronizes the database to the specified devices with the specified delay allowed.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string[]} deviceIds - Indicates the list of devices to which to synchronize the database.
         * @param {SyncMode} mode - Indicates the synchronization mode. The value can be {@code PUSH},
         * {@code PULL}, or {@code PUSH_PULL}.
         * @param {number} delayMs - Indicates the delay allowed for the synchronization, in milliseconds.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the database not exist when sync data.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void

        /**
         * Synchronizes the database to the specified devices with the specified delay allowed.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string[]} deviceIds - Indicates the list of devices to which to synchronize the database.
         * @param {Query} query - Indicates the {@code Query} object.
         * @param {SyncMode} mode - Indicates the synchronization mode. The value can be {@code PUSH},
         * {@code PULL}, or {@code PUSH_PULL}.
         * @param {number} delayMs - Indicates the delay allowed for the synchronization, in milliseconds.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the database not exist when sync data.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        sync(deviceIds: string[], query: Query, mode: SyncMode, delayMs?: number): void;

        /**
         * Registers a {@code KVStoreObserver} for the database. When data in the distributed database changes, the callback in
         * {@code KVStoreObserver} will be invoked.
         *
         * @param {SubscribeType} type - Indicates the subscription type, which is defined in {@code SubscribeType}.
         * @param {Callback<ChangeNotification>} listener - {ChangeNotification}: the {@code ChangeNotification}
         * object indicates the data change events in the distributed database.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100001 - if the database has been subscribed over the max subscription time limit.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void;

        /**
         * Register Synchronizes SingleKVStore databases callback.
         * <p> Sync result is returned through asynchronous callback.
         *
         * @param {Callback<Array<[string, number]>>} syncCallback - {Array<[string, number]>}: the
         * deviceId and it's corresponding synchronization result which 0 means synchronization success
         * and otherwise failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

        /**
         * Unsubscribes from the SingleKVStore database based on the specified subscribeType and {@code KVStoreObserver}.
         *
         * @param {Callback<ChangeNotification>} listener - {ChangeNotification}: the {@code ChangeNotification}
         * object indicates the data change events in the distributed database.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        off(event:'dataChange', listener?: Callback<ChangeNotification>): void;

        /**
         * UnRegister Synchronizes SingleKVStore databases callback.
         *
         * @param {Callback<Array<[string, number]>>} syncCallback - {Array<[string, number]>}: the
         * deviceId and it's corresponding synchronization result which 0 means synchronization success
         * and otherwise failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void;

        /**
         * Get the security level of the database.
         *
         * @param {AsyncCallback<SecurityLevel>} callback - {SecurityLevel}: the {@code SecurityLevel}
         * object indicates the security level of the database.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getSecurityLevel(callback: AsyncCallback<SecurityLevel>): void;

        /**
         * Get the security level of the database.
         *
         * @returns {Promise<SecurityLevel>} {SecurityLevel}: the {@code SecurityLevel} object indicates
         * the security level of the database.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getSecurityLevel(): Promise<SecurityLevel>;
    }

    /**
     * Manages distributed data by device in a distributed system.
     *
     * <p>To create a {@code DeviceKVStore} database, you can use the {@link data.distributed.common.KVManager.getKVStore(Options, String)}
     * method with {@code KVStoreType} set to {@code DEVICE_COLLABORATION} for the input parameter Options. This database manages distributed
     * data by device, and cannot modify data synchronized from remote devices. When an application writes a key-value pair entry
     * into the database, the system automatically adds the ID of the device running the application to the key.
     *
     * @import N/A
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 9
     */
    interface DeviceKVStore extends SingleKVStore {
        /**
         * Obtains the {@code String} value matching a specified device ID and key.
         *
         * @param {string} deviceId - Indicates the device to be queried.
         * @param {string} key - Indicates the key of the value to be queried.
         * @param {AsyncCallback<boolean|string|number|Uint8Array>} callback -
         * {boolean|string|number|Uint8Array}: the returned value specified by the deviceId and key.
         * @return Returns the value matching the given criteria.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the data not exist when query data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        get(deviceId: string, key: string, callback: AsyncCallback<boolean | string | number | Uint8Array>): void;

        /**
         * Obtains the {@code String} value matching a specified device ID and key.
         *
         * @param {string} deviceId - Indicates the device to be queried.
         * @param {string} key - Indicates the key of the value to be queried.
         * @returns {Promise<boolean|string|number|Uint8Array>}
         * {Uint8Array|string|boolean|number}: the returned value specified by the deviceId and key.
         * @return Returns the value matching the given criteria.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the data not exist when query data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        get(deviceId: string, key: string): Promise<boolean | string | number | Uint8Array>;

        /**
         * Obtains all key-value pairs matching a specified device ID and key prefix.
         *
         * @param {string} deviceId - Identifies the device whose data is to be queried.
         * @param {string} keyPrefix - Indicates the key prefix to match.
         * @param {AsyncCallback<Entry[]>} callback - {Entry[]}: the list of all key-value pairs
         * that match the specified deviceId and key prefix.
         * @returns Returns the list of all key-value pairs meeting the given criteria.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        getEntries(deviceId: string, keyPrefix: string, callback: AsyncCallback<Entry[]>): void;

        /**
         * Obtains all key-value pairs matching a specified device ID and key prefix.
         *
         * @param {string} deviceId - Identifies the device whose data is to be queried.
         * @param {string} keyPrefix - Indicates the key prefix to match.
         * @returns {Promise<Entry[]>} {Entry[]}: the list of all key-value pairs that match the
         * specified deviceId and key prefix.
         * @returns Returns the list of all key-value pairs meeting the given criteria.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        getEntries(deviceId: string, keyPrefix: string): Promise<Entry[]>;

        /**
         * Obtains the list of key-value pairs matching a specified device ID and {@code Query} object.
         *
         * @param {string} deviceId - Indicates the ID of the device to which the key-value pairs belong.
         * @param {string} query - Indicates the {@code Query} object.
         * @param {AsyncCallback<Entry[]>} callback - {Entry[]}: the list of all key-value pairs
         * matching the specified deviceId and {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        getEntries(deviceId: string, query: Query, callback: AsyncCallback<Entry[]>): void;

        /**
         * Obtains the list of key-value pairs matching a specified device ID and {@code Query} object.
         *
         * @param {string} deviceId - Indicates the ID of the device to which the key-value pairs belong.
         * @param {string} query - Indicates the {@code Query} object.
         * @returns {Promise<Entry[]>} {Entry[]}: the list of all key-value pairs matching the
         * specified deviceId and {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        getEntries(deviceId: string, query: Query): Promise<Entry[]>;

        /**
         * Obtains the {@code KVStoreResultSet} object matching the specified device ID and key prefix.
         *
         * <p>The {@code KVStoreResultSet} object can be used to query all key-value pairs that meet the search criteria. Each {@code SingleKVStore}
         * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created four objects,
         * calling this method will return a failure. Therefore, you are advised to call the closeResultSet method to close unnecessary
         * {@code KVStoreResultSet} objects in a timely manner.
         *
         * @param {string} deviceId - Identifies the device whose data is to be queried.
         * @param {string} keyPrefix - Indicates the key prefix to match.
         * @param {AsyncCallback<KVStoreResultSet>} callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified deviceId and keyPrefix.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        getResultSet(deviceId: string, keyPrefix: string, callback: AsyncCallback<KVStoreResultSet>): void;

        /**
         * Obtains the {@code KVStoreResultSet} object matching the specified device ID and key prefix.
         *
         * <p>The {@code KVStoreResultSet} object can be used to query all key-value pairs that meet the search criteria. Each {@code SingleKVStore}
         * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created four objects,
         * calling this method will return a failure. Therefore, you are advised to call the closeResultSet method to close unnecessary
         * {@code KVStoreResultSet} objects in a timely manner.
         *
         * @param {string} deviceId - Identifies the device whose data is to be queried.
         * @param {string} keyPrefix - Indicates the key prefix to match.
         * @returns {Promise<KVStoreResultSet>} {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified deviceId and keyPrefix.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        getResultSet(deviceId: string, keyPrefix: string): Promise<KVStoreResultSet>;

        /**
         * Obtains the {@code KVStoreResultSet} object matching a specified device ID and {@code Query} object.
         *
         * @param {string} deviceId - Indicates the ID of the device to which the {@code KVStoreResultSet} object belongs.
         * @param {Query} query - Indicates the {@code Query} object.
         * @param {AsyncCallback<KVStoreResultSet>} callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified deviceId and {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        getResultSet(deviceId: string, query: Query, callback: AsyncCallback<KVStoreResultSet>): void;

        /**
         * Obtains the {@code KVStoreResultSet} object matching a specified device ID and {@code Query} object.
         *
         * @param {string} deviceId - Indicates the ID of the device to which the {@code KVStoreResultSet} object belongs.
         * @param {Query} query - Indicates the {@code Query} object.
         * @returns {Promise<KVStoreResultSet>} {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified deviceId and {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        getResultSet(deviceId: string, query: Query): Promise<KVStoreResultSet>;

        /**
         * Obtains the KVStoreResultSet object matching a specified Device ID and Predicate object.
         *
         * @param deviceId Indicates the ID of the device to which the results belong.
         * @param {dataSharePredicates.DataSharePredicates} predicates - Indicates the dataSharePredicates.
         * @param {AsyncCallback<KVStoreResultSet>} callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified deviceId and {@code dataSharePredicates.DataSharePredicates} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
         * @systemapi
         * @since 9
         */
        getResultSet(deviceId: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KVStoreResultSet>): void;

        /**
         * Obtains the KVStoreResultSet object matching a specified Device ID and Predicate object.
         *
         * @param deviceId Indicates the ID of the device to which the results belong.
         * @param {dataSharePredicates.DataSharePredicates} predicates - Indicates the dataSharePredicates.
         * @returns {Promise<KVStoreResultSet>} {KVStoreResultSet}: the {@code KVStoreResultSet}
         * object matching the specified deviceId and {@code dataSharePredicates.DataSharePredicates} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
         * @systemapi
         * @since 9
         */
        getResultSet(deviceId: string, predicates: dataSharePredicates.DataSharePredicates): Promise<KVStoreResultSet>;

        /**
         * Obtains the number of results matching a specified device ID and {@code Query} object.
         *
         * @param {string} deviceId - Indicates the ID of the device to which the results belong.
         * @param {Query} query - Indicates the {@code Query} object.
         * @param {AsyncCallback<number>} callback - {number}: the number of results matching the
         * specified deviceId and {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        getResultSize(deviceId: string, query: Query, callback: AsyncCallback<number>): void;

        /**
         * Obtains the number of results matching a specified device ID and {@code Query} object.
         *
         * @param {string} deviceId - Indicates the ID of the device to which the results belong.
         * @param {Query} query - Indicates the {@code Query} object.
         * @returns {Promise<number>} {number}: the number of results matching the specified
         * deviceId and {@code Query} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        getResultSize(deviceId: string, query: Query): Promise<number>;
    }

    /**
     * Creates a {@link KVManager} instance based on the configuration information.
     *
     * <p>You must pass {@link KVManagerConfig} to provide configuration information
     * for creating the {@link KVManager} instance.
     *
     * @param {KVManagerConfig} config - Indicates the KVStore configuration information,
     * including the user information and package name.
     * @param {AsyncCallback<KVManager>} callback - {KVManager}: the {@code KVManager} instance.
     * @throws {BusinessError} 401 - if parameter check failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    function createKVManager(config: KVManagerConfig, callback: AsyncCallback<KVManager>): void;

    /**
     * Creates a {@link KVManager} instance based on the configuration information.
     *
     * <p>You must pass {@link KVManagerConfig} to provide configuration information
     * for creating the {@link KVManager} instance.
     *
     * @param {KVManagerConfig} config - Indicates the KVStore configuration information,
     * including the user information and package name.
     * @returns {Promise<KVManager>} {KVManager}: the {@code KVManager} instance.
     * @throws {BusinessError} 401 - if parameter check failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    function createKVManager(config: KVManagerConfig): Promise<KVManager>;

    /**
     * Provides interfaces to manage a {@code SingleKVStore} database, including obtaining, closing, and deleting the {@code SingleKVStore}.
     *
     * @import N/A
     * @version 1
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    interface KVManager {
        /**
         * Creates and obtains a KVStore database by specifying {@code Options} and {@code storeId}.
         *
         * @param {string} storeId - Identifies the KVStore database. The value of this parameter must be unique
         * for the same application, and different applications can share the same value.
         * @param {Options} options - Indicates the {@code Options} object used for creating and
         * obtaining the KVStore database.
         * @param {AsyncCallback<T>} callback - {T}: the {@code SingleKVStore} or {@code DeviceKVStore} instance.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100002 - if open existed database with changed options.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>): void;

        /**
         * Creates and obtains a KVStore database by specifying {@code Options} and {@code storeId}.
         *
         * @param {string} storeId - Identifies the KVStore database. The value of this parameter must be unique
         * for the same application, and different applications can share the same value.
         * @param {Options} options - Indicates the {@code Options} object used for creating and
         * obtaining the KVStore database.
         * @returns {Promise<T>} {T}: the {@code SingleKVStore} or {@code DeviceKVStore} instance.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100002 - if open existed database with changed options.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getKVStore<T>(storeId: string, options: Options): Promise<T>;

        /**
         * Closes the KVStore database.
         *
         * <p>Warning: This method is not thread-safe. If you call this method to stop a KVStore database that is running, your
         * thread may crash.
         *
         * <p>The KVStore database to close must be an object created by using the {@code getKVStore} method. Before using this
         * method, release the resources created for the database, for example, {@code KVStoreResultSet} for KVStore, otherwise
         * closing the database will fail. If you are attempting to close a database that is already closed, an error will be returned.
         *
         * @param {string} appId - Identifies the application that the database belong to.
         * @param {string} storeId - Identifies the KVStore database to close.
         * @param {AsyncCallback<void>} callback - the callback of closeKVStore.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        closeKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void;

        /**
         * Closes the KVStore database.
         *
         * <p>Warning: This method is not thread-safe. If you call this method to stop a KVStore database that is running, your
         * thread may crash.
         *
         * <p>The KVStore database to close must be an object created by using the {@code getKVStore} method. Before using this
         * method, release the resources created for the database, for example, {@code KVStoreResultSet} for KVStore, otherwise
         * closing the database will fail. If you are attempting to close a database that is already closed, an error will be returned.
         *
         * @param {string} appId - Identifies the application that the database belong to.
         * @param {string} storeId - Identifies the KVStore database to close.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        closeKVStore(appId: string, storeId: string): Promise<void>;

        /**
         * Deletes the KVStore database identified by storeId.
         *
         * <p>Before using this method, close all KVStore instances in use that are identified by the same storeId.
         *
         * <p>You can use this method to delete a KVStore database not in use. After the database is deleted, all its data will be
         * lost.
         *
         * @param {string} appId - Identifies the application that the database belong to.
         * @param {string} storeId - Identifies the KVStore database to delete.
         * @param {AsyncCallback<void>} callback - the callback of deleteKVStore.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void;

        /**
         * Deletes the KVStore database identified by storeId.
         *
         * <p>Before using this method, close all KVStore instances in use that are identified by the same storeId.
         *
         * <p>You can use this method to delete a KVStore database not in use. After the database is deleted, all its data will be
         * lost.
         *
         * @param {string} appId - Identifies the application that the database belong to.
         * @param {string} storeId - Identifies the KVStore database to delete.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        deleteKVStore(appId: string, storeId: string): Promise<void>;

        /**
         * Obtains the storeId of all KVStore databases that are created by using the {@code getKVStore} method and not deleted by
         * calling the {@code deleteKVStore} method.
         *
         * @param {string} appId - Identifies the application that obtains the databases.
         * @param {AsyncCallback<string[]>} callback - {string[]}: the storeId of all created KVStore databases.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getAllKVStoreId(appId: string, callback: AsyncCallback<string[]>): void;

        /**
         * Obtains the storeId of all KVStore databases that are created by using the {@code getKVStore} method and not deleted by
         * calling the {@code deleteKVStore} method.
         *
         * @param {string} appId - Identifies the application that obtains the databases.
         * @returns {Promise<string[]>} {string[]}: the storeId of all created KVStore databases.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getAllKVStoreId(appId: string): Promise<string[]>;

        /**
         * register DeathCallback to get notification when service died.
         *
         * @param {Callback<void>} deathCallback - the service died callback.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @throws {BusinessError} 401 - if parameter check failed.
         * @since 9
         */
        on(event: 'distributedDataServiceDie', deathCallback: Callback<void>): void;

        /**
         * unRegister DeathCallback and can not receive service died notification.
         *
         * @param {Callback<void>} deathCallback - the service died callback which has been registered.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 9
         */
        off(event: 'distributedDataServiceDie', deathCallback?: Callback<void>): void;
    }
}

export default distributedKVStore;