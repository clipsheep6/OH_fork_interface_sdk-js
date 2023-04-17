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

/**
 * Indicates the provision info of the certificate
 * @typedef AppProvisionInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 10
 */
export interface AppProvisionInfo {
  /**
   * Indicates the version code of the signature provision file.
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly versionCode: number;

  /**
   * Indicates the version name of the signature provision file.
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly versionName: string;

  /**
   * Indicates the uuid of the signature provision file.
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly uuid: string;

  /**
   * Indicates the type of the signature provision file.
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly type: string;

  /**
   * Indicates the app distribution type of the signature provision file.
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly appDistributionType: string;

  /**
   * Indicates the validity of the signature provision file.
   * @type {Validity}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly validity: Validity;

  /**
   * Indicates the developer id of the signature provision file.
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly developerId: string;

  /**
   * Indicates the distribution or development certificate of the signature provision file.
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly certificate: string;

  /**
   * Indicates the apl of the signature provision file.
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly apl: string;

  /**
   * Indicates the issuer of the signature provision file.
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly issuer: string;
}

/**
* The validity of the signature provision file.
* @typedef Validity
* @syscap SystemCapability.BundleManager.BundleFramework.Core
* @since 10
*/
export interface Validity {
  /**
   * Indicates the earliest validity of the signature provision file.
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly notBefore: number;

  /**
   * Indicates the latest validity of the signature provision file.
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  readonly notAfter: number;
}
