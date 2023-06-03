/*
 * Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from "./basic";
import connection from "./@ohos.net.connection";

/**
 * Provides interfaces to manage network policy rules.
 * @namespace policy
 * @syscap SystemCapability.Communication.NetManager.Core
 * @since 10
 */
declare namespace policy {
  type NetBearType = connection.NetBearType;

  /**
   * Control if applications can use data on background.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { boolean } isAllowed Allow applications to use data on background.
   * @param { AsyncCallback<void> } callback Returns the setBackgroundAllowed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setBackgroundAllowed(isAllowed: boolean, callback: AsyncCallback<void>): void;
  
  /**
   * Control if applications can use data on background.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { boolean } isAllowed Allow applications to use data on background.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setBackgroundAllowed(isAllowed: boolean): Promise<void>;

  /**
   * Get the status if applications can use data on background.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<boolean> } callback Returns that it's allowed or not to use data on background.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function isBackgroundAllowed(callback: AsyncCallback<boolean>): void;

  /**
   * Get the status if applications can use data on background.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function isBackgroundAllowed(): Promise<boolean>;

  /**
   * Get the background network restriction policy for the specified uid.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid The specified UID of application.
   * @param { AsyncCallback<NetBackgroundPolicy> } callback Returns the getBackgroundPolicyByUid.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getBackgroundPolicyByUid(uid: number, callback: AsyncCallback<NetBackgroundPolicy>): void;

  /**
   * Get the background network restriction policy for the specified uid.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid The specified UID of application.
   * @returns { Promise<NetBackgroundPolicy> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getBackgroundPolicyByUid(uid: number): Promise<NetBackgroundPolicy>;

  /**
   * Set the policy for the specified UID.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid the specified UID of application.
   * @param { NetUidPolicy } policy the policy of the current UID of application.For details, see {@link NetUidPolicy}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @param { AsyncCallback<void> } callback Returns the setPolicyByUid.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setPolicyByUid(uid: number, policy: NetUidPolicy, callback: AsyncCallback<void>): void;

  /**
   * Set the policy for the specified UID.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid the specified UID of application.
   * @param { NetUidPolicy } policy the policy of the current UID of application.For details, see {@link NetUidPolicy}.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setPolicyByUid(uid: number, policy: NetUidPolicy): Promise<void>;

  /**
   * Query the policy of the specified UID.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid the specified UID of application.
   * @param { AsyncCallback<NetUidPolicy> } callback Returns the getPolicyByUid.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getPolicyByUid(uid: number, callback: AsyncCallback<NetUidPolicy>): void;

  /**
   * Query the policy of the specified UID.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid the specified UID of application.
   * @returns { Promise<NetUidPolicy> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getPolicyByUid(uid: number): Promise<NetUidPolicy>;

  /**
   * Query the application UIDs of the specified policy.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetUidPolicy } policy the policy of the current UID of application.For details, see {@link NetUidPolicy}.
   * @param { AsyncCallback<Array<number>> } callback Returns the getUidsByPolicy.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getUidsByPolicy(policy: NetUidPolicy, callback: AsyncCallback<Array<number>>): void;

  /**
   * Query the application UIDs of the specified policy.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetUidPolicy } policy the policy of the current UID of application.For details, see {@link NetUidPolicy}.
   * @returns { Promise<Array<number>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getUidsByPolicy(policy: NetUidPolicy): Promise<Array<number>>;

  /**
   * Get the status whether the specified uid app can access the metered network or non-metered network.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid The specified UID of application.
   * @param { boolean } isMetered Indicates metered network or non-metered network.
   * @param { AsyncCallback<boolean> } callback Returns the isUidNetAllowed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function isUidNetAllowed(uid: number, isMetered: boolean, callback: AsyncCallback<boolean>): void;

  /**
   * Get the status whether the specified uid app can access the metered network or non-metered network.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid The specified UID of application.
   * @param { boolean } isMetered Indicates metered network or non-metered network.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error. 
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function isUidNetAllowed(uid: number, isMetered: boolean): Promise<boolean>;

  /**
   * Get the status whether the specified uid app can access the specified iface network.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid The specified UID of application.
   * @param { string } iface Iface name.
   * @param { AsyncCallback<boolean> } callback Returns the isUidNetAllowed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function isUidNetAllowed(uid: number, iface: string, callback: AsyncCallback<boolean>): void;

  /**
   * Get the status whether the specified uid app can access the specified iface network.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid The specified UID of application.
   * @param { string } iface Iface name.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function isUidNetAllowed(uid: number, iface: string): Promise<boolean>;

  /**
   * Set network policies.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<NetQuotaPolicy> } quotaPolicies Indicates {@link NetQuotaPolicy}.
   * @param { AsyncCallback<void> } callback Returns the setNetQuotaPolicies.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setNetQuotaPolicies(quotaPolicies: Array<NetQuotaPolicy>, callback: AsyncCallback<void>): void;

  /**
   * Set network policies.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<NetQuotaPolicy> } quotaPolicies Indicates {@link NetQuotaPolicy}.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setNetQuotaPolicies(quotaPolicies: Array<NetQuotaPolicy>): Promise<void>;

  /**
   * Get network policies.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<NetQuotaPolicy>> } callback Returns the UIDs of the getNetQuotaPolicies.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getNetQuotaPolicies(callback: AsyncCallback<Array<NetQuotaPolicy>>): void;

  /**
   * Get network policies.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<NetQuotaPolicy>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getNetQuotaPolicies(): Promise<Array<NetQuotaPolicy>>;

  /**
   * Update the limit or warning remind time of quota policy.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetBearType } simId Specify the matched simId of quota policy when netType is cellular.
   * @param { string } netType {@link NetBearType}.
   * @param { RemindType } RemindType {@link RemindType}.
   * @param { AsyncCallback<void> } callback Returns the updateRemindPolicy.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function updateRemindPolicy(netType: NetBearType, simId: string, remindType: RemindType, callback: AsyncCallback<void>): void;

   /**
   * Update the limit or warning remind time of quota policy.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetBearType } simId Specify the matched simId of quota policy when netType is cellular.
   * @param { string } netType {@link NetBearType}.
   * @param { RemindType } RemindType {@link RemindType}.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function updateRemindPolicy(netType: NetBearType, simId: string, remindType: RemindType): Promise<void>;
  /**
   * Set the UID into device idle allow list.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<number> } uids The specified UID of application.
   * @param { boolean } isAllowed The UID is into allow list or not.
   * @param { AsyncCallback<void> } callback Returns the setDeviceIdleAllowList.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setDeviceIdleAllowList(uids: Array<number>, isAllowed: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set the UID into device idle allow list.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<number> } uids The specified UID of application.
   * @param { boolean } isAllowed The UID is into allow list or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setDeviceIdleAllowList(uids: Array<number>, isAllowed: boolean): Promise<void>;

  /**
   * Get the allow list of in device idle mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<number>> } callback Returns the list of UIDs.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getDeviceIdleAllowList(callback: AsyncCallback<Array<number>>): void;

  /**
   * Get the allow list of in device idle mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<number>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getDeviceIdleAllowList(): Promise<Array<number>>;

  /**
   * Set the UID into power save allow list.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<number> } uids The specified UID of application.
   * @param { boolean } isAllowed The UID is into allow list or not.
   * @param { AsyncCallback<void> } callback Returns the setPowerSaveAllowList.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setPowerSaveAllowList(uids: Array<number>, isAllowed: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set the UID into power save allow list.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<number> } uids The specified UID of application.
   * @param { boolean } isAllowed The UID is into allow list or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setPowerSaveAllowList(uids: Array<number>, isAllowed: boolean): Promise<void>;

  /**
   * Get the allow list in power save mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<number>> } callback Returns the list of UIDs.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getPowerSaveAllowList(callback: AsyncCallback<Array<number>>): void;

  /**
   * Get the allow list in power save mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<number>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getPowerSaveAllowList(): Promise<Array<number>>;

  /**
   * Reset network policies\rules\quota policies\firewall rules.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { string } simId Specify the matched simId of quota policy.
   * @param { AsyncCallback<void> } callback Returns the resetPolicies.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function resetPolicies(simId: string, callback: AsyncCallback<void>): void;

  /**
   * Reset network policies\rules\quota policies\firewall rules.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { string } simId Specify the matched simId of quota policy.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function resetPolicies(simId: string): Promise<void>;

  /**
   * Reset the specified network management policy.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { string } simId Indicates the specified sim that is valid when netType is cellular.
   * @param { AsyncCallback<void> } callback Returns the restoreAllPolicies.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function restoreAllPolicies(simId: string, callback: AsyncCallback<void>): void;

  /**
   * Reset the specified network management policy.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { string } simId Indicates the specified sim that is valid when netType is cellular.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function restoreAllPolicies(simId: string): Promise<void>;

  /**
   * Register uid policy change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { "netUidPolicyChange" } type Indicates Event name.
   * @param { Callback<{ uid: number, policy: NetUidPolicy }> } callback Returns the on.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function on(type: "netUidPolicyChange", callback: Callback<{ uid: number, policy: NetUidPolicy }>): void;

  /**
   * Unregister uid policy change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { "netUidPolicyChange" } type Indicates Event name.
   * @param { Callback<{ uid: number, policy: NetUidPolicy }> } callback Returns the off.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function off(type: "netUidPolicyChange", callback?: Callback<{ uid: number, policy: NetUidPolicy }>): void;

  /**
   * Register uid rule change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { "netUidRuleChange" } type Indicates Event name.
   * @param { Callback<{ uid: number, rule: NetUidRule }> } callback Returns the on.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function on(type: "netUidRuleChange", callback: Callback<{ uid: number, rule: NetUidRule }>): void;

  /**
   * Unregister uid rule change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { "netUidRuleChange" } type Indicates Event name.
   * @param { Callback<{ uid: number, rule: NetUidRule }> } callback Returns the off.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function off(type: "netUidRuleChange", callback?: Callback<{ uid: number, rule: NetUidRule }>): void;

  /**
   * Register metered ifaces change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { "netMeteredIfacesChange" } type Indicates Event name.
   * @param { Callback<Array<string>> } callback Returns the on.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function on(type: "netMeteredIfacesChange", callback: Callback<Array<string>>): void;

  /**
   * Unregister metered ifaces change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { "netMeteredIfacesChange" } type Indicates Event name.
   * @param { Callback<Array<string>> } callback Returns the off.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function off(type: "netMeteredIfacesChange", callback?: Callback<Array<string>>): void;

  /**
   * Register quota policies change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { "netQuotaPolicyChange" } type Indicates Event name.
   * @param { Callback<Array<NetQuotaPolicy>> } callback Returns the on.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function on(type: "netQuotaPolicyChange", callback: Callback<Array<NetQuotaPolicy>>): void;

  /**
   * Unregister quota policies change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { "netQuotaPolicyChange" } type Indicates Event name.
   * @param { Callback<Array<NetQuotaPolicy>> } callback Returns the off.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function off(type: "netQuotaPolicyChange", callback?: Callback<Array<NetQuotaPolicy>>): void;

  /**
   * Register network background policy change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { "netBackgroundPolicyChange" } type Indicates Event name.
   * @param { Callback<boolean> } callback Returns the on. 
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function on(type: "netBackgroundPolicyChange", callback: Callback<boolean>): void;

  /**
   * Unregister network background policy change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { "netBackgroundPolicyChange" } type Indicates Event name.
   * @param { Callback<boolean> } callback Returns the off.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function off(type: "netBackgroundPolicyChange", callback?: Callback<boolean>): void;

  /**
   * Indicate whether the application can use metered networks in background.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export enum NetBackgroundPolicy {
    /**
     * Default value.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_BACKGROUND_POLICY_NONE = 0,

    /**
     * Apps can use metered networks on background.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_BACKGROUND_POLICY_ENABLE = 1,

    /**
     * Apps can't use metered networks on background.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_BACKGROUND_POLICY_DISABLE = 2,

    /**
     * Only apps in allow list can use metered networks on background.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_BACKGROUND_POLICY_ALLOW_LIST = 3,
  }

  /**
   * Policy for net quota, includes usage period, limit and warning actions.
   * @interface NetQuotaPolicy
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface NetQuotaPolicy {
    /**
     * identifies the type of network and sim card
     * @type {NetLogotype}
     * @since 10
     */
    networkIdentification: NetLogotype;

    /**
     * Net quota policy the content of the policy that needs to be set.
     * @type {string}
     * @since 10
     */
    quotaPolicy: QuotaPolicy;
  }

  export interface QuotaPolicy {
    
    /**
     * The period and the start time for quota policy, default: "M1".
     * @type {string}
     * @since 10
     */
    periodDuration: string;

    /**
     * The warning threshold of traffic, default:  DATA_USAGE_UNKNOWN.
     * @type {number}
     * @since 10
     */
    warningBytes: number;

    /**
     * The limit threshold of traffic, default: DATA_USAGE_UNKNOWN.
     * @type {number}
     * @since 10
     */
    limitBytes: number;

    /**
     * The updated wall time that last warning remind, default: REMIND_NEVER.
     * @type {number}
     * @since 10
     */
    lastWarningRemind: number;

    /**
     * The updated wall time that last limit remind, default: REMIND_NEVER.
     * @type {number}
     * @since 10
     */
    lastLimitRemind: number;

    /**
     * Is metered network or not.
     * @type {number}
     * @since 10
     */
    metered: boolean;

    /**
     * The action while the used bytes reach the limit, see {@link LimitAction}.
     * @type {number}
     * @since 10
     */
    limitAction: LimitAction;
  }

  export interface NetLogotype{
    /**
     * netType see {@link NetBearType}.
     * @type {NetBearType}
     * @since 10
     */
    netType: NetBearType;

    /**
     * The ID of the target card, valid when netType is BEARER_CELLULAR..
     * @type {string}
     * @since 10
     */
    simId: string;
    
    /**
     * To specify the identity of network, such as different WLAN.
     * @type {string}
     * @since 10
     */
    ident: string;
  }

  /**
   * The action when quota policy hit the limit.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export enum LimitAction {
    /**
     * Default action, do nothing.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    LIMIT_ACTION_NONE = -1,

    /**
     * Access is disabled, when quota policy hit the limit.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    LIMIT_ACTION_DISABLE = 0,

    /**
     * when the quota policy reaches the limit the user is automatically belled.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    LIMIT_ACTION_AUTO_BILL = 1,
  }

  /**
   * Rules whether an uid can access to a metered or non-metered network.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export enum NetUidRule {
    /**
     * Default uid rule.
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_RULE_NONE = 0,

    /**
     * Allow traffic on metered networks while app is foreground.
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_RULE_ALLOW_METERED_FOREGROUND = 1 << 0,

    /**
     * Allow traffic on metered network.
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_RULE_ALLOW_METERED = 1 << 1,

    /**
     * Reject traffic on metered network.
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_RULE_REJECT_METERED = 1 << 2,

    /**
     * Allow traffic on all network (metered or non-metered).
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_RULE_ALLOW_ALL = 1 << 5,

    /**
     * Reject traffic on all network.
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_RULE_REJECT_ALL = 1 << 6,
  }

  /**
   * Specify the remind type, see {@link updateRemindPolicy}.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export enum RemindType {
    /**
     * Warning remind.
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    REMIND_TYPE_WARNING = 1,

    /**
     * Limit remind.
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    REMIND_TYPE_LIMIT = 2,
  }

  /**
   * Network policy for uid.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export enum NetUidPolicy {
    /**
     * Default net policy.
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_POLICY_NONE = 0,

    /**
     * Reject on metered networks when app in background.
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_POLICY_ALLOW_METERED_BACKGROUND = 1 << 0,
    /**
     * Allow on metered networks when app in background.
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NET_POLICY_REJECT_METERED_BACKGROUND = 1 << 1,
  }
}

export default policy;