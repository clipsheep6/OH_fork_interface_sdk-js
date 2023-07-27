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
 * Declare item ceiling attribute.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 * @deprecated since 9
 * @useinstead list/StickyStyle
 */
declare enum Sticky {
  /**
   * No sticky.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   */
  None,

  /**
   * Normal mode
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   */
  Normal,

  /**
   * Set opacity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   */
  Opacity,
}

/**
 * Declare whether the ListItem element is editable.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 * @deprecated since 9
 */
declare enum EditMode {
  /**
   * Unrestricted operations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   */
  None,

  /**
   * Deletable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   */
  Deletable,

  /**
   * Movable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   */
  Movable,
}

/**
 * Sliding effect
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Sliding effect
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum SwipeEdgeEffect {
  /**
   * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or touch event, and spring back when released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or touch event, and spring back when released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Spring,

  /**
   * Sliding to the edge has no effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sliding to the edge has no effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  None,
}

/**
 * Defines the swipe action item for SwipeActionOptions.
 *
 * @interface SwipeActionItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface SwipeActionItem {
  /**
   * An action item that appears when a list item slides right (when list direction is Vertical) or
   * slides down (when list direction Horizontal).
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  builder?: CustomBuilder;

  /**
   * Defines distance for the delete area.
   *
   * @type { ?Length }
   * @default 56vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  actionAreaDistance?: Length;

  /**
   * Called when ListItem need to be deleted.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onAction?: () => void;

  /**
   * Called when swipe entry delete area.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onEnterActionArea?: () => void;

  /**
   * Called when swipe exit delete area.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onExitActionArea?: () => void;
}

/**
 * Defines the SwipeActionOption of swipeAction attribute method.
 *
 * @interface SwipeActionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the SwipeActionOption of swipeAction attribute method.
 *
 * @interface SwipeActionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface SwipeActionOptions {
  /**
   * An action item that appears when a list item slides right (when list direction is Vertical) or
   * slides down (when list direction Horizontal).
   *
   * @type { ?(CustomBuilder | SwipeActionItem) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * An action item that appears when a list item slides right (when list direction is Vertical) or
   * slides down (when list direction Horizontal).
   *
   * @type { ?(CustomBuilder | SwipeActionItem) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  start?: CustomBuilder | SwipeActionItem;

  /**
   * An action item that appears when a list item slides left (when list direction is Vertical) or
   * slides up (when list direction Horizontal).
   *
   * @type { ?(CustomBuilder | SwipeActionItem) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * An action item that appears when a list item slides left (when list direction is Vertical) or
   * slides up (when list direction Horizontal).
   *
   * @type { ?(CustomBuilder | SwipeActionItem) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  end?: CustomBuilder | SwipeActionItem;

  /**
   * Sets whether sliding to a boundary has a spring effect.
   *
   * @type { ?SwipeEdgeEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets whether sliding to a boundary has a spring effect.
   *
   * @type { ?SwipeEdgeEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  edgeEffect?: SwipeEdgeEffect;
}

/**
 * Defines the list item style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum ListItemStyle {
  /**
   * Show custom style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NONE = 0,

  /**
   * Show default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CARD = 1,
}

/**
 * Defines the list item options.
 *
 * @interface ListItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ListItemOptions {
  /**
   * Describes the ListItem style.
   *
   * @type { ?ListItemStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  style?: ListItemStyle;
}

/**
 * Values in the list
 *
 * @interface ListItemInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Values in the list
 *
 * @interface ListItemInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Values in the list
 *
 * @interface ListItemInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
interface ListItemInterface {
  /**
   * Called when an interface is used.
   *
   * @param { ListItemOptions } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  (value?: ListItemOptions): ListItemAttribute;

  /**
   * Called when an interface is used.
   *
   * @param { string } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when an interface is used.
   *
   * @param { string } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @deprecated since 10
   * @useinstead listItem/ListItemInterface
   * @form
   */
  (value?: string): ListItemAttribute;
}

/**
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare class ListItemAttribute extends CommonMethod<ListItemAttribute> {
  /**
   * Called when setting whether item is ceiling effect.
   *
   * @param { Sticky } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   * @useinstead list/List#sticky
   */
  sticky(value: Sticky): ListItemAttribute;

  /**
   * Called when judging whether it is editable.
   *
   * @param { boolean | EditMode } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   */
  editable(value: boolean | EditMode): ListItemAttribute;

  /**
   * Called when judging whether it is selectable.
   *
   * @param { boolean } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when judging whether it is selectable.
   *
   * @param { boolean } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when judging whether it is selectable.
   *
   * @param { boolean } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  selectable(value: boolean): ListItemAttribute;

  /**
   * Called when judging whether it is selected.
   * This parameter supports $$ for two-way binding of variables.
   *
   * @param { boolean } value if the listItem is selected.
   * @returns { ListItemAttribute } the attribute of the listItem.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  selected(value: boolean): ListItemAttribute;

  /**
   * Sets the action item that appears when the list item slides in the cross axis direction of the list.
   *
   * @param { SwipeActionOptions } value items defines in the SwipeActionOption.
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Sets the action item that appears when the list item slides in the cross axis direction of the list.
   *
   * @param { SwipeActionOptions } value items defines in the SwipeActionOption.
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  swipeAction(value: SwipeActionOptions): ListItemAttribute;

  /**
   * Called when the listItem is selected.
   *
   * @param { function } event
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the listItem is selected.
   *
   * @param { function } event
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when the listItem is selected.
   *
   * @param { function } event
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  onSelect(event: (isSelected: boolean) => void): ListItemAttribute;
}

/**
 * Defines ListItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines ListItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines ListItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const ListItemInstance: ListItemAttribute;

/**
 * Defines ListItem Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines ListItem Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines ListItem Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const ListItem: ListItemInterface;

