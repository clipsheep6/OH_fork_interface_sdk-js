/*
* Copyright (c) 2024 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkGraphics2D
 */

import { AsyncCallback } from './@ohos.base';


/**
 * @namespace uiEffect
 * @syscap SystemCapability.Graphics.Drawing
 * @since 12
 */

declare namespace uiEffect {

  /**
   * The Filter for Component.
   * @typedef Filter
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface Filter {
    /**
     * Set the edge pixel stretch effect of the Component.
     *
     * @param { Array<number> } stretchSizes
     * @param { TileMode } tileMode
     * @returns { Filter }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    pixelStretch(stretchSizes: Array<number>, tileMode: TileMode): Filter;
  }

  /**
   * TileMode enumeration description
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  enum TileMode {
    /**
     * Clamp mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    CLAMP = 0,

    /**
     * Repeat mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    REPEAT = 1,

    /**
     * Mirror mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    MIRROR = 2,

    /**
     * Decal mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    DECAL = 3,
  }

  /**
   * The VisualEffect of Component.
   * @typedef VisualEffect
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface VisualEffect {
    /**
    * A backgroundColorEffect effect is added to the Component.
    * @param { BrightnessBlender } blender - The blender to blend backgroundColor.
    * @returns { VisualEffect } VisualEffects for the current effect have been added.
    * @syscap SystemCapability.Graphics.Drawing
    * @systemapi
    * @since 12
    */
    backgroundColorBlender(blender: BrightnessBlender): VisualEffect;
  }

  /**
   * The Blender of backgroundColorEffect.
   * @typedef BrightnessBlender
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  interface BrightnessBlender {
    /**
     * Defines the brightness cubicRate.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    cubicRate: number;
    /**
     * Defines the brightness quadRate.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    quadRate: number;
    /**
     * Defines the brightness LinearRate.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    linearRate: number;
    /**
     * Defines the brightness degree.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    degree: number;
    /**
     * Defines the brightness saturation.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    saturation: number;
    /**
     * Defines the brightness positiveCoeff.
     *
     * @type { [number, number, number] }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    positiveCoeff: [number, number, number];
    /**
     * Defines the brightness negativeCoeff.
     *
     * @type { [number, number, number] }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    negativeCoeff: [number, number, number];
    /**
     * Defines the brightness fraction.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    fraction: number;
  }

  /**
   * Create a Filter to add multiple effects to the component.
   * @returns { Filter } Returns the head node of Filter.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  function createFilter(): Filter;

  /**
     * Create a VisualEffect to add multiple effects to the component.
     * @returns { VisualEffect } Returns the head node of visualEffect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
  function createEffect(): VisualEffect;

  /**
   * Create a BrightnessBlender to add BrightnessBlender to the component.
   * @param { number } cubicRate - The cubicRate to brightness blender.
   * @param { number } quadRate - The quadRate to brightness blender.
   * @param { number } linearRate - The linearRate to brightness blender.
   * @param { number } degree - The degree to brightness blender.
   * @param { number } saturation - The saturation to brightness blender.
   * @param { Array<number> } positiveCoeff - The positiveCoeff to brightness blender.
   * @param { Array<number> } negativeCoeff - The negativeCoeff to brightness blender.
   * @param { number } fraction - The fraction to brightness blender.
   * @returns { BrightnessBlender } Returns the blender.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  function createBrightnessBlender(cubicRate: number, quadRate: number, linearRate: number, degree: number, saturation: number,
    positiveCoeff: Array<number>, negativeCoeff: Array<number>, fraction: number): BrightnessBlender;
}

export default uiEffect;
