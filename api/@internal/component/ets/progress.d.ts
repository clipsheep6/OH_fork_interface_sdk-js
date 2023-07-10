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
 * Defines the option of Progress.
 *
 * @interface ProgressOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the option of Progress.
 *
 * @interface ProgressOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the option of Progress.
 *
 * @interface ProgressOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface ProgressOptions<Type extends keyof ProgressStyleMap> {
  /**
   * Sets the value of Progress.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the value of Progress.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Sets the value of Progress.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  value: number;

  /**
   * Sets the total of Progress.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the total of Progress.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Sets the total of Progress.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  total?: number;

  /**
   * Sets the style of Progress.
   *
   * @type { ?ProgressStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 8
   * @useinstead type
   */
  style?: ProgressStyle

  /**
   * Sets the type of Progress.
   *
   * @type { ?Type }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the type of Progress.
   *
   * @type { ?Type }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Sets the type of Progress.
   *
   * @type { ?Type }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  type?: Type
}

/**
 * Type of progress bar
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Type of progress bar
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Type of progress bar
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare enum ProgressType {
  /**
   * Linear progress bar style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Linear progress bar style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Linear progress bar style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  Linear = 0,

  /**
   * Ring progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Ring progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Ring progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  Ring = 1,

  /**
   * Eclipse progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Eclipse progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Eclipse progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  Eclipse = 2,

  /**
   * ScaleRing progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * ScaleRing progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * ScaleRing progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  ScaleRing = 3,

  /**
   * Capsule progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Capsule progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Capsule progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  Capsule = 4
}

/**
 * Current status of progress bar.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum ProgressStatus {
  /**
   * Loading status.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LOADING,

  /**
   * Processing status.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  PROGRESSING
}

/**
 * Defines style options for progress component.
 *
 * @interface ProgressStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines style options for progress component.
 *
 * @interface ProgressStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines style options for progress component.
 *
 * @interface ProgressStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface ProgressStyleOptions {
  /**
   * Defines the strokeWidth property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the strokeWidth property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the strokeWidth property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  strokeWidth?: Length;

  /**
   * Defines the scaleCount property.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the scaleCount property.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the scaleCount property.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  scaleCount?: number;

  /**
   * Defines the scaleWidth property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the scaleWidth property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the scaleWidth property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  scaleWidth?: Length;
}

/**
 * Defines the enable scan effect.
 *
 * @interface ScanEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ScanEffectOptions {
  /**
   * Enable scan effect.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  enableScanEffect?: boolean;
}

/**
 * Defines the Eclipse style Options.
 *
 * @interface EclipseStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface EclipseStyleOptions {

}

/**
 * Defines the ScaleRing style Options.
 *
 * @interface ScaleRingStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ScaleRingStyleOptions {
  /**
   * Defines the strokeWidth property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  strokeWidth?: Length;

  /**
   * Defines the scaleWidth property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  scaleWidth?: Length;

  /**
   * Defines the scaleCount property.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  scaleCount?: number;
}

/**
 * Defines the ring style Options.
 *
 * @interface RingStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RingStyleOptions extends ScanEffectOptions {
  /**
   * Defines the strokeWidth property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  strokeWidth?: Length;

  /**
   * Enables progress shadow.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  shadow?: boolean;

  /**
   * The status of progress, default is PROGRESSING. Set to LOADING status will trigger the loading animation.
   *
   * @type { ?ProgressStatus }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  status?: ProgressStatus;
}

/**
 * Defines the linear style Options.
 *
 * @interface LinearStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface LinearStyleOptions extends ScanEffectOptions {
  /**
   * Defines the strokeWidth property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  strokeWidth?: Length;
}

/**
 * Defines the capsule style Options.
 *
 * @interface CapsuleStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface CapsuleStyleOptions extends ScanEffectOptions {
  /**
   * Set the inner border color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderColor?: ResourceColor;

  /**
   * Set the border width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderWidth?: Length;

  /**
   * Set the text content.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content?: string;

  /**
   * Set the text style.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  font?: Font;

  /**
   * Set the text fontColor.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor?: ResourceColor;

  /**
   * show default percentage.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showDefaultPercentage?: boolean;
}

/**
 * Type of progress bar
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Type of progress bar
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Type of progress bar
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare enum ProgressStyle {
  /**
   * Linear progress bar style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Linear progress bar style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Linear progress bar style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  Linear,

  /**
   * Ring progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Ring progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Ring progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  Ring,

  /**
   * Eclipse progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Eclipse progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Eclipse progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  Eclipse,

  /**
   * ScaleRing progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * ScaleRing progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * ScaleRing progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  ScaleRing,

  /**
   * Capsule progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Capsule progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Capsule progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  Capsule,
}

/**
 * Defines the map for progress type and style.
 *
 * @interface ProgressStyleMap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ProgressStyleMap {
  /**
   * Defines the map for Linear progress.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  [ProgressType.Linear]: LinearStyleOptions | ProgressStyleOptions;

  /**
   * Defines the map for Ring progress.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  [ProgressType.Ring]: RingStyleOptions | ProgressStyleOptions;

  /**
   * Defines the map for Eclipse progress.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  [ProgressType.Eclipse]: EclipseStyleOptions | ProgressStyleOptions;

  /**
   * Defines the map for ScaleRing progress.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  [ProgressType.ScaleRing]: ScaleRingStyleOptions | ProgressStyleOptions;

  /**
   * Defines the map for Capsule progress.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  [ProgressType.Capsule]: CapsuleStyleOptions | ProgressStyleOptions;
}

/**
 * Provides the progress bar interface.
 *
 * @interface ProgressInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides the progress bar interface.
 *
 * @interface ProgressInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Provides the progress bar interface.
 *
 * @interface ProgressInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
interface ProgressInterface {
  /**
   * Called when the progress bar is set.
   *
   * @param { ProgressOptions<Type> } options
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the progress bar is set.
   *
   * @param { ProgressOptions<Type> } options
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when the progress bar is set.
   *
   * @param { ProgressOptions<Type> } options
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  <Type extends keyof ProgressStyleMap>(options: ProgressOptions<Type>): ProgressAttribute<Type>;
}

/**
 * Defines the progress attribute functions.
 *
 * @extends CommonMethod
 * @since 7
 */
/**
 * Defines the progress attribute functions.
 *
 * @extends CommonMethod
 * @since 9
 * @form
 */
/**
 * Defines the progress attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare class ProgressAttribute<Type extends keyof ProgressStyleMap = keyof ProgressStyleMap,
  Style extends ProgressStyleMap[Type] = ProgressStyleMap[Type]> extends CommonMethod<ProgressAttribute<Type>> {
  /**
   * Called when the current progress value is set.
   *
   * @param { number } value
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the current progress value is set.
   *
   * @param { number } value
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when the current progress value is set.
   *
   * @param { number } value
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  value(value: number): ProgressAttribute<Type>;

  /**
   * Called when the progress bar foreground is set.
   *
   * @param { ResourceColor | LinearGradient } value
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the progress bar foreground is set.
   *
   * @param { ResourceColor | LinearGradient } value
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when the progress bar foreground is set.
   *
   * @param { ResourceColor | LinearGradient } value - indicates the color of the progress.
   * @returns { ProgressAttribute<Type> } the attribute of the progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  color(value: ResourceColor | LinearGradient): ProgressAttribute<Type>;

  /**
   * Called when the style of progress bar is set.
   *
   * @param { Style } value
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the style of progress bar is set.
   *
   * @param { Style } value
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when the style of progress bar is set.
   *
   * @param { Style } value - indicates the style of the progress.
   * @returns { ProgressAttribute<Type> } the attribute of the progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  style(value: Style): ProgressAttribute<Type>;
}

/**
 * Defines Progress Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Progress Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Progress Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const Progress: ProgressInterface;

/**
 * Defines Progress Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Progress Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Progress Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const ProgressInstance: ProgressAttribute<keyof ProgressStyleMap>;
