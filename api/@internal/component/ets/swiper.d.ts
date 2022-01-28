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

/**
 * Provides methods for switching components.
 * @since 7
 */
declare class SwiperController {
  /**
   * constructor.
   * @since 7
   */
  constructor();

  /**
   * Called when the next child component is displayed.
   * @since 7
   */
  showNext();

  /**
   * Called when the previous subcomponent is displayed.
   * @since 7
   */
  showPrevious();

  /**
   * Called when need to stop the swiper animation.
   * @since 8
   */
  finishAnimation(callback?: () => void);
}

/**
 * Declare the size of the swiper on the spindle.
 * @since 7
 */
declare enum SwiperDisplayMode {
  /**
   * Carousel map extension.
   * @since 7
   */
  Stretch,

  /**
   * The rotation chart is self linear.
   * @since 7
   */
  AutoLinear,
}

/**
 * Provides an interface for sliding containers.
 * @since 7
 */
interface SwiperInterface {
  /**
   * Called when a sliding container is set.
   * @since 7
   */
  (controller?: SwiperController): SwiperAttribute;
}

/**
 * @since 7
 */
declare class SwiperAttribute extends CommonMethod<SwiperAttribute> {
  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
   create(controller?: SwiperController): SwiperAttribute;

  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
   pop(): SwiperAttribute;

   /**
    * Just use for genetate tsbundle
    * @ignore ide should ignore this arrtibute
    */
   debugLine(value: string): SwiperAttribute;

  /**
   * Called when the index value of the displayed subcomponent is set in the container.
   * @since 7
   */
  index(value: number): SwiperAttribute;

  /**
   * Called when setting whether the subcomponent plays automatically.
   * @since 7
   */
  autoPlay(value: boolean): SwiperAttribute;

  /**
   * Called when the time interval for automatic playback is set.
   * @since 7
   */
  interval(value: number): SwiperAttribute;

  /**
   * Called when you set whether the navigation point indicator is enabled.
   * @since 7
   */
  indicator(value: boolean): SwiperAttribute;

  /**
   * Called when setting whether to turn on cyclic sliding.
   * @since 7
   */
  loop(value: boolean): SwiperAttribute;

  /**
   * Called when the animation duration of the switch is set.
   * @since 7
   */
  duration(value: number): SwiperAttribute;

  /**
   * Called when setting whether to slide vertically.
   * @since 7
   */
  vertical(value: boolean): SwiperAttribute;

  /**
   * Called when the size of the rotation chart is set.
   * @since 7
   */
  itemSpace(value: number | string): SwiperAttribute;

  /**
   * Called when setting the size of the swiper container on the spindle.
   * @since 7
   */
  displayMode(value: SwiperDisplayMode): SwiperAttribute;

  /**
   * Called when setting the cached count of the swiper container one side.
   * @since 8
   */
  cachedCount(value: number): SwiperAttribute;

  /**
   * This command is invoked when the number of subcomponents is set.
   * @since 8
   */
  displayCount(value: number | string): SwiperAttribute;

  /**
   * Invoked when setting the sliding effect
   * @since 8
   */
  effectMode(value: EdgeEffect): SwiperAttribute;

  /**
   * Called when sliding is disableSwipe
   * @since 8
   */
  disableSwipe(value: boolean): SwiperAttribute;

  /**
   * Called when sliding is curve
   * @since 8
   */
  curve(value: Curve | string): SwiperAttribute;
  /**
   * Called when the index value changes.
   * @since 7
   */
  onChange(event: (index: number) => void): SwiperAttribute;
}

declare const Swiper: SwiperInterface;
declare const SwiperInstance: SwiperAttribute;
