/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import AbilityConstant from "./@ohos.app.ability.AbilityConstant";
import AbilityContext from "./application/AbilityContext";
import rpc from './@ohos.rpc';
import Want from './@ohos.app.ability.Want';
import window from './@ohos.window';
import { Configuration } from './@ohos.app.ability.Configuration';

/**
 * The prototype of the listener function interface registered by the Caller.
 * @typedef OnReleaseCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 9
 */
export interface OnReleaseCallback {
    (msg: string): void;
}

/**
 * The prototype of the message listener function interface registered by the Callee.
 * @typedef CalleeCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 9
 */
export interface CalleeCallback {
    (indata: rpc.MessageParcel): rpc.Sequenceable;
}

/**
 * The interface of a Caller.
 * @interface
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 9
 */
export interface Caller {
    /**
     * Notify the server of Sequenceable type data.
     * @param { string } method - The notification event string listened to by the callee.
     * @param { rpc.Sequenceable } data - Notification data to the callee.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    call(method: string, data: rpc.Sequenceable): Promise<void>;

    /**
     * Notify the server of Sequenceable type data and return the notification result.
     * @param { string } method - The notification event string listened to by the callee.
     * @param { rpc.Sequenceable } data - Notification data to the callee.
     * @returns { Promise<rpc.MessageParcel> } Returns the callee's notification result data.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    callWithResult(method: string, data: rpc.Sequenceable): Promise<rpc.MessageParcel>;

    /**
     * Clear service records.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    release(): void;

    /**
     * Register death listener notification callback.
     * @param { OnReleaseCallback } callback - Register a callback function for listening for notifications.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onRelease(callback: OnReleaseCallback): void;

    /**
     * Register death listener notification callback.
     * @param { string } type - release.
     * @param { OnReleaseCallback } callback - Register a callback function for listening for notifications.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    on(type: "release", callback: OnReleaseCallback): void;

    /**
     * Unregister death listener notification callback.
     * @param { string } type - release.
     * @param { OnReleaseCallback } callback - Unregister a callback function for listening for notifications.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    off(type: "release", callback: OnReleaseCallback): void;

    /**
     * Unregister all death listener notification callback.
     * @param { string } type - release.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    off(type: "release"): void;
}

/**
 * The interface of a Callee.
 * @interface
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 9
 */
export interface Callee {
    /**
     * Register data listener callback.
     * @param { string } method - A string registered to listen for notification events.
     * @param { CalleeCallback } callback - Register a callback function that listens for notification events.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    on(method: string, callback: CalleeCallback): void;

    /**
     * Unregister data listener callback.
     * @param { string } method - A string registered to listen for notification events.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    off(method: string): void;
}

/**
 * The class of an ability.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 9
 */
export default class Ability {
    /**
     * Indicates configuration information about an ability context.
     * @type { AbilityContext }
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    context: AbilityContext;

    /**
     * Indicates ability launch want.
     * @type { Want }
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    launchWant: Want;

    /**
     * Indicates ability last request want.
     * @type { Want }
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    lastRequestWant: Want;

    /**
     * Call Service Stub Object.
     * @type { Callee }
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    callee: Callee;

    /**
     * Called back when an ability is started for initialization.
     * @param { Want } want - Indicates the want info of the created ability.
     * @param { AbilityConstant.LaunchParam } param - Indicates the launch param.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onCreate(want: Want, param: AbilityConstant.LaunchParam): void;

    /**
     * Called back when an ability window stage is created.
     * @param { window.WindowStage } windowStage - Indicates the created WindowStage.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onWindowStageCreate(windowStage: window.WindowStage): void;

    /**
     * Called back when an ability window stage is destroyed.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onWindowStageDestroy(): void;

    /**
     * Called back when an ability window stage is restored.
     * @param { window.WindowStage } windowStage - window stage to restore
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onWindowStageRestore(windowStage: window.WindowStage): void;

    /**
     * Called back before an ability is destroyed.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onDestroy(): void;

    /**
     * Called back when the state of an ability changes to foreground.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onForeground(): void;

    /**
     * Called back when the state of an ability changes to background.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onBackground(): void;

    /**
     * Called back when an ability prepares to continue.
     * @param { {[key: string]: any} } wantParam - Indicates the want parameter.
     * @returns { AbilityConstant.OnContinueResult } Return the result of onContinue.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onContinue(wantParam: { [key: string]: any }): AbilityConstant.OnContinueResult;

    /**
     * Called when the launch mode of an ability is set to singleton.
     * This happens when you re-launch an ability that has been at the top of the ability stack.
     * @param { Want } want - Indicates the want info of ability.
     * @param { AbilityConstant.LaunchParam } launchParams - Indicates the launch parameters.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onNewWant(want: Want, launchParams: AbilityConstant.LaunchParam): void;

    /**
     * Called when the system configuration is updated.
     * @param { Configuration } newConfig - Indicates the updated configuration.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onConfigurationUpdate(newConfig: Configuration): void;

    /**
     * Called when dump client information is required.
     * It is recommended that developers don't DUMP sensitive information.
     * @param { Array<string> } params - Indicates the params from command.
     * @returns { Array<string> } Return the dump info array.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onDump(params: Array<string>): Array<string>;

    /**
     * Called when the system has determined to trim the memory, for example, when the ability is running in the
     * background and there is no enough memory for running as many background processes as possible.
     * @param { AbilityConstant.MemoryLevel } level - Indicates the memory trim level, which shows the current memory
     *                                                usage status.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9
     */
    onMemoryLevel(level: AbilityConstant.MemoryLevel): void;
}
