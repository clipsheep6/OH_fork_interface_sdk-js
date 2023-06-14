/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/// <reference path="../../../component/common.d.ts" />

import { TouchObject, KeyEvent, MouseEvent } from 'SpecialEvent';

/**
 * Defines the console info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the console info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the console info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @crossplatform
 * @since 10
 */
export declare class console {
  /**
   * Prints "debug" logs.
   * @param message Text to print.
   * @since 7
   */
  /**
   * Prints "debug" logs.
   * @param message Text to print.
   * @form
   * @since 9
   */
  /**
   * Prints "debug" logs.
   * @param message Text to print.
   * @form
   * @crossplatform
   * @since 10
   */
  static debug(message: string, ...arguments: any[]): void;

  /**
   * Prints "log" logs.
   * @param message Text to print.
   * @since 7
   */
  /**
   * Prints "log" logs.
   * @param message Text to print.
   * @form
   * @since 9
   */
  /**
   * Prints "log" logs.
   * @param message Text to print.
   * @form
   * @crossplatform
   * @since 10
   */
  static log(message: string, ...arguments: any[]): void;

  /**
   * Prints "info" logs.
   * @param message Text to print.
   * @since 7
   */
  /**
   * Prints "info" logs.
   * @param message Text to print.
   * @form
   * @since 9
   */
  /**
   * Prints "info" logs.
   * @param message Text to print.
   * @form
   * @crossplatform
   * @since 10
   */
  static info(message: string, ...arguments: any[]): void;

  /**
   * Prints "warn" logs.
   * @param message Text to print.
   * @since 7
   */
  /**
   * Prints "warn" logs.
   * @param message Text to print.
   * @form
   * @since 9
   */
  /**
   * Prints "warn" logs.
   * @param message Text to print.
   * @form
   * @crossplatform
   * @since 10
   */
  static warn(message: string, ...arguments: any[]): void;

  /**
   * Prints "error" logs.
   * @param message Text to print.
   * @since 7
   */
  /**
   * Prints "error" logs.
   * @param message Text to print.
   * @form
   * @since 9
   */
  /**
   * Prints "error" logs.
   * @param message Text to print.
   * @form
   * @crossplatform
   * @since 10
   */
  static error(message: string, ...arguments: any[]): void;

  /**
   * Prints a message if value is false or omitted.
   * @param { Object } value The value tested for being truthy.
   * @param { Object[] } arguments Used as error message to print.
   * @static
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static assert(value?: Object, ...arguments: Object[]): void;

  /**
   * Maintains an internal counter specific to label and print the number of times
   * console.count() has been called with the given label.
   * @param { string } label Counter name. Default: "default".
   * @static
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static count(label?: string): void;

  /**
   * Reset the internal counter specific to label.
   * @param { string } label Counter name. Default: "default".
   * @static
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static countReset(label?: string): void;

  /**
   * Prints properties of the specified JavaScript object.
   * @param { Object } dir A JavaScript object whose properties should be output.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static dir(dir?: Object): void;

  /**
   * This method calls console.log() passing it the arguments received. 
   * This method does not produce any XML formatting.
   * @param { Object[] } arguments Text to print.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static dirxml(...arguments: Object[]): void;

  /**
   * Creates a new inline group, causing any subsequent console messages to be indented by an additional level.
   * @param { Object[] } arguments messages to print first.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static group(...arguments: Object[]): void;

  /**
   * Same as console.group()
   * @param { Object[] } arguments messages to print first.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
  */
  static groupCollapsed(...arguments: Object[]): void;

  /**
   * Exit current inline group.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static groupEnd(): void;

  /**
   * Prints tabular data as a table.
   * @param { Object } tableData tabular data.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static table(tableData?: Object): void;

  /**
  * Start a timer.
  * @param { string } label Timer name. Default: "default".
  * @static
  * @throws { BusinessError } 401 - The parameter check failed.
  * @syscap SystemCapability.Utils.Lang
  * @crossplatform
  * @since 10
  */
  static time(label?: string): void;

  /**
   * End a timer and print time duration.
   * @param { string } label Timer name. Default: "default".
   * @static
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static timeEnd(label?: string): void;

  /**
   * Print the elapsed time and other data arguments.
   * @param { string }  label Timer name. Default: "default".
   * @param { Object[] } arguments Text to print.
   * @static
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static timeLog(label?: string, ...arguments: Object[]): void;

  /**
   * Prints stack information for the current code location.
   * @param { Object[] } arguments message to print.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static trace(...arguments: Object[]): void;
}

/**
 * Sets the interval for repeatedly calling a function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param handler Indicates the function to be called after the timer goes off. For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string. For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param delay Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param arguments Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns Returns the timer ID.
 * @since 7
 */
/**
 * Sets the interval for repeatedly calling a function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param handler Indicates the function to be called after the timer goes off. For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string. For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param delay Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param arguments Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns Returns the timer ID.
 * @crossplatform
 * @since 10
 */
export declare function setInterval(handler: Function | string, delay: number, ...arguments: any[]): number;

/**
 * Sets a timer after which a function will be executed.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param handler Indicates the function to be called after the timer goes off. For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string. For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param delay Indicates the delay (in milliseconds) after which the function will be called. If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param arguments Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns Returns the timer ID.
 * @since 7
 */
/**
 * Sets a timer after which a function will be executed.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param handler Indicates the function to be called after the timer goes off. For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string. For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param delay Indicates the delay (in milliseconds) after which the function will be called. If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param arguments Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns Returns the timer ID.
 * @crossplatform
 * @since 10
 */
export declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number;

/**
 * Cancel the interval set by " setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param intervalID Indicates the timer ID returned by "setInterval()".
 * @since 7
 */
/**
 * Cancel the interval set by " setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param intervalID Indicates the timer ID returned by "setInterval()".
 * @crossplatform
 * @since 10
 */
export declare function clearInterval(intervalID?: number): void;

/**
 * Cancel the timer set by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param timeoutID Indicates the timer ID returned by "setTimeout()".
 * @since 7
 */
/**
 * Cancel the timer set by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param timeoutID Indicates the timer ID returned by "setTimeout()".
 * @crossplatform
 * @since 10
 */
export declare function clearTimeout(timeoutID?: number): void;

/**
 * Defining syscap function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defining syscap function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
export declare function canIUse(syscap: string): boolean;

/**
 * Obtains all attributes of the component with the specified ID.
 * @param { string } id - ID of the component whose attributes are to be obtained.
 * @returns { string } all attributes of the component in json string
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Obtains all attributes of the component with the specified ID.
 * @param { string } id - ID of the component whose attributes are to be obtained.
 * @returns { string } all attributes of the component in json string
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
export declare function getInspectorByKey(id: string): string;

/**
 * Get components tree.
 * @returns { Object } attributes of all components in json object
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Get components tree.
 * @returns { Object } attributes of all components in json object
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
export declare function getInspectorTree(): Object;

/**
 * Sends an event to the component with the specified ID.
 * @param { string } id - ID of the component for which the event is to be sent.
 * @param { number } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
 * @returns { boolean } False if no component with the specified id is found, true otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Sends an event to the component with the specified ID.
 * @param { string } id - ID of the component for which the event is to be sent.
 * @param { number } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
 * @returns { boolean } False if no component with the specified id is found, true otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
export declare function sendEventByKey(id: string, action: number, params: string): boolean;

/**
 * Send touch event.
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean } False if send fail, true otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send touch event.
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean } False if send fail, true otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
export declare function sendTouchEvent(event: TouchObject): boolean;

/**
 * Send key event.
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean } False if send fail, true otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send key event.
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean } False if send fail, true otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
export declare function sendKeyEvent(event: KeyEvent): boolean;

/**
 * Send mouse event.
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean } False if send fail, true otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send mouse event.
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean } False if send fail, true otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
export declare function sendMouseEvent(event: MouseEvent): boolean;
