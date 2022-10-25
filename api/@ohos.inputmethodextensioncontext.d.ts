/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import {AsyncCallback} from './basic';
import Want from './@ohos.application.Want';
import StartOptions from "./@ohos.application.StartOptions";
import ExtensionContext from './application/ExtensionContext';

/**
 * The extension context class of input method.
 *
 * @since 9
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @StageModelOnly
 */
export default class InputMethodExtensionContext extends ExtensionContext {
    /**
     * Destroy the input method extension.
     *
     * @since 9
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @return -
     * @StageModelOnly
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * Destroy the input method extension.
     *
     * @since 9
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @return -
     * @StageModelOnly
     */
    destroy(): Promise<void>;
}