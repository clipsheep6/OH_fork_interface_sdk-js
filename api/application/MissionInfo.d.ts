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

import Want from "../@ohos.app.ability.Want";

/**
 * Mission information corresponding to ability.
 *
 * @interface MissionInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi hide for inner use.
 * @since 8
 */
export interface MissionInfo {
    /**
     * Indicates mission id.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi hide for inner use.
     * @since 8
     */
    missionId: number;

    /**
     * Indicates running state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi hide for inner use.
     * @since 8
     */
    runningState: number;

    /**
     * Indicates locked state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi hide for inner use.
     * @since 8
     */
    lockedState: boolean;

    /**
     * Indicates the recent created or updated time of the mission.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi hide for inner use.
     * @since 8
     */
    timestamp: string;

    /**
     * Indicates want of the mission.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi hide for inner use.
     * @since 8
     */
    want: Want;

    /**
     * Indicates label of the mission.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi hide for inner use.
     * @since 8
     */
    label: string;

    /**
     * Indicates icon path of the mission.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi hide for inner use.
     * @since 8
     */
    iconPath: string;

    /**
     * Indicates whether the mission is continuable.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @systemapi hide for inner use.
     * @since 8
     */
     continuable: boolean;
}