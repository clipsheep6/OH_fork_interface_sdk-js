/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,software
 * distributed under the License is distributed on an "ASIS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Callback } from './basic';

/**
 * Enumerates the string value match pattern.
 *
 * @enum {number}
 * @syscap SystemCapability.Test.UiTest
 * @since 8
 */
declare enum MatchPattern {
  /**
   * Equals to a string.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  EQUALS = 0,
  /**
   * Contains a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  CONTAINS = 1,
  /**
   * StartsWith a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  STARTS_WITH = 2,
  /**
   * EndsWith a substring.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  ENDS_WITH = 3
}

/**
 * Describes the attribute requirements for the target UiComponents.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.uitest.On
 */
declare class By {
  /**
   * Specifies the text for the target UiComponent.
   *
   * @param { string } txt The text value.
   * @param { MatchPattern } pattern The {@link MatchPattern} of the text value,default to {@link MatchPattern.EQUALS}
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#text
   * @test
   */
  text(txt: string, pattern?: MatchPattern): By;

  /**
   * Specifies the inspector key of the target UiComponent.
   *
   * @param { string } key The inspectorKey value.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#id
   * @test
   */
  key(key: string): By;

  /**
   * Specifies the id of the target UiComponent.
   *
   * @param { number } id The id value.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @test
   */
  id(id: number): By;

  /**
   * Specifies the type of the target UiComponent.
   *
   * @param { string } tp The type value.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#type
   * @test
   */
  type(tp: string): By;

  /**
   * Specifies the clickable status of the target UiComponent.
   *
   * @param { boolean } b The clickable status,default to true.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#clickable
   * @test
   */
  clickable(b?: boolean): By;

  /**
   * Specifies the scrollable status of the target UiComponent.
   *
   * @param { boolean } b The scrollable status,default to true.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#scrollable
   * @test
   */
  scrollable(b?: boolean): By;

  /**
   * Specifies the enabled status of the target UiComponent.
   *
   * @param { boolean } b The enabled status,default to true.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#enabled
   * @test
   */
  enabled(b?: boolean): By;

  /**
   * Specifies the focused status of the target UiComponent.
   *
   * @param { boolean } b The focused status,default to true.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#focused
   * @test
   */
  focused(b?: boolean): By;

  /**
   * Specifies the selected status of the target UiComponent.
   *
   * @param { boolean } b The selected status,default to true.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#selected
   * @test
   */
  selected(b?: boolean): By;

  /**
   * Requires the target UiComponent which is before another UiComponent that specified by the given {@link By}
   * object,used to locate UiComponent relatively.
   *
   * @param { By } by Describes the attribute requirements of UiComponent which the target one is in front of.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link On.isBefore }
   * @test
   */
  isBefore(by: By): By;

  /**
   * Requires the target UiComponent which is after another UiComponent that specified by the given {@link By}
   * object,used to locate UiComponent relatively.
   *
   * @param { By } by Describes the attribute requirements of UiComponent which the target one is in back of.
   * @returns { By } this {@link By} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link On.isAfter }
   * @test
   */
  isAfter(by: By): By;
}

/**
 * Represents a UiComponent of the ohos application,user can perform operations or query attributes on it.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.uitest.Component
 * @test
 */
declare class UiComponent {
  /**
   * Click this {@link UiComponent}.
   *
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.Component#click
   * @test
   */
  click(): Promise<void>;

  /**
   * Double click this {@link UiComponent}.
   *
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.doubleClick }
   * @test
   */
  doubleClick(): Promise<void>;

  /**
   * Long click this {@link UiComponent}.
   *
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.longClick }
   * @test
   */
  longClick(): Promise<void>;

  /**
   * Get the id attribute value.
   *
   * @returns { Promise<number> } the id value.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @test
   */
  getId(): Promise<number>;

  /**
   * Get the inspectorKey attribute value.
   *
   * @returns { Promise<string> } the inspectorKey value.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.getId }
   * @test
   */
  getKey(): Promise<string>;

  /**
   * Get the text attribute value.
   *
   * @returns { Promise<string> } the text value.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.getText }
   * @test
   */
  getText(): Promise<string>;

  /**
   * Get the type name.
   *
   * @returns { Promise<string> } the type name.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.getType }
   * @test
   */
  getType(): Promise<string>;

  /**
   * Get the clickable status of this {@link UiComponent}.
   *
   * @returns { Promise<boolean> } the clickable status.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.isClickable }
   * @test
   */
  isClickable(): Promise<boolean>;

  /**
   * Get the scrollable status of this {@link UiComponent}.
   *
   * @returns { Promise<boolean> } the scrollable status.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.isScrollable }
   * @test
   */
  isScrollable(): Promise<boolean>;

  /**
   * Get the enabled status of this {@link UiComponent}.
   *
   * @returns { Promise<boolean> } the enabled status.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.isEnabled }
   * @test
   */
  isEnabled(): Promise<boolean>;

  /**
   * Get the focused status of this {@link UiComponent}.
   *
   * @returns { Promise<boolean> } the focused status.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.isFocused }
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * Get the selected status of this {@link UiComponent}.
   *
   * @returns { Promise<boolean> } the selected status.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.isSelected }
   * @test
   */
  isSelected(): Promise<boolean>;

  /**
   * Inject text to this {@link UiComponent},applicable to TextInput.
   *
   * @param { string } text The text to inject.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.inputText }
   * @test
   */
  inputText(text: string): Promise<void>;

  /**
   * Scroll on this {@link UiComponent}to find matched {@link UiComponent},applicable to scrollable one.
   *
   * @param { By } by The attribute requirements of the target {@link UiComponent}.
   * @returns { Promise<UiComponent> } the found result,or undefined if not found.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Component.scrollSearch }
   * @test
   */
  scrollSearch(by: By): Promise<UiComponent>;
}

/**
 * The unified facade of UiTest framework,can be used to find {@link UiComponent},trigger keyEvents,perform
 * coordinates-based UI actions,capture screen and so on.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.uitest.Driver
 * @test
 */
declare class UiDriver {
  /**
   * Create an {@link UiDriver} object.
   *
   * @returns { UiDriver } the {@link UiDriver} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.Driver#create
   * @test
   */
  static create(): UiDriver;

  /**
   * Delay with specified duration.
   *
   * @param { number } duration The delay duration in milliseconds.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Driver.delayMs }
   * @test
   */
  delayMs(duration: number): Promise<void>;

  /**
   * Find the first matched {@link UiComponent} on current UI.
   *
   * @param { By } by The attribute requirements of the target {@link UiComponent}.
   * @returns { Promise<UiComponent> } the first matched {@link UiComponent} or undefined.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Driver.findComponent }
   * @test
   */
  findComponent(by: By): Promise<UiComponent>;

  /**
   * Find all the matched {@link UiComponent}s on current UI.
   *
   * @param { By } by The attribute requirements of the target {@link UiComponent}.
   * @returns { Promise<Array<UiComponent>> } the matched {@link UiComponent}s list.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Driver.findComponents }
   * @test
   */
  findComponents(by: By): Promise<Array<UiComponent>>;

  /**
   * Assert the matched {@link UiComponent}s exists on current UI;if not,assertError will be raised.
   *
   * @param { By } by The attribute requirements of the target {@link UiComponent}.
   * @returns { Promise<void> }
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000003 - if the assertion failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Driver.assertComponentExist }
   * @test
   */
  assertComponentExist(by: By): Promise<void>;

  /**
   * Press the BACK key.
   *
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Driver.pressBack }
   * @test
   */
  pressBack(): Promise<void>;

  /**
   * Press the specified key.
   *
   * @param { number } keyCode the target keyCode.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Driver.pressHome }
   * @test
   */
  triggerKey(keyCode: number): Promise<void>;

  /**
   * Click on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.Driver#click
   * @test
   */
  click(x: number, y: number): Promise<void>;

  /**
   * DoubleClick on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Driver.doubleClick }
   * @test
   */
  doubleClick(x: number, y: number): Promise<void>;

  /**
   * LongClick on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Driver.longClick }
   * @test
   */
  longClick(x: number, y: number): Promise<void>;

  /**
   * Swipe on the screen between the specified points.
   *
   * @param { number } startx The x-coordinate of the starting point.
   * @param { number } starty The y-coordinate of the starting point.
   * @param { number } endx The x-coordinate of the ending point.
   * @param { number } endy The y-coordinate of the ending point.
   * @returns { Promise<void> }
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.Driver#swipe
   * @test
   */
  swipe(startx: number, starty: number, endx: number, endy: number): Promise<void>;

  /**
   * Capture current screen and save as picture which PNG format.
   *
   * @param { string } savePath the path where to store the picture.
   * @returns { Promise<boolean> } true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead { @link Driver.screenCap }
   * @test
   */
  screenCap(savePath: string): Promise<boolean>;
}

/**
 * Enumerates the window mode of the tested window.
 *
 * @enum { number }
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare enum WindowMode {
  /**
   * The test window is a full screen window.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  FULLSCREEN = 0,
  /**
   * The test window is the first window in the split screen state.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  PRIMARY = 1,
  /**
   * The test window is the second window in the split screen state.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  SECONDARY = 2,
  /**
   * The test window is a floating window.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  FLOATING = 3
}

/**
 * Enumerates the resize direction for the window.
 *
 * @enum { number }
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare enum ResizeDirection {
  /**
   * Left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  LEFT = 0,
  /**
   * Right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  RIGHT = 1,
  /**
   * Up.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  UP = 2,
  /**
   * Down.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  DOWN = 3,
  /**
   * Upper left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  LEFT_UP = 4,
  /**
   * Lower left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  LEFT_DOWN = 5,
  /**
   * Upper right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  RIGHT_UP = 6,
  /**
   * Lower right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  RIGHT_DOWN = 7
}

/**
 * Enumerates the rotation of the device display.
 *
 * @enum { number }
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare enum DisplayRotation {
  /**
   * Device display does not rotate to display vertically.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  ROTATION_0 = 0,
  /**
   * Device display rotates 90 degrees clockwise to display horizontally.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  ROTATION_90 = 1,
  /**
   * Device display rotates clockwise 180 degrees to display vertically in reverse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  ROTATION_180 = 2,
  /**
   * Device display rotates 270 degrees clockwise to display horizontally in reverse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  ROTATION_270 = 3
}

/**
 * Represents the point on the device screen.
 *
 * @typedef Point
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare interface Point {
  /**
   * The x-coordinate of the coordinate point.
   *
   * @type { number }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  readonly x: number;
  /**
   * The y-coordinate of the coordinate point.
   *
   * @type { number }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  readonly y: number;
}

/**
 * Represents the rectangle area on the device screen.
 *
 * @typedef Rect 
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare interface Rect {
  /**
   * The x-coordinate of the top left corner of the rectangle.
   *
   * @type { number }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  readonly left: number;
  /**
   * The y-coordinate of the top left corner of the rectangle.
   *
   * @type { number }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  readonly top: number;
  /**
   * The x-coordinate at the bottom right corner of the rectangle.
   *
   * @type { number }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  readonly right: number;
  /**
   * The y-coordinate at the bottom right corner of the rectangle.
   *
   * @type { number }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  readonly bottom: number;
}

/**
 * Represents filer condition to get the window .
 *
 * @typedef WindowFilter
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare interface WindowFilter {
  /**
   * The package name of the application which the window belongs to.
   *
   * @type { string? }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  bundleName?: string;
  /**
   * The title of the window.
   *
   * @type { string? }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  title?: string;
  /**
   * The focal state of the window.
   *
   * @type { boolean? }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  focused?: boolean;
  /**
   * The active state of the window.
   *
   * @type { boolean? }
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   */
  actived?: boolean;
}

/**
 * Represents the information of an UI element, can be a component or window.
 * 
 * @typedef UiElementInfo
 * @syscap SystemCapability.Test.UiTest
 * @since 10
 * @test
 */
declare interface UiElementInfo {
  /**
   * The bundle name of the host application.
   * @type { string }
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  readonly bundleName: string;
  /**
   * The component type.
   * @type { string }
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  readonly componentType: string;
  /**
   * The window title.
   * @type { string }
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  readonly title: string;
}

/**
 * Observer to monitor UI events.
 * 
 * @typedef UiEventObserver
 * @syscap SystemCapability.Test.UiTest
 * @since 10
 * @test
 */
declare interface UiEventObserver {
  /**
   * Listen for toast show once
   * 
   * @param { string } type 'toastShow'.
   * @param { Callback<UiElementInfo> } callback function, returns the monitored UiElementInfo.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  once(type: 'toastShow', callback: Callback<UiElementInfo>): void;

  /**
   * Listen for dialog show once
   * 
   * @param { string } type 'dialogShow'.
   * @param { Callback<UiElementInfo> } callback function, returns the monitored UiElementInfo.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  once(type: 'dialogShow', callback: Callback<UiElementInfo>): void;
}

/**
 * Enumerates the direction for the UI operation .
 *
 * @enum { number }
 * @syscap SystemCapability.Test.UiTest
 * @since 10
 */
declare enum UiDirection {
  /**
   * Left.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  LEFT = 0,
  /**
   * Right.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  RIGHT = 1,
  /**
   * Up.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  UP = 2,
  /**
   * Down.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  DOWN = 3
}

/**
 * Enumerates the id of the button on the mouse.
 *
 * @enum { number }
 * @syscap SystemCapability.Test.UiTest
 * @since 10
 */
declare enum MouseButton {
  /**
   * Left button of the mouse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  MOUSE_BUTTON_LEFT = 0,
  /**
   * Right button of the mouse..
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  MOUSE_BUTTON_RIGHT = 1,
  /**
   * MIDDLE button of the mouse.
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  MOUSE_BUTTON_MIDDLE = 2
}

/**
 * Describes the attribute requirements for the target Components.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare class On {
  /**
   * Specifies the text for the target Component.
   *
   * @param { string } txt The text value.
   * @param { MatchPattern } pattern The {@link MatchPattern} of the text value, default to {@link MatchPattern.EQUALS}
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  text(txt: string, pattern?: MatchPattern): On;

  /**
   * Specifies the id of the target Component.
   *
   * @param { string } id The id value.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  id(id: string): On;

  /**
   * Specifies the type of the target Component.
   *
   * @param { string } tp The type value.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  type(tp: string): On;

  /**
   * Specifies the clickable status of the target Component.
   *
   * @param { boolean } b The clickable status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  clickable(b?: boolean): On;

  /**
   * Specifies the longClickable status of the target Component.
   *
   * @param { boolean } b The clickable status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  longClickable(b?: boolean): On;

  /**
   * Specifies the scrollable status of the target Component.
   *
   * @param { boolean } b The scrollable status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  scrollable(b?: boolean): On;

  /**
   * Specifies the enabled status of the target Component.
   *
   * @param { boolean } b The enabled status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  enabled(b?: boolean): On;

  /**
   * Specifies the focused status of the target Component.
   *
   * @param { boolean } b The focused status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  focused(b?: boolean): On;

  /**
   * Specifies the selected status of the target Component.
   *
   * @param { boolean } b The selected status,default to true.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  selected(b?: boolean): On;

  /**
   * Specifies the checked status of the target Component.
   *
   * @param { boolean } b The checked status,default to false.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  checked(b?: boolean): On;

  /**
   * Specifies the checkable status of the target Component.
   *
   * @param { boolean } b The checkable status,default to false.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  checkable(b?: boolean): On;

  /**
   * Requires that the target Component which is before another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on Describes the attribute requirements of Component which the target one is in front of.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isBefore(on: On): On;

  /**
   * Requires that the target Component which is after another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on Describes the attribute requirements of Component which the target one is in back of.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isAfter(on: On): On;

  /**
   * Requires that the target Component which is inside of another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on Describes the attribute requirements of Component which the target one is inside of.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  within(on: On): On;

  /**
   * Specifies the bundleName of the application which the window that the target Component is located belongs.
   *
   * @param { string } bundleName The bundleName of the specified window.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  inWindow(bundleName: string): On;
}

/**
 * Represents an Component of the ohos application,user can perform operations or query attributes on it.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 * @test
 */
declare class Component {
  /**
   * Click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  click(): Promise<void>;

  /**
   * Double click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  doubleClick(): Promise<void>;

  /**
   * Long click this {@link Component}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  longClick(): Promise<void>;

  /**
   * Get the id attribute value.
   *
   * @returns { Promise<string> } the id value.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getId(): Promise<string>;

  /**
   * Get the text attribute value.
   *
   * @returns { Promise<string> } the text value.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getText(): Promise<string>;

  /**
   * Get the type name.
   *
   * @returns { Promise<string> } the type name.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getType(): Promise<string>;

  /**
   * Get the clickable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the clickable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isClickable(): Promise<boolean>;

  /**
   * Get the longClickable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the longClickable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isLongClickable(): Promise<boolean>;

  /**
   * Get the scrollable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the scrollable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isScrollable(): Promise<boolean>;

  /**
   * Get the enabled status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the enabled status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isEnabled(): Promise<boolean>;

  /**
   * Get the focused status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the focused status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * Get the selected status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the selected status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isSelected(): Promise<boolean>;

  /**
   * Get the checked status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the checked status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isChecked(): Promise<boolean>;

  /**
   * Get the checkable status of this {@link Component}.
   *
   * @returns { Promise<boolean> } the checkable status.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isCheckable(): Promise<boolean>;

  /**
   * Inject text to this {@link Component},applicable to TextInput.
   *
   * @param { string } text The text to inject.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  inputText(text: string): Promise<void>;

  /**
   * Clear text of this {@link Component},applicable to TextInput.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  clearText(): Promise<void>;

  /**
   * Scroll on this {@link Component} to the top,applicable to scrollable one.
   *
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  scrollToTop(speed?: number): Promise<void>;

  /**
   * Scroll on this {@link Component} to the bottom,applicable to scrollable one.
   *
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  scrollToBottom(speed?: number): Promise<void>;

  /**
   * Scroll on this {@link Component}to find matched {@link Component},applicable to scrollable one.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<Component> } the found result,or undefined if not found.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  scrollSearch(on: On): Promise<Component>;

  /**
   * Get the bounds rect of this {@link Component}.
   *
   * @returns { Promise<Rect> } the bounds rect object.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getBounds(): Promise<Rect>;

  /**
   * Get the boundsCenter of this {@link Component}.
   *
   * @returns { Promise<Point> } the boundsCenter object.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getBoundsCenter(): Promise<Point>;

  /**
   * Drag this {@link Component} to the bounds rect of target Component.
   *
   * @param { Component } target The target {@link Component}.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  dragTo(target: Component): Promise<void>;

  /**
   * Pinch enlarge this {@link Component} to the target scale.
   *
   * @param { number } scale The scale of the pinch enlarge this {@link Component}'s size.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  pinchOut(scale: number): Promise<void>;

  /**
   * Pinch shrink this {@link Component} to the target scale.
   *
   * @param { number } scale The scale of the pinch shrink this {@link Component}'s size.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  pinchIn(scale: number): Promise<void>;
}

/**
 * The unified facade of UiTest framework,can be used to find {@link Component},trigger keyEvents,perform
 * coordinates-based UI actions,capture screen and so on.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 * @test
 */
declare class Driver {
  /**
   * Create an {@link Driver} object.
   *
   * @returns { Driver } the {@link Driver} object.
   * @throws { BusinessError } 17000001 - if the test framework failed to initialize.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  static create(): Driver;

  /**
   * Delay with specified duration.
   *
   * @param { number } duration The delay duration in milliseconds.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  delayMs(duration: number): Promise<void>;

  /**
   * Find the first matched {@link Component} on current UI.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<Component> } the first matched {@link Component} or undefined.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  findComponent(on: On): Promise<Component>;

  /**
   * Find the first matched {@link UiWindow} window.
   *
   * @param { WindowFilter } filter The filer condition of the target {@link UiWindow}.
   * @returns { Promise<UiWindow> } the first matched {@link UiWindow} or undefined.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  findWindow(filter: WindowFilter): Promise<UiWindow>;

  /**
   * Find the first matched {@link Component} on current UI during the time given.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @param { number } time Duration of finding in milliseconds
   * @returns { Promise<Component> } the first matched {@link Component} or undefined.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  waitForComponent(on: On, time: number): Promise<Component>;

  /**
   * Find all the matched {@link Component}s on current UI.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<Array<Component>> } the matched {@link Component}s list.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  findComponents(on: On): Promise<Array<Component>>;

  /**
   * Assert t the matched {@link Component}s exists on current UI;if not,assertError will be raised.
   *
   * @param { On } on The attribute requirements of the target {@link Component}.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000003 - if the assertion failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  assertComponentExist(on: On): Promise<void>;

  /**
   * Press the BACK key.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  pressBack(): Promise<void>;

  /**
   * Press the specified key.
   *
   * @param { number } keyCode the target keyCode.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  triggerKey(keyCode: number): Promise<void>;

  /**
   * Press two or three key combinations
   *
   * @param { number } key0 the first keyCode.
   * @param { number } key1 the second keyCode.
   * @param { number } key2 the third keyCode.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  triggerCombineKeys(key0: number, key1: number, key2?: number): Promise<void>;

  /**
   * Click on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  click(x: number, y: number): Promise<void>;

  /**
   * DoubleClick on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  doubleClick(x: number, y: number): Promise<void>;

  /**
   * LongClick on the specified location on the screen.
   *
   * @param { number } x The x-coordinate.
   * @param { number } y The y-coordinate.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  longClick(x: number, y: number): Promise<void>;

  /**
   * Swipe on the screen between the specified points.
   *
   * @param { number } startx The x-coordinate of the starting point.
   * @param { number } starty The y-coordinate of the starting point.
   * @param { number } endx The x-coordinate of the ending point.
   * @param { number } endy The y-coordinate of the ending point.
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  swipe(startx: number, starty: number, endx: number, endy: number, speed?: number): Promise<void>;

  /**
   * Drag on the screen between the specified points.
   *
   * @param { number } startx The x-coordinate of the starting point.
   * @param { number } starty The y-coordinate of the starting point.
   * @param { number } endx The x-coordinate of the ending point.
   * @param { number } endy The y-coordinate of the ending point.
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  drag(startx: number, starty: number, endx: number, endy: number, speed?: number): Promise<void>;

  /**
   * Capture current screen and save as picture which PNG format.
   *
   * @param { string } savePath the path where to store the picture.
   * @returns { Promise<boolean> } true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  screenCap(savePath: string): Promise<boolean>;

  /**
   * Set the rotation of the device display.
   *
   * @param { DisplayRotation } rotation The target rotation to set.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  setDisplayRotation(rotation: DisplayRotation): Promise<void>;

  /**
   * Get the rotation of the device display.
   *
   * @returns { Promise<DisplayRotation> } the current display rotation.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getDisplayRotation(): Promise<DisplayRotation>;

  /**
   * Enable/disable the rotation of device display.
   *
   * @param { boolean } enabled Enable the rotation or not.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  setDisplayRotationEnabled(enabled: boolean): Promise<void>;

  /**
   * Get the size of the device display.
   *
   * @returns { Promise<Point> } the size of the device display.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getDisplaySize(): Promise<Point>;

  /**
   * Get the density of the device display.
   *
   * @returns { Promise<Point> } the density of the device display.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getDisplayDensity(): Promise<Point>;

  /**
   * Wake up the device display.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  wakeUpDisplay(): Promise<void>;

  /**
   * Press the home key.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  pressHome(): Promise<void>;

  /**
   * Wait for the UI become idle.
   *
   * @param { number } idleTime the threshold of UI idle time, in millisecond.
   * @param { number } timeout The maximum time to wait for idle, in millisecond.
   * @returns { Promise<boolean> } true if wait for idle succeed in the timeout, false otherwise.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  waitForIdle(idleTime: number, timeout: number): Promise<boolean>;

  /**
   * Inject fling on the device display.
   *
   * @param { Point } from The coordinate point where the finger touches the screen.
   * @param { Point } to The coordinate point where the finger leaves the screen.
   * @param { number } stepLen the length of each step, in pixels.
   * @param { number } speed The speed of fling (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  fling(from: Point, to: Point, stepLen: number, speed: number): Promise<void>;

  /**
   * Inject multi-pointer action on the device display.
   *
   * @param { PointerMatrix } pointers The two-dimensional array of pointers to inject.
   * @param { number } speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<boolean> } true if the operation finished, false
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  injectMultiPointerAction(pointers: PointerMatrix, speed?: number): Promise<boolean>;

  /**
   * Inject fling on the device display.
   *
   * @param { UiDirection } direction The direction of this action.
   * @param { number } speed The speed of fling (pixels per second),default is 600,the value ranges from 200 to 40000,set it 600 if out of range.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  fling(direction: UiDirection, speed: number): Promise<void>;

  /**
   * Click on the specified location on the screen with the specified mouse button, and press the specified key simultaneously if necessary.
   *
   * @param { Point } p The coordinate of the specified location.
   * @param { MouseButton } btnId The button of Mouse.
   * @param { number } key1 the first keyCode.
   * @param { number } key2 the second keyCode.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  mouseClick(p: Point, btnId: MouseButton, key1?: number, key2?: number): Promise<void>;

  /**
   * Move the mouse cursor to the specified location.
   *
   * @param { Point } p The coordinate of the specified location.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  mouseMoveTo(p: Point): Promise<void>;

  /**
   * The mouse wheel scrolls the specified cell at the specified position, and press the specified key simultaneously if necessary.
   *
   * @param { Point } p The coordinate of the specified location.
   * @param { boolean } down Whether the mouse wheel rolls down.
   * @param { number } d The number of cells that the mouse wheel scrolls, each cell will make the target point shift 120 pixels.
   * @param { number } key1 the first keyCode.
   * @param { number } key2 the second keyCode.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  mouseScroll(p: Point, down: boolean, d: number, key1?: number, key2?: number): Promise<void>;

  /**
   * Capture the specified area of current screen and save as picture which PNG format.
   *
   * @param { string } savePath the path where to store the picture.
   * @param { Rect } rect The specified area of current screen, default full screen.
   * @returns { Promise<boolean> } true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @syscap SystemCapability.Test.UiTest
   * @since 10
   * @test
   */
  screenCapture(savePath: string, rect?: Rect): Promise<boolean>;
}

/**
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 * @test
 */
declare class UiWindow {
  /**
   * Get the bundle name of this {@link UiWindow}.
   *
   * @returns { Promise<string> } the bundle name.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getBundleName(): Promise<string>;

  /**
   * Get the bounds rect of this {@link UiWindow}.
   *
   * @returns { Promise<Rect> } the bounds rect object.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getBounds(): Promise<Rect>;

  /**
   * Get the title of this {@link UiWindow}.
   *
   * @returns { Promise<string> } the title value.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getTitle(): Promise<string>;

  /**
   * Get the window mode of this {@link UiWindow}.
   *
   * @returns { Promise<WindowMode> } the {@link WindowMode} object
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  getWindowMode(): Promise<WindowMode>;

  /**
   * Get the focused status of this {@link UiWindow}.
   *
   * @returns { Promise<boolean> } the focused status
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * Get the active status of this {@link UiWindow}.
   *
   * @returns { Promise<boolean> } the actived status
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  isActived(): Promise<boolean>;

  /**
   * Set the focused status of this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  focus(): Promise<void>;

  /**
   * Move this {@link UiWindow} to the specified points.
   *
   * @param { number } x The x coordinate of destination.
   * @param { number } y The y coordinate of destination.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  moveTo(x: number, y: number): Promise<void>;

  /**
   * Resize this {@link UiWindow} to the specified size for the specified direction.
   *
   * @param { number } wide The expected wide of the window after resizing.
   * @param { number } height The expected height of the window after resizing.
   * @param { ResizeDirection } direction The expected direction of the window after resizing.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  resize(wide: number, height: number, direction: ResizeDirection): Promise<void>;

  /**
   * Change this {@link UiWindow} into split screen mode.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  split(): Promise<void>;

  /**
   * Maximize this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  maximize(): Promise<void>;

  /**
   * Minimize this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  minimize(): Promise<void>;

  /**
   * Resume this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  resume(): Promise<void>;

  /**
   * Close this {@link UiWindow}.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 17000002 - if the async function was not called with await.
   * @throws { BusinessError } 17000004 - if the window is invisible or destroyed.
   * @throws { BusinessError } 17000005 - if the action is not supported on this window.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  close(): Promise<void>;
}

/**
 * Represents a two-dimensional array of pointers on the device display, it's used to build a
 * multi-finger trace which can be injected with UiDriver.
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 * @test
 */
declare class PointerMatrix {
  /**
   * Create an {@link PointerMatrix} object.
   *
   * @param { number } fingers The number of fingers.
   * @param { number } steps The number of steps of each finger trace.
   * @returns { PointerMatrix } the {@link PointerMatrix} object.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  static create(fingers: number, steps: number): PointerMatrix;

  /**
   * Set the point value of an element in the PointerMatrix.
   *
   * @param { number } finger The index of target finger to set.
   * @param { number } step The index of target step to set.
   * @param { Point } point The coordinate of target step to set.
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @test
   */
  setPoint(finger: number, step: number, point: Point): void;
}

/**
 * The static builder for building {@link By}object conveniently,usage example:BY.text('txt').enabled(true).
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.uitest.ON
 * @test
 */
declare const BY: By;
/**
 * The static builder for building {@link On}object conveniently,usage example:ON.text('txt').enabled(true).
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 * @test
 */
declare const ON: On;

export {
  UiComponent,
  UiDriver,
  Component,
  Driver,
  UiWindow,
  ON,
  BY,
  MatchPattern,
  DisplayRotation,
  ResizeDirection,
  WindowMode,
  PointerMatrix,
  UiDirection,
  MouseButton,
  UiElementInfo,
  UiEventObserver
};
