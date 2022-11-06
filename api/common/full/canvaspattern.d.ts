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
 * Describes an opaque object of a template, which is created using the createPattern() method.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
export interface CanvasPattern {
  /**
   * Adds the matrix transformation effect to the current template.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @param transform transformation matrix
   * @since 9
   */
  setTransform(transform?: Matrix2D): void;
}

/**
 * 2D transformation matrix, supporting rotation, translation, and scaling of the X-axis and Y-axis
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
export class Matrix2D {
  /**
   * Horizontal Zoom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  scaleX?: number;

  /**
   * Vertical Tilt
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  rotateY?: number;

  /**
   * Horizontal Tilt
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  rotateX?: number;

  /**
   * Vertical Zoom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  scaleY?: number;

  /**
   * Horizontal movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  translateX?: number;

  /**
   * Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  translateY?: number;

  /**
   * Constructs a 2D change matrix object. The default value is the unit matrix.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  constructor();
}
