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

import { AsyncCallback } from './basic';

declare namespace cloudData {
  /**
   * Describes the clear action type.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 10
   */
  enum Action {
    /**
     * Indicates clearing cloud-related data only, which includes cloud meta data and cloud-related local data.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    CLEAR_CLOUD_INFO,

    /**
     * Indicates clearing all cloud-related file data,which synchronized with the cloud.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    CLEAR_CLOUD_DATA_AND_INFO
  }

  /**
   * Provides methods to set CloudSync config.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 10
   */
  class Config {
    /**
     * opens the cloud sync function.
     *
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing the information of specific opened cloud.
     * @param { {[bundleName:string]:boolean} } switches - Indicates switches information of all applications.
     * switches will overwrite the saved application switch information.If the specific application switch changes,
     * the {@link changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean)} method will notify the data manager service.
     * @param { AsyncCallback<void> } callback - the callback of enableCloud.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static enableCloud(
      accountId: string,
      switches: { [bundleName: string]: boolean },
      callback: AsyncCallback<void>
    ): void;

    /**
     * opens the cloud sync function.
     *
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing the information of specific opened cloud.
     * @param { {[bundleName:string]:boolean} } switches - Indicates switches information of all applications.
     * switches will overwrite the saved application switch information.If the specific application switch changes,
     * the {@link changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean)} method will notify the data manager service.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static enableCloud(accountId: string, switches: { [bundleName: string]: boolean }): Promise<void>;

    /**
     * closes the cloud sync function.
     *
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing the information of specific opened cloud.
     * @param { AsyncCallback<void> } callback - the callback of disableCloud.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static disableCloud(accountId: string, callback: AsyncCallback<void>): void;

    /**
     * closes the cloud sync function.
     *
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing the information of specific opened cloud.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static disableCloud(accountId: string): Promise<void>;

    /**
     * Changes the cloud sync switch of a single application.
     *
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing the information of specific opened cloud.
     * @param { string } bundleName -  Indicates the name of application.
     * @param { boolean } status - Indicates the condition of cloud sync switch.true means the switch is on,false means switch is off.
     * @param { AsyncCallback<void> } callback - the callback of changeAppCloudSwitch.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static changeAppCloudSwitch(
      accountId: string,
      bundleName: string,
      status: boolean,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Changes the cloud sync switch of a single application.
     *
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing the information of specific opened cloud.
     * @param { string } bundleName -  Indicates the name of application.
     * @param { boolean } status - Indicates the condition of cloud sync switch.true means the switch is on,false means switch is off.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean): Promise<void>;

    /**
     * deletes cloud information from local data.
     *
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing the information of specific opened cloud.
     * @param { {[bundleName: string]: Action} } appActions - Indicates information about the application data need to clear in which way.
     * @param { AsyncCallback<void> } callback - the callback of clean.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static clean(accountId: string, appActions: { [bundleName: string]: Action }, callback: AsyncCallback<void>): void;

    /**
     * deletes cloud information from local data.
     *
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing the information of specific opened cloud.
     * @param { {[bundleName: string]: Action} } appActions - Indicates information about the application data need to clear in which way.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static clean(accountId: string, appActions: { [bundleName: string]: Action }): Promise<void>;

    /**
     * notifies changes of the cloud records
     *
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing the information of specific opened cloud.
     * @param { string } bundleName - Indicates the name of application.
     * @param { AsyncCallback<void> } callback - the callback of notifyDataChange.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 10
     */
    static notifyDataChange(accountId: string, bundleName: string, callback: AsyncCallback<void>): void;

    /**
     * notifies changes of the cloud records
     *
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing the information of specific opened cloud.
     * @param { string } bundleName - Indicates the name of application.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 10
     */
    static notifyDataChange(accountId: string, bundleName: string): Promise<void>;
  }
}
