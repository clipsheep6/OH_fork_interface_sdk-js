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

import { AsyncCallback } from "./@ohos.base";
import rpc from "./@ohos.rpc"

/**
 * This module provides the capability of manage external device.
 *
 * @namespace deviceManager
 * @syscap SystemCapability.Driver.DeviceManager.Extension
 * @since 10
 */
declare namespace deviceManager {
  /**
   * Query the external device list.
   *
   * @param { number } busType - The bus type of device to be queried.
   * @returns { Array<Readonly<Device>> } External device list.
   * @syscap SystemCapability.Driver.DeviceManager.Extension
   * @since 10
   */
  function queryDevices(busType?: number): Array<Readonly<Device>>;

  /**
   * Bind the device based on the device information returned by queryDevices().
   *
   * @param { number } deviceId - Device id on the device list returned by queryDevices().
   * @param { AsyncCallback } onDisconnect - Callback is invoked when device is disconnected after bind success.
   * @param { AsyncCallback } callback - Indicates the bind result including device ID and remote object.
   * @syscap SystemCapability.Driver.DeviceManager.Extension
   * @since 10
   */
  function bindDevice(deviceId: number, onDisconnect: AsyncCallback<number>,
    callback: AsyncCallback<{deviceId: number, remote: rpc.IRemoteObject}>): void;

  /**
   * Bind the device based on the device information returned by queryDevices().
   *
   * @param { number } deviceId - Device id on the device list returned by queryDevices().
   * @param { AsyncCallback } onDisconnect - Callback is invoked when device is disconnected after bind success.
   * @returns { Promise } Indicates the bind result including device ID and remote object.
   * @syscap SystemCapability.Driver.DeviceManager.Extension
   * @since 10
   */
  function bindDevice(deviceId: number, onDisconnect: AsyncCallback<number>):
    Promise<{deviceId: number, remote: rpc.IRemoteObject}>;

  /**
   * Unbind the device based on the device information returned by queryDevices().
   *
   * @param { number } deviceId - Device id on the device list returned by queryDevices().
   * @param { AsyncCallback } callback - Indicates the unbind result invoked when unbind is finished.
   * @syscap SystemCapability.Driver.DeviceManager.Extension
   * @since 10
   */
  function unbindDevice(deviceId: number, callback: AsyncCallback<number>): void;

  /**
   * Unbind the device based on the device information returned by queryDevices().
   *
   * @param { number } deviceId - Device id on the device list returned by queryDevices().
   * @returns { Promise } - Indicates the unbind result invoked when unbind is finished.
   * @syscap SystemCapability.Driver.DeviceManager.Extension
   * @since 10
   */
  function unbindDevice(deviceId: number): Promise<number>;

  /**
   * Enumerates bus type of device.
   *
   * @enum { number }
   * @syscap SystemCapability.Driver.DeviceManager.Extension
   * @since 10
   */
  export enum BusType {
    /**
     * USB device type
     *
     * @syscap SystemCapability.Driver.DeviceManager.Extension
     * @since 10
     */
    USB = 1,
  }

  /**
   * Represents a device.
   *
   * @typedef Device
   * @syscap SystemCapability.Driver.DeviceManager.Extension
   * @since 10
   */
  interface Device {
    /**
     * Bus type of the device.
     *
     * @syscap SystemCapability.Driver.DeviceManager.Extension
     * @since 10
     */
    busType: BusType;

    /**
     * Device ID.
     *
     * @syscap SystemCapability.Driver.DeviceManager.Extension
     * @since 10
     */
    deviceId: number;

    /**
     * Description of the device.
     *
     * @syscap SystemCapability.Driver.DeviceManager.Extension
     * @since 10
     */
    description: string;
  }

  /**
   * Represents a USB device.
   *
   * @typedef USBDevice
   * @syscap SystemCapability.Driver.DeviceManager.Extension
   * @since 10
   */
  interface USBDevice extends Device {
    /**
     * Vendor ID.
     *
     * @syscap SystemCapability.Driver.DeviceManager.Extension
     * @since 10
     */
    vendorId: number;

    /**
     * Product ID.
     *
     * @syscap SystemCapability.Driver.DeviceManager.Extension
     * @since 10
     */
    productId: number;
  }
}

export default deviceManager;
