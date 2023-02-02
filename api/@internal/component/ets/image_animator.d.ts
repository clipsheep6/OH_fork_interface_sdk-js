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
 * Defines the ImageAnimator Interface.
 * @since 7
 */
/**
 * Defines the ImageAnimator Interface.
 * @form
 * @since 9
 */
interface ImageAnimatorInterface {
  /**
   * ImageAnimator is returned.
   * @since 7
   */
  /**
   * ImageAnimator is returned.
   * @form
   * @since 9
   */
  (): ImageAnimatorAttribute;
}

/**
 * Defines the ImageFrameInfo Interface.
 * @since 7
 */
/**
 * Defines the ImageFrameInfo Interface.
 * @form
 * @since 9
 */
interface ImageFrameInfo {
  /**
   * Image path
   * @type { string }
   * @since 7
   */
  /**
   * Image path
   * @type { string | Resource }
   * @form
   * @since 9
   */
  src: string | Resource;
  /**
   * Image width
   * @type: { number | string }
   * @since 7
   */
  /**
   * Image width
   * @type: { number | string }
   * @form
   * @since 9
   */
  width?: number | string;
  /**
   * Image height
   * @type: { number | string }
   * @since 7
   */
  /**
   * Image height
   * @type: { number | string }
   * @form
   * @since 9
   */
  height?: number | string;
  /**
   * Vertical coordinate of the image relative to the upper left corner of the component
   * @type: { number | string }
   * @since 7
   */
  /**
   * Vertical coordinate of the image relative to the upper left corner of the component
   * @type: { number | string }
   * @form
   * @since 9
   */
  top?: number | string;
  /**
   * Horizontal coordinate of the image relative to the upper left corner of the component
   * @type: { number | string }
   * @since 7
   */
  /**
   * Horizontal coordinate of the image relative to the upper left corner of the component
   * @type: { number | string }
   * @form
   * @since 9
   */
  left?: number | string;
  /**
   * Playback duration of this image frame, in milliseconds.
   * @type: { number }
   * @since 7
   */
  /**
   * Playback duration of this image frame, in milliseconds.
   * @type: { number }
   * @form
   * @since 9
   */
  duration?: number;
}

/**
 * inheritance CommonMethod
 * @since 7
 */
/**
 * inheritance CommonMethod
 * @form
 * @since 9
 */
declare class ImageAnimatorAttribute extends CommonMethod<ImageAnimatorAttribute> {
  /**
   * list images
   * @since 7
   */
  /**
   * list images
   * @form
   * @since 9
   */
  images(value: Array<ImageFrameInfo>): ImageAnimatorAttribute;

  /**
   * The default value is the initial state, which is used to control the playback status.
   * @since 7
   */
  /**
   * The default value is the initial state, which is used to control the playback status.
   * @form
   * @since 9
   */
  state(value: AnimationStatus): ImageAnimatorAttribute;

  /**
   * The unit is millisecond.
   * @since 7
   */
  /**
   * The unit is millisecond.
   * @form
   * @since 9
   */
  duration(value: number): ImageAnimatorAttribute;

  /**
   * Set the playback sequence.
   * @since 7
   */
  /**
   * Set the playback sequence.
   * @form
   * @since 9
   */
  reverse(value: boolean): ImageAnimatorAttribute;

  /**
   * Sets whether the image size is fixed to the component size.
   * @since 7
   */
  /**
   * Sets whether the image size is fixed to the component size.
   * @form
   * @since 9
   */
  fixedSize(value: boolean): ImageAnimatorAttribute;

  /**
   * Indicates whether to enable pre-decoding.
   * @since 7
   * @deprecated since 9
   */
  preDecode(value: number): ImageAnimatorAttribute;

  /**
   * Sets the state before and after the animation starts
   * @since 7
   */
  /**
   * Sets the state before and after the animation starts
   * @form
   * @since 9
   */
  fillMode(value: FillMode): ImageAnimatorAttribute;

  /**
   * Played once by default
   * @since 7
   */
    /**
   * Played once by default
   * @form
   * @since 9
   */
  iterations(value: number): ImageAnimatorAttribute;

  /**
   * Status callback, which is triggered when the animation starts to play.
   * @since 7
   */
  /**
   * Status callback, which is triggered when the animation starts to play.
   * @form
   * @since 9
   */
  onStart(event: () => void): ImageAnimatorAttribute;

  /**
   * Status callback, which is triggered when the animation pauses.
   * @since 7
   */
  /**
   * Status callback, which is triggered when the animation pauses.
   * @form
   * @since 9
   */
  onPause(event: () => void): ImageAnimatorAttribute;

  /**
   * Status callback, triggered when the animation is replayed
   * @since 7
   */
  /**
   * Status callback, triggered when the animation is replayed
   * @form
   * @since 9
   */
  onRepeat(event: () => void): ImageAnimatorAttribute;

  /**
   * Status callback, which is triggered when the animation is canceled.
   * @since 7
   */
  /**
   * Status callback, which is triggered when the animation is canceled.
   * @form
   * @since 9
   */
  onCancel(event: () => void): ImageAnimatorAttribute;

  /**
   * Status callback, which is triggered when the animation playback is complete.
   * @since 7
   */
  /**
   * Status callback, which is triggered when the animation playback is complete.
   * @form
   * @since 9
   */
  onFinish(event: () => void): ImageAnimatorAttribute;
}

declare const ImageAnimator: ImageAnimatorInterface;
declare const ImageAnimatorInstance: ImageAnimatorAttribute;
