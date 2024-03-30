/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

import type { AsyncCallback, Callback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * This module provides the capability to control the enterprise devices.
 *
 * @namespace deviceControl
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace deviceControl {
  /**
   * Allow the administrator to reset the enterprise devices.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_RESET_DEVICE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<void> } callback - the callback of resetFactory.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function resetFactory(admin: Want, callback: AsyncCallback<void>): void;

  /**
   * Allow the administrator to reset the enterprise devices.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_RESET_DEVICE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<void> } the promise returned by the resetFactory.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function resetFactory(admin: Want): Promise<void>;
  
  /**
   * Allows the administrator to shutdown the devices.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_REBOOT
   * @param { Want } admin - admin indicates the administrator ability information.
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
  function shutdown(admin: Want): void;

  /**
   * Allows the administrator to reboot the devices.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_REBOOT
   * @param { Want } admin - admin indicates the administrator ability information.
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
  function reboot(admin: Want): void;

  /**
   * Allows the administrator to lock screen.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_LOCK_DEVICE
   * @param { Want } admin - admin indicates the administrator ability information.
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
  function lockScreen(admin: Want): void;

  /**
   * Allows the administrator to operate device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_RESET_DEVICE or ohos.permission.ENTERPRISE_REBOOT or ohos.permission.ENTERPRISE_LOCK_DEVICE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } operate - the operation to perform.
   * @param { string } [addition] - addition indicates the specify additional parameters when performing the operation.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function operateDevice(admin: Want, operate: string, addition?: string): void;
}

export default deviceControl;
