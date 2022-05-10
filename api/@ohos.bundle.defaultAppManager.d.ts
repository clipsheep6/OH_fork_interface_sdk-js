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

import { AsyncCallback } from './basic';
import { BundleInfo } from './bundle/BundleInfo';
import { ElementName } from './bundle/ElementName';

/**
 * default application manager.
 * @name defaultAppManager
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @permission NA
 */
declare namespace defaultAppManager {
  /**
   * the constant for application type.
   * @name ApplicationType
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @permission N/A
   */
  export enum ApplicationType {
    /**
     * default browser identifier.
     *
     * @since 9
     */
    BROWSER = "BROWSER",
    /**
     * default image identifier.
     *
     * @since 9
     */
    IMAGE = "IMAGE",
    /**
     * default audio identifier.
     *
     * @since 9
     */
    AUDIO = "AUDIO",
    /**
     * default video identifier.
     *
     * @since 9
     */
    VIDEO = "VIDEO",
  }

  /**
   * query whether the caller is default application based on type.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @param type application type or file type.
   * @param userId indicates the id for the user.
   * @return return true if caller is default application; return false otherwise.
   * @permission N/A
   */
  function isDefaultApplication(type: string, userId?: number) : Promise<boolean>;
  function isDefaultApplication(type: string, userId: number, callback: AsyncCallback<boolean>) : void;
  function isDefaultApplication(type: string, callback: AsyncCallback<boolean>) : void;

  /**
   * get default application based on type.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @param type application type or file type.
   * @param userId indicates the id for the user.
   * @return return the BundleInfo object.
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @systemapi hide this for inner system use.
   */
  function getDefaultApplication(type: string, userId?: number) : Promise<BundleInfo>;
  function getDefaultApplication(type: string, userId: number, callback: AsyncCallback<BundleInfo>) : void;
  function getDefaultApplication(type: string, callback: AsyncCallback<BundleInfo>) : void;

  /**
   * set default application based on type.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @param type application type or file type.
   * @param elementName uniquely identifies an ability or extensionAbility.
   * @param userId indicates the id for the user.
   * @return return true if set default application success; return false otherwise.
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @systemapi hide this for inner system use.
   */
  function setDefaultApplication(type: string, elementName: ElementName, userId?: number) : Promise<boolean>;
  function setDefaultApplication(type: string, elementName: ElementName, userId: number, callback: AsyncCallback<boolean>) : void;
  function setDefaultApplication(type: string, elementName: ElementName, callback: AsyncCallback<boolean>) : void;

  /**
   * reset default application based on type.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @param type application type or file type.
   * @param userId indicates the id for the user.
   * @return return true if reset default application success; return false otherwise.
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @systemapi hide this for inner system use.
   */
  function resetDefaultApplication(type: string, userId?: number) : Promise<boolean>;
  function resetDefaultApplication(type: string, userId: number, callback: AsyncCallback<boolean>) : void;
  function resetDefaultApplication(type: string, callback: AsyncCallback<boolean>) : void;
}

export default defaultAppManager;
