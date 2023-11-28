/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import notification from '../@ohos.notification';
import type notificationManager from '../@ohos.notificationManager';

/**
 * Describes a NotificationSlot instance.
 *
 * @typedef NotificationSlot
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
export interface NotificationSlot {
  /**
   * Obtains the type of a notification slot.
   *
   * @type { ?notification.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 11
   * @useinstead NotificationSlot#notificationType
   */
  type?: notification.SlotType;

  /**
   * Notification slot type.
   *
   * @type { ?notificationManager.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  notificationType?: notificationManager.SlotType;

  /**
   * Obtains the level of a notification slot
   *
   * @type { ?notification.SlotLevel }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  level?: notification.SlotLevel;

  /**
   * Obtains the description of a notification slot.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  desc?: string;

  /**
   * Obtains the application icon badge status of a notification slot.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  badgeFlag?: boolean;

  /**
   * Obtains whether DND mode is bypassed for a notification slot.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  bypassDnd?: boolean;

  /**
   * Whether and how to display notifications on the lock screen.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  lockscreenVisibility?: number;

  /**
   * Obtains the vibration status of the notification slot.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  vibrationEnabled?: boolean;

  /**
   * Obtains the prompt tone of the notification slot.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  sound?: string;

  /**
   * Obtains whether the notification light is enabled in a notification slot.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  lightEnabled?: boolean;

  /**
   * Obtains the color of the notification light in a notification slot.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  lightColor?: number;

  /**
   * Obtains the vibration style of notifications in this notification slot.
   *
   * @type { ?Array<number> }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  vibrationValues?: Array<number>;

  /**
   * Read-only enabled status in this notification slot.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  readonly enabled?: boolean;

  /**
   * Read-only the prompt entry information corresponding to the current notification.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  readonly reminderFlags?: number;
}
