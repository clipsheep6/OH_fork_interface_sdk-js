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
 * Defines the grid interface.
 *
 * @interface GridInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the grid interface.
 *
 * @interface GridInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface GridInterface {
  /**
   * Grid is returned when the parameter is transferred.
   *
   * @param { Scroller } scroller
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Grid is returned when the parameter is transferred.
   *
   * @param { Scroller } scroller
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  (scroller?: Scroller): GridAttribute;
}

/**
 * The enum of property layoutDirection
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The enum of property layoutDirection
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum GridDirection {
  /**
   * The row direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The row direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Row,

  /**
   * The column direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The column direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Column,

  /**
   * The row reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The row reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  RowReverse,

  /**
   * The column reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The column reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  ColumnReverse,
}

/**
 * The attribute of scrollbar to compute scrollbar position and height.
 *
 * @interface ComputedBarAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface ComputedBarAttribute {
  /**
   * The offset of the grid.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  totalOffset: number;

  /**
   * The range of the grid.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  totalLength: number;
}

/**
 * Defines the grid attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the grid attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class GridAttribute extends CommonMethod<GridAttribute> {
  /**
   * This parameter specifies the number of columns in the current grid layout.
   *
   * @param { string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * This parameter specifies the number of columns in the current grid layout.
   *
   * @param { string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  columnsTemplate(value: string): GridAttribute;

  /**
   * Lets you set the number of rows in the current grid layout,
   *
   * @param { string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Lets you set the number of rows in the current grid layout,
   *
   * @param { string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  rowsTemplate(value: string): GridAttribute;

  /**
   * Allows you to set the spacing between columns.
   *
   * @param { Length } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Allows you to set the spacing between columns.
   *
   * @param { Length } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  columnsGap(value: Length): GridAttribute;

  /**
   * Lets you set the spacing between rows.
   *
   * @param { Length } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Lets you set the spacing between rows.
   *
   * @param { Length } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  rowsGap(value: Length): GridAttribute;

  /**
   * This parameter specifies the width of the scroll bar.
   *
   * @param { number | string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * This parameter specifies the width of the scroll bar.
   *
   * @param { number | string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  scrollBarWidth(value: number | string): GridAttribute;

  /**
   * Sets the color of the scroll bar.
   *
   * @param { Color | number | string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the color of the scroll bar.
   *
   * @param { Color | number | string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  scrollBarColor(value: Color | number | string): GridAttribute;

  /**
   * Lets you set the spacing between rows.
   *
   * @param { BarState } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Lets you set the spacing between rows.
   *
   * @param { BarState } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  scrollBar(value: BarState): GridAttribute;

  /**
   * Set scrollbar position.
   *
   * @param { function } event - callback of grid scroll,
   * index is the current first displayed item, offset is the grid offset,
   * return ComputedBarAttribute to update scrollbar position and height.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onScrollBarUpdate(event: (index: number, offset: number) => ComputedBarAttribute): GridAttribute;

  /**
   * Sets the status of the scroll bar.
   *
   * @param { function } callback of grid scroll,
   * first is the index  of the starting sliding position, last is the index  of the ending sliding position.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the status of the scroll bar.
   *
   * @param { function } callback of grid scroll,
   * first is the index  of the starting sliding position, last is the index  of the ending sliding position,
   * return void to no return value.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onScrollIndex(event: (first: number, last: number) => void): GridAttribute;

  /**
   * cached Count
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * cached Count
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  cachedCount(value: number): GridAttribute;

  /**
   * editMode
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * editMode
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  editMode(value: boolean): GridAttribute;

  /**
   * Called when judging whether it is multiSelectable.
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when judging whether it is multiSelectable.
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  multiSelectable(value: boolean): GridAttribute;

  /**
   * maxCount
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * maxCount
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  maxCount(value: number): GridAttribute;

  /**
   * minCount
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * minCount
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  minCount(value: number): GridAttribute;

  /**
   * cellLength
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * cellLength
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  cellLength(value: number): GridAttribute;

  /**
   * Control GridDirection of the grid.
   *
   * @param { GridDirection } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Control GridDirection of the grid.
   *
   * @param { GridDirection } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  layoutDirection(value: GridDirection): GridAttribute;

  /**
   * Control if the grid supports animation.
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Control if the grid supports animation.
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  supportAnimation(value: boolean): GridAttribute;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onItemDragStart(event: (event: ItemDragInfo, itemIndex: number) => (() => any) | void): GridAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): GridAttribute;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): GridAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): GridAttribute;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onItemDrop(
    event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void,
  ): GridAttribute;

  /**
   * Called when the sliding effect is set.
   *
   * @param { EdgeEffect } value - Scroll effect. For details, see EdgeEffect.
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  edgeEffect(value: EdgeEffect): GridAttribute;

  /**
   * Called to setting the nested scroll options.
   *
   * @param { NestedScrollOptions } value - options for nested scrolling.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  nestedScroll(value: NestedScrollOptions): GridAttribute;

  /**
   * Called when setting whether to enable scroll by gesture or mouse.
   *
   * @param { boolean } value
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  enableScrollInteraction(value: boolean): GridAttribute;

  /**
   * Called to setting the friction.
   *
   * @param { number | Resource } value - options for scrolling friction.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  friction(value: number | Resource): GridAttribute;
  
  /**
   * Called When sliding the grid.
   *
   * @param { function } event callback of grid scroll,
   * scrollOffset is offset per frame scrolling, ScrollState is current sliding state.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): GridAttribute;

  /**
   * Called when the grid begins to arrive.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onReachStart(event: () => void): GridAttribute;

  /**
   * Called when the grid reaches the end.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onReachEnd(event: () => void): GridAttribute;

  /**
   * Called when the slider start.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onScrollStart(event: () => void): GridAttribute;

  /**
   * Called when the slider stops.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onScrollStop(event: () => void): GridAttribute;

  /**
   * Called when scrolling begin each frame.
   *
   * @param { function } event callback of grid scroll,
   * offset is the amount of sliding that is about to occur, state is current sliding state,
   * return number to actual sliding offset.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onScrollFrameBegin(event: (offset: number, state: ScrollState) => { offsetRemain: number }): GridAttribute;
}

/**
 * Defines Grid Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Grid Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const Grid: GridInterface;

/**
 * Defines Grid Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Grid Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const GridInstance: GridAttribute;
