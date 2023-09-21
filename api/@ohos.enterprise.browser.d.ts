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

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * This module provides the capability to manage the browser policies of the enterprise devices.
 *
 * @namespace browser
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 10
 */
declare namespace browser {
  /**
   * Allow the administrator to set the browser policies.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BROWSER_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } appId - id of the bundle that need to set policies.
   * @param { string } policies - browser policies that need to set.
   * @param { AsyncCallback<void> } callback - the callback of setPolicies.
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
  function setPolicies(admin: Want, appId: string, policies: string, callback: AsyncCallback<void>): void;

  /**
   * Allow the administrator to set the browser policies.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BROWSER_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } appId - id of the bundle that need to set policies.
   * @param { string } policies - browser policies that need to set.
   * @returns { Promise<void> } the promise returned by the setPolicies.
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
  function setPolicies(admin: Want, appId: string, policies: string): Promise<void>;

  /**
   * Allow the administrator to get the browser policies.
   * This function can be called by a super administrator.
   *
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } appId - id of the bundle that need to set policies.
   * @param { AsyncCallback<string> } callback - the callback carries the browser policies returned by the getPolicies.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getPolicies(admin: Want, appId: string, callback: AsyncCallback<string>): void;

  /**
   * Allow the administrator to get the browser policies.
   * This function can be called by a super administrator.
   *
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } appId - id of the bundle that need to set policies.
   * @returns { Promise<string> } the promise carries the browser policies returned by the getPolicies.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getPolicies(admin: Want, appId: string): Promise<string>;
}

export default browser;
