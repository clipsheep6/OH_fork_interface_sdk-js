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
 */
declare enum IconPosition {
  /**
   * The icon is at the beginning of the text.
   * @since 8
   */
  Start,

  /**
   * The icon is at the end of the text.
   * @since 8
   */
  End,
}

/**
 * Provides text and icons for setting block entries.
 * @since 8
 */
interface PieceInterface {
  /**
   * Called when setting the position of a block entry.
   * @since 8
   */
  (options?: { content: string; icon?: string }): PieceAttribute;
}

/**
 * @since 8
 */
declare class PieceAttribute extends CommonMethod<PieceAttribute> {
  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
   create(options?: { content: string; icon?: string }): PieceAttribute;

  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
   pop(): PieceAttribute;

   /**
    * Just use for genetate tsbundle
    * @ignore ide should ignore this arrtibute
    */
   debugLine(value: string): PieceAttribute;
 
  /**
   * Called when the relative position of the icon and the text is set.
   * @since 8
   */
  iconPosition(value: IconPosition): PieceAttribute;
  /**
   * Called when the value of Piece fontColor is set
   * @since 8
   */
  fontColor(value: ResourceColor): PieceAttribute;
  /**
   * Called when the value of Piece fontSize is set
   * @since 8
   */
  fontSize(value: Length): PieceAttribute;
  /**
   * Called when the value of Piece fontStyle is set
   * @since 8
   */
  fontStyle(value: FontStyle): PieceAttribute;
  /**
   * Called when the value of Piece fontWeight is set
   * @since 8
   */
  fontWeight(value: number | FontWeight | string): PieceAttribute;
  /**
   * Called when the value of Piece fontFamily is set
   * @since 8
   */
  fontFamily(value: ResourceStr): PieceAttribute;
  /**
   * Called when the value of Piece showDelete is set
   * @since 8
   */
  showDelete(value: boolean): PieceAttribute;
  /**
   * Default icon is invisible,
   * Callback onClose function when icon is clicked
   * @since 8
   */
  onClose(callback: () => void): PieceAttribute;
}

declare const Piece: PieceInterface;
declare const PieceInstance: PieceAttribute;
