/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * Indicates the information of the route page.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RouteInfo {
  /**
   * The name of the route page.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  name: string;

  /**
   * The detailed parameter of the route page.
   * @type { unknown }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */ 
  param?: unknown;
}

/**
 * The construct function of NavRouter.
 * @since 9
 */
declare interface NavRouterInterface {
  /**
   * Constructor.
   * @since 9
   */
  (): NavRouterAttribute;

  /**
   * NavDestination Constructor.
   * @param { RouteInfo } value Indicates the information of route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (value: RouteInfo): NavRouterAttribute;
}

/**
 * Define the route mode.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum NavRouteMode {
  /**
   * Create a new page to replace the current. The old page is destroyed but kept in the stack for recreating. 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  PUSH_WITH_RECREATE,

  /**
   * Create a new page to cover the current. The old page is remained and kept in the stack. 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  PUSH,

  /**
   * Create a new page to replace the current. The old page is destroyed and removed out of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  REPLACE
}

/**
 * The attribute function of NavRouter
 * @since 9
 */
declare class NavRouterAttribute extends CommonMethod<NavRouterAttribute> {
  /**
   * Trigger callback when NavigationView state change.
   * @since 9
   */
  onStateChange(callback: (isActivated: boolean) => void): NavRouterAttribute;

  /**
   * Define the route mode.
   * @param { mode } The route mode of the NavRouter.
   * @default NavRouterMode.PUSH_WITH_RECREATE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { NavRouterAttribute } Returns the instance of the NavRouterAttribute.
   * @since 10
   */
  mode(mode: NavRouteMode): NavRouterAttribute;
}

/**
 * Defines NavRouter Component.
 * @since 9
 */
declare const NavRouter: NavRouterInterface;

/**
 * Defines NavRouter Component instance.
 * @since 9
 */
declare const NavRouterInstance: NavRouterAttribute;
