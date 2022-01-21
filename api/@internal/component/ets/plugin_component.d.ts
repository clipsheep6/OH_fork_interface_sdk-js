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
 * PluginComponentTemplate
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface PluginComponentTemplate {
  source: string;
  ability: string;
}

/**
 * Provides plugin component.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface PluginComponentInterface {
  /**
   * Called when setting the plugin.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value: { template: PluginComponentTemplate; data: any }): PluginComponentAttribute;
}

/**
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class PluginComponentAttribute extends CommonMethod<PluginComponentAttribute> {
  /**
   * Set pluginComponent size,
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  size(value: { width: number; height: number }): PluginComponentAttribute;

  /**
   * pluginComponent onComplete callback,
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onComplete(callback: () => void): PluginComponentAttribute;

  /**
   * pluginComponent onError callback,
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onError(callback: (info: { errcode: number; msg: string }) => void): PluginComponentAttribute;
}

declare const PluginComponent: PluginComponentInterface;
declare const PluginComponentInstance: PluginComponentAttribute;
