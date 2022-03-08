/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * Indicates the description of additional parameters for continuation.
 *
 * @name ContinuationExtraParams
 * @since 7
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
  */
export interface ContinuationExtraParams {

  /**
   * Indicates the type of devices to be matched.
   *
   * @default -
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   */
  devTypes?: Array<string>;

  /**
   * Indicates the bundle name of the target application where the ability will be hopped.
   *
   * @default -
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   */
  targetBundle?: string;

  /**
   * Indicates the description used for device filtering.
   *
   * @default -
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   */
  description?: string;

  /**
   * Indicates the custom JSON parameters to be used as filter conditions.
   *
   * @default -
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   */
  jsonParams?: string;
}