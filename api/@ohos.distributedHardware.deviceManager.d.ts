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

import { AsyncCallback, Callback } from './basic';

/**
 * Providers interfaces to creat a {@link deviceManager} instances.
 * 
 * @since 7
 * @syscap SystemCapability.DistributedHardware.DeviceManager
 * 
 */
declare namespace deviceManager {
  /**
   * Device Type definitions
   */
  enum DeviceType {
    /**
     * Indicates an unknown device type.
     */
    UNKNOWN_TYPE = 0,

    /**
     * Indicates a speaker.
     */
    SPEAKER = 0x0A,

    /**
     * Indicates a smartphone.
     */
    PHONE = 0x0E,

    /**
     * Indicates a tablet.
     */
    TABLET = 0x11,

    /**
     * Indicates a smart watch.
     */
    WEARABLE = 0x6D,

    /**
     * Indicates a car.
     */
    CAR = 0x83,

    /**
     * Indicates a smart TV.
     */
    TV = 0x9C
  }

  /**
   * Provides methods for managing devices.
   */
  interface DeviceManager {
  }
}

export default deviceManager;
