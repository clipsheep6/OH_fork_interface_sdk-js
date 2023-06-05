/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { RawFileDescriptor as _RawFileDescriptor } from './global/rawFileDescriptor';
import { Resource as _Resource } from './global/resource';
import { AsyncCallback as _AsyncCallback } from './@ohos.base';
import { DrawableDescriptor } from './@ohos.arkui.drawableDescriptor';

/**
 * Provides resource related APIs.
 *
 * @namespace resourceManager
 * @syscap SystemCapability.Global.ResourceManager
 * @since 6
 */
/**
 * Provides resource related APIs.
 *
 * @namespace resourceManager
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform
 * @since 10
 */
declare namespace resourceManager {
  /**
   * Enumerates screen directions.
   *
   * @enum { number }
   * @syscap SystemCapability.Global.ResourceManager
   * @since 6
   */
  /**
   * Enumerates screen directions.
   *
   * @enum { number }
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @since 10
   */
  export enum Direction {
    /**
     * Indicates the vertical direction.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates the vertical direction.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    DIRECTION_VERTICAL = 0,

    /**
     * Indicates the horizontal direction.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates the horizontal direction.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    DIRECTION_HORIZONTAL = 1
  }

  /**
   * Enumerates device types.
   *
   * @enum { number }
   * @syscap SystemCapability.Global.ResourceManager
   * @since 6
   */
  /**
   * Enumerates device types.
   *
   * @enum { number }
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @since 10
   */
  export enum DeviceType {
    /**
     * Indicates a phone.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates a phone.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    DEVICE_TYPE_PHONE = 0x00,

    /**
     * Indicates a tablet.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates a tablet.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    DEVICE_TYPE_TABLET = 0x01,

    /**
     * Indicates a car.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates a car.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    DEVICE_TYPE_CAR = 0x02,

    /**
     * Indicates a PC.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates a PC.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    DEVICE_TYPE_PC = 0x03,

    /**
     * Indicates a smart TV.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates a smart TV.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    DEVICE_TYPE_TV = 0x04,

    /**
     * Indicates a wearable device.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates a wearable device.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    DEVICE_TYPE_WEARABLE = 0x06
  }

  /**
   * Enumerates screen density types.
   *
   * @enum { number }
   * @syscap SystemCapability.Global.ResourceManager
   * @since 6
   */
  /**
   * Enumerates screen density types.
   *
   * @enum { number }
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @since 10
   */
  export enum ScreenDensity {
    /**
     * Indicates small screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates small screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    SCREEN_SDPI = 120,

    /**
     * Indicates medium screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates medium screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    SCREEN_MDPI = 160,

    /**
     * Indicates large screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates large screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    SCREEN_LDPI = 240,

    /**
     * Indicates extra-large screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates extra-large screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    SCREEN_XLDPI = 320,

    /**
     * Indicates extra-extra-large screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates extra-extra-large screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    SCREEN_XXLDPI = 480,

    /**
     * Indicates extra-extra-extra-large screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates extra-extra-extra-large screen density.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    SCREEN_XXXLDPI = 640
  }

  /**
   * Provides the device configuration.
   *
   * @since 6
   */
  /**
   * Provides the device configuration.
   *
   * @crossplatform
   * @since 10
   */
  export class Configuration {
    /**
     * Indicates the screen direction of the current device.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates the screen direction of the current device.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    direction: Direction;

    /**
     * Indicates the current system language, for example, zh-Hans-CN.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates the current system language, for example, zh-Hans-CN.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    locale: string;
  }

  /**
   * Provides the device capability.
   *
   * @since 6
   */
  /**
   * Provides the device capability.
   *
   * @crossplatform
   * @since 10
   */
  export class DeviceCapability {
    /**
     * Indicates the screen density of the current device.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates the screen density of the current device.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    screenDensity: ScreenDensity;

    /**
     * Indicates the type of the current device.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Indicates the type of the current device.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    deviceType: DeviceType;
  }

  /**
   * The ResourceManager callback.
   *
   * @interface AsyncCallback
   * @syscap SystemCapability.Global.ResourceManager
   * @since 6
   * @deprecated since 9
   */
  export interface AsyncCallback<T> {
    (err: Error, data: T): void;
  }

  /**
   * Obtains the ResourceManager object of the current application.
   *
   * @param { AsyncCallback<ResourceManager> } callback - Indicates the callback containing the ResourceManager object.
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6
   */
  export function getResourceManager(callback: AsyncCallback<ResourceManager>): void;

  /**
   * Obtains the ResourceManager object of the specified application.
   *
   * @param { string } bundleName - Indicates the bundle name of the specified application.
   * @param { AsyncCallback<ResourceManager> } callback - Indicates the callback containing the ResourceManager object.
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6
   */
  export function getResourceManager(bundleName: string, callback: AsyncCallback<ResourceManager>): void;

  /**
   * Obtains the ResourceManager object of the current application.
   *
   * @returns { Promise<ResourceManager> } The ResourceManager object is returned in Promise mode.
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6
   */
  export function getResourceManager(): Promise<ResourceManager>;

  /**
   * Obtains the ResourceManager object of the specified application.
   *
   * @param { string } bundleName - Indicates the bundle name of the specified application.
   * @returns { Promise<ResourceManager> } The ResourceManager object is returned in Promise mode.
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6
   */
  export function getResourceManager(bundleName: string): Promise<ResourceManager>;

  /**
   * Obtains the System ResourceManager object of the current device.
   *
   * @returns { ResourceManager } The System ResourceManager object is returned.
   * @throws { BusinessError } 9001009 - If application can't access system resource
   *         which is not mapped to application sandbox, This error code will be thrown.
   * @syscap SystemCapability.Global.ResourceManager
   * @since 10
   */
  export function getSystemResourceManager(): ResourceManager;

  /**
   * Provides the capability of accessing application resources.
   *
   * @interface ResourceManager
   * @syscap SystemCapability.Global.ResourceManager
   * @since 6
   */
  /**
   * Provides the capability of accessing application resources.
   *
   * @interface ResourceManager
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @since 10
   */
  export interface ResourceManager {
    /**
     * Obtains the character string corresponding to a specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained character string.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getStringValue
     */
    getString(resId: number, callback: AsyncCallback<string>): void;

    /**
     * Obtains string resources associated with a specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<string> } The character string corresponding to the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getStringValue
     */
    getString(resId: number): Promise<string>;

    /**
     * Obtains the character string corresponding to a specified resource object in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained character string.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the character string corresponding to a specified resource object in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained character string.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringValue(resource: Resource, callback: _AsyncCallback<string>): void;

    /**
     * Obtains string resources associated with a specified resource object in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { Promise<string> } The character string corresponding to the resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains string resources associated with a specified resource object in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { Promise<string> } The character string corresponding to the resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringValue(resource: Resource): Promise<string>;

    /**
     * Obtains the array of character strings corresponding to a specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { AsyncCallback<Array<string>> } callback - Indicates the asynchronous callback used to return the obtained array of character strings.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getStringArrayValue
     */
    getStringArray(resId: number, callback: AsyncCallback<Array<string>>): void;

    /**
     * Obtains the array of character strings corresponding to a specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<Array<string>> } The array of character strings corresponding to the specified resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getStringArrayValue
     */
    getStringArray(resId: number): Promise<Array<string>>;

    /**
     * Obtains the array of character strings corresponding to a specified resource object in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { _AsyncCallback<Array<string>> } callback - Indicates the asynchronous callback used to return the obtained array of character strings.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the array of character strings corresponding to a specified resource object in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { _AsyncCallback<Array<string>> } callback - Indicates the asynchronous callback used to return the obtained array of character strings.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringArrayValue(resource: Resource, callback: _AsyncCallback<Array<string>>): void;

    /**
     * Obtains the array of character strings corresponding to a specified resource object in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { Promise<Array<string>> } The array of character strings corresponding to the specified resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the array of character strings corresponding to a specified resource object in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { Promise<Array<string>> } The array of character strings corresponding to the specified resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringArrayValue(resource: Resource): Promise<Array<string>>;

    /**
     * Obtains the content of the media file corresponding to a specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the obtained media file content.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getMediaContent
     */
    getMedia(resId: number, callback: AsyncCallback<Uint8Array>): void;

    /**
     * Obtains the content of the media file corresponding to a specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<Uint8Array> } The content of the media file corresponding to the specified resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getMediaContent
     */
    getMedia(resId: number): Promise<Uint8Array>;

    /**
     * Obtains the content of the media file corresponding to a specified resource object in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { _AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the obtained media file content.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the content of the media file corresponding to a specified resource object in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { _AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the obtained media file content.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaContent(resource: Resource, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * Obtains the content of the specified screen density media file corresponding to a specified resource object in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { number } density - The parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @param { _AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the obtained
     *                 specified screen density media file content.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @since 10
     */
    getMediaContent(resource: Resource, density: number, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * Obtains the content of the media file corresponding to a specified resource object in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { Promise<Uint8Array> } The content of the media file corresponding to the specified resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the content of the media file corresponding to a specified resource object in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { Promise<Uint8Array> } The content of the media file corresponding to the specified resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaContent(resource: Resource): Promise<Uint8Array>;

    /**
     * Obtains the content of the specified screen density media file corresponding to a specified resource object in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { number } density - The optional parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @returns { Promise<Uint8Array> } The content of the specified screen density media file corresponding to the
     *                 specified resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @since 10
     */
    getMediaContent(resource: Resource, density: number): Promise<Uint8Array>;

    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained Base64 code of the image
     *                 resource.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getMediaContentBase64
     */
    getMediaBase64(resId: number, callback: AsyncCallback<string>): void;

    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<string> } The Base64 code of the image resource corresponding to the specified resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getMediaContentBase64
     */
    getMediaBase64(resId: number): Promise<string>;

    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource object in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained Base64 code of the image
     *                 resource.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource object in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained Base64 code of the image
     *                 resource.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaContentBase64(resource: Resource, callback: _AsyncCallback<string>): void;

    /**
     * Obtains the Base64 code of the specified screen density image resource corresponding to the specified resource object in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { number } density - The parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained Base64 code of the
     *                 specified screen density image resource.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @since 10
     */
    getMediaContentBase64(resource: Resource, density: number, callback: _AsyncCallback<string>): void;

    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource object in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { Promise<string> } The Base64 code of the image resource corresponding to the specified resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource object in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { Promise<string> } The Base64 code of the image resource corresponding to the specified resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaContentBase64(resource: Resource): Promise<string>;

    /**
     * Obtains the Base64 code of the specified screen density image resource corresponding to the specified resource object in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { number } density - The optional parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @returns { Promise<string> } The Base64 code of the specified screen density image resource corresponding to the specified resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @since 10
     */
    getMediaContentBase64(resource: Resource, density: number): Promise<string>;

    /**
     * Obtains the device capability in callback mode.
     *
     * @param { _AsyncCallback<DeviceCapability> } callback - Indicates the asynchronous callback used to return the obtained device capability.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Obtains the device capability in callback mode.
     *
     * @param { _AsyncCallback<DeviceCapability> } callback - Indicates the asynchronous callback used to return the obtained device capability.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getDeviceCapability(callback: _AsyncCallback<DeviceCapability>): void;

    /**
     * Obtains the device capability in Promise mode.
     *
     * @returns { Promise<DeviceCapability> } the device capability.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Obtains the device capability in Promise mode.
     *
     * @returns { Promise<DeviceCapability> } the device capability.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getDeviceCapability(): Promise<DeviceCapability>;

    /**
     * Obtains the device configuration in callback mode.
     *
     * @param { _AsyncCallback<Configuration> } callback - Indicates the asynchronous callback used to return the obtained device
     *                 configuration.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Obtains the device configuration in callback mode.
     *
     * @param { _AsyncCallback<Configuration> } callback - Indicates the asynchronous callback used to return the obtained device
     *                 configuration.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getConfiguration(callback: _AsyncCallback<Configuration>): void;

    /**
     * Obtains the device configuration in Promise mode.
     *
     * @returns { Promise<Configuration> } the device configuration.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     */
    /**
     * Obtains the device configuration in Promise mode.
     *
     * @returns { Promise<Configuration> } the device configuration.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getConfiguration(): Promise<Configuration>;

    /**
     * Obtains the singular-plural character string represented by the ID string corresponding to the
     * specified number in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { number } num - Indicates the number.
     * @param { AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the singular-plural character
     *                 string represented by the ID string corresponding to the specified number.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getPluralStringValue
     */
    getPluralString(resId: number, num: number, callback: AsyncCallback<string>): void;

    /**
     * Obtains the singular-plural character string represented by the ID string corresponding to
     * the specified number in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { number } num - Indicates the number.
     * @returns { Promise<string> } The singular-plural character string represented by the ID string
     *         corresponding to the specified number.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getPluralStringValue
     */
    getPluralString(resId: number, num: number): Promise<string>;

    /**
     * Obtains the singular-plural character string represented by the resource object string corresponding to the
     * specified number in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { number } num - Indicates the number.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the singular-plural character
     *                 string represented by the resource object string corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the singular-plural character string represented by the resource object string corresponding to the
     * specified number in callback mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { number } num - Indicates the number.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the singular-plural character
     *                 string represented by the resource object string corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getPluralStringValue(resource: Resource, num: number, callback: _AsyncCallback<string>): void;

    /**
     * Obtains the singular-plural character string represented by the resource object string corresponding to
     * the specified number in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { number } num - Indicates the number.
     * @returns { Promise<string> } The singular-plural character string represented by the resource object string
     *         corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the singular-plural character string represented by the resource object string corresponding to
     * the specified number in Promise mode.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { number } num - Indicates the number.
     * @returns { Promise<string> } The singular-plural character string represented by the resource object string
     *         corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getPluralStringValue(resource: Resource, num: number): Promise<string>;

    /**
     * Obtains the raw file resource corresponding to the specified resource path in callback mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @param { AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the raw file resource.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getRawFileContent
     */
    getRawFile(path: string, callback: AsyncCallback<Uint8Array>): void;

    /**
     * Obtains the raw file resource corresponding to the specified resource path in Promise mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @returns { Promise<Uint8Array> } The raw file resource corresponding to the specified resource path.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getRawFileContent
     */
    getRawFile(path: string): Promise<Uint8Array>;

    /**
     * Obtains the raw file resource descriptor corresponding to the specified resource path in callback mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @param { AsyncCallback<RawFileDescriptor> } callback - Indicates the asynchronous callback used to return the raw file resource descriptor.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getRawFd
     */
    getRawFileDescriptor(path: string, callback: AsyncCallback<RawFileDescriptor>): void;

    /**
     * Obtains the raw file resource descriptor corresponding to the specified resource path in Promise mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @returns { Promise<RawFileDescriptor> } The raw file resource descriptor corresponding to the specified resource path.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceManager.getRawFd
     */
    getRawFileDescriptor(path: string): Promise<RawFileDescriptor>;

    /**
     * Obtains close raw file resource descriptor corresponding to the specified resource path in callback mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @param { AsyncCallback<void> } callback - Indicates the asynchronous callback used to return result close raw file resource descriptor.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceManager.closeRawFd
     */
    closeRawFileDescriptor(path: string, callback: AsyncCallback<void>): void;

    /**
     * Obtains close raw file resource descriptor corresponding to the specified resource path in Promise mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @returns { Promise<void> } The result close raw file resource descriptor corresponding to the specified resource path.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.resourceManager.closeRawFd
     */
    closeRawFileDescriptor(path: string): Promise<void>;

    /**
     * Obtains the character string corresponding to a specified resource name in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained character string.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the character string corresponding to a specified resource name in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained character string.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringByName(resName: string, callback: _AsyncCallback<string>): void;

    /**
     * Obtains string resources associated with a specified resource name in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { Promise<string> } The character string corresponding to the resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains string resources associated with a specified resource name in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { Promise<string> } The character string corresponding to the resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringByName(resName: string): Promise<string>;

    /**
     * Obtains the array of character strings corresponding to a specified resource name in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { _AsyncCallback<Array<string>> } callback - Indicates the asynchronous callback used to return the obtained array of character strings.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the array of character strings corresponding to a specified resource name in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { _AsyncCallback<Array<string>> } callback - Indicates the asynchronous callback used to return the obtained array of character strings.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringArrayByName(resName: string, callback: _AsyncCallback<Array<string>>): void;

    /**
     * Obtains the array of character strings corresponding to a specified resource name in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { Promise<Array<string>> } the array of character strings corresponding to the specified resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the array of character strings corresponding to a specified resource name in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { Promise<Array<string>> } the array of character strings corresponding to the specified resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringArrayByName(resName: string): Promise<Array<string>>;

    /**
     * Obtains the content of the media file corresponding to a specified resource name in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { _AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the obtained media file content.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the content of the media file corresponding to a specified resource name in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { _AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the obtained media file content.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaByName(resName: string, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * Obtains the content of the specified screen density media file corresponding to a specified resource name in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { number } density - The parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @param { _AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the obtained
     *                 specified screen density media file content.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getMediaByName(resName: string, density: number, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * Obtains the content of the media file corresponding to a specified resource name in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { Promise<Uint8Array> } The content of the media file corresponding to the specified resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the content of the media file corresponding to a specified resource name in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { Promise<Uint8Array> } The content of the media file corresponding to the specified resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaByName(resName: string): Promise<Uint8Array>;

    /**
     * Obtains the content of the specified screen density media file corresponding to a specified resource name in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { number } density - The optional parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @returns { Promise<Uint8Array> } The content of the specified screen density media file corresponding to the
     *                 specified resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getMediaByName(resName: string, density: number): Promise<Uint8Array>;

    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource name in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained Base64 code of the image
     *                 resource.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource name in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained Base64 code of the image
     *                 resource.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaBase64ByName(resName: string, callback: _AsyncCallback<string>): void;

    /**
     * Obtains the Base64 code of the specified screen density image resource corresponding to the specified resource name in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { number } density - The parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained Base64 code of the
     *                 specified screen density image resource.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getMediaBase64ByName(resName: string, density: number, callback: _AsyncCallback<string>): void;

    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource name in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { Promise<string> } The Base64 code of the image resource corresponding to the specified resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource name in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { Promise<string> } The Base64 code of the image resource corresponding to the specified resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaBase64ByName(resName: string): Promise<string>;

    /**
     * Obtains the Base64 code of the specified screen density image resource corresponding to the specified resource name in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { number } density - The optional parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @returns { Promise<string> } The Base64 code of the specified screen density image resource corresponding to the specified resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getMediaBase64ByName(resName: string, density: number): Promise<string>;

    /**
     * Obtains the singular-plural character string represented by the name string corresponding to the
     * specified number in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { number } num - Indicates the number.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the singular-plural character
     *                 string represented by the name string corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the singular-plural character string represented by the name string corresponding to the
     * specified number in callback mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { number } num - Indicates the number.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the singular-plural character
     *                 string represented by the name string corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getPluralStringByName(resName: string, num: number, callback: _AsyncCallback<string>): void;

    /**
     * Obtains the singular-plural character string represented by the name string corresponding to
     * the specified number in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { number } num - Indicates the number.
     * @returns { Promise<string> } the singular-plural character string represented by the name string
     *         corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the singular-plural character string represented by the name string corresponding to
     * the specified number in Promise mode.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { number } num - Indicates the number.
     * @returns { Promise<string> } the singular-plural character string represented by the name string
     *         corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getPluralStringByName(resName: string, num: number): Promise<string>;

    /**
     * Obtains string resources associated with a specified resource ID.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { string } The character string corresponding to the resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains string resources associated with a specified resource ID.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { string } The character string corresponding to the resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringSync(resId: number): string;

    /**
     * Obtains string resources associated with a specified resource ID.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { Array<string | number> } args - Indicates the formatting string resource parameters.
     * @returns { string } The character string corresponding to the resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @throws { BusinessError } 9001007 - If the resource obtained by resId formatting error.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringSync(resId: number, ...args: Array<string | number>): string;

    /**
     * Obtains string resources associated with a specified resource object.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { string } The character string corresponding to the resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains string resources associated with a specified resource object.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { string } The character string corresponding to the resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringSync(resource: Resource): string;

    /**
     * Obtains string resources associated with a specified resource object.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { Array<string | number> } args - Indicates the formatting string resource parameters.
     * @returns { string } The character string corresponding to the resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @throws { BusinessError } 9001007 - If the resource obtained by resId formatting error.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringSync(resource: Resource, ...args: Array<string | number>): string;

    /**
     * Obtains string resources associated with a specified resource name.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { string } The character string corresponding to the resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains string resources associated with a specified resource name.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { string } The character string corresponding to the resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringByNameSync(resName: string): string;

    /**
     * Obtains string resources associated with a specified resource name.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { Array<string | number> } args - Indicates the formatting string resource parameters.
     * @returns { string } The character string corresponding to the resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @throws { BusinessError } 9001008 - If the resource obtained by resName formatting error.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringByNameSync(resName: string, ...args: Array<string | number>): string;

    /**
     * Obtains the boolean result with a specified resource ID.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { boolean } The boolean resource corresponding to the resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the boolean result with a specified resource ID.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { boolean } The boolean resource corresponding to the resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getBoolean(resId: number): boolean;

    /**
     * Obtains the boolean result with a specified resource object.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { boolean } The boolean resource corresponding to the resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the boolean result with a specified resource object.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { boolean } The boolean resource corresponding to the resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getBoolean(resource: Resource): boolean;

    /**
     * Obtains the boolean result with a specified resource name.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { boolean } The boolean resource corresponding to the resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the boolean result with a specified resource name.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { boolean } The boolean resource corresponding to the resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getBooleanByName(resName: string): boolean;

    /**
     * Obtains the number result with a specified resource ID.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { number } The number resource corresponding to the resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the number result with a specified resource ID.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { number } The number resource corresponding to the resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getNumber(resId: number): number;

    /**
     * Obtains the number result with a specified resource object.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { number } The number resource corresponding to the resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the number result with a specified resource object.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @returns { number } The number resource corresponding to the resource object.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the module resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by module resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getNumber(resource: Resource): number;

    /**
     * Obtains the number result with a specified resource name.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { number } The number resource corresponding to the resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the number result with a specified resource name.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { number } The number resource corresponding to the resource name.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getNumberByName(resName: string): number;

    /**
     * Obtains release resourceManager.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @since 7
     */
    /**
     * Obtains release resourceManager.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    release();

    /**
     * Obtains the character string corresponding to a specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained character string.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the character string corresponding to a specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained character string.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringValue(resId: number, callback: _AsyncCallback<string>): void;

    /**
     * Obtains string resources associated with a specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<string> } The character string corresponding to the resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains string resources associated with a specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<string> } The character string corresponding to the resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringValue(resId: number): Promise<string>;

    /**
     * Obtains the array of character strings corresponding to a specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { _AsyncCallback<Array<string>> } callback - Indicates the asynchronous callback used to return the obtained array of character strings.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the array of character strings corresponding to a specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { _AsyncCallback<Array<string>> } callback - Indicates the asynchronous callback used to return the obtained array of character strings.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringArrayValue(resId: number, callback: _AsyncCallback<Array<string>>): void;

    /**
     * Obtains the array of character strings corresponding to a specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<Array<string>> } The array of character strings corresponding to the specified resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the array of character strings corresponding to a specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<Array<string>> } The array of character strings corresponding to the specified resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getStringArrayValue(resId: number): Promise<Array<string>>;

    /**
     * Obtains the singular-plural character string represented by the ID string corresponding to the
     * specified number in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { number } num - Indicates the number.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the singular-plural character
     *                 string represented by the ID string corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the singular-plural character string represented by the ID string corresponding to the
     * specified number in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { number } num - Indicates the number.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the singular-plural character
     *                 string represented by the ID string corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getPluralStringValue(resId: number, num: number, callback: _AsyncCallback<string>): void;

    /**
     * Obtains the singular-plural character string represented by the ID string corresponding to
     * the specified number in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { number } num - Indicates the number.
     * @returns { Promise<string> } The singular-plural character string represented by the ID string
     *         corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the singular-plural character string represented by the ID string corresponding to
     * the specified number in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { number } num - Indicates the number.
     * @returns { Promise<string> } The singular-plural character string represented by the ID string
     *         corresponding to the specified number.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @throws { BusinessError } 9001006 - If the resource re-ref too much.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getPluralStringValue(resId: number, num: number): Promise<string>;

    /**
     * Obtains the content of the media file corresponding to a specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { _AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the obtained media file content.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the content of the media file corresponding to a specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { _AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the obtained media file content.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaContent(resId: number, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * Obtains the content of the specified screen density media file corresponding to a specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { number } density - The parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @param { _AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the obtained
     *                 specified screen density media file content.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getMediaContent(resId: number, density: number, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * Obtains the content of the media file corresponding to a specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<Uint8Array> } The content of the media file corresponding to the specified resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the content of the media file corresponding to a specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<Uint8Array> } The content of the media file corresponding to the specified resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaContent(resId: number): Promise<Uint8Array>;

    /**
     * Obtains the content of the specified screen density media file corresponding to a specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { number } density - The optional parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @returns { Promise<Uint8Array> } The content of the specified screen density media file corresponding to the specified resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getMediaContent(resId: number, density: number): Promise<Uint8Array>;

    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained Base64 code of the image
     *                 resource.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained Base64 code of the image
     *                 resource.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaContentBase64(resId: number, callback: _AsyncCallback<string>): void;

    /**
     * Obtains the Base64 code of the specified screen density image resource corresponding to the specified resource ID in callback mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { number } density - The parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @param { _AsyncCallback<string> } callback - Indicates the asynchronous callback used to return the obtained Base64 code of the
     *                 specified screen density image resource.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getMediaContentBase64(resId: number, density: number, callback: _AsyncCallback<string>): void;

    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<string> } the Base64 code of the image resource corresponding to the specified resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @returns { Promise<string> } the Base64 code of the image resource corresponding to the specified resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getMediaContentBase64(resId: number): Promise<string>;

    /**
     * Obtains the Base64 code of the specified screen density image resource corresponding to the specified resource ID in Promise mode.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { number } density - The optional parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                 to use the density of current system dpi.
     * @returns { Promise<string> } the Base64 code of the specified screen density image resource corresponding to the specified resource ID.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getMediaContentBase64(resId: number, density: number): Promise<string>;

    /**
     * Obtains the raw file resource corresponding to the specified resource path in callback mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @param { _AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the raw file resource.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the raw file resource corresponding to the specified resource path in callback mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @param { _AsyncCallback<Uint8Array> } callback - Indicates the asynchronous callback used to return the raw file resource.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getRawFileContent(path: string, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * Obtains the raw file resource corresponding to the specified resource path in Promise mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @returns { Promise<Uint8Array> } the raw file resource corresponding to the specified resource path.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the raw file resource corresponding to the specified resource path in Promise mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @returns { Promise<Uint8Array> } the raw file resource corresponding to the specified resource path.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getRawFileContent(path: string): Promise<Uint8Array>;

    /**
     * Obtains the raw file resource descriptor corresponding to the specified resource path in callback mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @param { _AsyncCallback<RawFileDescriptor> } callback - Indicates the asynchronous callback used to return the raw file resource descriptor.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the raw file resource descriptor corresponding to the specified resource path in callback mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @param { _AsyncCallback<RawFileDescriptor> } callback - Indicates the asynchronous callback used to return the raw file resource descriptor.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getRawFd(path: string, callback: _AsyncCallback<RawFileDescriptor>): void;

    /**
     * Obtains the raw file resource descriptor corresponding to the specified resource path in Promise mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @returns { Promise<RawFileDescriptor> } The raw file resource descriptor corresponding to the specified resource path.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains the raw file resource descriptor corresponding to the specified resource path in Promise mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @returns { Promise<RawFileDescriptor> } The raw file resource descriptor corresponding to the specified resource path.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    getRawFd(path: string): Promise<RawFileDescriptor>;

    /**
     * Obtains close raw file resource descriptor corresponding to the specified resource path in callback mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @param { _AsyncCallback<void> } callback - Indicates the asynchronous callback used to return result close raw file resource descriptor.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains close raw file resource descriptor corresponding to the specified resource path in callback mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @param { _AsyncCallback<void> } callback - Indicates the asynchronous callback used to return result close raw file resource descriptor.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    closeRawFd(path: string, callback: _AsyncCallback<void>): void;

    /**
     * Obtains close raw file resource descriptor corresponding to the specified resource path in Promise mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @returns { Promise<void> } The result close raw file resource descriptor corresponding to the specified resource path.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    /**
     * Obtains close raw file resource descriptor corresponding to the specified resource path in Promise mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @returns { Promise<void> } The result close raw file resource descriptor corresponding to the specified resource path.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @since 10
     */
    closeRawFd(path: string): Promise<void>;

    /**
     * Obtains the DrawableDescriptor of the media file corresponding to a specified resource ID.
     *
     * @param { number } resId - Indicates the resource ID.
     * @param { number } density - The optional parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *                to use the density of current system dpi.
     * @returns { DrawableDescriptor } The DrawableDescriptor class to get drawable image.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getDrawableDescriptor(resId: number, density?: number): DrawableDescriptor;

    /**
     * Obtains the DrawableDescriptor of the media file corresponding to a specified resource Name.
     *
     * @param { string } resName - Indicates the resource name.
     * @param { number } density - The optional parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *             to use the density of current system dpi.
     * @returns { DrawableDescriptor } The DrawableDescriptor class to get drawable image.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001003 - If the resName invalid.
     * @throws { BusinessError } 9001004 - If the resource not found by resName.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getDrawableDescriptorByName(resName: string, density?: number): DrawableDescriptor;

    /**
     * Obtains the DrawableDescriptor of the media file corresponding to a specified resource.
     *
     * @param { Resource } resource - Indicates the resource object.
     * @param { number } density - The optional parameter ScreenDensity{@link ScreenDensity}, A value of 0 means
     *             to use the density of current system dpi.
     * @returns { DrawableDescriptor } The DrawableDescriptor class to get drawable image.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001001 - If the resId invalid.
     * @throws { BusinessError } 9001002 - If the resource not found by resId.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getDrawableDescriptor(resource: Resource, density?: number): DrawableDescriptor;

    /**
     * Obtains the rawfile resource list corresponding to the specified resource path in callback mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @param { _AsyncCallback<Array<string>> } callback - Indicates the asynchronous callback used to return the raw file list.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getRawFileList(path: string, callback: _AsyncCallback<Array<string>>): void;

    /**
     * Obtains the rawfile resource list corresponding to the specified resource path in Promise mode.
     *
     * @param { string } path - Indicates the resource relative path.
     * @returns { Promise<Array<string>> } The rawfile list corresponding to the specified resource path.
     * @throws { BusinessError } 401 - If the input parameter invalid.
     * @throws { BusinessError } 9001005 - If the resource not found by path.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 10
     */
    getRawFileList(path: string): Promise<Array<string>>;
  }

  /**
   * Contains rawFile descriptor information.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @since 9
   */
  /**
   * Contains rawFile descriptor information.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @since 10
   */
  export type RawFileDescriptor = _RawFileDescriptor;

  /**
   * Contains resource descriptor information.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @since 9
   */
  /**
   * Contains resource descriptor information.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @since 10
   */
  export type Resource = _Resource;
}
export default resourceManager;