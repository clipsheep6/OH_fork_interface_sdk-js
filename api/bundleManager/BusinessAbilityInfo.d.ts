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

import { ApplicationInfo } from './ApplicationInfo';
import businessRouter from './../@ohos.businessRouter';

  /**
   * Contains basic business ability information.
   * @typedef BusinessAbilityInfo
   * @syscap SystemCapability.BundleManager.BusinessRouterManager.Core
   * @systemapi
   * @since 10
   */
  export interface BusinessAbilityInfo {
    /**
     * Indicates the name of the bundle
     * @type {string}
     * @syscap SystemCapability.BundleManager.BusinessRouterManager.Core
     * @since 10
     */
    readonly bundleName: string;

    /**
     * Indicates the name of the module
     * @type {string}
     * @syscap SystemCapability.BundleManager.BusinessRouterManager.Core
     * @since 10
     */
    readonly moduleName: string;

    /**
     * Indicates the name of the service info
     * @type {string}
     * @syscap SystemCapability.BundleManager.BusinessRouterManager.Core
     * @since 10
     */
    readonly name: string;

    /**
     * Indicates the label id of the service info
     * @type {number}
     * @syscap SystemCapability.BundleManager.BusinessRouterManager.Core
     * @since 10
     */
    readonly labelId: number;

    /**
     * Indicates the description id of the service info
     * @type {number}
     * @syscap SystemCapability.BundleManager.BusinessRouterManager.Core
     * @since 10
     */
    readonly descriptionId: number;

    /**
     * Indicates the icon id of the service info
     * @type {number}
     * @syscap SystemCapability.BundleManager.BusinessRouterManager.Core
     * @since 10
     */
    readonly iconId: number;

    /**
     * Enumerates types of the service info
     * @type {businessRouter.BusinessType}
     * @syscap SystemCapability.BundleManager.BusinessRouterManager.Core
     * @since 10
     */
    readonly businessType: businessRouter.BusinessType;

    /**
     * Obtains configuration information about an application
     * @type {ApplicationInfo}
     * @syscap SystemCapability.BundleManager.BusinessRouterManager.Core
     * @since 10
     */
    readonly applicationInfo: ApplicationInfo;
  }