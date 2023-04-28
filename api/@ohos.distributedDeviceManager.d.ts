/*
 * Copyright (c) 2020-2023 Huawei Device Co., Ltd.
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
 * Provides interfaces to create a {@link deviceManager} instances.
 *
 * @since 10
 * @syscap SystemCapability.DistributedHardware.DeviceManager
 * 
 */
declare namespace deviceManager {
  
  /**
   * Basic description information of a distributed device.
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10
   */
  interface DeviceBasicInfo {
    /**
     * Device id.
     * @since 10
     */
    deviceId: string;

    /**
     * Device name.
     * @since 10
     */
    deviceName: string;

    /**
     * Device type.
     * @since 10
     */
    deviceType: number;

    /**
     * Device networkId.
     * @since 10
     */
    networkId?: string;
  }

  /**
   * Device status of the distributed device.
   * @since 10
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   */
  enum DeviceStatusChange {
    /**
     * Unknown status.
     * @since 10
     */
    UNKNOWN = 0,

    /**
     * Available status.
     * @since 10
     */
    AVAILABLE = 1,

    /**
     * Unavailable status.
     * @since 10
     */
    UNAVAILABLE = 2,
  }

  /**
   * Service publish info for device discover
   * @since 10
   * @systemapi This method can be used only by system applications.
   */
  interface PublishInfo {
    /**
     * Service publish ID, the value is in scope [0, 65535], should be unique for each publish process
     */
    publishId: number;

    /**
     * Discovery mode for service subscription.
     */
    mode: DiscoverMode;

    /**
     * Service subscription frequency.
     */
    freq: ExchangeFreq;

    /**
     *  Whether the device should be ranged by discoverer.
     */
    ranging: boolean;
  }

  /**
   * Device discover mode
   * @since 10
   * @systemapi This method can be used only by system applications.
   */
  enum DiscoverMode {
    /**
     * When using this key at client side, it means discovering for available nearby devices by 
     * calling @publishDeviceDiscovery function, while using this key at server side indicating that
     * a device publication or advertisement by calling @publishDeviceDiscovery.
     */
    DISCOVER_MODE_PASSIVE = 0x55,

    /**
     * When using this key at server side, it means discovering for available nearby devices by 
     * calling @publishDeviceDiscovery function, while using this key at client side indicating that
     * a device publication or advertisement by calling @publishDeviceDiscovery.
     */
    DISCOVER_MODE_ACTIVE = 0xAA
  }

  /**
   * Device discover frequence
   * @since 10
   * @systemapi This method can be used only by system applications.
   */
  enum ExchangeFreq {
    /**
     * Low
     */
    LOW = 0,

    /**
     * Medium
     */
    MID = 1,

    /**
     * High
     */
    HIGH = 2,

    /**
     * Super-high
     */
    SUPER_HIGH = 3
  }

  /**
   * Device bind parameter. Function input of the interface {@link bindDevice}.
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10
   */
  interface BindParam {
    /**
     * Bind type, 1 for pin code.
     * @since 10
     */
    bindType: number;

    /**
     * Extra information.
     * @since 10
     */
    extraInfo: { [key: string]: any };
  }

  /**
   * Device auth info.
   * @since 10
   * @systemapi This method can be used only by system applications
   */
  interface AuthInfo {
    /**
     * Authentication type, 1 for pin code.
     */
    authType: number;

    /**
     * The token used for this authentication.
     */
    token: number;

    /**
     * Authentication extra infos.
     */
    extraInfo: { [key: string]: any };
  }

  /**
   * Creates a {@code DeviceManager} instance.
   *
   * <p>To manage devices, you must first call this method to obtain a {@code DeviceManager} instance and then
   * use this instance to call other device management methods.
   *
   * @since 10
   * @param bundleName Indicates the bundle name of the application.
   * @param callback Indicates the callback to be invoked upon {@code DeviceManager} instance creation.
   * @throws {BusinessError} 401 - Input parameter error.
   */
  function createDeviceManager(bundleName: string, callback: AsyncCallback<DeviceManager>): void;

  /**
   * Provides methods for manage the distributed devices.
   */
  interface DeviceManager {
    /**
     * Releases the {@code DeviceManager} instance the methods are no longer used.
     *
     * @since 10
     * @throws {BusinessError} 401 - Input parameter error.
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     */
    releaseDeviceManager(): void;

    /**
     * Get a list of available devices.
     *
     * @since 10
     * @throws {BusinessError} 401 - Input parameter error.
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns a list of available devices.
     */
    getAvailableDeviceListSync(): Array<DeviceBasicInfo>;

    /**
     * Get a list of available devices.
     *
     * @since 10
     * @param callback Indicates the callback to be invoked upon getAvailableDeviceList
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns a list of available devices.
     */
    getAvailableDeviceList(callback: AsyncCallback<Array<DeviceBasicInfo>>): void;

    /**
     * Get a list of available devices.
     *
     * @since 10
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns a list of available devices.
     */
    getAvailableDeviceList(): Promise<Array<DeviceBasicInfo>>;

    /**
     * Get the networkId of the local device.
     *
     * @since 10
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns local device networkId.
     */
    getLocalDeviceNetworkIdSync(): string;

    /**
     * Get the networkId of the local device.
     *
     * @since 10
     * @param callback Indicates the callback to be invoked upon getLocalDeviceNetworkId
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns local device networkId.
     */
    getLocalDeviceNetworkId(callback: AsyncCallback<{networkId: string}>): void;

    /**
     * Get the networkId of the local device.
     *
     * @since 10
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns local device networkId.
     */
    getLocalDeviceNetworkId(): Promise<{networkId: string}>;

    /**
     * Get the device name of the local device.
     *
     * @since 10
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns local device name.
     */
    getLocalDeviceNameSync(): string;

    /**
     * Get the device name of the local device.
     *
     * @since 10
     * @param callback Indicates the callback to be invoked upon getLocalDeviceName
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns local device name.
     */
    getLocalDeviceName(callback: AsyncCallback<{deviceName: string}>): void;

    /**
     * Get the device name of the local device.
     *
     * @since 10
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns local device name.
     */
    getLocalDeviceName(): Promise<{deviceName: string}>;

    /**
     * Get the device type of the local device.
     *
     * @since 10
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns local device type.
     */
    getLocalDeviceTypeSync(): number;

    /**
     * Get the device type of the local device.
     *
     * @since 10
     * @param callback Indicates the callback to be invoked upon getLocalDeviceType
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns local device type.
     */
    getLocalDeviceType(callback: AsyncCallback<{deviceType: number}>): void;

    /**
     * Get the device type of the local device.
     *
     * @since 10
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns local device type.
     */
    getLocalDeviceType(): Promise<{deviceType: number}>;

    /**
     * Get the device name by networkId.
     *
     * @since 10
     * @param { string } networkId - device network id.
     * @param { AsyncCallback<{deviceName: string}> } callback - Indicates the callback to be invoked upon getDeviceName.
     * @throws { BusinessError } 401 - Input parameter error.
     * @returns Returns device name.
     */
    getDeviceName(networkId: string, callback: AsyncCallback<{deviceName: string}>): void;

    /**
     * Get the device name by networkId.
     *
     * @since 10
     * @param { string } networkId - device network id.
     * @throws { BusinessError } 401 - Input parameter error.
     * @returns Returns device name.
     */
    getDeviceName(networkId: string): Promise<{deviceName: string}>;

    /**
     * Get the device type by networkId.
     *
     * @since 10
     * @param { string } networkId - device network id.
     * @param { AsyncCallback<{deviceType: number}> } callback - Indicates the callback to be invoked upon getDeviceType.
     * @throws { BusinessError } 401 - Input parameter error.
     * @returns Returns device type.
     */
    getDeviceType(networkId: string, callback: AsyncCallback<{deviceType: number}>): void;

    /**
     * Get the device type by networkId.
     *
     * @since 10
     * @param { string } networkId - device network id.
     * @throws { BusinessError } 401 - Input parameter error.
     * @returns Returns device type.
     */
    getDeviceType(networkId: string): Promise<{deviceType: number}>;

    /**
     * Start to discover device.
     *
     * @since 10
     * @param subscribeId subscribe id to discovery device
     * @param filterOptions filterOptions to filter discovery device
     * @throws {BusinessError} 401 - Input parameter error.
     * @throws {BusinessError} 201 - Permission verify failed.
     * @throws {BusinessError} 11600104 - Discovery invalid.
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     */
    startDeviceDiscovery(subscribeId: number, filterOptions?: string): void;

    /**
     * Stop to discover device.
     *
     * @param subscribeId Service subscribe ID
     * @throws {BusinessError} 401 - Input parameter error.
     * @throws {BusinessError} 201 - Permission verify failed.
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     */
    stopDeviceDiscovery(subscribeId: number): void;

    /**
     * Bind the specified device.
     *
     * @since 10
     * @param deviceId id of device to bind
     * @param bindParam parameters of device to bind
     * @param callback Indicates the callback to be invoked upon bindDevice
     * @throws {BusinessError} 401 - Input parameter error.
     * @throws {BusinessError} 201 - Permission verify failed.
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @throws {BusinessError} 11600103 - Bind invalid.
     */
    bindDevice(deviceId: string, bindParam: BindParam, callback: AsyncCallback<{deviceId: string}>): void;

    /**
     * Unbind the specified device.
     *
     * @since 10
     * @param deviceId id of device to unbind
     * @throws {BusinessError} 401 - Input parameter error.
     * @throws {BusinessError} 201 - Permission verify failed.
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     */
    unbindDevice(deviceId: string): void;

    /**
     * Publish discover device.
     * @since 10
     * @param publishInfo publish info to Publish discovery device
     * @throws {BusinessError} 401 - Input parameter error.
     * @throws {BusinessError} 201 - Permission verify failed.
     * @throws {BusinessError} 11600105 - Publish invalid.
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @systemapi this method can be used only by system applications.
     */
    publishDeviceDiscovery(publishInfo: PublishInfo): void;

    /**
     * UnPublish discover device.
     * @since 10
     * @param publishId Service publish ID, identify a publish operation, should be a unique id in package range
     * @throws {BusinessError} 401 - Input parameter error.
     * @throws {BusinessError} 201 - Permission verify failed.
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @systemapi this method can be used only by system applications.
     */
    unPublishDeviceDiscovery(publishId: number): void;

    /**
     * verify auth info, such as pin code.
     *
     * @param authInfo device auth info o verify
     * @param callback Indicates the callback to be invoked upon verifyAuthInfo
     * @throws {BusinessError} 401 - Input parameter error.
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @systemapi this method can be used only by system applications.
     */
    verifyAuthInfo(authInfo: AuthInfo, callback: AsyncCallback<{ deviceId: string, level: number }>): void;

    /**
     * Set user Operation from devicemanager sea, this interface can only be used by devicemanager Sea.
     *
     * @since 10
     * @param operateAction User Operation Actions.
     * @param params Indicates the input param of the user.
     * @throws {BusinessError} 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    setUserOperation(operateAction: number, params: string): void;

    /**
     * Request credential information.
     *
     * @since 10
     * @param { string } requestInfo - Request credential params, the params is json string, it includes version and userId.
     * @param { AsyncCallback<{registerInfo: string}> } callback - Indicates the callback to be invoked upon requestCredential
     * @throws {BusinessError} 401 - Input parameter error.
     * @returns Returns device credential registerInfo, it include deviceId, devicePk, useId and version.
     * @systemapi this method can be used only by system applications.
     */
    requestCredentialRegisterInfo(requestInfo: string, callback: AsyncCallback<{ registerInfo: string }>): void;

    /**
     * Import credential information.
     *
     * @since 10
     * @param { string } credentialInfo - Import credential params, the params is json string, it includes processType, authType,
     * userId, deviceId, version, devicePk and credentialData, the credentialData is array, each array element
     * include credentialType, credentialId, serverPk, pkInfoSignature, pkInfo, authCode, peerDeviceId.
     * @param { AsyncCallback<{resultInfo: string}> } callback - Indicates the callback to be invoked upon importCredential.
     * @throws {BusinessError} 401 - Input parameter error.
     * @returns Returns the groupId to which the device belongs.
     * @systemapi this method can be used only by system applications.
     */
    importCredential(credentialInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void;

    /**
     * delete credential information.
     *
     * @since 10
     * @param { string } queryInfo - delete credential params. the params is json string, it includes processType, authType, userId.
     * @param { AsyncCallback<{resultInfo: string}> } callback - Indicates the callback to be invoked upon deleteCredential
     * @throws {BusinessError} 401 - Input parameter error.
     * @returns Returns the groupId to which the device belongs.
     * @systemapi this method can be used only by system applications.
     */
    deleteCredential(queryInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void;

    /**
     * Register a device status callback so that the application can be notified upon device status changes based on
     * the application bundle name.
     *
     * @since 10
     * @param callback Indicates the device status callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     */
    on(type: 'deviceStatusChange', callback: Callback<{ action: DeviceStatusChange, device: DeviceBasicInfo }>): void;

    /**
     * UnRegister device status callback based on the application bundle name.
     *
     * @since 10
     * @param callback Indicates the device status callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     */
    off(type: 'deviceStatusChange', callback?: Callback<{ action: DeviceStatusChange, device: DeviceBasicInfo }>): void;

    /**
     * Register a device discovery result callback so that the application can be notified when discovery success.
     *
     * @since 10
     * @param callback Indicates the device found callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     */
    on(type: 'discoverSuccess', callback: Callback<{ subscribeId: number, device: DeviceBasicInfo }>): void;

    /**
     * UnRegister the device discovery result callback.
     *
     * @since 10
     * @param callback Indicates the device found callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     */
    off(type: 'discoverSuccess', callback?: Callback<{ subscribeId: number, device: DeviceBasicInfo }>): void;

    /**
     * Register a device discovery result callback so that the application can be notified when discover failed.
     *
     * @since 10
     * @param callback Indicates the device found result callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     */
    on(type: 'discoverFail', callback: Callback<{ subscribeId: number, reason: number }>): void;

    /**
     * UnRegister the device discovery result callback.
     *
     * @since 10
     * @param callback Indicates the device found result callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     */
    off(type: 'discoverFail', callback?: Callback<{ subscribeId: number, reason: number }>): void;

    /**
     * Register a serviceError callback so that the application can be notified when devicemanager service died
     *
     * @since 10
     * @param callback Indicates the service error callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     */
    on(type: 'serviceDie', callback: () => void): void;

    /**
     * UnRegister the service error callback.
     *
     * @since 10
     * @param callback Indicates the service error callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     */
    off(type: 'serviceDie', callback?: () => void): void;

    /**
     * Register a callback from deviceManager service so that the devicemanager ui can be notified when ui statue
     * changes.
     *
     * @since 10
     * @param callback Indicates the devicemanager ui state to register.
     * @throws {BusinessError} 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    on(type: 'uiStateChange', callback: Callback<{ param: string }>): void;

    /**
      * Unregister uiStatueChange, this interface can only be used by devicemanager ui.
      *
      * @since 10
      * @param callback Indicates the devicemanager ui state to unregister.
      * @throws {BusinessError} 401 - Input parameter error.
      * @systemapi this method can be used only by system applications.
      */
    off(type: 'uiStateChange', callback?: Callback<{ param: string }>): void;

    /**
     * Register a device publish result callback so that the application can be notified when the device publish success
     *
     * @since 10
     * @param callback Indicates the device publish result callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    on(type: 'publishSuccess', callback: Callback<{ publishId: number }>): void;

    /**
     * UnRegister a device publish result callback so that the application can be notified when the device publish was failed
     *
     * @since 10
     * @param callback Indicates the device publish result callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    off(type: 'publishSuccess', callback?: Callback<{ publishId: number }>): void;

    /**
     * Register a device publish result callback so that the application can be notified when the device publish was failed
     *
     * @since 10
     * @param callback Indicates the device publish result callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    on(type: 'publishFail', callback: Callback<{ publishId: number, reason: number }>): void;

    /**
     * UnRegister a device publish result callback so that the application can be notified when the device publish was failed
     *
     * @since 10
     * @param callback Indicates the device publish result callback to register.
     * @throws {BusinessError} 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    off(type: 'publishFail', callback?: Callback<{ publishId: number, reason: number }>): void;
  }
}

export default deviceManager;
