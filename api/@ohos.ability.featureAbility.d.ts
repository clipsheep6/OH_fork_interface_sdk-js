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
import { AsyncCallback } from './basic';
import { Callback } from './basic';
import { Want } from './ability/want';
import { StartAbilityParameter } from './ability/startAbilityParameter';
import { AbilityResult } from './ability/abilityResult';
import { Context } from './app/context';
import { DataAbilityHelper } from './ability/dataAbilityHelper';
import { ConnectOptions } from './ability/connectOptions';
import { ContinueAbilityOptions } from './ability/continueAbilityOptions';
import { AbilityAgent } from './ability/abilityAgent';

/**
 * A Feature Ability represents an ability with a UI and is designed to interact with users.
 * @name featureAbility
 * @since 6
 * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
 * @permission N/A
 * @FAModelOnly
 */
declare namespace featureAbility {
  /**
   * Obtain the want sended from the source ability.
   *
   * @since 6
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param parameter Indicates the ability to start.
   * @return -
   * @FAModelOnly
   */
  function getWant(callback: AsyncCallback<Want>): void;
  function getWant(): Promise<Want>;

  /**
   * Starts a new ability.
   *
   * @since 6
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param parameter Indicates the ability to start.
   * @return -
   * @FAModelOnly
   */
  function startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<number>): void;
  function startAbility(parameter: StartAbilityParameter): Promise<number>;

  /**
   * Obtains the application context.
   *
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @return Returns the application context.
   * @since 6
   * @FAModelOnly
   */
  function getContext(): Context;

  /**
   * Starts an ability and returns the execution result when the ability is destroyed.
   *
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param parameter Indicates the ability to start.
   * @return Returns the {@link AbilityResult}.
   * @FAModelOnly
   */
  function startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>): void;
  function startAbilityForResult(parameter: StartAbilityParameter): Promise<AbilityResult>;

  /**
   * Sets the result code and data to be returned by this Page ability to the caller
   * and destroys this Page ability.
   *
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param parameter Indicates the result to return.
   * @return -
   * @FAModelOnly
   */
  function terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;
  function terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

  /**
   * Destroys this Page ability.
   *
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @return -
   * @FAModelOnly
   */
  function terminateSelf(callback: AsyncCallback<void>): void;
  function terminateSelf(): Promise<void>;

  /**
   * Obtains the dataAbilityHelper.
   *
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param uri Indicates the path of the file to open.
   * @return Returns the dataAbilityHelper.
   * @FAModelOnly
   */
  function acquireDataAbilityHelper(uri: string): DataAbilityHelper;

   /**
   * Checks whether the main window of this ability has window focus.
   *
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @return Returns {@code true} if this ability currently has window focus; returns {@code false} otherwise.
   * @FAModelOnly
   */
  function hasWindowFocus(callback: AsyncCallback<boolean>): void;
  function hasWindowFocus(): Promise<boolean>;

  /**
   * Connects the current ability to an ability using the AbilityInfo.AbilityType.SERVICE template.
   * @default -
   * @since 7
   * @SysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param request The element name of the service ability
   * @param options The remote object instance
   * @return Returns the number code of the ability connected
   * @FAModelOnly
   */
  function connectAbility(request: Want, options:ConnectOptions ): number;

  /**
  * The callback interface was connect successfully.
  * @default -
  * @since 7
  * @SysCap SystemCapability.Ability.AbilityRuntime.FAModel
  * @param connection The number code of the ability connected
  * @FAModelOnly
  */
  function disconnectAbility(connection: number, callback:AsyncCallback<void>): void;
  function disconnectAbility(connection: number): Promise<void>;

  /**
   * Migrates this ability to the given device on the same distributed network.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @return -
   * @FAModelOnly
   */
   function continueAbility(options: ContinueAbilityOptions, callback: AsyncCallback<void>): void;
   function continueAbility(options: ContinueAbilityOptions): Promise<void>;

   /**
   * Starts the specified ability on the device to establish a collaboration session.
   * @default -
   * @since 7
   * @SysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param want Want about the ability to start.
   */
  function startAssistAbility(want: Want): void;

  /**
  * Disconnects this collaboration session. This method uses an asynchronous callback to return the result.
  * @default -
  * @since 7
  * @SysCap SystemCapability.Ability.AbilityRuntime.FAModel
  * @param AsyncCallback Callback used to return the result.
  */
  function stopAssistAbility(callback: AsyncCallback<void>): void;
  function stopAssistAbility(): Promise<void>;

  /**
  * Listens for the even of successfully starting the specified ability for establishing a collaboration session.
  * This method uses a callback to return the result.
  * @default -
  * @since 7
  * @SysCap SystemCapability.Ability.AbilityRuntime.FAModel
  * @param type Event type. The value is fixed at assistConnect.
  * @param callback Callback used to return the result.
  */
  function on(type: 'assistConnect', callback: Callback<AbilityAgent>): void;

  /**
  * Listens for the event of collaboration session failure. This method uses a callback to return the result.
  * @default -
  * @since 7
  * @SysCap SystemCapability.Ability.AbilityRuntime.FAModel
  * @param type Event type. The value is fixed at assistConnectFailed.
  * @param callback Callback used to return the status code. For details, see AssistantCode. 
  */
  function on(type: 'assistConnectFailed', callback: Callback<number>): void;

  /**
  * Listens for the event of collaboration session disconnection. This method uses a callback to return the result.
  * @default - 
  * @since 7
  * @SysCap SystemCapability.Ability.AbilityRuntime.FAModel
  * @param type Event type. The value is fixed at assistDisconnect.
  * @param callback Callback used to return the status code. For details, see AssistantCode.
  */
  function on(type: 'assistDisconnect', callback: Callback<number>): void;

  /**
  * Cancels listening for the even of successfully starting the specified ability
  * for establishing a collaboration session. This method uses a callback to return the result.
  * @default -
  * @since 7
  * @SysCap SystemCapability.Ability.AbilityRuntime.FAModel
  * @param type Event type. The value is fixed at assistConnect.
  * @param callback Callback specified in featureAbility.on(type:'assistConnect').
  * If no callback is specified, listening will be canceled for all callbacks.
  */
  function off(type: 'assistConnect', callback?: Callback<AbilityAgent>): void;

  /**
  * Cancels listening for the event of collaboration session failure. This method uses a callback to return the result.
  * @default -
  * @since 7
  * @SysCap SystemCapability.Ability.AbilityRuntime.FAModel
  * @param type Event type. The value is fixed at assistConnectFailed.
  * @param callback Callback specified in featureAbility.on(type:'assistConnectFailed').
  * If no callback is specified, listening will be canceled for all callbacks.
  */
  function off(type: 'assistConnectFailed', callback?: Callback<number>): void;

  /**
  * Cancels listening for the event of collaboration session disconnection.
  * This method uses a callback to return the result.
  * @default -
  * @since 7
  * @SysCap SystemCapability.Ability.AbilityRuntime.FAModel
  * @param type Event type. The value is fixed at assistDisconnect.
  * @param callback Callback specified in featureAbility.on(type:'assistDisconnect').
  * If no callback is specified, listening will be canceled for all callbacks.
  */
  function off(type: 'assistDisconnect', callback?: Callback<number>): void;

  export enum AbilityWindowConfiguration {
    WINDOW_MODE_UNDEFINED = 0,
    WINDOW_MODE_FULLSCREEN = 1,
    WINDOW_MODE_SPLIT_PRIMARY = 100,
    WINDOW_MODE_SPLIT_SECONDARY = 101,
    WINDOW_MODE_FLOATING = 102
  }

  export enum AbilityStartSetting {
    BOUNDS_KEY = "abilityBounds",
    WINDOW_MODE_KEY = "windowMode",
    DISPLAY_ID_KEY = "displayId"
  }

  export enum ErrorCode {
    NO_ERROR = 0,
    INVALID_PARAMETER = -1,
    ABILITY_NOT_FOUND = -2,
    PERMISSION_DENY = -3
  }

  export enum DataAbilityOperationType {
    TYPE_INSERT = 1,
    TYPE_UPDATE = 2,
    TYPE_DELETE = 3,
    TYPE_ASSERT = 4,
  }
}
export default featureAbility;
