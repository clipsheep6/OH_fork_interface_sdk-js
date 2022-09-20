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

import Ability from '../@ohos.application.Ability';

/**
 * Provide methods for matching monitored Ability objects that meet specified conditions.
 * The most recently matched Ability objects will be saved in the AbilityMonitor object.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @import import AbilityMonitor from 'application/abilityMonitor.d'
 * @permission N/A
 */
export interface AbilityMonitor {
    /**
     * The name of the ability to monitor.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    abilityName: string;

    /**
     * The name of the module to monitor.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    moduleName: string;

    /**
     * Called back when the ability is started for initialization.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    onAbilityCreate?:(ability: Ability) => void;

    /**
     * Called back when the state of the ability changes to foreground.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    onAbilityForeground?:(ability: Ability) => void;

    /**
     * Called back when the state of the ability changes to background.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    onAbilityBackground?:(ability: Ability) => void;

    /**
     * Called back before the ability is destroyed.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    onAbilityDestroy?:(ability: Ability) => void;

    /**
     * Called back when an ability window stage is created.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    onWindowStageCreate?:(ability: Ability) => void;

    /**
     * Called back when an ability window stage is restored.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    onWindowStageRestore?:(ability: Ability) => void;

    /**
     * Called back when an ability window stage is destroyed.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    onWindowStageDestroy?:(ability: Ability) => void;
}

export default AbilityMonitor;