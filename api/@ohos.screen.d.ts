/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './basic';

/**
 * Interface of screen manager
 *
 * @namespace screen
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi Hide this for inner system use.
 * @since 9
 */
declare namespace screen {
  /**
   * Get all screen
   *
   * @param { AsyncCallback<Array<Screen>> } callback the callback of all screens info
   * @throws { BusinessError } 1400001 - If display or screen is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getAllScreens(callback: AsyncCallback<Array<Screen>>): void;

  /**
   * Get all screen
   *
   * @returns { Promise<Array<Screen>> } the result of all screens info
   * @throws { BusinessError } 1400001 - If display or screen is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getAllScreens(): Promise<Array<Screen>>;

  /**
   * Register the callback for screen changes.
   *
   * @param { 'connect' | 'disconnect' | 'change' } eventType the event of screen changes
   * @param { Callback<number> } callback Callback used to return the screen ID
   * @throws { BusinessError } 401 - If param is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<number>): void;

  /**
   * Unregister the callback for screen changes.
   *
   * @param { 'connect' | 'disconnect' | 'change' } eventType the event of screen changes
   * @param { Callback<number> } callback Callback used to return the screen ID
   * @throws { BusinessError } 401 - If param is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<number>): void;

  /**
   * Make screens as expand-screen
   *
   * @param { Array<ExpandOption> } options Parameters for expanding the screen
   * @param { AsyncCallback<number> } callback callback used to return the group ID of the expanded screens
   * @throws { BusinessError } 401 - If param is invalid
   * @throws { BusinessError } 1400001 - If display or screen is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function makeExpand(options: Array<ExpandOption>, callback: AsyncCallback<number>): void;

  /**
   * Make screens as expand-screen
   *
   * @param { Array<ExpandOption> } options Parameters for expanding the screen
   * @returns { Promise<number> } used to return the group ID of the expanded screens
   * @throws { BusinessError } 401 - If param is invalid
   * @throws { BusinessError } 1400001 - If display or screen is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function makeExpand(options: Array<ExpandOption>): Promise<number>;

  /**
   * Make screens as mirror-screen
   *
   * @param { number } mainScreen ID of the primary screen
   * @param { Array<number> } mirrorScreen IDs of secondary screens
   * @param { AsyncCallback<number> } callback Callback used to return the group ID of the secondary screens
   * @throws { BusinessError } 401 - If param is invalid
   * @throws { BusinessError } 1400001 - If display or screen is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function makeMirror(mainScreen: number, mirrorScreen: Array<number>, callback: AsyncCallback<number>): void;

  /**
   * Make screens as mirror-screen
   *
   * @param { number } mainScreen ID of the primary screen
   * @param { Array<number> } mirrorScreen IDs of secondary screens
   * @returns { Promise<number> } Promise used to return the group ID of the secondary screens
   * @throws { BusinessError } 401 - If param is invalid
   * @throws { BusinessError } 1400001 - If display or screen is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function makeMirror(mainScreen: number, mirrorScreen: Array<number>): Promise<number>;

  /**
   * Create virtual screen. if surfaceId is valid, this permission is necessary.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { VirtualScreenOption } options Indicates the options of the virtual screen.
   * @param { AsyncCallback<Screen> } callback Callback used to return the created virtual screen
   * @throws { BusinessError } 201 - If there is no permission
   * @throws { BusinessError } 401 - If param is invalid
   * @throws { BusinessError } 1400001 - If display or screen is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function createVirtualScreen(options: VirtualScreenOption, callback: AsyncCallback<Screen>): void;

  /**
   * Create virtual screen. if surfaceId is valid, this permission is necessary.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { VirtualScreenOption } options Indicates the options of the virtual screen.
   * @returns { Promise<Screen> } Promise used to return the created virtual screen
   * @throws { BusinessError } 201 - If there is no permission
   * @throws { BusinessError } 401 - If param is invalid
   * @throws { BusinessError } 1400001 - If display or screen is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function createVirtualScreen(options: VirtualScreenOption): Promise<Screen>;

  /**
   * Destroy virtual screen.
   *
   * @param { number } screenId Indicates the screen id of the virtual screen.
   * @param { AsyncCallback<void> } callback Callback used to return the result.
   * @throws { BusinessError } 401 - If param is invalid
   * @throws { BusinessError } 1400002 - If operation other screen
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function destroyVirtualScreen(screenId: number, callback: AsyncCallback<void>): void;

  /**
   * Destroy virtual screen.
   *
   * @param { number } screenId Indicates the screen id of the virtual screen.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - If param is invalid
   * @throws { BusinessError } 1400002 - If operation other screen
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function destroyVirtualScreen(screenId: number): Promise<void>;

  /**
   * Set surface for the virtual screen.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { number } screenId Indicates the screen id of the virtual screen.
   * @param { string } surfaceId Indicates the surface id.
   * @param { AsyncCallback<void> } callback Callback used to return the result
   * @throws { BusinessError } 201 - If there is no permission
   * @throws { BusinessError } 401 - If param is invalid
   * @throws { BusinessError } 1400001 - If display or screen is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setVirtualScreenSurface(screenId: number, surfaceId: string, callback: AsyncCallback<void>): void;

  /**
   * Set surface for the virtual screen.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { number } screenId Indicates the screen id of the virtual screen.
   * @param { string } surfaceId Indicates the surface id.
   * @returns { Promise<void> } Promise that returns no value
   * @throws { BusinessError } 201 - If there is no permission
   * @throws { BusinessError } 401 - If param is invalid
   * @throws { BusinessError } 1400001 - If display or screen is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setVirtualScreenSurface(screenId: number, surfaceId: string): Promise<void>;

  /**
   * Get screen rotation lock status.
   *
   * @param { AsyncCallback<boolean> } callback If true, auto rotate is locked. If false, auto rotate is unlocked
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function isScreenRotationLocked(callback: AsyncCallback<boolean>): void;

  /**
   * Get screen rotation lock status.
   *
   * @returns { Promise<boolean> } If true, auto rotate is locked. If false, auto rotate is unlocked
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function isScreenRotationLocked(): Promise<boolean>;

  /**
   * Set screen rotation lock status.
   *
   * @param { boolean } isLocked Indicates whether the screen rotation switch is locked.
   * @param { AsyncCallback<void> } callback Callback used to return the result.
   * @throws { BusinessError } 401 - If param is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setScreenRotationLocked(isLocked: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set screen rotation lock status.
   *
   * @param { boolean } isLocked Indicates whether the screen rotation switch is locked.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - If param is invalid
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setScreenRotationLocked(isLocked: boolean): Promise<void>;

  /**
   * The parameter of making expand screen
   *
   * @interface ExpandOption
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface ExpandOption {
    /**
     * Screen id
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    screenId: number;

    /**
     * The start coordinate X of the screen origin
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    startX: number;

    /**
     * The start coordinate Y of the screen origin
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    startY: number;
  }

  /**
   * The parameter for creating virtual screen.
   *
   * @interface VirtualScreenOption
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface VirtualScreenOption {
    /**
     * Indicates the name of the virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    name: string;

    /**
     * Indicates the width of the virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    width: number;

    /**
     * Indicates the height of the virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    height: number;

    /**
     * Indicates the density of the virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    density: number;

    /**
     * Indicates the surface id of the virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    surfaceId: string;
  }

  /**
   * Indicate the source mode of the screen
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  enum ScreenSourceMode {
    /**
     * Indicate that the screen is the default screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    SCREEN_MAIN = 0,

    /**
     * Indicate that the screen is in mirror mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    SCREEN_MIRROR = 1,

    /**
     * Indicate that the screen is in extend mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    SCREEN_EXTEND = 2,

    /**
     * Indicate that the screen stands alone.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    SCREEN_ALONE = 3
  }

  /**
   * Interface for screen
   *
   * @interface Screen
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface Screen {
    /**
     * Screen id
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    readonly id: number;

    /**
     * Group id
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    readonly parent: number;

    /**
     * Mode supported by the screen
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    readonly supportedModeInfo: Array<ScreenModeInfo>;

    /**
     * Currently active mode
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    readonly activeModeIndex: number;

    /**
     * Orientation of the screen
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    readonly orientation: Orientation;

    /**
     * Source mode of the screen
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    readonly sourceMode: ScreenSourceMode;

    /**
     * Set the orientation of the screen
     *
     * @param { Orientation } orientation Screen orientation.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - If param is invalid
     * @throws { BusinessError } 1400003 - If system state is abnormally
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setOrientation(orientation: Orientation, callback: AsyncCallback<void>): void;

    /**
     * Set the orientation of the screen
     *
     * @param { Orientation } orientation Screen orientation.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - If param is invalid
     * @throws { BusinessError } 1400003 - If system state is abnormally
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setOrientation(orientation: Orientation): Promise<void>;

    /**
     * Active the mode
     *
     * @param { number } modeIndex Index of the mode to set.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - If param is invalid
     * @throws { BusinessError } 1400003 - If system state is abnormally
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setScreenActiveMode(modeIndex: number, callback: AsyncCallback<void>): void;

    /**
     * Active the mode
     *
     * @param { number } modeIndex Index of the mode to set.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - If param is invalid
     * @throws { BusinessError } 1400003 - If system state is abnormally
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setScreenActiveMode(modeIndex: number): Promise<void>;

    /**
     * Set display density of the screen
     *
     * @param { number } densityDpi Pixel density. The value ranges from 80 to 640.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - If param is invalid
     * @throws { BusinessError } 1400003 - If system state is abnormally
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setDensityDpi(densityDpi: number, callback: AsyncCallback<void>): void;

    /**
     * Set display density of the screen
     *
     * @param { number } densityDpi Pixel density. The value ranges from 80 to 640.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - If param is invalid
     * @throws { BusinessError } 1400003 - If system state is abnormally
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setDensityDpi(densityDpi: number): Promise<void>;
  }

  /**
   * Screen orientation
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  enum Orientation {
    UNSPECIFIED = 0,
    VERTICAL = 1,
    HORIZONTAL = 2,
    REVERSE_VERTICAL = 3,
    REVERSE_HORIZONTAL = 4
  }

  /**
   * The information of the screen
   *
   * @interface ScreenModeInfo
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface ScreenModeInfo {
    id: number;
    width: number;
    height: number;
    refreshRate: number;
  }
}

export default screen;
