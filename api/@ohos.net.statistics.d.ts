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

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * Obtains traffic statistics.
 * @namespace statistics
 * @syscap SystemCapability.Communication.NetManager.Core
 * @since 10
 */
declare namespace statistics {
  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC.
   * @param { string } nic - Network interface card.
   * @param { AsyncCallback<number> } callback - Returns the data traffic received through the specified NIC.
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
   * @param { string } nic - Network interface card.
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
   * @param { string } nic - Network interface card.
   * @param { AsyncCallback<number> } callback - Returns the data traffic sent through the specified NIC.
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
   * @param { string } nic - Network interface card.
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
   * @param { AsyncCallback<number> } callback - Returns the data traffic received through the cellular network.
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
   * @param { AsyncCallback<number> } callback - Returns the data traffic sent through the cellular network.
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
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2103005 - Failed to read map.
   * @throws { BusinessError } 2103011 - Failed to create map.
   * @throws { BusinessError } 2103012 - Get iface name failed.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  function getCellularTxBytes(): Promise<number>;

  /**
   * Queries the data traffic (including all TCP and UDP data packets) received through all NICs.
   * @param { AsyncCallback<number> } callback - Returns the data traffic received through all NICs.
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
   * Queries the data traffic (including all TCP and UDP data packets) sent through all NICs.
   * @param { AsyncCallback<number> } callback - Returns the data traffic sent through all NICs.
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
   * Queries the data traffic (including all TCP and UDP data packets) received by a specified application.
   * @param { number } uid - Indicates the process ID of the application.
   * @param { AsyncCallback<number> } callback - Returns the data traffic received by the specified application.
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
   * @param { number } uid - Indicates the process ID of the application.
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
   * @param { number } uid - Indicates the process ID of the application.
   * @param { AsyncCallback<number> } callback - Returns the data traffic sent by the specified application.
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
   * @param { number } uid - Indicates the process ID of the application.
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
}

export default statistics;