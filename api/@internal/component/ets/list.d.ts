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
 * Declare scroll status
 * @since 7
 */
/**
 * Declare scroll status
 * @form
 * @since 9
 */
declare enum ScrollState {
  /**
   * Not activated.
   * @since 7
   */
  /**
   * Not activated.
   * @form
   * @since 9
   */
  Idle,

  /**
   * Scrolling status.
   * @since 7
   */
  /**
   * Scrolling status.
   * @form
   * @since 9
   */
  Scroll,

  /**
   * Drag status.
   * @since 7
   */
  /**
   * Drag status.
   * @form
   * @since 9
   */
  Fling,
}

/**
 * Declare list item alignment status
 * @form
 * @since 9
 */
declare enum ListItemAlign {
  /**
   * Start position in the direction of cross axis.
   * @form
   * @since 9
   */
  Start,

  /**
   * Center position in the direction of cross axis.
   * @form
   * @since 9
   */
  Center,

  /**
   * End position in the direction of cross axis
   * @form
   * @since 9
   */
  End,
}

/**
 * Declare item group sticky style.
 * @form
 * @since 9
 */
declare enum StickyStyle {
  /**
   * The header and footer of each item group will not be pinned.
   * @form
   * @since 9
   */
  None = 0,

  /**
   * The header of each item group will be pinned.
   * @form
   * @since 9
   */
  Header = 1,

  /**
   * The footer of each item group will be pinned.
   * @form
   * @since 9
   */
  Footer = 2,
}

/**
 * Declare edge effect of chain animation.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare enum ChainEdgeEffect {
  /**
   * Default edge effect. Compress the space in the drag direction
   * and stretch the space in the opposite drag direction.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  DEFAULT,

  /**
   * Stretch all space.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  STRETCH,
}

/**
 * Defines the chain animation options.
 * @interface ChainAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare interface ChainAnimationOptions {
  /**
   * Minimum space for chain animation.
   * @type { Length | ILength }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  minSpace: Length | ILength;

  /**
   * Maximum space for chain animation.
   * @type { Length | ILength }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  maxSpace: Length | ILength;

  /**
   * Conductivity of chain animation.
   * @type { number }
   * @default 0.7
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  conductivity?: number;

  /**
   * Intensity of chain animation.
   * @type { number }
   * @default 0.3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  intensity?: number;

  /**
   * Edge effect of chain animation.
   * @type { ChainEdgeEffect }
   * @default ChainEdgeEffect.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  edgeEffect?: ChainEdgeEffect;
}

/**
 * The list interface is extended.
 * @since 7
 */
/**
 * The list interface is extended.
 * @form
 * @since 9
 */
interface ListInterface {
  /**
   * Called when interface data is called.
   * @since 7
   */
  /**
   * Called when interface data is called.
   * @form
   * @since 9
   */
  (value?: { initialIndex?: number; space?: number | string; scroller?: Scroller }): ListAttribute;
}

/**
 * @since 7
 */
/**
 * @form
 * @since 9
 */
declare class ListAttribute extends CommonMethod<ListAttribute> {
  /**
   * Called when need to decide how much lanes the list will show.
   * @form
   * @since 9
   */
  lanes(value: number | LengthConstrain): ListAttribute;

  /**
   * Called when need to decide how to align lanes in the direction of the cross axis.
   * @form
   * @since 9
   */
  alignListItem(value: ListItemAlign): ListAttribute;

  /**
   * Called when the arrangement direction of the list component is set.
   * @since 7
   */
  /**
   * Called when the arrangement direction of the list component is set.
   * @form
   * @since 9
   */
  listDirection(value: Axis): ListAttribute;

  /**
   * Called when the display mode of the side slider is set.
   * @since 7
   */
  /**
   * Called when the display mode of the side slider is set.
   * @form
   * @since 9
   */
  scrollBar(value: BarState): ListAttribute;

  /**
   * Called when the sliding effect is set.
   * @since 7
   */
  /**
   * Called when the sliding effect is set.
   * @form
   * @since 9
   */
  edgeEffect(value: EdgeEffect): ListAttribute;

  /**
   * Called when the ListItem split line style is set.
   * @since 7
   */
  /**
   * Called when the ListItem split line style is set.
   * @form
   * @since 9
   */
  /**
   * Called when the ListItem split line style is set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  divider(
    value: {
      strokeWidth: Length | ILength;
      color?: ResourceColor;
      startMargin?: Length | ILength;
      endMargin?: Length | ILength;
    } | null,
  ): ListAttribute;

  /**
   * Called when judging whether it is in editable mode.
   * @since 7
   * @deprecated since 9
   */
  editMode(value: boolean): ListAttribute;

  /**
   * Called when judging whether it is multiSelectable.
   * @since 8
   */
  /**
   * Called when judging whether it is multiSelectable.
   * @form
   * @since 9
   */
  multiSelectable(value: boolean): ListAttribute;

  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   * @since 7
   */
  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   * @form
   * @since 9
   */
  cachedCount(value: number): ListAttribute;

  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   * @since 7
   */
  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   * @form
   * @since 9
   */
  chainAnimation(value: boolean): ListAttribute;

  /**
   * Called to setting chain linkage dynamic effect options.
   * @param { ChainAnimationOptions } value - options of the chain animation.
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  chainAnimationOptions(value: ChainAnimationOptions): ListAttribute;

  /**
   * Called when header or footer of item group will be pinned.
   * @form
   * @since 9
   */
  sticky(value: StickyStyle): ListAttribute;

  /**
   * Called when the offset and status callback of the slide are set.
   * @since 7
   */
  /**
   * Called when the offset and status callback of the slide are set.
   * @form
   * @since 9
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): ListAttribute;

  /**
   * Called when the start and end positions of the display change.
   * @since 7
   */
  /**
   * Called when the start and end positions of the display change.
   * @form
   * @since 9
   */
  onScrollIndex(event: (start: number, end: number) => void): ListAttribute;

  /**
   * Called when the list begins to arrive.
   * @since 7
   */
  /**
   * Called when the list begins to arrive.
   * @form
   * @since 9
   */
  onReachStart(event: () => void): ListAttribute;

  /**
   * Called when the list reaches the end.
   * @since 7
   */
  /**
   * Called when the list reaches the end.
   * @form
   * @since 9
   */
  onReachEnd(event: () => void): ListAttribute;

  /**
   * Called when the slider start.
   * @form
   * @since 9
   */
  onScrollStart(event: () => void): ListAttribute;

  /**
   * Called when the slider stops.
   * @since 7
   */
  /**
   * Called when the slider stops.
   * @form
   * @since 9
   */
  onScrollStop(event: () => void): ListAttribute;

  /**
   * Called when a list item is deleted.
   * @since 7
   * @deprecated since 9
   */
  onItemDelete(event: (index: number) => boolean): ListAttribute;

  /**
   * Called when a list item is moved.
   * @since 7
   */
  onItemMove(event: (from: number, to: number) => boolean): ListAttribute;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @since 8
   */
  onItemDragStart(event: (event: ItemDragInfo, itemIndex: number) => ((() => any) | void)): ListAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @since 8
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): ListAttribute;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @since 8
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): ListAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @since 8
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): ListAttribute;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @since 8
   */
  onItemDrop(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void): ListAttribute;

  /**
   * Called when scrolling begin each frame.
   * @form
   * @since 9
   */
  onScrollFrameBegin(event: (offset: number, state: ScrollState) => { offsetRemain: number }): ListAttribute;
}

/**
 * Defines List Component.
 * @since 7
 */
/**
 * Defines List Component.
 * @form
 * @since 9
 */
declare const List: ListInterface;

/**
 * Defines List Component instance.
 * @since 7
 */
/**
 * Defines List Component instance.
 * @form
 * @since 9
 */
declare const ListInstance: ListAttribute;
