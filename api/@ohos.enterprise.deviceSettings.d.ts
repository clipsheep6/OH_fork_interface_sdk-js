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

import { AsyncCallback } from "./basic";
import Want from "./@ohos.application.Want";

/**
 * @name Offers set settings policies on the devices.
 * @since 9
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 */
declare namespace deviceSettings {
  /**
   * Sets the screen off time.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param time Target time stamp (ms)
   * @permission ohos.permission.EDM_SET_RESTRICTION
   */
  function setScreenOffTime(admin: Want, time: number, callback: AsyncCallback<void>): void;
  function setScreenOffTime(admin: Want, time: number): Promise<void>;

  /**
   * Gets the screen off time.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param time Target time stamp (ms)
   * @return Returns the screen off time. 
   * @permission ohos.permission.EDM_SET_RESTRICTION
   */
  function getScreenOffTime(admin: Want, callback: AsyncCallback<number>): void;
  function getScreenOffTime(admin: Want): Promise<number>;
}

export default deviceSettings;