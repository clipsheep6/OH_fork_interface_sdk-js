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
 * The class of an process information.
 *
 * @typedef ProcessInformation
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9
 */
/**
 * The class of an process information.
 *
 * @typedef ProcessInformation
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform
 * @since 10
 */
export interface ProcessInformation {
  /**
   * @type { number }
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 9
   */
  /**
   * @type { number }
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 10
   */
  pid: number;

  /**
   * @type { number }
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  uid: number;

  /**
   * @type { string }
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 9
   */
  /**
   * @type { string }
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 10
   */
  processName: string;

  /**
   * @type { Array<string> }
   * @default an array of the bundleNames running in the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 9
   */
  /**
   * @type { Array<string> }
   * @default an array of the bundleNames running in the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 10
   */
  bundleNames: Array<string>;
}
