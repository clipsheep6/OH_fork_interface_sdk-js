/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

/// <reference path="../component/common.d.ts" />

import type { AsyncCallback, BusinessError, Callback } from './@ohos.base';
import type unifiedDataChannel from './@ohos.data.unifiedDataChannel';
import type { CustomBuilder, DragItemInfo, DragEvent, DragPreviewOptions } from 'DragControllerParam';
import type { ResourceColor, TouchPoint } from 'DragControllerUnitParam';

/**
 * This module allows developers to trigger a drag event.
 * @namespace dragController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare namespace dragController {
  /**
   * Defines the Drag Status.
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  const enum DragStatus {
    /**
     * Drag has started.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    STARTED = 0,
    /**
     * Drag has ended.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    ENDED = 1,
  }

  /**
   * Drag and drop information
   *
   * @interface DragAndDropInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  interface DragAndDropInfo {
    /**
     * The drag status.
     * @type { DragStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    status: DragStatus;
    /**
     * The information containing the drag event.
     * @type { DragEvent }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    event: DragEvent;
    /**
     * Additional information about the drag info.
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    extraParams?: string;
  }

  /**
   * One drag action object for drag process
   *
   * @interface DragAction
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  interface DragAction {
    /**
     * trigger drag action
     *
     * @returns { Promise<void> } A Promise can indicate the start result.
     * @throws { BusinessError } 100001 - if some internal handling failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    startDrag(): Promise<void>;
    /**
     * Registers a callback for listening on drag status changes.
     * This callback is triggered when the drag status change.
     *
     * @param { 'statusChange' } type for status changing
     * @param { Callback<DragAndDropInfo> } callback with drag event and status information
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    on(type: 'statusChange', callback: Callback<DragAndDropInfo>): void;

    /**
     * Deregisters a callback for listening on drag status changes.
     * This callback is not triggered when the drag status change.
     *
     * @param { 'statusChange' } type for status changing
     * @param { Callback<DragAndDropInfo> } callback with drag event and status information
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    off(type: 'statusChange', callback?: Callback<DragAndDropInfo>): void;
  }

  /**
   * DragInfo object description
   * 
   * @interface DragInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  interface DragInfo {
    /**
     * A unique identifier to identify which touch point.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    pointerId: number;

    /**
     * Drag data.
     * @type { ?unifiedDataChannel.UnifiedData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    data?: unifiedDataChannel.UnifiedData;

    /**
     * Additional information about the drag info.
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    extraParams?: string;

    /**
     * Touch point coordinates.
     * @type { ?TouchPoint }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    touchPoint?: TouchPoint;

    /**
     * Drag preview options.
     * @type { ?DragPreviewOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    previewOptions?: DragPreviewOptions;
  }

  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { DragInfo } dragInfo - Information about the drag event.
   * @param { AsyncCallback<{ event: DragEvent, extraParams: string }> } callback - Callback that contains the drag event information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  function executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: DragInfo, callback: AsyncCallback<{
    event: DragEvent, extraParams: string
  }>): void;

  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { DragInfo } dragInfo - Information about the drag event.
   * @returns { Promise<{ event: DragEvent, extraParams: string }> } A Promise with the drag event information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  function executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: DragInfo): Promise<{
    event: DragEvent, extraParams: string
  }>;

  /**
   * Create one drag action object, which can be used for starting drag later or monitoring 
   * the drag status after drag started.
   * @param { Array<CustomBuilder | DragItemInfo> } customArray - Objects used for prompts 
   * displayed when the objects are dragged.
   * @param { DragInfo } dragInfo - Information about the drag event.
   * @returns { DragAction } one drag action object
   * @throws { BusinessError } 401 - if the parameters checking failed.
   * @throws { BusinessError } 100001 - if some internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  function createDragAction(customArray: Array<CustomBuilder | DragItemInfo>, dragInfo: DragInfo): DragAction;
}

export default dragController;
