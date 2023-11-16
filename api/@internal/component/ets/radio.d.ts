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
 * Input parameter for creating a radio box.
 *
 * @interface RadioOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Input parameter for creating a radio box.
 *
 * @interface RadioOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Input parameter for creating a radio box.
 *
 * @interface RadioOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface RadioOptions {
  /**
   * Radio group name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Radio group name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Radio group name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  group: string;

  /**
   * Radio name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Radio name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Radio name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  value: string;
}

/**
 * Set radio Style.
 *
 * @interface RadioStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface RadioStyle {
  /**
   * Set the background color when the radio box is checked.
   *
   * @type { ?ResourceColor } checkedBackgroundColor - the background color when the radio box is checked.
   * @default #007DFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  checkedBackgroundColor?: ResourceColor;

  /**
   * Set the bolder color when the radio box is unchecked.
   *
   * @type { ?ResourceColor } uncheckedBorderColor - the bolder color when the radio box is unchecked.
   * @default #182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  uncheckedBorderColor?: ResourceColor;

  /**
   * Set the indicator color when the radio box is checked.
   *
   * @type { ?ResourceColor } indicatorColor - the indicator color when the radio box is checked.
   * @default #FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  indicatorColor?: ResourceColor;
}

/**
 * Provides an interface for creating a radio box.
 *
 * @interface RadioInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides an interface for creating a radio box.
 *
 * @interface RadioInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Provides an interface for creating a radio box.
 *
 * @interface RadioInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
interface RadioInterface {
  /**
   * Called when a radio box is created.
   *
   * @param { RadioOptions } options
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when a radio box is created.
   *
   * @param { RadioOptions } options
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when a radio box is created.
   *
   * @param { RadioOptions } options
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  (options: RadioOptions): RadioAttribute;
}

/**
 * Provides methods for radio method component.
 *
 * @extends CommonMethod<RadioAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides methods for radio method component.
 *
 * @extends CommonMethod<RadioAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Provides methods for radio method component.
 *
 * @extends CommonMethod<RadioAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare class RadioAttribute extends CommonMethod<RadioAttribute> {
  /**
   * Called when the radio box is selected.
   *
   * @param { boolean } value
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the radio box is selected.
   *
   * @param { boolean } value
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when the radio box is selected.
   *
   * @param { boolean } value
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  checked(value: boolean): RadioAttribute;

  /**
   * Called when the radio box selection status changes.
   *
   * @param { function } callback
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the radio box selection status changes.
   *
   * @param { function } callback
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when the radio box selection status changes.
   *
   * @param { function } callback
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  onChange(callback: (isChecked: boolean) => void): RadioAttribute;

  /**
   * Set the radio style.
   *
   * @param { RadioStyle } value - the radio style.
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  radioStyle(value?: RadioStyle): RadioAttribute;
}

/**
 * Defines Radio Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Radio Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Radio Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const Radio: RadioInterface;

/**
 * Defines Radio Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Radio Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Radio Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const RadioInstance: RadioAttribute;
