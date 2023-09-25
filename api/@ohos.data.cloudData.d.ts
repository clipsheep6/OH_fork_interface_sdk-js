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

import { AsyncCallback } from './@ohos.base';

declare namespace cloudData {
  /**
   * Describes the clear action type.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 10
   */
  enum ClearAction {
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
   * Event ID indicates that data in the cloud has changed.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @since 11
   */
  const DATA_CHANGE_EVENT_ID = "cloud_data_change";

  /**
   * Extra data for data change notification.
   *
   * @interface ExtraData
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 11
   */
  interface ExtraData {
    /**
     * Event ID indicates that data in the cloud has changed.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    eventId: string;

    /**
     * Json string, contains the following optional fields.
     * {
     *   "accountId": "aaa",
     *   "bundleName": "com.bbb.xxx",
     *   "containerName": "alias",
     *   "databaseScopes": ["private", "shared"],
     *   "recordTypes": ["xxx", "yyy", "zzz"],
     *   "properties": {
     *     "key": "value"
     *   },
     *   "keyId": "",
     *   "signV3": ""
     * }
     * The accountId and bundleName are required among these.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    extraData: string;
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
     * Enables the cloud function.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing cloud account.
     * @param { { [bundleName:string]:boolean } } switches - Indicates switches information of all applications.
     * switches will overwrite the saved application switch information.If the specific application switch changes,
     * the {@link changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean)} method will notify the data manager service.
     * @param { AsyncCallback<void> } callback - the callback of enableCloud.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
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
     * Enables the cloud function.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing cloud account.
     * @param { { [bundleName:string]:boolean } } switches - Indicates switches information of all applications.
     * switches will overwrite the saved application switch information.If the specific application switch changes,
     * the {@link changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean)} method will notify the data manager service.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static enableCloud(accountId: string, switches: { [bundleName: string]: boolean }): Promise<void>;

    /**
     * Disables the cloud function.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing cloud account.
     * @param { AsyncCallback<void> } callback - the callback of disableCloud.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static disableCloud(accountId: string, callback: AsyncCallback<void>): void;

    /**
     * Disables the cloud function.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing cloud account.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static disableCloud(accountId: string): Promise<void>;

    /**
     * Changes the cloud switch of a single application.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing cloud account.
     * @param { string } bundleName -  Indicates the name of application.
     * @param { boolean } status - Indicates the condition of cloud sync switch.true means the switch is on,false means switch is off.
     * @param { AsyncCallback<void> } callback - the callback of changeAppCloudSwitch.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
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
     * Changes the cloud switch of a single application.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing cloud account.
     * @param { string } bundleName -  Indicates the name of application.
     * @param { boolean } status - Indicates the condition of cloud sync switch.true means the switch is on,false means switch is off.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean): Promise<void>;

    /**
     * Notifies changes of the cloud records
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing cloud account.
     * @param { string } bundleName - Indicates the name of application.
     * @param { AsyncCallback<void> } callback - the callback of notifyDataChange.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static notifyDataChange(accountId: string, bundleName: string, callback: AsyncCallback<void>): void;

    /**
     * Notifies changes of the cloud records
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing cloud account.
     * @param { string } bundleName - Indicates the name of application.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static notifyDataChange(accountId: string, bundleName: string): Promise<void>;

    /**
     * Notifies changes of the cloud records
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { ExtraData } extInfo - Extra data for notification {@link ExtraData}.
     * @param { AsyncCallback<void> } callback - the callback of notifyDataChange.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    static notifyDataChange(extInfo: ExtraData, callback: AsyncCallback<void>): void;

    /**
     * Notifies changes of the cloud records
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { ExtraData } extInfo - Extra data for notification {@link ExtraData}.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     *
     * @since 11
     */
    static notifyDataChange(extInfo: ExtraData): Promise<void>;

    /**
     * Deletes cloud information from local data.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing cloud account.
     * @param { { [bundleName: string]: ClearAction } } appActions - Indicates the way in which the application data is to be cleared.
     * @param { AsyncCallback<void> } callback - the callback of clear.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static clear(
      accountId: string,
      appActions: { [bundleName: string]: ClearAction },
      callback: AsyncCallback<void>
    ): void;

    /**
     * Deletes cloud information from local data.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID. The account ID is required by hashing the information of specific opened cloud.
     * @param { { [bundleName: string]: ClearAction } } appActions - Indicates the way in which the application data is to be cleared.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static clear(accountId: string, appActions: { [bundleName: string]: ClearAction }): Promise<void>;
  }

  /**
   * Privilege for shared record.
   *
   * @interface Privilege
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 11
   */
  export interface Privilege {
    /**
     * True means allow participants to write the shared record, otherwise not.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    writeable?: boolean;

    /**
     * True means allow participants to read the shared record, otherwise not.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    readable?: boolean;

    /**
     * True means allow participants to create new record, otherwise not.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    creatable?: boolean;

    /**
     * True means allow participants to delete the shared record, otherwise not.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    deletable?: boolean;

    /**
     * True means allow participants to share with others, otherwise not.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    shareable?: boolean;
  }

  /**
   * Participants in cloud sharing.
   *
   * @interface Participant
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 11
   */
  export interface Participant {
    /**
     * Accept the sharing invitation.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    readonly ACCEPTED: string;

    /**
     * Reject the sharing invitation.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    readonly REJECT: string;

    /**
     * Share invitations to be confirmed.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    readonly UNKNOWN: string;

    /**
     * The identity of participant.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    identity: string;

    /**
     * The confirmation status of the sharing invitation.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    status?: string;

    /**
     * Permission to share records.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    privilege?: Privilege;
  }

  /**
   * Provides methods to cloud sharing.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 11
   */
  class Sharing {
    /**
     * Share record with specified privilege to participants.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - The record uniform resource identifier.
     * @param { Array<Participant> } participants - Participants to be shared.
     * @param { AsyncCallback<Array<Participant>> } callback - The callback of share.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    static share(
      sharingRes: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Array<Participant>>
    ): void;

    /**
     * Share record with specified privilege to participants.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - The record uniform resource identifier.
     * @param { Array<Participant> } participants - Participants to be shared.
     * @Returns { Promise<Array<Participant>> } - the promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    static share(sharingRes: string, participants: Array<Participant>): Promise<Array<Participant>>;

    /**
     * Unshare with participants.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - The record uniform resource identifier.
     * @param { Array<Participant> } participants - Participants to be unshared.
     * @param { AsyncCallback<void> } callback - The callback of unshare.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    static unshare(sharingRes: string, participants: Array<Participant>, callback: AsyncCallback<void>): void;

    /**
     * Unshare with participants.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - The record uniform resource identifier.
     * @param { Array<Participant> } participants - Participants to be unshared.
     * @Returns { Promise<void> } - the promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    static unshare(sharingRes: string, participants: Array<Participant>): Promise<void>;

    /**
     * Change privilege for shared record.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - The record uniform resource identifier.
     * @param { Array<Participant> } participants - Participants to be changed privilege.
     * @param { AsyncCallback<Array<Participant>> } callback - The callback of changePrivilege.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported..0
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    static changePrivilege(
      sharingRes: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Array<Participant>>
    ): void;

    /**
     * Change privilege for shared record.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - The record uniform resource identifier.
     * @param { Array<Participant> } participants - Participants to be unshared.
     * @Returns { Promise<Array<Participant>> } - the promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    static changePrivilege(sharingRes: string, participants: Array<Participant>): Promise<Array<Participant>>;

    /**
     * Query the participants by specified shared record.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - The record uniform resource identifier.
     * @param { AsyncCallback<Array<Participant>> } callback - The callback of queryParticipants.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    static queryParticipants(sharingRes: string, callback: AsyncCallback<Array<Participant>>): void;

    /**
     * Query the participants by specified shared record.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - The record uniform resource identifier.
     * @Returns { Promise<Array<Participant>> } - the promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    static queryParticipants(sharingRes: string): Promise<Array<Participant>>;
  }
}

export default cloudData;
