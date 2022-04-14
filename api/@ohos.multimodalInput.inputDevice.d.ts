/*
* Copyright (C) 2022 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { Callback } from "./basic";

 /**
 * The input device management module is configured to obtain an ID and device information of an input device.
 *
 * @since 8
 * @syscap SystemCapability.MultimodalInput.Input.InputDevice
 * @import import inputDevice from '@ohos.multimodalInput.inputDevice';
 */

declare namespace inputDevice {
    type EventType = 'add' | 'remove';

    type SourceType = 'keyboard' | 'mouse' | 'touchpad' | 'touchscreen' | 'joystick' | 'trackball';

    type AxisType = 'NULL';

    /**
     * Defines the monitor for input device events.
     * 
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param type Type of the input device event. The options are add and remove.
     * @param deviceId ID of the input device for the reported input device event.
     */
    interface DeviceMonitor{
        (type: EventType, deviceId: number): void;
    }

    /**
     * Starts monitoring for an input device event.
     * 
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param type Type of the input device event. The options are add and remove.
     * @param monitor Callback for the input device event.
     */
    function on(type: EventType, monitor: DeviceMonitor): void;

    /**
     * Stops monitoring for an input device event.
     * 
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param type Type of the input device event. The options are add and remove.
     * @param monitor Callback for the input device event.
     */
    function off(type: EventType, monitor?: DeviceMonitor): void;

    /**
     * Starts monitoring for an input device event.
     * 
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param type Type of the input device event. The options are add and remove.
     * @param monitor Callback for the input device event.
     */
    function on(type: EventType, monitor: Callback<DeviceMonitor>): void;

    /**
     * Stops monitoring for an input device event.
     * 
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param type Type of the input device event. The options are add and remove.
     * @param monitor Callback for the input device event.
     */
    function off(type: EventType, monitor?: Callback<DeviceMonitor>): void;

    /**
     * Defines axis information about events that can be reported by an input device.
     * For example, a touchscreen may report information such as x, y, and pressure,
     * which indicate the x-axis coordinate, y-axis coordinate, and pressure, respectively.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param source Input source type of the axis. For example, if a mouse reports an x-axis event, the source of the x-axis is the mouse.
     * @param axis Type of the axis. for example, the x-axis, y-axis, and pressure axis.
     * @param max Maximum value of the data reported on this axis.
     * @param min Minimum value of the data reported on this axis.
     */
    interface AxisRange {
        source: SourceType;
        axis : AxisType;
        max : number;
        min: number;
    }

    /**
     * Defines the information about an input device.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param name Name of the input device.
     * @param sources Source type supported by the input device. For example, if a keyboard is attached with a touchpad, the device has two input sources: keyboard and touchpad.
     */
    interface InputDeviceData {
        id: number;
        name: string;
        sources : Array<SourceType>;
        axisRanges : Array<AxisRange>;
    }

    /**
     * Obtains the IDs of all input devices.
     *
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @return Returns a list of input device IDs.
     */
    function getDeviceIds(callback: Callback<Array<number>>): void;
    function getDeviceIds(): Promise<Array<number>>;

    /**
     * Obtains information about an input device.
     *
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param deviceId ID of the input device.
     * @return Returns the information about the input device.
     */
    function getDevice(deviceId: number, callback: Callback<InputDeviceData>): void;
    function getDevice(deviceId: number): Promise<InputDeviceData>;

    /**
     * Defines whether the specified data structure is supported a key code.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param keyCode Key code.
     * @param isSupport Whether the data structure is supported by the key code. The value **true** indicates that the data structure is supported by the key code, and the value **false** indicates the opposite.
     */
    interface KeystrokeAbility {
        keyCode: number;
        isSupport: boolean;
    }

    /**
     * Checks whether the specified key codes of an input device are supported.
     *
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param deviceId ID of the input device.
     * @param keyCodes Key codes of the input device.
     * @return Returns a result indicating whether the specified key codes are supported.
     */
    function getKeystrokeAbility(deviceId: number, keyCodes: Array<number>, callback: Callback<Array<KeystrokeAbility>>): void;
    function getKeystrokeAbility(deviceId: number, keyCodes: Array<number>): Promise<Array<KeystrokeAbility>>;
}

export default inputDevice;