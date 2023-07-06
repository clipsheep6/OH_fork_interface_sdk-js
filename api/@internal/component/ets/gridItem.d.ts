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
 * Mesh container for static fixed-size layout scenarios.
 * @since 7
 */
/**
 * Mesh container for static fixed-size layout scenarios.
 * @crossplatform
 * @since 10
 */
interface GridItemInterface {
  /**
   * Return to get GridItem.
   * @since 7
   */
  /**
   * Return to get GridItem.
   * @crossplatform
   * @since 10
   */
  (): GridItemAttribute;
}

/**
 * @since 7
 */
/**
 * @crossplatform
 * @since 10
 */
declare class GridItemAttribute extends CommonMethod<GridItemAttribute> {
  /**
   * This parameter specifies the start line number of the current element.
   * @since 7
   */
  /**
   * This parameter specifies the start line number of the current element.
   * @crossplatform
   * @since 10
   */
  rowStart(value: number): GridItemAttribute;

  /**
   * Specifies the end line number of the current element.
   * @since 7
   */
  /**
   * Specifies the end line number of the current element.
   * @crossplatform
   * @since 10
   */
  rowEnd(value: number): GridItemAttribute;

  /**
   * This parameter specifies the start column number of the current element.
   * @since 7
   */
  /**
   * This parameter specifies the start column number of the current element.
   * @crossplatform
   * @since 10
   */
  columnStart(value: number): GridItemAttribute;

  /**
   * This parameter specifies the end column number of the current element.
   * @since 7
   */
  /**
   * This parameter specifies the end column number of the current element.
   * @crossplatform
   * @since 10
   */
  columnEnd(value: number): GridItemAttribute;

  /**
   * This parameter specifies whether to recreate the node when the component build is triggered.
   * @since 7
   * @deprecated since 9
   */
  forceRebuild(value: boolean): GridItemAttribute;

  /**
   * Called when judging whether it is selectable.
   * @since 8
   */
  /**
   * Called when judging whether it is selectable.
   * @crossplatform
   * @since 10
   */
  selectable(value: boolean): GridItemAttribute;

  /**
   * Called when judging whether it is selected.
   * This parameter supports $$ for two-way binding of variables.
   * @param {boolean} value if the gridItem is selected.
   * @returns {GridItemAttribute} the attribute of the gridItem.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selected(value: boolean): GridItemAttribute;

  /**
   * Called when the gridItem is selected.
   * @since 8
   */
  /**
   * Called when the gridItem is selected.
   * @crossplatform
   * @since 10
   */
  onSelect(event: (isSelected: boolean) => void): GridItemAttribute;
}

/**
 * Defines GridItem Component.
 * @since 7
 */
/**
 * Defines GridItem Component.
 * @crossplatform
 * @since 10
 */
declare const GridItem: GridItemInterface

/**
 * Defines GridItem Component instance.
 * @since 7
 */
/**
 * Defines GridItem Component instance.
 * @crossplatform
 * @since 10
 */
declare const GridItemInstance: GridItemAttribute;
