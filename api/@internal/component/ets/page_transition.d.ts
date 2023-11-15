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
 * Declare the jump method.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare the jump method.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum RouteType {
  /**
   * The page is not redirected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The page is not redirected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  None,

  /**
   * Go to the next page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Go to the next page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Push,

  /**
   * Redirect to a specified page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Redirect to a specified page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Pop,
}

/**
 * Declare the sliding effect of transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare the sliding effect of transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum SlideEffect {
  /**
   * Swipe left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Swipe left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Left,

  /**
   * Swipe right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Swipe right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Right,

  /**
   * Swipe top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Swipe top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Top,

  /**
   * Swipe bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Swipe bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Bottom,
}

/**
 * Provides interfaces for common transitions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides interfaces for common transitions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class CommonTransition<T> {
  /**
   * Called when a transition method is required.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when a transition method is required.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Called when the slide in effect of the transition is set.
   *
   * @param { SlideEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the slide in effect of the transition is set.
   *
   * @param { SlideEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  slide(value: SlideEffect): T;

  /**
   * Called when the translation effect of page transition is set.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the translation effect of page transition is set.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  translate(value: { x?: number | string; y?: number | string; z?: number | string }): T;

  /**
   * Called when setting the zoom effect of page transition.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when setting the zoom effect of page transition.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  scale(value: { x?: number; y?: number; z?: number; centerX?: number | string; centerY?: number | string }): T;

  /**
   * Called when the transparency value of the starting point of entry or the ending point of exit is set.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the transparency value of the starting point of entry or the ending point of exit is set.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  opacity(value: number): T;
}

/**
 * Defines pageTransition constructor parameters.
 *
 * @interface PageTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines pageTransition constructor parameters.
 *
 * @interface PageTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface PageTransitionOptions {
  /**
   * RouteType in which the pageTransition can work.
   * @type { ?RouteType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * RouteType in which the pageTransition can work.
   * @type { ?RouteType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  type?: RouteType;
  /**
   * PageTransition animation duration, in ms.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * PageTransition animation duration, in ms.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  duration?: number;
  /**
   * PageTransition animation curve.
   * @type { ?(Curve | string | ICurve) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * PageTransition animation curve.
   * @type { ?(Curve | string | ICurve) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  curve?: Curve | string | ICurve;
  /**
   * PageTransition animation delay time, in ms.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @type { ?number }
   * @since 7
   */
  /**
   * PageTransition animation delay time, in ms.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  delay?: number;
}
 
/**
 * Provides an interface for page rotation mode.
 *
 * @interface PageTransitionEnterInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface to set transition style when a page enters.
 *
 * @interface PageTransitionEnterInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface PageTransitionEnterInterface extends CommonTransition<PageTransitionEnterInterface> {
  /**
   * Called when page Jump animation is used.
   *
   * @param { PageTransitionOptions } value
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when page Jump animation is used.
   *
   * @param { PageTransitionOptions } value - pageTransition options
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  (value: PageTransitionOptions): PageTransitionEnterInterface;

  /**
   * Called when the incoming parameter is the normalized progress of the current incoming animation.
   *
   * @param { function } event
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called frame by frame to customize pageTransition animation when the page enters.
   * The incoming parameter is the normalized progress of the current incoming animation.
   *
   * @param { function } event - animation callback frame by frame
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onEnter(event: (type: RouteType, progress: number) => void): PageTransitionEnterInterface;
}

/**
 * Provide an interface to exit the transition.
 *
 * @interface PageTransitionExitInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provide an interface to set transition style when a page exits.
 *
 * @interface PageTransitionExitInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface PageTransitionExitInterface extends CommonTransition<PageTransitionExitInterface> {
  /**
   * Called when the transition is delayed.
   *
   * @param { PageTransitionOptions } value
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when page Jump animation is used.
   *
   * @param { PageTransitionOptions } value - pageTransition options
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  (value: PageTransitionOptions): PageTransitionExitInterface;

  /**
   * Called when the input parameter is the normalized progress of the current exit animation.
   *
   * @param { function } event
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called frame by frame to customize pageTransition animation when the page exits.
   * The input parameter is the normalized progress of the current exit animation.
   *
   * @param { function } event
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onExit(event: (type: RouteType, progress: number) => void): PageTransitionExitInterface;
}

/**
 * Defines PageTransitionEnter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines PageTransitionEnter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const PageTransitionEnter: PageTransitionEnterInterface;

/**
 * Defines PageTransitionExit Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines PageTransitionExit Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const PageTransitionExit: PageTransitionExitInterface;
