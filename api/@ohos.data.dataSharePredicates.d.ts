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

import { ValueType } from './@ohos.data.ValuesBucket';

declare namespace dataSharePredicates {
/**
 * Manages relational database configurations.
 *
 * @since 9
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @systemapi
 * @import import data_dataShare from '@ohos.data.dataShare';
 */
    class DataSharePredicates {
    /**
     * Configures the DataSharePredicates to match the field whose data type is ValueType and value is equal
     * to a specified value.
     *
     * @note This method is similar to = of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    equalTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the field whose data type is ValueType and value is unequal to
     * a specified value.
     *
     * @note This method is similar to != of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    notEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Adds a left parenthesis to the DataSharePredicates.
     *
     * @note This method is similar to ( of the SQL statement and needs to be used together with endWrap().
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @return Returns the DataSharePredicates with the left parenthesis.
     */
    beginWrap(): DataSharePredicates;

    /**
     * Adds a right parenthesis to the DataSharePredicates.
     *
     * @note This method is similar to ) of the SQL statement and needs to be used together
     * with beginWrap().
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @return Returns the DataSharePredicates with the right parenthesis.
     */
    endWrap(): DataSharePredicates;

    /**
     * Adds an or condition to the DataSharePredicates.
     *
     * @note This method is similar to or of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @return Returns the DataSharePredicates with the or condition.
     */
    or(): DataSharePredicates;

    /**
     * Adds an and condition to the DataSharePredicates.
     *
     * @note This method is similar to and of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @return Returns the DataSharePredicates with the and condition.
     */
    and(): DataSharePredicates;
    /**
     * Configures the DataSharePredicates to match the field whose data type is string and value
     * contains a specified value.
     *
     * @note This method is similar to contains of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    contains(field: string, value: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the field whose data type is string and value starts
     * with a specified string.
     *
     * @note This method is similar to value% of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    beginsWith(field: string, value: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the field whose data type is string and value
     * ends with a specified string.
     *
     * @note This method is similar to %value of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    endsWith(field: string, value: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the fields whose value is null.
     *
     * @note This method is similar to is null of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    isNull(field: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the specified fields whose value is not null.
     *
     * @note This method is similar to is not null of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    isNotNull(field: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the fields whose data type is string and value is
     * similar to a specified string.
     *
     * @note This method is similar to like of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates. The percent sign (%) in the value
     * is a wildcard (like * in a regular expression).
     * @return Returns the DataSharePredicates that match the specified field.
     */
    like(field: string, value: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the fields whose data type is string and value is
     * similar to a specified string.
     *
     * @note This method is similar to unlike of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates. The percent sign (%) in the value
     * is a wildcard (like * in a regular expression).
     * @return Returns the DataSharePredicates that match the specified field.
     */
     unlike(field: string, value: string): DataSharePredicates;

    /**
     * Configures DataSharePredicates to match the specified field whose data type is string and the value contains
     * a wildcard.
     *
     * @note Different from like, the input parameters of this method are case-sensitive.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with DataSharePredicates.
     * @return Returns the SQL statement with the specified DataSharePredicates.
     */
    glob(field: string, value: string): DataSharePredicates;

    /**
     * Restricts the value of the field to the range between low value and high value.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name.
     * @param low Indicates the minimum value.
     * @param high Indicates the maximum value.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    between(field: string, low: ValueType, high: ValueType): DataSharePredicates;

    /**
     * Configures DataSharePredicates to match the specified field whose data type is int and value is
     * out of a given range.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @param low Indicates the minimum value to match with DataSharePredicates.
     * @param high Indicates the maximum value to match with DataSharePredicates.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    notBetween(field: string, low: ValueType, high: ValueType): DataSharePredicates;

    /**
     * Restricts the value of the field to be greater than the specified value.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name.
     * @param value Indicates the String field.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    greaterThan(field: string, value: ValueType): DataSharePredicates;

    /**
     * Restricts the value of the field to be smaller than the specified value.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name.
     * @param value Indicates the String field.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    lessThan(field: string, value: ValueType): DataSharePredicates;

    /**
     * Restricts the value of the field to be greater than or equal to the specified value.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name.
     * @param value Indicates the String field.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    greaterThanOrEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Restricts the value of the field to be smaller than or equal to the specified value.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name.
     * @param value Indicates the String field.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    lessThanOrEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Restricts the ascending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name for sorting the return list.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    orderByAsc(field: string): DataSharePredicates;

    /**
     * Restricts the descending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name for sorting the return list.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    orderByDesc(field: string): DataSharePredicates;

    /**
     * Restricts each row of the query result to be unique.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    distinct(): DataSharePredicates;

    /**
     * Construct a query object to specify the number of results and the starting position.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param total Represents the specified number of results.
     * @param offset Indicates the starting position.
     * @return Returns the query object.
     */
    limit(total: number, offset: number): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} to group query results by specified columns.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param fields Indicates the specified columns by which query results are grouped.
     * @return Returns the DataSharePredicates with the specified columns by which query results are grouped.
     */
    groupBy(fields: Array<string>): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} to specify the index column.
     *
     * @note Before using this method, you need to create an index column.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the name of the index column.
     * @return Returns DataSharePredicates with the specified index column.
     */
    indexedBy(field: string): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} to match the specified field whose data type is ValueType array and values
     * are within a given range.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @param values Indicates the values to match with DataSharePredicates.
     * @return Returns DataSharePredicates that matches the specified field.
     */
    in(field: string, value: Array<ValueType>): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} to match the specified field whose data type is String array and values
     * are out of a given range.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param field Indicates the column name in the database table.
     * @param values Indicates the values to match with DataSharePredicates.
     * @return Returns DataSharePredicates that matches the specified field.
     */
    notIn(field: string, value: Array<ValueType>): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} Creates a query condition using the specified key prefix.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param prefix Represents the specified key prefix.
     * @return Returns the query object.
     */
    prefixKey(prefix: string): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} to match the specified value whose key is within a given range.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @param keys Represents the key names.
     * @return Returns the query object.
     */
    inKeys(keys: Array<string>): DataSharePredicates;
    }
}

export default dataSharePredicates;