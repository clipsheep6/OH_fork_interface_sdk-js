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
 * Declare the graphic format of the bar chart.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare the graphic format of the bar chart.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum BarMode {
  /**
   * The actual layout width of the TabBar is used. If the width exceeds the total width, you can slide the tabbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The actual layout width of the TabBar is used. If the width exceeds the total width, you can slide the tabbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Scrollable,

  /**
   * The width of all TabBars is evenly allocated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The width of all TabBars is evenly allocated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Fixed
}

/**
 * Declare the location of the bar chart.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare the location of the bar chart.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum BarPosition {
  /**
   * When the vertical attribute method is set to true, the tab is on the left of the container. When the vertical property method is set to false, the tab is at the top of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * When the vertical attribute method is set to true, the tab is on the left of the container. When the vertical property method is set to false, the tab is at the top of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Start,

  /**
   * When the vertical attribute method is set to true, the tab is located on the right of the container. When the vertical property method is set to false, the tab is at the bottom of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * When the vertical attribute method is set to true, the tab is located on the right of the container. When the vertical property method is set to false, the tab is at the bottom of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  End
}

/**
 * @since 7
 */
/**
 * @crossplatform
 * @since 10
 */
declare class TabsController {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Called when the tab is switched.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the tab is switched.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  changeIndex(value: number): void;
}

/**
 * Provides an interface for switching views.
 *
 * @interface TabsInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface for switching views.
 *
 * @interface TabsInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface TabsInterface {
  /**
   * Called when the view is switched.
   *
   * @param { ?({ barPosition?: BarPosition; index?: number; controller?: TabsController }) } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the view is switched.
   *
   * @param { ?({ barPosition?: BarPosition; index?: number; controller?: TabsController }) } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  (value?: { barPosition?: BarPosition; index?: number; controller?: TabsController }): TabsAttribute;
}

/**
 * Provides an interface for the style of an divider including stroke width, color, start margin
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
   * @default 0
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
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  startMargin?: Length;

  /**
   * Define the end margin of the divider
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  endMargin?: Length;
}

/**
 * Defines the tabs attribute functions.
 *
 * @extends CommonMethod
 * @since 7
 */
/**
 * Defines the tabs attribute functions.
 *
 * @extends CommonMethod
 * @crossplatform
 * @since 10
 */
declare class TabsAttribute extends CommonMethod<TabsAttribute> {
  /**
   * Called when determining whether the tab is vertical.
   *
   * @param { boolean } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when determining whether the tab is vertical.
   *
   * @param { boolean } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  vertical(value: boolean): TabsAttribute;

  /**
   * Called when determining the location of the bar chart.
   *
   * @param { BarPosition } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when determining the location of the bar chart.
   *
   * @param { BarPosition } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  barPosition(value: BarPosition): TabsAttribute;

  /**
   * Called when judging whether page switching can be performed by sliding left and right.
   *
   * @param { boolean } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when judging whether page switching can be performed by sliding left and right.
   *
   * @param { boolean } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  scrollable(value: boolean): TabsAttribute;

  /**
   * Called when the graphic format of the bar chart is selected.
   *
   * @param { BarMode } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the graphic format of the bar chart is selected.
   *
   * @param { BarMode } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  barMode(value: BarMode): TabsAttribute;

  /**
   * Called when the width of the bar graph is set.
   * Notice: barWidth only supports Number type on 7, supports Length type since 8.
   *
   * @param { Length } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the width of the bar graph is set.
   * Notice: barWidth only supports Number type on 7, supports Length type since 8.
   *
   * @param { Length } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  barWidth(value: Length): TabsAttribute;

  /**
   * Called when the height of the bar graph is set.
   * Notice: barHeight only supports Number type on 7, supports Length type since 8.
   *
   * @param { Length } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the height of the bar graph is set.
   * Notice: barHeight only supports Number type on 7, supports Length type since 8.
   *
   * @param { Length } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  barHeight(value: Length): TabsAttribute;

  /**
   * Called when the animation duration of the bar graph is set.
   *
   * @param { number } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the animation duration of the bar graph is set.
   *
   * @param { number } value
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  animationDuration(value: number): TabsAttribute;

  /**
   * Called when the tab is switched.
   *
   * @param { (index: number) => void } event
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the tab is switched.
   *
   * @param { (index: number) => void } event
   * @returns { TabsAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onChange(event: (index: number) => void): TabsAttribute;

  /**
   * Set whether the edges of tab bar are fading.
   *
   * @param { boolean } value - indicates whether the edges of tab bar are fading.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  fadingEdge(value: boolean): TabsAttribute;

  /**
   * Set the divider between tab bar and tab content.
   *
   * @param { DividerStyle | null } value - indicates the style of the indicator.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  divider(value: DividerStyle | null): TabsAttribute;

  /**
   * Set whether the tab bar overlaps with the tab content.
   *
   * @param { boolean } value - indicates whether the tab bar overlaps with the tab content.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  barOverlap(value: boolean): TabsAttribute;

  /**
   * Set the background color of the tab bar.
   *
   * @param { ResourceColor } value - indicates the background color of the tab bar.
   * @returns { TabsAttribute } the attribute of the tabs
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  barBackgroundColor(value: ResourceColor): TabsAttribute;
}

/**
 * Defines Tabs Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Tabs Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const Tabs: TabsInterface;

/**
 * Defines Tabs Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Tabs Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const TabsInstance: TabsAttribute;
