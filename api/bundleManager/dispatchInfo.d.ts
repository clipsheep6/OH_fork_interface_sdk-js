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

/**
 * The dispatch info class.
 * @typedef DispatchInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
 export interface DispatchInfo {
    /**
     * @default Indicates the dispatchInfo version
     * @since 9
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     */
    readonly version: string;
  
    /**
     * @default Indicates the free install interface version number
     * @since 9
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     */
    readonly dispatchAPI: string;
}