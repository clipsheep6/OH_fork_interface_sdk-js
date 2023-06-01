/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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

/**
 * Obtains traffic statistics.
 * @namespace statistics
 * @syscap SystemCapability.Communication.NetManager.Core
 * @since 10
 */
declare namespace statistics {
  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC.
   * @param { string } nic Indicates the NIC name.
   * @param { AsyncCallback<number> } callback Returns the data traffic received through the specified NIC.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @throws { BusinessError } 2103012 - Get iface name failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getIfaceRxBytes(nic: string, callback: AsyncCallback<number>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC.
   * @param { string } nic Indicates the NIC name.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @throws { BusinessError } 2103012 - Get iface name failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getIfaceRxBytes(nic: string): Promise<number>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC.
   * @param { string } nic Indicates the NIC name.
   * @param { AsyncCallback<number> } callback Returns the data traffic sent through the specified NIC.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @throws { BusinessError } 2103012 - Get iface name failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getIfaceTxBytes(nic: string, callback: AsyncCallback<number>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC.
   * @param { string } nic Indicates the NIC name.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @throws { BusinessError } 2103012 - Get iface name failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getIfaceTxBytes(nic: string): Promise<number>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through the cellular network.
   * @param { AsyncCallback<number> } callback Returns the data traffic received through the cellular network.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @throws { BusinessError } 2103012 - Get iface name failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getCellularRxBytes(callback: AsyncCallback<number>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through the cellular network.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @throws { BusinessError } 2103012 - Get iface name failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getCellularRxBytes(): Promise<number>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network.
   * @param { AsyncCallback<number> } callback Returns the data traffic sent through the cellular network.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @throws { BusinessError } 2103012 - Get iface name failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getCellularTxBytes(callback: AsyncCallback<number>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @throws { BusinessError } 2103012 - Get iface name failed.
   * @returns { Promise<number> } The promise returned by the function.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getCellularTxBytes(): Promise<number>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through all NICs.
   * @param { AsyncCallback<number> } callback Returns the data traffic sent through all NICs.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getAllTxBytes(callback: AsyncCallback<number>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent through all NICs.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getAllTxBytes(): Promise<number>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through all NICs.
   * @param { AsyncCallback<number> } callback Returns the data traffic received through all NICs.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getAllRxBytes(callback: AsyncCallback<number>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through all NICs.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getAllRxBytes(): Promise<number>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received by a specified application.
   * This method applies only to system applications and your own applications.
   * @param { number } uid Indicates the process ID of the application.
   * @param { AsyncCallback<number> } callback Returns the data traffic received by the specified application.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getUidRxBytes(uid: number, callback: AsyncCallback<number>): void;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received by a specified application.
   * This method applies only to system applications and your own applications.
   * @param { number } uid Indicates the process ID of the application.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getUidRxBytes(uid: number): Promise<number>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent by a specified application.
   * This method applies only to system applications and your own applications.
   * @param { number } uid Indicates the process ID of the application.
   * @param { AsyncCallback<number> } callback Returns the data traffic sent by the specified application.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getUidTxBytes(uid: number, callback: AsyncCallback<number>): void;
  
  /**
   * Queries the data traffic (including all TCP and UDP data packets) sent by a specified application.
   * This method applies only to system applications and your own applications.
   * @param { number } uid Indicates the process ID of the application.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getUidTxBytes(uid: number): Promise<number>;

  /**
   * Register notifications of network traffic updates.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'netStatsChange' } type Indicates Event name.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function on(type: 'netStatsChange', callback: Callback<{ iface: string, uid?: number }>): void;

  /**
   * Unregister notifications of network traffic updates.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { 'netStatsChange' } type Indicates Event name.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function off(type: 'netStatsChange', callback?: Callback<{ iface: string, uid?: number }>): void;

  /**
   * Get the traffic usage details of the network interface in the specified time period.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { IfaceInfo } ifaceInfo Indicates the handle. See {@link IfaceInfo}.
   * @param { AsyncCallback<NetStatsInfo> } callback Returns the {@link NetStatsInfo} object;
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Read data from database failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getIfaceStats(ifaceInfo: IfaceInfo, callback: AsyncCallback<NetStatsInfo>): void;
  
  /**
   * Get the traffic usage details of the network interface in the specified time period.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { IfaceInfo } ifaceInfo Indicates the handle. See {@link IfaceInfo}.
   * @returns { Promise<NetStatsInfo> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Read data from database failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getIfaceStats(ifaceInfo: IfaceInfo): Promise<NetStatsInfo>;

  /**
   * Get the traffic usage details of the specified time period of the application.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { UidStatsInfo } uidStatsInfo Indicates the handle. See {@link UidStatsInfo}.
   * @param { AsyncCallback<NetStatsInfo> } callback Returns the {@link NetStatsInfo} object;
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Read data from database failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getIfaceUidStats(uidStatsInfo: UidStatsInfo, callback: AsyncCallback<NetStatsInfo>): void;
  
  /**
   * Get the traffic usage details of the specified time period of the application.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { UidStatsInfo } uidStatsInfo Indicates the handle. See {@link UidStatsInfo}.
   * @returns { Promise<NetStatsInfo> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103017 - Read data from database failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getIfaceUidStats(uidStatsInfo: UidStatsInfo): Promise<NetStatsInfo>;

  /**
   * query parameters for network interfaces.
   * @interface IfaceInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface IfaceInfo {
    /**
     * network interface.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    iface: string;

    /**
     * start Time.
     * @type {number}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    startTime: number;

    /**
     * end Time.
     * @type {number}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    endTime: number;
  }

  /**
   * query parameters for uid.
   * @interface UidStatsInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface UidStatsInfo {
    /**
     * See {@link IfaceInfo}
     * @type {IfaceInfo}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    ifaceInfo: IfaceInfo;

    /**
     * id of app.
     * @type {number}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    uid: number;
  }

  /**
   * detailed information of statistics.
   * @interface NetStatsInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface NetStatsInfo {
    /**
     * bytes of received.
     * @type {number}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    rxBytes: number;

    /**
     * bytes of send.
     * @type {number}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    txBytes: number;

    /**
     * packets of received.
     * @type {number}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    rxPackets: number;

    /**
     * packets of send.
     * @type {number}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    txPackets: number;
  }
}

export default statistics;