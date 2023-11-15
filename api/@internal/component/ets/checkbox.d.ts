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
 * Defines the options of Checkbox.
 *
 * @interface CheckboxOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of Checkbox.
 *
 * @interface CheckboxOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the options of Checkbox.
 *
 * @interface CheckboxOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface CheckboxOptions {
  /**
   * Current name of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Current name of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Current name of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  name?: string;

  /**
   * Sets the group of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the group of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Sets the group of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  group?: string;
}

/**
 * Provides an interface for the Checkbox component.
 *
 * @interface CheckboxInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides an interface for the Checkbox component.
 *
 * @interface CheckboxInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Provides an interface for the Checkbox component.
 *
 * @interface CheckboxInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
interface CheckboxInterface {
  /**
   * Construct the Checkbox component.
   * Called when the Checkbox component is used.
   *
   * @param { CheckboxOptions } options
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Construct the Checkbox component.
   * Called when the Checkbox component is used.
   *
   * @param { CheckboxOptions } options
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Construct the Checkbox component.
   * Called when the Checkbox component is used.
   *
   * @param { CheckboxOptions } options
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  (options?: CheckboxOptions): CheckboxAttribute;
}

/**
 * Defines the attribute functions of Checkbox.
 *
 * @extends CommonMethod<CheckboxAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the attribute functions of Checkbox.
 *
 * @extends CommonMethod<CheckboxAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the attribute functions of Checkbox.
 *
 * @extends CommonMethod<CheckboxAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare class CheckboxAttribute extends CommonMethod<CheckboxAttribute> {
  /**
   * setting whether checkbox is selected.
   *
   * @param { boolean } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * setting whether checkbox is selected.
   *
   * @param { boolean } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * setting whether checkbox is selected.
   *
   * @param { boolean } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  select(value: boolean): CheckboxAttribute;

  /**
   * setting the display color of checkbox.
   *
   * @param { ResourceColor } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * setting the display color of checkbox.
   *
   * @param { ResourceColor } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * setting the display color of checkbox.
   *
   * @param { ResourceColor } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  selectedColor(value: ResourceColor): CheckboxAttribute;

  /**
   * setting the shape of checkbox.
   *
   * @param { CheckBoxShape } value - The configuration of checkbox shape.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  shape(value: CheckBoxShape): CheckboxAttribute;

  /**
   * Set the display border color of unselected checkbox.
   *
   * @param { ResourceColor } value - The color of border when checkbox unselected.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  unselectedColor(value: ResourceColor): CheckboxAttribute;

  /**
   * Set the mark style of checkbox.
   *
   * @param { MarkStyle } value - The style configuration of checkbox mark.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  mark(value: MarkStyle): CheckboxAttribute;

  /**
   * Called when the selection status changes.
   *
   * @param { function } callback
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the selection status changes.
   *
   * @param { function } callback
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when the selection status changes.
   *
   * @param { function } callback
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  onChange(callback: (value: boolean) => void): CheckboxAttribute;
}

/**
 * Defines Checkbox Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Checkbox Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Checkbox Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const Checkbox: CheckboxInterface;

/**
 * Defines Checkbox Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Checkbox Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Checkbox Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const CheckboxInstance: CheckboxAttribute;
