/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * @permission ohos.permission.VIBRATE
 * @syscap SystemCapability.Sensors.MiscDevice
 * @since 3
 * @deprecated since 8
 * @useinstead ohos.vibrator/vibrator.VibrateTime
 */
export interface VibrateOptions {
  /**
   * Vibration mode. The value long  indicates long vibration, and short indicates short vibration.
   * The default value is long.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 3
   * @deprecated since 8
   */
  mode?: 'long' | 'short';

  /**
   * Called when success to trigger vibration.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 3
   * @deprecated since 8
   */
  success: () => void;

  /**
   * Called when fail to trigger vibration.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 3
   * @deprecated since 8
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 3
   * @deprecated since 8
   */
  complete?: () => void;
}

/**
 * @permission ohos.permission.VIBRATE
 * @syscap SystemCapability.Sensors.MiscDevice
 * @since 3
 * @deprecated since 8
 * @useinstead ohos.vibrator/vibrator
 */
export default class Vibrator {
  /**
   * Triggers vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param options Options.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 3
   * @deprecated since 8
   * @useinstead ohos.vibrator/vibrator#startVibration
   */
  static vibrate(options?: VibrateOptions): void;
}
