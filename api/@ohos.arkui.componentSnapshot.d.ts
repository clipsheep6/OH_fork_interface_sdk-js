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

import { AsyncCallback } from './@ohos.basic';
import image from './@ohos.multimedia.image'

/**
 * This module allows developers to export snapshot image from a component or a custom builder.
 * @namespace componentSnapshot
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare namespace componentSnapshot {

  /**
   * Take a snapshot of the target component.
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - if parameter check fails.
   * @throws { BusinessError } 100001 - if id is not valid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  function get(id: string, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * Take a snapshot of the target component.
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @throws { BusinessError } 401 - if parameter check fails.
   * @throws { BusinessError } 100001 - if id is not valid.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  function get(id: string): Promise<image.PixelMap>;

  /**
   * Generate a snapshot from a custom component builder.
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - if parameter check fails.
   * @throws { BusinessError } 100001 - if builder is not a valid build function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  function createFromBuilder(builder: CustomBuilder, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * Generate a snapshot from a custom component builder.
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @throws { BusinessError } 401 - if parameter check fails.
   * @throws { BusinessError } 100001 - if builder is not a valid build function.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  function createFromBuilder(builder: CustomBuilder): Promise<image.PixelMap>;
}

export default componentSnapshot;
