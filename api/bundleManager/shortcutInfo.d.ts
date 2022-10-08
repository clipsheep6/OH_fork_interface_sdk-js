/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @name  Provides information about a shortcut, including the shortcut ID and label.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi Hide this for inner system use
 */
export interface ShortcutInfo {
  /**
   * @default Indicates the ID of the application to which this shortcut belongs
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly id: string;

  /**
   * @default Indicates the name of the bundle containing the shortcut
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly bundleName: string;

  /**
   * @default Indicates the moduleName of the shortcut
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly moduleName?: string;

  /**
   * @default Indicates the host ability of the shortcut
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly hostAbility: string;

  /**
   * @default Indicates the icon of the shortcut
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly icon: string;

  /**
   * @default Indicate s the icon id of the shortcut
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly iconId: number;

  /**
   * @default Indicates the label of the shortcut
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly label: string;

  /**
   * @default Indicates the label id of the shortcut
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly labelId: number;

  /**
   * @default Indicates the wants of the shortcut
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly wants: Array<ShortcutWant>;
}

/**
 * @name  Provides methods for obtaining information about the ability that a shortcut will start, including the target
 *        bundle name, target module name and ability class name.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi Hide this for inner system use
 */
export interface ShortcutWant{
  /**
   * @default Indicates the target bundle of the shortcut want
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly targetBundle: string;

  /**
   * @default Indicates the target module of the shortcut want
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly targetModule: string;

  /**
   * @default Indicates the target class of the shortcut want
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly targetClass: string;
}