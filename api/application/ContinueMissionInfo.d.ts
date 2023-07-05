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

/**
 * Parameters corresponding to continue mission.
 *
 * @typedef ContinueMissionInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi Hide this for inner system use.
 * @since 10
 */
export interface ContinueMissionInfo {
  /**
   * Indicates the original deviceId to continue mission.
   *
   * @type string
   * @systemapi Hide this for inner system user.
   * @since 10
   */
  srcDeviceId: string;
  /**
   * Indicates the target deviceId to continue mission.
   *
   * @type string
   * @systemapi Hide this for inner system user.
   * @since 10
   */
  dstDeviceId: string;
  /**
   * Indicates the bundle to continue.
   *
   * @type string
   * @systemapi Hide this for inner system user.
   * @since 10
   */
  bundleName: string;
  /**
   * Indicates the extended param.
   *
   * @type object
   * @systemapi Hide this for inner system user.
   * @since 10
   */
  wantParam: { [key: string]: Object };
}