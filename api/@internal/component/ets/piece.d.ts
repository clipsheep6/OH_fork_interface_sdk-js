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
 * Sets the relative position of icons and text.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum IconPosition {
  /**
   * The icon is at the beginning of the text.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Start,

  /**
   * The icon is at the end of the text.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  End,
}

/**
 * Provides text and icons for setting block entries.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface PieceInterface {
  /**
   * Called when setting the position of a block entry.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  (options?: { content: string; icon?: string }): PieceAttribute;
}

/**
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class PieceAttribute extends CommonMethod<PieceAttribute> {
  /**
   * Called when the relative position of the icon and the text is set.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  iconPosition(value: IconPosition): PieceAttribute;
  /**
   * Called when the value of Piece fontColor is set
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontColor(value: ResourceColor): PieceAttribute;
  /**
   * Called when the value of Piece fontSize is set
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontSize(value: Length): PieceAttribute;
  /**
   * Called when the value of Piece fontStyle is set
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontStyle(value: FontStyle): PieceAttribute;
  /**
   * Called when the value of Piece fontWeight is set
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontWeight(value: number | FontWeight | string): PieceAttribute;
  /**
   * Called when the value of Piece fontFamily is set
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontFamily(value: ResourceStr): PieceAttribute;
  /**
   * Called when the value of Piece showDelete is set
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  showDelete(value: boolean): PieceAttribute;
  /**
   * Default icon is invisible,
   * Callback onClose function when icon is clicked
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onClose(callback: () => void): PieceAttribute;
}

declare const Piece: PieceInterface;
declare const PieceInstance: PieceAttribute;
