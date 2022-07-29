/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
import { AsyncCallback } from './basic';
import { NotificationSlot } from './notification/notificationSlot';
import { NotificationRequest } from './notification/notificationRequest';
/**
 * Manages notifications.
 *
 * <p>Generally, only system applications have permissions on notification subscription and unsubscription.
 * You can specify the content of a notification to be published and the content is carried by
 * {@link NotificationRequest}. A notification ID is unique in an application and must be specified
 * when using {@link NotificationRequest} to carry the notification content. If a notification
 * with this ID has been published and you need to use this ID to publish another notification,
 * the original notification will be updated. In addition, the notification ID can be used to cancel
 * a notification by calling the {@link #cancel(int)} method.
 *
 * @name notification
 * @since 7
 * @syscap SystemCapability.Notification.Notification
 * @import import notification from '@ohos.notification';
 * @permission N/A
 */
declare namespace notification {
    /**
     * Publishes a notification.
     *
     * <p>If a notification with the same ID has been published by the current application and has not been deleted,
     * this method will update the notification.
     *
     * @param request notification request
     * @param callback callback function
     */
    function publish(request: NotificationRequest, callback: AsyncCallback<void>): void;
    function publish(request: NotificationRequest): Promise<void>;
    /**
     * Cancels a notification with the specified ID.
     *
     * @param id of the notification to cancel, which must be unique in the application.
     * @param callback callback function
     */
    function cancel(id: number, callback: AsyncCallback<void>): void;
    /**
     * Cancels a notification with the specified label and ID.
     *
     * @param id ID of the notification to cancel, which must be unique in the application.
     * @param label Label of the notification to cancel.
     * @param callback callback function
     */
    function cancel(id: number, label: string, callback: AsyncCallback<void>): void;
    function cancel(id: number, label?: string): Promise<void>;
    /**
     * Cancels a representative notification.
     *
     * @since 9
     * @param id ID of the notification to cancel, which must be unique in the application.
     * @param representativeBundle bundle name of the representative
     * @param userId userid of the representative
     * @param callback callback function
     * @permission ohos.permission.NOTIFICATION_CONTROLLER
     * @permission ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     */
    function cancelAsBundle(id: number, representativeBundle: string, userId: number, callback: AsyncCallback<void>): void;
    function cancelAsBundle(id: number, representativeBundle: string, userId: number): Promise<void>;
    /**
     * Cancels all notifications of the current application.
     */
    function cancelAll(callback: AsyncCallback<void>): void;
    function cancelAll(): Promise<void>;
    /**
     * Adds a slot type.
     *
     * @param type Slot type to add.
     * @param callback callback function
     */
    function addSlot(type: SlotType, callback: AsyncCallback<void>): void;
    function addSlot(type: SlotType): Promise<void>;
    /**
     * Obtains a notification slot of the specified slot type.
     *
     * @param slotType Type of the notification slot to obtain.
     * @param callback callback function
     * @return Returns the created {@link NotificationSlot}.
     */
    function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void;
    function getSlot(slotType: SlotType): Promise<NotificationSlot>;
    /**
     * Obtains all NotificationSlot objects created by the current application.
     *
     * @return Returns all notification slots of this application.
     */
    function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void;
    function getSlots(): Promise<Array<NotificationSlot>>;
    /**
     * Removes a NotificationSlot of the specified SlotType created by the current application.
     *
     * @param slotType Type of the NotificationSlot to remove.
     * @param callback callback function
     */
    function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void;
    function removeSlot(slotType: SlotType): Promise<void>;
    /**
     * Removes all NotificationSlot objects created by the current application.
     */
    function removeAllSlots(callback: AsyncCallback<void>): void;
    function removeAllSlots(): Promise<void>;
    /**
     * Describes NotificationSlot types.
     */
    export enum SlotType {
        /**
        * NotificationSlot of an unknown type.
        */
        UNKNOWN_TYPE = 0,
        /**
        * NotificationSlot for social communication.
        */
        SOCIAL_COMMUNICATION = 1,
        /**
        * NotificationSlot for service information.
        */
        SERVICE_INFORMATION = 2,
        /**
        * NotificationSlot for service information.
        */
        CONTENT_INFORMATION = 3,
        /**
        * NotificationSlot for other purposes.
        */
        OTHER_TYPES = 0xFFFF
    }
    /**
     * Describes notification content types.
     *
     * @name ContentType
     * @since 7
     * @syscap SystemCapability.Notification.Notification
     * @permission N/A
     */
    export enum ContentType {
        /**
        * Normal text notification.
        */
        NOTIFICATION_CONTENT_BASIC_TEXT,
        /**
        * Long text notification.
        */
        NOTIFICATION_CONTENT_LONG_TEXT,
        /**
        * Picture-attached notification.
        */
        NOTIFICATION_CONTENT_PICTURE,
        /**
        * Conversation notification.
        */
        NOTIFICATION_CONTENT_CONVERSATION,
        /**
        * Multi-line text notification.
        */
        NOTIFICATION_CONTENT_MULTILINE
    }
    /**
     * Indicates the level of the slot
     */
    export enum SlotLevel {
        /**
        * Indicates that the notification function is disabled.
        */
        LEVEL_NONE = 0,
        /**
        * Indicates that the notification function is enabled but notification
        * icons are not displayed in the status bar, with no banner or prompt tone.
        */
        LEVEL_MIN = 1,
        /**
        * Indicates that the notification function is enabled and notification
        * icons are displayed in the status bar, with no banner or prompt tone.
        */
        LEVEL_LOW = 2,
        /**
        * Indicates that the notification function is enabled and notification
        * icons are displayed in the status bar, with no banner but with a prompt tone.
        */
        LEVEL_DEFAULT = 3,
        /**
        * Indicates that the notification function is enabled and notification
        * icons are displayed in the status bar, with a banner and a prompt tone.
        */
        LEVEL_HIGH = 4
    }
    /**
     * Obtains the number of all active notifications.
     */
    function getActiveNotificationCount(callback: AsyncCallback<number>): void;
    function getActiveNotificationCount(): Promise<number>;
    /**
     * Obtains an array of active notifications.
     */
    function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;
    function getActiveNotifications(): Promise<Array<NotificationRequest>>;
    /**
     * Cancel the notification of a specified group for this application.
     *
     * @since 8
     */
    function cancelGroup(groupName: string, callback: AsyncCallback<void>): void;
    function cancelGroup(groupName: string): Promise<void>;
    /**
     * Obtains whether the template is supported by the system.
     *
     * @since 8
     * @param templateName Name of template to be Obtained
     * @param callback callback function
     */
    function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void;
    function isSupportTemplate(templateName: string): Promise<boolean>;
    /**
     * Request permission to send notification.
     *
     * @since 8
     */
    function requestEnableNotification(callback: AsyncCallback<void>): void;
    function requestEnableNotification(): Promise<void>;
    /**
     * Obtains whether the device supports distributed notification.
     *
     * @since 8
     */
    function isDistributedEnabled(callback: AsyncCallback<boolean>): void;
    function isDistributedEnabled(): Promise<boolean>;
    /**
   * Describes a BundleOption.
   */
    export interface BundleOption {
        bundle: string;
        uid?: number;
    }
    /**
     * Describes a NotificationKey, which can be used to identify a notification.
     */
    export interface NotificationKey {
        id: number;
        label?: string;
    }
}
export default notification;
