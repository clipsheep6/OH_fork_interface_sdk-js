/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import { HapModuleInfo } from '../bundleManager/HapModuleInfo';
import { Configuration } from '../@ohos.app.ability.Configuration';
import Context from './Context';
import { ExtensionAbilityInfo } from '../bundleManager/ExtensionAbilityInfo';

/**
 * The context of an extension. It allows access to extension-specific resources.
 *
 * @extends Context
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 9
 */
export default class ExtensionContext extends Context {
  /**
   * Indicates configuration information about an module.
   *
   * @type { HapModuleInfo }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  currentHapModuleInfo: HapModuleInfo;

  /**
   * Indicates configuration information.
   *
   * @type { Configuration }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  config: Configuration;

  /**
   * Extension information.
   *
   * @type { ExtensionAbilityInfo }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  extensionAbilityInfo: ExtensionAbilityInfo;
}
