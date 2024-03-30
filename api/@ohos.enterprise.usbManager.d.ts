/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * This module provides the capability to manage the usb of the enterprise devices.
 *
 * @namespace usbManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace usbManager {
  /**
   * Usb policy
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export enum UsbPolicy {
    /**
     * Policy read write
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    READ_WRITE = 0,

    /**
     * Policy read only
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    READ_ONLY = 1,

    /**
     * Policy disabled
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DISABLED = 2
  }

  /**
   * USB device ID.
   *
   * @typedef UsbDeviceId
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface UsbDeviceId {
    /**
     * The vendor ID of the USB device.
     *
     * @type { number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    vendorId: number;

    /**
     * The product ID of the USB device.
     *
     * @type { number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    productId: number;
  }

  /**
   * USB device Type.
   *
   * @typedef UsbDeviceType
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface UsbDeviceType {
    /**
     * The base class.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    baseClass: string;

    /**
     * The subClass.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    subClass: string;

    /**
     * The protocol.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    protocol: string;
  }

  /**
   * Set usb policy by {@link UsbPolicy}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { UsbPolicy } usbPolicy - usb policy code.
   * @param { AsyncCallback<void> } callback - the callback of setUsbPolicy.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setUsbPolicy(admin: Want, usbPolicy: UsbPolicy, callback: AsyncCallback<void>): void;

  /**
   * Set usb policy by {@link UsbPolicy}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { UsbPolicy } usbPolicy - usb policy code.
   * @returns { Promise<void> } the promise returned setUsbPolicy.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setUsbPolicy(admin: Want, usbPolicy: UsbPolicy): Promise<void>;

  /**
   * Disables USB.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disable - true if disable USB, otherwise false.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - a conflicting policy has been configured.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function disableUsb(admin: Want, disable: boolean): void;

  /**
   * Queries whether USB is disabled.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { boolean } true if USB is disabled, otherwise false.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function isUsbDisabled(admin: Want): boolean;

  /**
   * Adds the available USB device trust list by {@link UsbDeviceId} array.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<UsbDeviceId> } usbDeviceIds - an array of added USB device ids.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - a conflicting policy has been configured.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addAllowedUsbDevices(admin: Want, usbDeviceIds: Array<UsbDeviceId>): void;

  /**
   * Removes the available USB device trust list by {@link UsbDeviceId} array.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<UsbDeviceId> } usbDeviceIds - an array of removed USB device ids.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeAllowedUsbDevices(admin: Want, usbDeviceIds: Array<UsbDeviceId>): void;

  /**
   * Gets the available USB device trust list.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Array<UsbDeviceId> } an array of the available USB device trust list.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getAllowedUsbDevices(admin: Want): Array<UsbDeviceId>;

  /**
   * Sets USB storage device access policy by {@link UsbPolicy}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { UsbPolicy } usbPolicy - USB policy of storage device.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - a conflicting policy has been configured.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setUsbStorageDeviceAccessPolicy(admin: Want, usbPolicy: UsbPolicy): void;

  /**
   * Gets USB storage device access policy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { UsbPolicy } USB policy of storage device.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getUsbStorageDeviceAccessPolicy(admin: Want): UsbPolicy;

  /**
   * Adds disallowed USB devices by {@link UsbDeviceType} array.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<UsbDeviceType> } usbDevices - list of USB device types.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - a conflicting policy has been configured.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addDisallowedUsbDevices(admin: Want, usbDevices: Array<UsbDeviceType>): void;

  /**
   * Removes disallowed USB devices by {@link usbDeviceType}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<UsbDeviceType> } usbDevices - list of USB device types.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeDisallowedUsbDevices(admin: Want, usbDevices: Array<UsbDeviceType>): void;

  /**
   * Gets the available USB device trust list.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Array<UsbDeviceType> } USB device types that are disallowed.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getDisallowedUsbDevices(admin: Want): Array<UsbDeviceType>;
}

export default usbManager;
