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
 * Defines the navigation common title.
 *
 * @interface NavigationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the navigation common title.
 *
 * @interface NavigationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the navigation common title.
 *
 * @interface NavigationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavigationCommonTitle {
  /**
   * Sets the main title.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the main title.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the main title.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  main: string;

  /**
   * Sets the sub title.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the sub title.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the sub title.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  sub: string;
}

/**
 * Defines the navigation custom title.
 *
 * @interface NavigationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the navigation custom title.
 *
 * @interface NavigationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the navigation custom title.
 *
 * @interface NavigationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavigationCustomTitle {
  /**
   * Sets the custom title builder.
   *
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the custom title builder.
   *
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the custom title builder.
   *
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  builder: CustomBuilder;

  /**
   * Sets the custom title height.
   *
   * @type { TitleHeight | Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the custom title height.
   *
   * @type { TitleHeight | Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the custom title height.
   *
   * @type { TitleHeight | Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  height: TitleHeight | Length;
}


/**
 * Navigation mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Navigation mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Navigation mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum NavigationMode {
  /**
   * The navigation bar and the content area are displayed in stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The navigation bar and the content area are displayed in stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Stack,

  /**
   * The navigation bar and the content area are displayed side by side.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The navigation bar and the content area are displayed side by side.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Split,

  /**
   * If the window width is greater than 520vp, the navigation component is displayed in split mode.
   * Otherwise it's displayed in stack mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * If the window width is greater than the sum of minNavBarWidth and minContentWidth, the navigation component is displayed in split mode.
   * Otherwise it's displayed in stack mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Auto,
}

/**
 * Navigation bar position
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Navigation bar position
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Navigation bar position
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum NavBarPosition {
  /**
   * The navigation bar is on the Start of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The navigation bar is on the Start of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Start,

  /**
   * The navigation bar is on the End of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The navigation bar is on the End of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  End,
}

/**
 * Navigation title mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Navigation title mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Navigation title mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum NavigationTitleMode {
  /**
   * The title is free mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The title is free mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Free = 0,

  /**
   * The title is full mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The title is full mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Full,

  /**
   * The title is mini mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The title is mini mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Mini,
}

/**
 * Navigation menu item, include menu icon and menu info
 *
 * @interface NavigationMenuItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Navigation menu item, include menu icon and menu info
 *
 * @interface NavigationMenuItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavigationMenuItem {
  /**
   * The value of navigation menu item.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The value of navigation menu item.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The value of navigation menu item.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  value: string;

  /**
   * The icon of navigation menu item.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The icon of navigation menu item.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The icon of navigation menu item.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  icon?: string;

  /**
   * Trigger by navigation menu item click.
   *
   * @type { ?(() => void) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger by navigation menu item click.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger by navigation menu item click.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  action?: () => void;
}

/**
 * Indicates the information of route page.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Indicates the information of route page.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class NavPathInfo {
  /**
   * Creates an instance of NavPathInfo.
   *
   * @param { string } name - The name of route page.
   * @param { unknown } param - The detailed parameter of the route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Creates an instance of NavPathInfo.
   *
   * @param { string } name - The name of route page.
   * @param { unknown } param - The detailed parameter of the route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  constructor(name: string, param: unknown);

  /**
   * The name of route page.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The name of route page.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  name: string;

  /**
   * The detailed parameter of the route page.
   *
   * @type { ?unknown }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The detailed parameter of the route page.
   *
   * @type { ?unknown }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  param?: unknown;
}

/**
 * Indicates the information of route page.Providers methods for controlling destination page in the stack
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Indicates the information of route page.Providers methods for controlling destination page in the stack
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class NavPathStack {
  /**
   * Creates an instance of NavPathStack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Creates an instance of NavPathStack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  constructor();

  /**
   * Pushes the route page into the stack.
   *
   * @param { NavPathInfo } info - Indicates the route page to be pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pushes the route page into the stack.
   *
   * @param { NavPathInfo } info - Indicates the route page to be pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  pushPath(info: NavPathInfo): void;

  /**
   * Pushes the specified route page into the stack.
   *
   * @param { string } name - Indicates the name of the route page to be pushed.
   * @param { unknown } param - Indicates the detailed parameter of the route page to be pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pushes the specified route page into the stack.
   *
   * @param { string } name - Indicates the name of the route page to be pushed.
   * @param { unknown } param - Indicates the detailed parameter of the route page to be pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  pushPathByName(name: string, param: unknown): void;

  /**
   * replace the current page with the specific one.The current page will be destroyed.
   *
   * @param { NavPathInfo } info - Indicates the the new route page in top of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  replacePath(info: NavPathInfo): void;

  /**
   * replace the current page with the specific one.The current page will be destroyed.
   *
   * @param { string } name - Indicates name of the new route page in top of stack.
   * @param { Object } param - Indicates the detailed parameter of the new route page in top of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  replacePathByName(name: string, param: Object): void;

  /**
   * Pops the top route page out of the stack.
   *
   * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty, otherwise returns undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pops the top route page out of the stack.
   *
   * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty, otherwise returns undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  pop(): NavPathInfo | undefined;

  /**
   * Pops the specified route page out of the stack.
   *
   * @param { string } name - Indicates the name of the route page to be popped.
   * @returns { number } Returns the index of the route page if it exists in the stack, otherwise returns -1;
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pops the specified route page out of the stack.
   *
   * @param { string } name - Indicates the name of the route page to be popped.
   * @returns { number } Returns the index of the route page if it exists in the stack, otherwise returns -1;
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  popToName(name: string): number;

  /**
   * Pops the specified route page out of the stack.
   *
   * @param { number } index - Indicates the index of the route page to be popped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pops the specified route page out of the stack.
   *
   * @param { number } index - Indicates the index of the route page to be popped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  popToIndex(index: number): void;

  /**
   * Moves the specified route page to stack top.
   *
   * @param { string } name - Indicates the name of the route page to be moved to the top.
   * @returns { number } Returns the index of the route page if it exists in the stack, otherwise returns -1;
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Moves the specified route page to stack top.
   *
   * @param { string } name - Indicates the name of the route page to be moved to the top.
   * @returns { number } Returns the index of the route page if it exists in the stack, otherwise returns -1;
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  moveToTop(name: string): number;

  /**
   * Moves the specified route page to stack top.
   *
   * @param { number } index - Indicates the index of the route page to be moved to the top.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Moves the specified route page to stack top.
   *
   * @param { number } index - Indicates the index of the route page to be moved to the top.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  moveIndexToTop(index: number): void;

  /**
   * Clears the stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Clears the stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  clear(): void;

  /**
   * Obtains all the page name in the stack.
   *
   * @returns { Array<string> } Returns all the page name in the stack;
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains all the page name in the stack.
   *
   * @returns { Array<string> } Returns all the page name in the stack;
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getAllPathName(): Array<string>;

  /**
   * Obtains the param of the specified route page.
   *
   * @param { number } index - Indicates the index of the route page.
   * @returns { unknown | undefined } Returns the detailed parameter of the route page if it exists in the stack, otherwise returns undefined;
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the param of the specified route page.
   *
   * @param { number } index - Indicates the index of the route page.
   * @returns { unknown | undefined } Returns the detailed parameter of the route page if it exists in the stack, otherwise returns undefined;
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getParamByIndex(index: number): unknown | undefined;

  /**
   * Obtains the param of the specified route page.
   *
   * @param { string } name - Indicates the name of the route page.
   * @returns { Array<unknown> } Returns the detailed parameter of all the route pages named name.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the param of the specified route page.
   *
   * @param { string } name - Indicates the name of the route page.
   * @returns { Array<unknown> } Returns the detailed parameter of all the route pages named name.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getParamByName(name: string): Array<unknown>;

  /**
   * Obtains the index of the specified route page.
   *
   * @param { string } name - Indicates the name of the route page.
   * @returns { Array<number> } Returns the index of all the route pages named name.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the index of the specified route page.
   *
   * @param { string } name - Indicates the name of the route page.
   * @returns { Array<number> } Returns the index of all the route pages named name.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getIndexByName(name: string): Array<number>;

  /**
   * Obtains the size of the stack.
   *
   * @returns { number } Returns the size of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the size of the stack.
   *
   * @returns { number } Returns the size of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  size(): number;
}

/**
 * Provide navigator view interface
 *
 * @interface NavigationInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provide navigator view interface
 *
 * @interface NavigationInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provide navigator view interface
 *
 * @interface NavigationInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface NavigationInterface {
  /**
   * Called when the navigator view interface is used.
   *
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the navigator view interface is used.
   *
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the navigator view interface is used.
   *
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (): NavigationAttribute;

  /**
   * Called when the navigator view interface is used, with route table provided.
   *
   * @param { NavPathStack } pathInfos - The stack of the route table.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the navigator view interface is used, with route table provided.
   *
   * @param { NavPathStack } pathInfos - The stack of the route table.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (pathInfos: NavPathStack): NavigationAttribute;
}

/**
 * Defines the status of toolbar item and it is used in the ToolbarItem interface.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the status of toolbar item and it is used in the ToolbarItem interface.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ToolbarItemStatus {
  /**
   * Normal state of toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Normal state of toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  NORMAL = 0,

  /**
   * Disable state of toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Disable state of toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  DISABLED = 1,

  /**
   * Active state of toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Active state of toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  ACTIVE = 2,
}

/**
 * Defines configurable parameters for toolbar item.
 *
 * @interface ToolbarItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines configurable parameters for toolbar item.
 *
 * @interface ToolbarItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare interface ToolbarItem {
  /**
   * The value of navigation toolbar item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The value of navigation toolbar item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  value: ResourceStr;

  /**
   * The icon of navigation toolbar item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The icon of navigation toolbar item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  icon?: ResourceStr;

  /**
   * Trigger by navigation toolbar item click.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger by navigation toolbar item click.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  action?: () => void;

  /**
   * The state of navigation toolbar item.
   *
   * @type { ?ToolbarItemStatus }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The state of navigation toolbar item.
   *
   * @type { ?ToolbarItemStatus }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  status?: ToolbarItemStatus;

  /**
   * The icon of navigation toolbar item in active state.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The icon of navigation toolbar item in active state.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  activeIcon?: ResourceStr;
}

/**
 * Declare Navigation view properties.
 *
 * @extends CommonMethod<NavigationAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Declare Navigation view properties.
 *
 * @extends CommonMethod<NavigationAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Declare Navigation view properties.
 *
 * @extends CommonMethod<NavigationAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class NavigationAttribute extends CommonMethod<NavigationAttribute> {
  /**
   * Sets the width of navigation bar.
   *
   * @param { Length } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the width of navigation bar.
   *
   * @param { Length } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the width of navigation bar.
   *
   * @param { Length } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  navBarWidth(value: Length): NavigationAttribute;

  /**
   * Sets the position of navigation bar.
   *
   * @param { NavBarPosition } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the position of navigation bar.
   *
   * @param { NavBarPosition } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the position of navigation bar.
   *
   * @param { NavBarPosition } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  navBarPosition(value: NavBarPosition): NavigationAttribute;

  /**
   * Sets the minimum width and the maximum width of navigation bar.
   *
   * @param { [Dimension, Dimension] } value - The minimum and the maximum width of navigation bar.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the minimum width and the maximum width of navigation bar.
   *
   * @param { [Dimension, Dimension] } value - The minimum and the maximum width of navigation bar.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  navBarWidthRange(value: [Dimension, Dimension]): NavigationAttribute;

  /**
   * Sets the minimum width of content.
   *
   * @param { Dimension } value - The minimum width of content.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the minimum width of content.
   *
   * @param { Dimension } value - The minimum width of content.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  minContentWidth(value: Dimension): NavigationAttribute;

  /**
   * Sets the mode of navigation.
   *
   * @param { NavigationMode } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the mode of navigation.
   *
   * @param { NavigationMode } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the mode of navigation.
   *
   * @param { NavigationMode } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  mode(value: NavigationMode): NavigationAttribute;

  /**
   * Sets the back button icon.
   *
   * @param { string | PixelMap | Resource } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the back button icon.
   *
   * @param { string | PixelMap | Resource } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the back button icon.
   *
   * @param { string | PixelMap | Resource } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  backButtonIcon(value: string | PixelMap | Resource): NavigationAttribute;

  /**
   * Hide the navigation bar.
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Hide the navigation bar.
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Hide the navigation bar.
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  hideNavBar(value: boolean): NavigationAttribute;

  /**
   * Navigation title
   *
   * @param { ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Navigation title
   *
   * @param { ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Navigation title
   *
   * @param { ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Navigation title
   *
   * @param { ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  title(value: ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle): NavigationAttribute;

  /**
   * Navigation subtitle
   *
   * @param { string } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   * @deprecated since 9
   * @useinstead title
   */
  subTitle(value: string): NavigationAttribute;

  /**
   * Hide navigation title bar
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Hide navigation title bar
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Hide navigation title bar
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  hideTitleBar(value: boolean): NavigationAttribute;

  /**
   * Hide navigation back button
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Hide navigation back button
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Hide navigation back button
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  hideBackButton(value: boolean): NavigationAttribute;

  /**
   * Navigation title mode
   *
   * @param { NavigationTitleMode } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Navigation title mode
   *
   * @param { NavigationTitleMode } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Navigation title mode
   *
   * @param { NavigationTitleMode } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  titleMode(value: NavigationTitleMode): NavigationAttribute;

  /**
   * Navigation title bar's menus
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Navigation title bar's menus
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Navigation title bar's menus
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  menus(value: Array<NavigationMenuItem> | CustomBuilder): NavigationAttribute;

  /**
   * Tool bar
   *
   * @param { object | CustomBuilder } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   * @deprecated since 10
   * @useinstead navigation/NavigationAttribute#toolbarConfiguration
   */
  toolBar(value: object | CustomBuilder): NavigationAttribute;

  /**
    * Configure toolbar with default style parameter or custom parameter.
    *
    * @param { Array<ToolbarItem> | CustomBuilder } value - Toolbar configuration parameters.
    * @returns { NavigationAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 10
    * @form
    */
  /**
    * Configure toolbar with default style parameter or custom parameter.
    *
    * @param { Array<ToolbarItem> | CustomBuilder } value - Toolbar configuration parameters.
    * @returns { NavigationAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 11
    * @form
    */
  toolbarConfiguration(value: Array<ToolbarItem> | CustomBuilder): NavigationAttribute;

  /**
   * Hide tool bar
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Hide tool bar
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Hide tool bar
   *
   * @param { boolean } value
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  hideToolBar(value: boolean): NavigationAttribute;

  /**
   * Trigger callback when title mode change finished at free mode.
   *
   * @param { (titleMode: NavigationTitleMode) => void } callback
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger callback when title mode change finished at free mode.
   *
   * @param { function } callback
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger callback when title mode change finished at free mode.
   *
   * @param { function } callback
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onTitleModeChange(callback: (titleMode: NavigationTitleMode) => void): NavigationAttribute;

  /**
   * Trigger callback when the visibility of navigation bar change.
   *
   * @param { (isVisible: boolean) => void } callback
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Trigger callback when the visibility of navigation bar change.
   *
   * @param { function } callback
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger callback when the visibility of navigation bar change.
   *
   * @param { function } callback
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onNavBarStateChange(callback: (isVisible: boolean) => void): NavigationAttribute;

  /**
   * Trigger callback when navigation mode changes.
   *
   * @param { function } callback
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onNavigationModeChange(callback: (mode: NavigationMode) => void): NavigationAttribute;

  /**
   * Set builder for user-defined NavDestination component.
   *
   * @param { function } builder - The builder function of NavDestination component.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set builder for user-defined NavDestination component.
   *
   * @param { function } builder - The builder function of NavDestination component.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  navDestination(builder: (name: string, param: unknown) => void): NavigationAttribute;
}

/**
 * Defines Navigation Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Navigation Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Navigation Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Navigation: NavigationInterface;

/**
 * Defines Navigation Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Navigation Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Navigation Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const NavigationInstance: NavigationAttribute;
