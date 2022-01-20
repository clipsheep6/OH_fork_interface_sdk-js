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
 * Declare sliderstyle
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum SliderStyle {
  /**
   * The slider is on the slide rail.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  OutSet = 0,

  /**
   * The slider is in the slide rail.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  InSet,
}

/**
 * Declare SliderChangeMode
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum SliderChangeMode {
  /**
   * Start dragging the slider.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Begin = 0,

  /**
   * Drag the slider.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Moving,

  /**
   * End dragging the slider.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  End,
}

/**
 * Defines the option of Slider.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare interface SliderOption {
  /**
   * Current value of Slider.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  value?: number;

  /**
   * Sets the min value of Slider.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  min?: number;

  /**
   * Sets the max value of Slider.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  max?: number;

  /**
   * Sets the step of each slide value.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  step?: number;

  /**
   * Sets the slider style.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  style?: SliderStyle;

  /**
   * Sets the slider direction style.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  direction?: Axis;

  /**
   * Set whether the direction of the slider needs to be reversed.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  reverse?: boolean;
}

/**
 * Provides an interface for the slide bar component.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface SliderInterface {
  /**
   * Called when the slider bar component is used.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (options?: SliderOption): SliderAttribute;
}

/**
 * Defines the attribute functions of Slider.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class SliderAttribute extends CommonMethod<SliderAttribute> {
  /**
   * Called when the slider color of the slider bar is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  blockColor(value: ResourceColor): SliderAttribute;

  /**
   * Called when the track color of the slider is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  trackColor(value: ResourceColor): SliderAttribute;

  /**
   * Called when the slider of the slider bar is set to slide over the area color.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  selectedColor(value: ResourceColor): SliderAttribute;

  /**
   * Called when the minimum label is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  minLabel(value: string): SliderAttribute;

  /**
   * Called when the maximum label is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  maxLabel(value: string): SliderAttribute;

  /**
   * Called when setting whether to display step size.
   * @devices phone, tablet, car
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  showSteps(value: boolean): SliderAttribute;

  /**
   * Called when the percentage of bubble prompt is set when sliding.
   * @devices phone, tablet, car
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  showTips(value: boolean): SliderAttribute;

  /**
   * Called when the selection value changes.
   * @devices phone, tablet, car
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onChange(callback: (value: number, mode: SliderChangeMode) => void): SliderAttribute;
}

declare const Slider: SliderInterface;
declare const SliderInstance: SliderAttribute;
