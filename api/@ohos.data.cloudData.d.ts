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





declare namespace CloudData {
     /**
     * Provides methods to set CloudSync config.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 10
     */
     class CloudConfig {
         /**
         * opens the cloud sync function.
         * @param {string} accountId - Indicates the account ID. The account ID is requried by hashing the information of specific opened cloud.
         * @param {{[bundleName:string]:boolean}} status - Indicates switches information of all applications.
         * switches will overwrite the saved application switch information.If the specific application switch changes, 
         * the {@link changeAppSwitch(cloudId:string,bundle:string,switch:boolean)} method will notify the data manager service.
         * @param {AsyncCallback<void>} callback - the callback of enableCloud.
         * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
         * @since 10
         */
        enableCloud(accountId: string, switches: {[bundleName: string]: boolean}, callback: AsyncCallback<void>): void;

        /**
         * opens the cloud sync function.
         * @param {string} accountId - Indicates the account ID. The account ID is requried by hashing the information of specific opened cloud.
         * @param {{[bundleName:string]:boolean}} status - Indicates switches information of all applications.
         * switches will overwrite the saved application switch information.If the specific application switch changes, 
         * the {@link changeAppSwitch(accountId: string, bundleName: string, status: boolean)} method will notify the data manager service.
         * @returns {Promise<void>} the promise returned by the function.
         * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
         * @since 10
         */
        enableCloud(accountId: string, switches: {[bundleName: string]: boolean}): Promise<void>;

        /**
         * closes the cloud sync function.
         * @param {string} accountId - Indicates the account ID. The account ID is requried by hashing the information of specific opened cloud.
         * @param {AsyncCallback<void>} callback - the callback of disableCloud.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 10
         */
        disableCloud(accountId: string, callback: AsyncCallback<void>): void;

        /**
         * closes the cloud sync function.
         * @param {string} accountId - Indicates the account ID. The account ID is requried by hashing the information of specific opened cloud.
         * @returns {Promise<void>} the promise returned by the function.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 10
         */
        disableCloud(accountId: string): Promise<void>;

        /**
         * Changes the cloud sync switch of a single application.
         * @param {string} accountId - Indicates the account ID. The account ID is requried by hashing the information of specific opened cloud.
         * @param {string} bundleName -  Indicates the name of application.
         * @param {boolean} status - Indicates the condition of cloud sync switch.true means the switch is on,false means switch is off.
         * @param {AsyncCallback<void>} callback - the callback of changeAppSwitch.
         * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
         * @since 10
         */
        changeAppSwitch(accountId: string, bundleName: string, status :boolean, callback: AsyncCallback<void>): void;

        /**
         * Changes the cloud sync switch of a single application.
         * @param {string} accountId - Indicates the account ID. The account ID is requried by hashing the information of specific opened cloud.
         * @param {string} bundleName -  Indicates the name of application.
         * @param {boolean} status - Indicates the condition of cloud sync switch.true means the switch is on,false means switch is off.
         * @returns {Promise<void>} the promise returned by the function.
         * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
         * @since 10
         */
        changeAppSwitch(accountId: string, bundleName: string, status :boolean): Promise<void>;

        /**
         * deletes cloud information from local data.
         * @param {string} accountId - Indicates the account ID. The account ID is requried by hashing the information of specific opened cloud.
         * @param {{[bundleName: string]: Action}} appActions - Indicates information about the application data need to clear in which way.
         * bundleName is the name of application.
         * Action is the action of clearing data,which includes RETAIN_DATA and CLEAR_DATA.
         * RETAIN_DATA indicates clearing cloud-related data only, which includes cloud meta data and cloud-related lacal data.
         * CLEAR_DATA indicates clearing all cloud-related file data,which synchronized with the cloud.
         * @param {AsyncCallback<void>} callback - the callback of clean.
         * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
         * @since 10
         */
        clean(accountId: string, appActions: {[bundleName: string]: Action}, callback: AsyncCallback<void>): void;

        /**
         * deletes cloud information from local data.
         * @param {string} accountId - Indicates the account ID. The account ID is requried by hashing the information of specific opened cloud.
         * @param {{[bundleName: string]: Action}} - Indicates information about the application data need to clear in which way.
         * bundleName is the name of application.
         * Action is the action of clearing data,which includes RETAIN_DATA and CLEAR_DATA.
         * RETAIN_DATA indicates clearing cloud-related data only, which includes cloud meta data and cloud-related lacal data.
         * CLEAR_DATA indicates clearing all cloud-related file data,which synchronized with the cloud.
         * @returns {Promise<void>} the promise returned by the function.
         * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
         * @since 10
         */
        clean(accountId: string, appActions: {[bundleName: string]:Action}): Promise<void>;

        /**
         * notifies changes of the cloud records 
         * @param {string} accountId - Indicates the account ID. The account ID is requried by hashing the information of specific opened cloud.
         * @param {string} bundleName - Indicates the name of application.
         * @param {AsyncCallback<void>} callback - the callback of notifyDataChange.
         * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
         * @since 10
         */
        notifyDataChange(accountId: string, bundleName: string, callback: AsyncCallback<void>): void;

         /**
         * notifies changes of the cloud records 
         * @param {string} accountId - Indicates the account ID. The account ID is requried by hashing the information of specific opened cloud.
         * @param {string} bundleName - Indicates the name of application.
         * @returns {Promise<void>} the promise returned by the function.
         * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
         * @since 10
         */
         notifyDataChange(accountId: string, bundleName: string): Promise<void>;
     }
}
