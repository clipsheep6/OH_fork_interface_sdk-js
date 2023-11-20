/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import type { AutoFillType } from './AutoFillType';
import type ViewData from './ViewData';

/**
 * Fill request for automatic filling.
 *
 * @interface FillRequest
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @StageModelOnly
 * @since 11
 */
export interface FillRequest {
  /**
   * The auto fill type.
   *
   * @type { AutoFillType }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  type: AutoFillType;

  /**
   * The view data.
   *
   * @type { ViewData }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  viewData: ViewData;
}

/**
 * Save request for automatic filling.
 *
 * @interface SaveRequest
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @StageModelOnly
 * @since 11
 */
export interface SaveRequest {
  /**
   * The view data.
   *
   * @type { ViewData }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  viewData: ViewData;
}

/**
 * Fill response for automatic filling.
 *
 * @interface FillResponse
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @StageModelOnly
 * @since 11
 */
export interface FillResponse {
  /**
   * The view data.
   *
   * @type { ViewData }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  viewData: ViewData;
}

/**
 * Fill request callback for automatic filling.
 *
 * @interface FillRequestCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @StageModelOnly
 * @since 11
 */
export interface FillRequestCallback {
  /**
   * Notify the system that a fill request is successfully filled.
   *
   * @param { FillResponse } response - Indicates the fill response.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  onSuccess(response: FillResponse): void;

  /**
   * Notification system a fill request failed to be filled.
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  onFailure(): void;

  /**
   * Notification system that filling has been cancelled.
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  onCancel(): void;
}

/**
 * Save request callback for automatic filling.
 *
 * @interface SaveRequestCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @StageModelOnly
 * @since 11
 */
export interface SaveRequestCallback {
  /**
   * Notify the system that a save request is successfully handled.
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  onSuccess(): void;

  /**
   * Notify the system that a save request is failed to be handled.
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  onFailure(): void;
}