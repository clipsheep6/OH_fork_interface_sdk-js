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

import type { AbilityResult } from './ability/abilityResult';
import type { AsyncCallback } from './@ohos.base';
import type { LocalStorage } from 'StateManagement';
import type Want from './@ohos.app.ability.Want';
import type StartOptions from './@ohos.app.ability.StartOptions';

/**
 * class of ui extension content session.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 10
 */
export default class UIExtensionContentSession {
  /**
   * Send data from an ui extension to an ui extension component.
   *
   * @param { object } data - Indicates the data send to ui extension component.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  sendData(data: { [key: string]: Object }): void;

  /**
   * Sets the callback for the ui extension to receive data from an ui extension component.
   *
   * @param { function } callback - Indicates the receive data callback to set.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  setReceiveDataCallback(callback: (data: { [key: string]: Object }) => void): void;

  /**
   * Loads an UI extension content.
   *
   * @param { string } path - Path of the page to which the content will be loaded
   * @param { LocalStorage } [storage] - The data object shared within the content instance loaded by the page
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  loadContent(path: string, storage?: LocalStorage): void;

  /**
   * UI extension uses this method to start a specific ability.If the caller application is in foreground,
   * you can use this method to start ability; If the caller application is in the background,
   * you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Indicates the ability to start.
   * @param { AsyncCallback<void> } callback - The callback of startAbility.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * UI extension uses this method to start a specific ability.If the caller application is in foreground,
   * you can use this method to start ability; If the caller application is in the background,
   * you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Indicates the ability to start.
   * @param { StartOptions } options - Indicates the start options.
   * @param { AsyncCallback<void> } callback - The callback of startAbility.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * UI extension uses this method to start a specific ability.If the caller application is in foreground,
   * you can use this method to start ability; If the caller application is in the background,
   * you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Indicates the ability to start.
   * @param { StartOptions } [options] - Indicates the start options.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  startAbility(want: Want, options?: StartOptions): Promise<void>;

  /**
   * Starts an ability and returns the execution result when the ability is destroyed.
   * If the caller application is in foreground, you can use this method to start ability; If the caller application
   * is in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Indicates the ability to start.
   * @param { AsyncCallback<AbilityResult> } callback - The callback is used to return the result of startAbility.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>): void;

  /**
   * Starts an ability and returns the execution result when the ability is destroyed.
   * If the caller application is in foreground, you can use this method to start ability; If the caller application
   * is in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Indicates the ability to start.
   * @param { StartOptions } options - Indicates the start options.
   * @param { AsyncCallback<AbilityResult> } callback - The callback is used to return the result of startAbility.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  startAbilityForResult(want: Want, options: StartOptions, callback: AsyncCallback<AbilityResult>): void;

  /**
   * Starts an ability and returns the execution result when the ability is destroyed.
   * If the caller application is in foreground, you can use this method to start ability; If the caller application
   * is in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Indicates the ability to start.
   * @param { StartOptions } [options] - Indicates the start options.
   * @returns { Promise<AbilityResult> } Returns the result of startAbility.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>;

  /**
   * Destroys the UI extension.
   *
   * @param { AsyncCallback<void> } callback - The callback of terminateSelf.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * Destroys the UI extension.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  terminateSelf(): Promise<void>;

  /**
   * Destroys the UI extension while returning the specified result code and data to the caller.
   *
   * @param { AbilityResult } parameter - Indicates the result to return.
   * @param { AsyncCallback<void> } callback - The callback of terminateSelfWithResult.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;

  /**
   * Destroys the UI extension while returning the specified result code and data to the caller.
   *
   * @param { AbilityResult } parameter - Indicates the result to return.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

  /**
   * Sets the background color of the UI extension.
   *
   * @param { string } color - the specified color.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  setWindowBackgroundColor(color: string): void;

  /**
   * Sets whether this window is in privacy mode.
   *
   * @permission ohos.permission.PRIVACY_WINDOW
   * @param { boolean } isPrivacyMode - Whether the window is in privacy mode. The value true means that
   *                                    the window is in privacy mode, and false means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>;

  /**
   * Sets whether this window is in privacy mode.
   *
   * @permission ohos.permission.PRIVACY_WINDOW
   * @param { boolean } isPrivacyMode - Whether the window is in privacy mode. The value true means that
   *                                    the window is in privacy mode, and false means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;
}
