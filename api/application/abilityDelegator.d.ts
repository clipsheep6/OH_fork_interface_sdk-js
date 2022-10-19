/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from '../basic';
import Ability from '../@ohos.app.ability.Ability';
import AbilityStage from '../@ohos.application.AbilityStage';
import { AbilityMonitor } from './abilityMonitor';
import { AbilityStageMonitor } from './abilityStageMonitor';
import Context from './Context';
import Want from "../@ohos.application.Want";
import { ShellCmdResult } from './shellCmdResult';

/**
 * A global test utility interface used for adding AbilityMonitor objects and control lifecycle states of abilities.
 * @interface
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9
 */
export interface AbilityDelegator {
    /**
     * Add an AbilityMonitor object for monitoring the lifecycle state changes of the specified ability.
     * @param { AbilityMonitor } monitor - AbilityMonitor object
     * @param { AsyncCallback<void> } callback - The callback of addAbilityMonitor.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    addAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void;

    /**
     * Add an AbilityMonitor object for monitoring the lifecycle state changes of the specified ability.
     * @param { AbilityMonitor } monitor - AbilityMonitor object
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    addAbilityMonitor(monitor: AbilityMonitor): Promise<void>;

    /**
     * Add an AbilityStageMonitor object for monitoring the lifecycle state changes of the specified abilityStage.
     * @param { AbilityStageMonitor } monitor - AbilityStageMonitor object.
     * @param { AsyncCallback<void> } callback - The callback of addAbilityStageMonitor.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    addAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void;

    /**
     * Add an AbilityStageMonitor object for monitoring the lifecycle state changes of the specified abilityStage.
     * @param { AbilityStageMonitor } monitor - AbilityStageMonitor object.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    addAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>;

    /**
     * Remove a specified AbilityMonitor object from the application memory.
     * @param { AbilityMonitor } monitor - AbilityMonitor object.
     * @param { AsyncCallback<void> } callback - The callback of removeAbilityMonitor.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    removeAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void;

    /**
     * Remove a specified AbilityMonitor object from the application memory.
     * @param { AbilityMonitor } monitor - AbilityMonitor object.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    removeAbilityMonitor(monitor: AbilityMonitor): Promise<void>;

    /**
     * Remove a specified AbilityStageMonitor object from the application memory.
     * @param { AbilityStageMonitor } monitor - AbilityStageMonitor object.
     * @param { AsyncCallback<void> } callback - The callback of removeAbilityStageMonitor.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    removeAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void;

    /**
     * Remove a specified AbilityStageMonitor object from the application memory.
     * @param { AbilityStageMonitor } monitor - AbilityStageMonitor object.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    removeAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>;

    /**
     * Wait for and returns the Ability object that matches the conditions set in the given AbilityMonitor.
     * @param { AbilityMonitor } monitor - AbilityMonitor object.
     * @param { AsyncCallback<Ability> } callback - The callback is used to return the Ability object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    waitAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<Ability>): void;

    /**
     * Wait for and returns the Ability object that matches the conditions set in the given AbilityMonitor.
     * @param { AbilityMonitor } monitor - AbilityMonitor object.
     * @param { number } timeout - Maximum wait time, in milliseconds.
     * @param { AsyncCallback<Ability> } callback - The callback is used to return the Ability object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    waitAbilityMonitor(monitor: AbilityMonitor, timeout: number, callback: AsyncCallback<Ability>): void;

    /**
     * Wait for and returns the Ability object that matches the conditions set in the given AbilityMonitor.
     * @param { AbilityMonitor } monitor - AbilityMonitor object.
     * @param { number } timeout - Maximum wait time, in milliseconds.
     * @returns { Promise<Ability> } Returns the Ability object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    waitAbilityMonitor(monitor: AbilityMonitor, timeout?: number): Promise<Ability>;

    /**
     * Wait for and returns the AbilityStage object that matches the conditions set in the given AbilityStageMonitor.
     * @param { AbilityStageMonitor } monitor - AbilityStageMonitor object.
     * @param { AsyncCallback<AbilityStage> } callback - The callback is used to return the AbilityStage object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    waitAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<AbilityStage>): void;

    /**
     * Wait for and returns the AbilityStage object that matches the conditions set in the given AbilityStageMonitor.
     * @param { AbilityStageMonitor } monitor - AbilityStageMonitor object.
     * @param { number } timeout - Maximum wait time, in milliseconds.
     * @param { AsyncCallback<AbilityStage> } callback - The callback is used to return the AbilityStage object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout: number, callback: AsyncCallback<AbilityStage>): void;

    /**
     * Wait for and returns the AbilityStage object that matches the conditions set in the given AbilityStageMonitor.
     * @param { AbilityStageMonitor } monitor - AbilityStageMonitor object.
     * @param { number } timeout - Maximum wait time, in milliseconds.
     * @returns { Promise<AbilityStage> } Returns the AbilityStage object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout?: number): Promise<AbilityStage>;

    /**
     * Obtain the application context.
     * @returns { Context } Returns the app Context.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    getAppContext(): Context;

    /**
     * Obtain the lifecycle state of a specified ability.
     * @param { Ability } ability - The Ability object.
     * @returns { number } Returns the state of the Ability object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    getAbilityState(ability: Ability): number;

    /**
     * Obtain the ability that is currently being displayed.
     * @param { AsyncCallback<Ability> } callback - The callback is used to return the Ability object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    getCurrentTopAbility(callback: AsyncCallback<Ability>): void;

    /**
     * Obtain the ability that is currently being displayed.
     * @returns { Promise<Ability> } Returns the Ability object.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    getCurrentTopAbility(): Promise<Ability>

    /**
     * Start a new ability.
     * @param { Want } want - Indicates the ability to start
     * @param { AsyncCallback<void> } callback - The callback of startAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    startAbility(want: Want, callback: AsyncCallback<void>): void;

    /**
     * Start a new ability.
     * @param { Want } want - Indicates the ability to start
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    startAbility(want: Want): Promise<void>;

    /**
     * Invoke the Ability.onForeground() callback of a specified ability without changing its lifecycle state.
     * @param { Ability } ability - The ability object.
     * @param { AsyncCallback<void> } callback - The callback of doAbilityForeground.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    doAbilityForeground(ability: Ability, callback: AsyncCallback<void>): void;

    /**
     * Invoke the Ability.onForeground() callback of a specified ability without changing its lifecycle state.
     * @param { Ability } ability - The ability object.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    doAbilityForeground(ability: Ability): Promise<void>;

    /**
     * Invoke the Ability.onBackground() callback of a specified ability without changing its lifecycle state.
     * @param { Ability } ability - The ability object.
     * @param { AsyncCallback<void> } callback - The callback of doAbilityBackground.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    doAbilityBackground(ability: Ability, callback: AsyncCallback<void>): void;

    /**
     * Invoke the Ability.onBackground() callback of a specified ability without changing its lifecycle state.
     * @param { Ability } ability - The ability object.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    doAbilityBackground(ability: Ability): Promise<void>;

    /**
     * Prints log information to the unit testing console.
     * The total length of the log information to be printed cannot exceed 1000 characters.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param msg Log information
     */
    print(msg: string, callback: AsyncCallback<void>): void;
    print(msg: string): Promise<void>;

    /**
     * Prints log information to the unit testing console.
     * The total length of the log information to be printed cannot exceed 1000 characters.
     * @param { string } msg - Log information.
     * @param { AsyncCallback<void> } callback - The callback of printMsg.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    printMsg(msg: string, callback: AsyncCallback<void>): void;

    /**
     * Prints log information to the unit testing console.
     * The total length of the log information to be printed cannot exceed 1000 characters.
     * @param { string } msg - Log information.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    printMsg(msg: string): Promise<void>;

    /**
     * Prints log information to the unit testing console.
     * The total length of the log information to be printed cannot exceed 1000 characters.
     * @param { string } msg - Log information.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    printSync(msg: string): void;

    /**
     * Execute the given command in the aa tools side.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param cmd Shell command
     * @param timeoutSecs Timeout, in seconds
     * @return ShellCmdResult object
     */
    executeShellCommand(cmd: string, callback: AsyncCallback<ShellCmdResult>): void;
    executeShellCommand(cmd: string, timeoutSecs: number, callback: AsyncCallback<ShellCmdResult>): void;
    executeShellCommand(cmd: string, timeoutSecs?: number): Promise<ShellCmdResult>;

    /**
     * Execute the given command in the aa tools side.
     * @param { string } cmd - The shell command.
     * @param { AsyncCallback<ShellCmdResult> } callback - The callback is used to return the ShellCmdResult object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    executeShellCmd(cmd: string, callback: AsyncCallback<ShellCmdResult>): void;

    /**
     * Execute the given command in the aa tools side.
     * @param { string } cmd - Shell command.
     * @param { number } timeoutSecs - Timeout, in seconds.
     * @param { AsyncCallback<ShellCmdResult> } callback - The callback is used to return the ShellCmdResult object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    executeShellCmd(cmd: string, timeoutSecs: number, callback: AsyncCallback<ShellCmdResult>): void;

    /**
     * Execute the given command in the aa tools side.
     * @param { string } cmd - Shell command.
     * @param { number } timeoutSecs - Timeout, in seconds.
     * @returns { Promise<ShellCmdResult> } Returns the ShellCmdResult object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    executeShellCmd(cmd: string, timeoutSecs?: number): Promise<ShellCmdResult>;

    /**
     * Finish the test and print log information to the unit testing console.
     * The total length of the log information to be printed cannot exceed 1000 characters.
     * @param { string } msg - Log information.
     * @param { number } code - Result code.
     * @param { AsyncCallback<void> } callback - The callback of finishTest.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    finishTest(msg: string, code: number, callback: AsyncCallback<void>): void;

    /**
     * Finish the test and print log information to the unit testing console.
     * The total length of the log information to be printed cannot exceed 1000 characters.
     * @param { string } msg - Log information.
     * @param { number } code - Result code.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    finishTest(msg: string, code: number): Promise<void>;
}

export default AbilityDelegator;
