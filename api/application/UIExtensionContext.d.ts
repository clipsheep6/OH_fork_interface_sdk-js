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

import { AbilityResult } from '../ability/abilityResult';
import { AsyncCallback } from '../@ohos.base';
import ExtensionContext from './ExtensionContext';
import Want from '../@ohos.app.ability.Want';
import StartOptions from '../@ohos.app.ability.StartOptions';

/**
 * The context of UI extension. It allows access to UIExtension-specific resources.
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 10
 */
export default class UIExtensionContext extends ExtensionContext {
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
     * @StageModelOnly
     * @since 10
     */
    startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>;
}