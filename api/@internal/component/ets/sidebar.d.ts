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

/**
 * Sets the sidebar style of showing
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Sets the sidebar style of showing
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum SideBarContainerType {
  /**
   * The sidebar invisible
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The sidebar invisible
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Embed,

  /**
   * The sidebar visible
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The sidebar visible
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Overlay,

  /**
   * The sidebar AUTO 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  AUTO,
}

/**
 * Sets the sidebar position of showing
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Sets the sidebar position of showing
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum SideBarPosition {
  /**
   * The sidebar is on the Start of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The sidebar is on the Start of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Start,

  /**
   * The sidebar is on the End of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The sidebar is on the End of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  End,
}

/**
 * Sets the control button style
 *
 * @interface ButtonStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Sets the control button style
 *
 * @interface ButtonStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface ButtonStyle {
  /**
   * Set the left of control button
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set the left of control button
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  left?: number;

  /**
   * Set the top of control button
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set the top of control button
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  top?: number;

  /**
   * Set the width of control button
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set the width of control button
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  width?: number;

  /**
   * Set the height of control button
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set the height of control button
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  height?: number;

  /**
   * Set the button icon when sidebar status has changed
   *
   * @type { ?({shown: string | PixelMap | Resource;
   * hidden: string | PixelMap | Resource;
   * switching?: string | PixelMap | Resource;}) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set the button icon when sidebar status has changed
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  icons?: {
    shown: string | PixelMap | Resource;
    hidden: string | PixelMap | Resource;
    switching?: string | PixelMap | Resource;
  };
}

/**
 * The construct function of sidebar
 *
 * @interface SideBarContainerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The construct function of sidebar
 *
 * @interface SideBarContainerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface SideBarContainerInterface {
  /**
   * Called when showing the sidebar of a block entry.
   *
   * @param { SideBarContainerType } type
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when showing the sidebar of a block entry.
   *
   * @param { SideBarContainerType } type
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  (type?: SideBarContainerType): SideBarContainerAttribute;
}

/**
 * Provides an interface for the style of a divider including stroke width, color, start margin
 * and end margin
 *
 * @interface DividerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface DividerStyle {
  /**
   * Define the stroke width of the divider
   *
   * @type { Length }
   * @default 1vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  strokeWidth: Length;

  /**
   * Define the color of the divider
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  color?: ResourceColor;

  /**
   * Define the start margin of the divider
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  startMargin?: Length;

  /**
   * Define the end margin of the divider
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  endMargin?: Length;
}

/**
 * The attribute function of sidebar
 *
 * @extends CommonMethod
 * @since 8
 */
/**
 * The attribute function of sidebar
 *
 * @extends CommonMethod
 * @crossplatform
 * @since 10
 */
declare class SideBarContainerAttribute extends CommonMethod<SideBarContainerAttribute> {
  /**
   * Callback showControlButton function when setting the status of sidebar
   *
   * @param { boolean } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Callback showControlButton function when setting the status of sidebar
   *
   * @param { boolean } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  showSideBar(value: boolean): SideBarContainerAttribute;

  /**
   * Callback controlButton function when setting the style of button
   *
   * @param { ButtonStyle } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Callback controlButton function when setting the style of button
   *
   * @param { ButtonStyle } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  controlButton(value: ButtonStyle): SideBarContainerAttribute;

  /**
   * Callback showControlButton function when setting the status of button
   *
   * @param { boolean } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Callback showControlButton function when setting the status of button
   *
   * @param { boolean } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  showControlButton(value: boolean): SideBarContainerAttribute;

  /**
   * Trigger callback when sidebar style of showing change finished.
   *
   * @param { (value: boolean) => void } callback
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger callback when sidebar style of showing change finished.
   *
   * @param { (value: boolean) => void } callback
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onChange(callback: (value: boolean) => void): SideBarContainerAttribute;

  /**
   * Sets the length of sidebar.
   *
   * @param { number } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the length of sidebar.
   *
   * @param { number } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  sideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the min length of sidebar.
   * default value is 200vp.
   *
   * @param { number } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the min length of sidebar.
   * default value is 200vp.
   *
   * @param { number } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  minSideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the max length of sidebar.
   * default value is 280vp.
   *
   * @param { number } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the max length of sidebar.
   * default value is 280vp.
   *
   * @param { number } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  maxSideBarWidth(value: number): SideBarContainerAttribute;

  /**
   * Sets the length of sidebar.
   *
   * @param { Length } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the length of sidebar.
   *
   * @param { Length } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  sideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Sets the min length of sidebar.
   * default value is 200vp.
   *
   * @param { Length } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the min length of sidebar.
   * default value is 200vp.
   *
   * @param { Length } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  minSideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Sets the max length of sidebar.
   * default value is 280vp.
   *
   * @param { Length } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the max length of sidebar.
   * default value is 280vp.
   *
   * @param { Length } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  maxSideBarWidth(value: Length): SideBarContainerAttribute;

  /**
   * Sets whether to automatically hide when drag sidebar width is less than the minimum width.
   * default value is true.
   *
   * @param { boolean } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets whether to automatically hide when drag sidebar width is less than the minimum width.
   * default value is true.
   *
   * @param { boolean } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  autoHide(value: boolean): SideBarContainerAttribute;

  /**
   * Called when determining the location of the sidebar.
   * default value is Start.
   *
   * @param { SideBarPosition } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when determining the location of the sidebar.
   * default value is Start.
   *
   * @param { SideBarPosition } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  sideBarPosition(value: SideBarPosition): SideBarContainerAttribute;

  /**
   * Set divider style for sideBarContainer
   *
   * @param { DividerStyle | null } value - indicates the style of the divider or whether to show the divider.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  divider(value: DividerStyle | null): SideBarContainerAttribute;
  
  /**
   * Sets the min length of content.
   * @param { value: Dimension } value - min length of content.
   * @default value is 360vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { SideBarContainerAttribute }
   * @crossplatform
   * @since 10
   */
  minContentWidth(value: Dimension): SideBarContainerAttribute;
}

/**
 * Defines SideBarContainer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines SideBarContainer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const SideBarContainer: SideBarContainerInterface;

/**
 * Defines SideBarContainer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines SideBarContainer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const SideBarContainerInstance: SideBarContainerAttribute;
