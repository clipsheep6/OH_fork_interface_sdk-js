/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * The definition of ConfigurationConstant.
 *
 * @namespace ConfigurationConstant
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 9
 */
declare namespace ConfigurationConstant {
  /**
   * ColorMode
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform
   * @since 9
   */
  export enum ColorMode {
    /**
     * The color mode is not set.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform
     * @since 9
     */
    COLOR_MODE_NOT_SET = -1,

    /**
     * Dark mode.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform
     * @since 9
     */
    COLOR_MODE_DARK = 0,

    /**
     * Light mode.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform
     * @since 9
     */
    COLOR_MODE_LIGHT = 1
  }

  /**
   * Direction
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform
   * @since 9
   */
  export enum Direction {
    /**
     * The direction is not set.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform
     * @since 9
     */
    DIRECTION_NOT_SET = -1,

    /**
     * Vertical.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform
     * @since 9
     */
    DIRECTION_VERTICAL = 0,

    /**
     * Horizontally.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform
     * @since 9
     */
    DIRECTION_HORIZONTAL = 1
  }

  /**
   * ScreenDensity
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  export enum ScreenDensity {
    /**
     * The screen pixel density is not set.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    SCREEN_DENSITY_NOT_SET = 0,

    /**
     * Screen pixel density is 'SDPI'
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    SCREEN_DENSITY_SDPI = 120,

    /**
     * Screen pixel density is 'MDPI'
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    SCREEN_DENSITY_MDPI = 160,

    /**
     * Screen pixel density is 'LDPI'
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    SCREEN_DENSITY_LDPI = 240,

    /**
     * Screen pixel density is 'XLDPI'
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    SCREEN_DENSITY_XLDPI = 320,

    /**
     * Screen pixel density is 'XXLDPI'
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    SCREEN_DENSITY_XXLDPI = 480,

    /**
     * Screen pixel density is 'XXXLDPI'
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    SCREEN_DENSITY_XXXLDPI = 640
  }
}

export default ConfigurationConstant;
