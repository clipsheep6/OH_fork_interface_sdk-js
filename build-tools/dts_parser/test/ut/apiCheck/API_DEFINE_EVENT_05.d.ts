/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkUI
 */

/**
 * @typedef Configuration
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 12
 */
export interface Configuration {
  /**
   * The on and off event subscription methods do not appear in pair.
   * @permission ohos.permission.MANAGE_INTELLIGENT_VOICE
   * @param {'serviceChange'} type 
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @systemapi
   * @since 12
   */
    off(type: 'serviceChange'): void;
  }