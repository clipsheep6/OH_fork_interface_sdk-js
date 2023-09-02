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
 * Defines circle options for Circle component.
 *
 * @interface CircleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines circle options for Circle component.
 *
 * @interface CircleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines circle options for Circle component.
 *
 * @interface CircleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface CircleOptions {
  /**
   * Defines the width property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the width property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the width property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  width?: string | number;

  /**
   * Defines the height property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the height property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the height property.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  height?: string | number;
}

/**
 * Defines circle component.
 *
 * @interface CircleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines circle component.
 *
 * @interface CircleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines circle component.
 *
 * @interface CircleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
interface CircleInterface {
  /**
   * use new function to set the value.
   * 
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * use new function to set the value.
   * 
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * use new function to set the value.
   * 
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  new (value?: CircleOptions): CircleAttribute;

  /**
   * Set the value..
   *
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the value..
   *
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Set the value..
   *
   * @param { CircleOptions } value
   * @returns { CircleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  (value?: CircleOptions): CircleAttribute;
}

/**
 * Circle drawing component attribute functions.
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Circle drawing component attribute functions.
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Circle drawing component attribute functions.
 *
 * @extends CommonShapeMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare class CircleAttribute extends CommonShapeMethod<CircleAttribute> {}

/**
 * Circle drawing component attribute functions.
 *
 * @extends CircleShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare class CircleShape extends CommonShape<CircleShape> {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   * @form
   */
  constructor(value?: CircleOptions);

  /**
   * Sets the width of the current circle shape.
   *
   * @param { Length } value
   * @returns { CircleShape }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  width(value: Length): CircleShape;

  /**
   * Sets the height of the current circle shape.
   *
   * @param { Length } value
   * @returns { CircleShape }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  height(value: Length): CircleShape;

  /**
   * The size of the current circle shape.
   *
   * @param { SizeOptions } value
   * @returns { CircleShape }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  size(value: SizeOptions): CircleShape;
}

/**
 * Defines Circle Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Circle Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Circle Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const Circle: CircleInterface;

/**
 * Defines Circle Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Circle Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Circle Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const CircleInstance: CircleAttribute;
