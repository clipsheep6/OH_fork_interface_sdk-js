/*
* Copyright (c) 2022-2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
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

import { AsyncCallback } from './@ohos.base';
import { WantAgent } from './@ohos.wantAgent';
import { KeyEvent } from './@ohos.multimodalInput.keyEvent';
import { ElementName } from './bundleManager/ElementName';
import image from './@ohos.multimedia.image';
import audio from './@ohos.multimedia.audio';
import media from './@ohos.multimedia.media';

/**
 * @namespace avSession
 * @syscap SystemCapability.Multimedia.AVSession.Core
 * @since 9
 */
declare namespace avSession {
  /**
   * Create an AVSession instance. An ability can only create one AVSession
   * @param { Context } context - The context of application
   * @param { string } tag - A user-defined name for this session
   * @param { AVSessionType } type - The type of session {@link AVSessionType}
   * @param { AsyncCallback<AVSession> } callback - async callback for AVSession.
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  function createAVSession(context: Context, tag: string, type: AVSessionType, callback: AsyncCallback<AVSession>): void;

  /**
   * Create an AVSession instance. An ability can only create one AVSession
   * @param { Context } context - The context of application
   * @param { string } tag - A user-defined name for this session
   * @param { AVSessionType } type - The type of session {@link AVSessionType}
   * @returns { Promise<AVSession> } Promise for AVSession
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  function createAVSession(context: Context, tag: string, type: AVSessionType): Promise<AVSession>;

  /**
   * Get all avsession descriptors of the system
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { AsyncCallback<Array<Readonly<AVSessionDescriptor>>> } callback - async callback for an array of AVSessionDescriptors.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function getAllSessionDescriptors(callback: AsyncCallback<Array<Readonly<AVSessionDescriptor>>>): void;
  
  /**
   * Get all avsession descriptors of the system
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @returns { Promise<Array<Readonly<AVSessionDescriptor>>> } Promise for an array of AVSessionDescriptors
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function getAllSessionDescriptors(): Promise<Array<Readonly<AVSessionDescriptor>>>;

  /**
   * Get history avsession records. These sessions have been destroyed.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { number } maxSize - Specifies the maximum size of the returned value array.
   * @param { AsyncCallback<Array<Readonly<AVSessionDescriptor>>> } callback - async callback for an array of AVSessionDescriptors.
   * If provided '0' or not provided, the maximum value is determined by the system.
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi Hide this for inner system use
   * @since 10
   */
  function getHistoricalSessionDescriptors(maxSize: number, callback: AsyncCallback<Array<Readonly<AVSessionDescriptor>>>): void;

  /**
   * Get history avsession records. These sessions have been destroyed.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { number } maxSize - Specifies the maximum size of the returned value array.
   * If provided '0' or not provided, the maximum value is determined by the system.
   * @returns { Promise<Array<Readonly<AVSessionDescriptor>>> } Promise for an array of AVSessionDescriptors
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi Hide this for inner system use
   * @since 10
   */
  function getHistoricalSessionDescriptors(maxSize?: number): Promise<Array<Readonly<AVSessionDescriptor>>>;

  /**
   * Create an avsession controller
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } sessionId - Specifies the sessionId to create the controller.
   * @param { AsyncCallback<AVSessionController> } callback - async callback for AVSessionController.
   * If provided 'default', the system will create a default controller, Used to control the system default session
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function createController(sessionId: string, callback: AsyncCallback<AVSessionController>): void;

  /**
   * Create an avsession controller
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } sessionId - Specifies the sessionId to create the controller.
   * If provided 'default', the system will create a default controller, Used to control the system default session
   * @returns { Promise<AVSessionController> } Promise for AVSessionController
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function createController(sessionId: string): Promise<AVSessionController>;

  /**
   * Create an avsession remote controller
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param sessionId Specifies the sessionId to create the remote controller.
   * @returns An instance of {@link AVCastController}
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws {BusinessError} {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10
   */
  function createCastController(sessionId: string, callback: AsyncCallback<AVCastController>): void;
  function createCastController(sessionId: string): Promise<AVCastController>;

  /**
   * Cast Audio to the remote devices or cast back local device
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken | 'all' } session - Specifies the sessionId which to send to remote.
   * @param { Array<audio.AudioDeviceDescriptor> } audioDevices - Specifies the audio devices to cast.
   * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
   * 'all' means cast all the media audio of this device to remote.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
   * @throws { BusinessError } 6600104 - {@link #ERR_CODE_REMOTE_CONNECTION_ERR} - remote connection error
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function castAudio(session: SessionToken | 'all', audioDevices: Array<audio.AudioDeviceDescriptor>, callback: AsyncCallback<void>): void;

  /**
   * Cast Audio to the remote devices or cast back local device
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken | 'all' } session - Specifies the sessionId which to send to remote.
   * @param { Array<audio.AudioDeviceDescriptor> } audioDevices - Specifies the audio devices to cast.
   * @returns { Promise<void> } void promise when executed successfully
   * 'all' means cast all the media audio of this device to remote.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
   * @throws { BusinessError } 6600104 - {@link #ERR_CODE_REMOTE_CONNECTION_ERR} - remote connection error
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function castAudio(session: SessionToken | 'all', audioDevices: Array<audio.AudioDeviceDescriptor>): Promise<void>;

  /**
   * Session token. Used to judge the legitimacy of the session.
   * @typedef SessionToken
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  interface SessionToken {
    /**
     * The unique session id of the avsession object
     * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9
     */
    sessionId: string;
    /**
     * Process id of session
     * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
     * @type { number }
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9
     */
    pid: number;
    /**
     * User id
     * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
     * @type { number }
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9
     */
    uid: number;
  }

  /**
   * Register system session changed callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } type - Registration Type, session creation, deletion or top priority session change
   * @param { function } callback - Used to handle ('sessionCreate' | 'sessionDestroy' | 'topSessionChange' command)
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function on(type: 'sessionCreate' | 'sessionDestroy' | 'topSessionChange', callback: (session: AVSessionDescriptor) => void): void;

  /**
   * Unregister system session changed callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } type - Registration Type, session creation, deletion or top priority session change
   * @param { function } callback - Used to unregister listener for ('sessionCreate' | 'sessionDestroy' | 'topSessionChange') command
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function off(type: 'sessionCreate' | 'sessionDestroy' | 'topSessionChange', callback?: (session: AVSessionDescriptor) => void): void;

  /**
   * Register Session service death callback, notifying the application to clean up resources.
   * @param { string } type - Registration Type
   * @param { function } callback - Used to handle ('sessionServiceDie') command.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  function on(type: 'sessionServiceDie', callback: () => void): void;

  /**
   * Unregister Session service death callback, notifying the application to clean up resources.
   * @param { string } type - Registration Type
   * @param { function } callback -  Used to unregister listener for ('sessionServiceDie') command.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  function off(type: 'sessionServiceDie', callback?: () => void): void;

  /**
   * Send system media key event.The system automatically selects the recipient.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { KeyEvent } event - The key event to be sent
   * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws { BusinessError } 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function sendSystemAVKeyEvent(event: KeyEvent, callback: AsyncCallback<void>): void;

  /**
   * Send system media key event.The system automatically selects the recipient.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { KeyEvent } event - The key event to be sent
   * @returns { Promise<void> } void promise when executed successfully
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws { BusinessError } 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function sendSystemAVKeyEvent(event: KeyEvent): Promise<void>;

  /**
   * Send system control command.The system automatically selects the recipient.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { AVControlCommand } command - The command to be sent. See {@link AVControlCommand}
   * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws { BusinessError } 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
   * @throws { BusinessError } 6600107 - {@link #ERR_CODE_MESSAGE_OVERLOAD} - command or event overload
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function sendSystemControlCommand(command: AVControlCommand, callback: AsyncCallback<void>): void;

  /**
   * Send system control command.The system automatically selects the recipient.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { AVControlCommand } command - The command to be sent. See {@link AVControlCommand}
   * @returns { Promise<void> } void promise when executed successfully
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 401 - parameter check failed
   * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws { BusinessError } 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
   * @throws { BusinessError } 6600107 - {@link #ERR_CODE_MESSAGE_OVERLOAD} - command or event overload
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function sendSystemControlCommand(command: AVControlCommand): Promise<void>;

  /**
   * Cast resource to remote device.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param sessionId Specifies the sessionId which to send to remote.
   * @param device Specifies the device to cast.
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws {BusinessError} {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
   * @throws {BusinessError} {@link #ERR_CODE_REMOTE_CONNECTION_ERR} - remote connection error
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10
   */
  function startCast(session: SessionToken, device: OutputDeviceInfo, callback: AsyncCallback<void>): void;
  function startCast(session: SessionToken, device: OutputDeviceInfo): Promise<void>;

  /**
   * Releases resources used for AVCastController.
   * @param callback A callback instance used to return when release completed.
   * @throws { BusinessError } {@link #ERR_CODE_REMOTE_CONNECTION_NOT_EXIST} - remote connection does not exist
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10
   */
  function releaseCast(callback: AsyncCallback<void>): void;
  function releaseCast(): Promise<void>;

  /**
   * Register device discovery callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param type Registration Type
   * @param callback Used to returns the device info
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10
   */
  function on(type: 'deviceAvailable', callback: (device: OutputDeviceInfo) => void): void;

  /**
   * Unregister device discovery callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param type Registration Type
   * @param callback Used to returns the device info
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10
   */
  function off(type: 'deviceAvailable', callback?: (device: OutputDeviceInfo) => void): void;

  /**
   * device capability to filter device list
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 10
   */
  enum AVCastDeviceCapability {
    /**
     * Cast+ mirror capability
     * @systemapi
     * @since 10
     */
    DEVICE_CAPABILITY_CAST_MIRROR = 1,

    /**
     * Cast+ AppStream capability
     * @since 10
     */
    DEVICE_CAPABILITY_CAST_APP_STREAM = 2,

    /**
     * Mirror capability
     * @systemapi
     * @since 10
     */
    DEVICE_CAPABILITY_MIRACAST = 4,

    /**
     * DLNA capability
     * @systemapi
     * @since 10
     */
    DEVICE_CAPABILITY_DLNA = 8,
  }

  /**
   * Start device discovery.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 10
   */
  function startCastDiscovery(sessionId: string | 'all', filter ?: AVCastDeviceCapability): Promise<void>;

  /**
   * Stop device discovery.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 10
   */
  function stopCastDiscovery(): Promise<void>;

  /**
   * session type.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  type AVSessionType = 'audio' | 'video';
  /**
   * AVSession object.
   * @interface AVSession
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface AVSession {
    /**
     * unique session Id
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    readonly sessionId: string;

    /**
     * Set the metadata of this session.
     * In addition to the required properties, users can fill in partially supported properties
     * @param { AVMetadata } data {@link AVMetadata}
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setAVMetadata(data: AVMetadata, callback: AsyncCallback<void>): void;

    /**
     * Set the metadata of this session.
     * In addition to the required properties, users can fill in partially supported properties
     * @param { AVMetadata } data {@link AVMetadata}
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setAVMetadata(data: AVMetadata): Promise<void>;

    /**
     * Set the playback state of this session.
     * @param { AVPlaybackState } state {@link AVPlaybackState}
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setAVPlaybackState(state: AVPlaybackState, callback: AsyncCallback<void>): void;

    /**
     * Set the playback state of this session.
     * @param { AVPlaybackState } state {@link AVPlaybackState}
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setAVPlaybackState(state: AVPlaybackState): Promise<void>;

    /**
     * Set the ability to start the session corresponding to
     * @param { WantAgent } ability - The WantAgent for launch the ability
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setLaunchAbility(ability: WantAgent, callback: AsyncCallback<void>): void;

    /**
     * Set the ability to start the session corresponding to
     * @param { WantAgent } ability - The WantAgent for launch the ability
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setLaunchAbility(ability: WantAgent): Promise<void>;

    /**
     * Dispatch the session event of this session.
     * @param { string } event - Session event name to dispatch
     * @param { {[key: string]: Object} } args - The parameters of session event
     * @param { AsyncCallback<void>} callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    dispatchSessionEvent(event: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void;

    /**
     * Dispatch the session event of this session.
     * @param { string } event - Session event name to dispatch
     * @param { {[key: string]: Object} } args - The parameters of session event
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    dispatchSessionEvent(event: string, args: {[key: string]: Object}): Promise<void>;

    /**
     * Set the playlist of queueItem. Identifies the content of the playlist presented by this session.
     * @param { Array<AVQueueItem> } items - An array of the AVQueueItem
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setAVQueueItems(items: Array<AVQueueItem>, callback: AsyncCallback<void>): void;

    /**
     * Set the playlist of queueItem. Identifies the content of the playlist presented by this session.
     * @param { Array<AVQueueItem> } items - An array of the AVQueueItem
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setAVQueueItems(items: Array<AVQueueItem>): Promise<void>;

    /**
     * Set the name of the playlist presented by this session.
     * @param { string } title - The name of the playlist
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setAVQueueTitle(title: string, callback: AsyncCallback<void>): void;

    /**
     * Set the name of the playlist presented by this session.
     * @param { string } title - The name of the playlist
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setAVQueueTitle(title: string): Promise<void>;

    /**
     * Set the custom media packets for this session.
     * @param { {[key: string]: Object} } extras - The custom media packets
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setExtras(extras: {[key: string]: Object}, callback: AsyncCallback<void>): void;

    /**
     * Set the custom media packets for this session.
     * @param { {[key: string]: Object} } extras - The custom media packets
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    setExtras(extras: {[key: string]: Object}): Promise<void>;

    /**
     * Get the current session's own controller
     * @param { AsyncCallback<AVSessionController> } callback - async callback for the AVSessionController.
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getController(callback: AsyncCallback<AVSessionController>): void;

    /**
     * Get the current session's own controller
     * @returns { Promise<AVSessionController> } Promise for the AVSessionController
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getController(): Promise<AVSessionController>;

    /**
     * Get the current session's remote controller client.
     * If the avsession is not under casting state, the controller will return null.
     * @returns The instance of {@link AVCastController}
     * @throws {BusinessError} {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} {@link #ERR_CODE_REMOTE_CONNECTION_NOT_EXIST} - remote connection does not exist
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    getAVCastController(callback: AsyncCallback<AVCastController>): void;
    getAVCastController(): Promise<AVCastController>;

    /**
     * Get output device information
     * @param { AsyncCallback<OutputDeviceInfo> } callback - async callback for the OutputDeviceInfo.
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void;

    /**
     * Get output device information
     * @returns { Promise<OutputDeviceInfo> } Promise for the OutputDeviceInfo
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getOutputDevice(): Promise<OutputDeviceInfo>;

    /**
     * Register or unregister playback command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     * @param { string } type - Command to register.
     * @param { function } callback - Used to handle ('play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind') command
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind', callback: () => void): void;

    /**
     * Unregister playback command callback.
     * When canceling the callback, need to update the supported commands list.
     * @param { string } type - Command to register.
     * @param { function } callback - Used to handle ('play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind') command
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind', callback?: () => void): void;

    /**
     * Register seek command callback
     * @param { string } type - Registration Type 'seek'
     * @param { function } callback - Used to handle seek command.The callback provides the seek time(ms)
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'seek', callback: (time: number) => void): void;

    /**
     * Unregister seek command callback
     * @param { string } type - Registration Type 'seek'
     * @param { function } callback - Used to handle seek command.The callback provides the seek time(ms)
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'seek', callback?: (time: number) => void): void;

    /**
     * Register setSpeed command callback
     * @param { string } type - Registration Type 'setSpeed'
     * @param { function } callback - Used to handle setSpeed command.The callback provides the speed value
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'setSpeed', callback: (speed: number) => void): void;

    /**
     * Unregister setSpeed command callback
     * @param { string } type - Registration Type 'setSpeed'
     * @param { function } callback - Used to handle setSpeed command.The callback provides the speed value
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'setSpeed', callback?: (speed: number) => void): void;

    /**
     * Register setLoopMode command callback
     * @param { string } type - Registration Type 'setLoopMode'
     * @param { function } callback - Used to handle setLoopMode command.The callback provides the {@link LoopMode}
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'setLoopMode', callback: (mode: LoopMode) => void): void;

    /**
     * Unregister setLoopMode command callback
     * @param { string } type - Registration Type 'setLoopMode'
     * @param { function } callback - Used to handle setLoopMode command.The callback provides the {@link LoopMode}
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'setLoopMode', callback?: (mode: LoopMode) => void): void;

    /**
     * Register toggle favorite command callback
     * @param { string } type - Registration Type 'toggleFavorite'
     * @param { function } callback - Used to handle toggleFavorite command.The callback provides
     * the assetId for which the favorite status needs to be switched.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'toggleFavorite', callback: (assetId: string) => void): void;

    /**
     * Unregister toggle favorite command callback
     * @param { string } type - Registration Type 'toggleFavorite'
     * @param { function } callback - Used to handle toggleFavorite command.The callback provides
     * the assetId for which the favorite status needs to be switched.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'toggleFavorite', callback?: (assetId: string) => void): void;

    /**
     * Register media key handling callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle key events.The callback provides the KeyEvent
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'handleKeyEvent', callback: (event: KeyEvent) => void): void;

    /**
     * Unregister media key handling callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle key events.The callback provides the KeyEvent
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'handleKeyEvent', callback?: (event: KeyEvent) => void): void;

    /**

     * Register session output device change callback, and associated with ad device state
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle output device changed.

     * The callback provide the new device info {@link OutputDeviceInfo}
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'outputDeviceChange', callback: (state: DeviceState, device: OutputDeviceInfo) => void): void;

    /**
     * Unregister session output device change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle output device changed.
     * The callback provide the new device info {@link OutputDeviceInfo}
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'outputDeviceChange', callback?: (state: DeviceState, device: OutputDeviceInfo) => void): void;

    /**
     * Register session custom command change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle event when the common command is received
     * The callback provide the command name and command args
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'commonCommand', callback: (command: string, args: {[key: string]: Object}) => void): void;

    /**
     * Unregister session custom command change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to cancel a specific listener
     * The callback provide the command name and command args
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'commonCommand', callback?: (command: string, args: {[key: string]: Object}) => void): void;

    /**
     * Register the item to play from the playlist change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle the item to be played.
     * The callback provide the new device info {@link OutputDeviceInfo}
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'skipToQueueItem', callback: (itemId: number) => void): void;

    /**
     * Unregister the item to play from the playlist change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle the item to be played.
     * The callback provide the new device info {@link OutputDeviceInfo}
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'skipToQueueItem', callback?: (itemId: number) => void): void;

    /**
     * Releases cast to disconnect a connect.
     * @param callback A callback instance used to return when release completed.
     * @throws { BusinessError } {@link #ERR_CODE_REMOTE_CONNECTION_NOT_EXIST} - remote connection does not exist
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 10
     */
    releaseCast(callback: AsyncCallback<void>): void;
    releaseCast(): Promise<void>;

    /**
     * Activate the session, indicating that the session can accept control commands
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the session is activated.
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    activate(callback: AsyncCallback<void>): void;

    /**
     * Activate the session, indicating that the session can accept control commands
     * @returns { Promise<void> } void result promise when executed successfully 
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    activate(): Promise<void>;

    /**
     * Deactivate the session, indicating that the session not ready to accept control commands
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the session is deactivated.
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    deactivate(callback: AsyncCallback<void>): void;

    /**
     * Deactivate the session, indicating that the session not ready to accept control commands
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    deactivate(): Promise<void>;

    /**
     * Destroy this session, the server will clean up the session resources
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * Destroy this session, the server will clean up the session resources
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    destroy(): Promise<void>;
  }

  /**
   * Describes cast player states.
   * @since 10
   * @syscap SystemCapability.Multimedia.Media.AVCast
   */
  type AVCastPlayerState = 'idle' | 'buffering' | 'ready' | 'ended';

  /**
   * The type of control command
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 10
   */
   type AVCastControlCommandType = 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind' |
   'seek' | 'setVolume' | 'setSpeed';

  /**
   * The definition of command to be sent to the session
   * @interface AVCastControlCommand
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 10
   */
  interface AVCastControlCommand {
    /**
     * The command value {@link AVCastControlCommandType}
     * @since 10
     */
    command: AVCastControlCommandType;
    /**
     * parameter of the command.
     * seek command requires a number parameter
     * setVolume command requires a number parameter
     * setSpeed the parameter sees {@link #media.PlaybackSpeed}.
     * other commands need no parameter
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    parameter?: media.PlaybackSpeed | number;
  }

  /**
   * The play info provided by application.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 10
   */
  interface PlayInfo {
    /**
     * Media id.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    mediaId: string;
    /**
     * Media name.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    mediaName: string;
    /**
     * Media uri.
     * format like: scheme + "://" + "context".
     * file:  file://path
     * http:  http://xxx
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    mediaUri: string;
    /**
     * Media type.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    mediaType: string;
    /**
     * Media start position, described by milliseconds.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    startPosition: number;
    /**
     * Media duration, described by milliseconds.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    duration: number;
    /**
     * Media album cover url.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    albumCoverUrl ?: string;
    /**
     * Media album title.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    albumTitle: string;
    /**
     * Media artist.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    artist: string;
    /**
     * Media lyric uri.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    lyricUri ?: string;
    /**
     * Media lyric content.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    lyricContent ?: string;
    /**
     * Media icon resource.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    icon?: image.PixelMap | string;
    /**
     * Media icon uri.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    iconUri?: string;
    /**
     * Application name.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    appName: string;
  }

  /**
   * The play info holder provided by application.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 10
   */
  interface PlayInfoHolder {
    /**
     * Current index.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    currentIndex: number;
    /**
     * Play infos.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    playInfos: Array<PlayInfo>;
  }

  /**
   * AVCastController definition used to implement remote control
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 10
   */
  interface AVCastController {
    /**
     * Playback duration, When the data source does not support seek, it returns - 1.
     * @since 10
     * @syscap SystemCapability.Multimedia.Media.AVCast
     */
    readonly duration: number;

    /**
     * Set a surface instance to display remote view, used at remote sink.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.Multimedia.Media.AVCast
     */
    surfaceId ?: string;

    /**
     * Current playback position.
     * @since 10
     * @syscap SystemCapability.Multimedia.Media.AVCast
     */
    readonly currentTime: number;

    /**
     * Send control commands to casted player
     * @param command The command to be send. See {@link AVCastControlCommand}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} {@link #ERR_CODE_COMMAND_INVALID} - command not supported
     * @throws {BusinessError} {@link #ERR_CODE_SESSION_INACTIVE} - session inactive
     * @throws {BusinessError} {@link #ERR_CODE_REMOTE_CONNECTION_NOT_EXIST} - remote connection does not exist
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    sendControlCommand(command: AVCastControlCommand, callback: AsyncCallback<void>): void;
    sendControlCommand(command: AVCastControlCommand): Promise<void>;

    /**
     * Start a play with PlayInfoHolder.
     * @param info The play info to be sent. See {@link PlayInfoHolder}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} {@link #ERR_CODE_SESSION_INACTIVE} - session inactive
     * @throws {BusinessError} {@link #ERR_CODE_REMOTE_CONNECTION_NOT_EXIST} - remote connection does not exist
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    start(info : PlayInfoHolder, callback: AsyncCallback<void>): void;
    start(info : PlayInfoHolder): Promise<void>;

    /**
     * Register listener for remote media playback state.
     * @param type 'stateChange' of the playback event to listen for.
     * @param callback Callback used to listen for the playback stateChange event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    on(type: 'stateChange', callback: (state: AVCastPlayerState) => void): void;

    /**
     * Unregister listener for remote media playback state.
     * @param type 'stateChange' of the playback event to listen for.
     * @param callback Callback used to listen for the playback stateChange event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    off(type: 'stateChange'): void;

    /**
     * Register or unregister listener for media playback events.
     * @param type Type of the playback event to listen for.
     * @param callback Callback used to listen for the playback volume event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    on(type: 'volumeChange', callback: AsyncCallback<number>): void;

    /**
     * Register or unregister listener for media playback events.
     * @param type Type of the playback event to listen for.
     * @param callback Callback used to listen for the playback volume event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    off(type: 'volumeChange'): void;

    /**
     * Register listener for seek completion events, the app will get the new position.
     * @param type Type of the playback event to listen for.
     * @param callback Callback used to listen for the playback seekDone event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    on(type: 'seekDone', callback: AsyncCallback<number>): void;

    /**
     * Unregister listener for seek completion events.
     * @param type Type of the playback event to listen for.
     * @param callback Callback used to listen for the playback seekDone event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    off(type: 'seekDone'): void;

    /**
     * Register listener for speed change event.
     * @param type Type of the playback event to listen for.
     * @param callback Callback used to listen for the playback speedDone event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    on(type: 'speedDone', callback: AsyncCallback<number>): void;

    /**
      * Unregister listener for speed change event.
      * @param type Type of the playback event to listen for.
      * @param callback Callback used to listen for the playback speedDone event.
      * @syscap SystemCapability.Multimedia.AVSession.AVCast
      * @since 10
      */
    off(type: 'speedDone', callback?: AsyncCallback<number>): void;

    /**
     * Register listener for time update event.
     * @param type Type of the playback event to listen for.
     * @param callback Callback used to listen for the playback timeUpdate event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    on(type: 'timeUpdate', callback: AsyncCallback<number>): void;

    /**
     * Unregister listener for time update event.
     * @param type Type of the playback event to listen for.
     * @param callback Callback used to listen for the playback timeUpdate event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    off(type: 'timeUpdate'): void;

    /**
     * Register listeners for playback error events.
     * @param type Type of the playback error event to listen for.
     * @param callback Callback used to listen for the playback error event.
     * @throws { BusinessError } {@link #ERR_CODE_CONNECT_TIMEOUT} - Connect time out.
     * @throws { BusinessError } {@link #ERR_CODE_CAST_SERVICE_DIED} - Service is died.
     * @throws { BusinessError } {@link #ERR_CODE_REMOTE_UNSUPPORT_FORMAT} - Unsupport format.
     * @throws { BusinessError } {@link #ERR_CODE_REMOTE_CONNECTION_NOT_EXIST} - remote connection does not exist
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Unregister listens for playback error events.
     * @param type Type of the playback error event to listen for.
     * @param callback Callback used to listen for the playback error event.
     * @throws { BusinessError } {@link #ERR_CODE_CONNECT_TIMEOUT} - Connect time out.
     * @throws { BusinessError } {@link #ERR_CODE_CAST_SERVICE_DIED} - Service is died.
     * @throws { BusinessError } {@link #ERR_CODE_REMOTE_UNSUPPORT_FORMAT} - Unsupport format.
     * @throws { BusinessError } {@link #ERR_CODE_REMOTE_CONNECTION_NOT_EXIST} - remote connection does not exist
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    off(type: 'error'): void;
  }

  /**
   * Define the casted device state.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  enum DeviceState {
    /**
     * begin searching device.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    STATE_SEARCHING = 1,
    /**
     * the device is connecting..
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    STATE_CONNECTING = 2,
    /**
     * the device is connected.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    STATE_CONNECTED = 3,
    /**
     * the device failed to connect.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    STATE_CONNECT_FAILED = 4,
    /**
     * the device is disconnected.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    STATE_DISCONNECTED = 5,
  }

  /*
   * The metadata of the current media.Used to set the properties of the current media file
   * @interface AVMetadata
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface AVMetadata {
    /**
     * Unique ID used to represent this media.
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    assetId: string;
    /**
     * The title of this media, for display in media center.
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    title?: string;
    /**
     * The artist of this media
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    artist?: string;
    /**
     * The author of this media
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    author?: string;
    /**
     * The album of this media
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    album?: string;
    /**
     * The writer of this media
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    writer?: string;
    /**
     * The composer of this media
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    composer?: string;
    /**
     * The duration of this media, used to automatically calculate playback position
     * @type { ?number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    duration?: number;
    /**
     * The image of the media as a {@link PixelMap} or an uri formatted String,
     * used to display in media center.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    mediaImage?: image.PixelMap | string;
    /**
     * The publishDate of the media
     * @type { ?Date }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    publishDate?: Date;
    /**
     * The subtitle of the media, used for display
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    subtitle?: string;
    /**
     * The discription of the media, used for display
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    description?: string;
    /**
     * The lyric of the media, it should be in standard lyric format
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    lyric?: string;
    /**
     * The previous playable media id.
     * Used to tell the controller if there is a previous playable media
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    previousAssetId?: string;
    /**
     * The next playable media id.
     * Used to tell the controller if there is a next playable media
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    nextAssetId?: string;
  }

  /**
   * The description of the media for an item in the playlist of the session
   * @interface AVMediaDescription
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface AVMediaDescription {
    /**
     * Unique ID used to represent this media.
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    mediaId: string;
    /**
     * The title of this media, for display in media center.
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    title?: string;
    /**
     * The subtitle of the media, used for display
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    subtitle?: string;
    /**
     * The description of this media
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    description?: string;
    /**
     * The image of the media as a {@link PixelMap},
     * used to display in media center.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    icon?: image.PixelMap | string;
    /**
     * The image of the media as an uri formatted String,
     * used to display in media center.
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    iconUri?: string;
    /**
     * Any additional attributes that can be represented as key-value pairs
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    extras?: {[key: string]: Object};
    /**
     * The uri of the media, used to locate the media in some special cases
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    mediaUri?: string;
  }

  /**
   * The item in the playlist of the session
   * @interface AVQueueItem
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface AVQueueItem {
    /**
     * Sequence number of the item in the playlist.
     * @type { number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    itemId: number;
    /**
     * The media description of the item in the playlist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    description?: AVMediaDescription;
  }

  /**
   * Used to indicate the playback state of the current media.
   * If the playback state of the media changes, it needs to be updated synchronously
   * @interface AVPlaybackState
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface AVPlaybackState {
    /**
     * Current playback state. See {@link PlaybackState}
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    state?: PlaybackState;
    /**
     * Current playback speed
     * @type { ?number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    speed?: number;
    /**
     * Current playback position of this media. See {@link PlaybackPosition}
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    position?: PlaybackPosition;
    /**
     * The current buffered time, the maximum playable position
     * @type { ?number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    bufferedTime?: number;
    /**
     * Current playback loop mode. See {@link LoopMode}
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    loopMode?: LoopMode;
    /**
     * Current Favorite Status
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    isFavorite?: boolean;
    /**
     * Current active item id
     * @type { ?number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    activeItemId?: number;
    /**
     * Current custom media packets
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    extras?: {[key: string]: Object};
  }

  /**
   * Playback position definition
   * @interface PlaybackPosition
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface PlaybackPosition {
    /**
     * Elapsed time(position) of this media set by the app.
     * @type { number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    elapsedTime: number;
    /**
     * Record the system time when elapsedTime is set.
     * @type { number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    updateTime: number;
  }

  /**
   * casted device protocol
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  enum DeviceCategory {
    /**
     * The local device, including local connected sound devices and bluetooth
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.Core
     */
    LOCAL = 1,
    /**
     * The streaming casting.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    STREAMING = 2,
    /**
     * The url casting.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    CAST = 3,
  }

  /**
   * remote device type
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 10
   */
  enum DeviceType {
    /**
     * The smart television device.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    DEVICE_HW_TV = 1,
    /**
     * The sound box device.
     * @since 10
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     */
    DEVICE_SOUND_BOX = 2,
  }

  /**
   * Device Information Definition
   * @interface DeviceInfo
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface DeviceInfo {
    /**
     * The device
     * @since 10
     */
    deviceCategory: DeviceCategory;
    /**
     * Audio device id.The length of the audioDeviceId array is greater than 1
     * if output to multiple devices at the same time.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    deviceId: string;
    /**
     * Device name. The length of the deviceName array is greater than 1
     * if output to multiple devices at the same time.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    deviceName: string;
    /**
     * device type which indicates the device category.
     * @since 10
     */
    deviceType: DeviceType;
    /**
     * device ip address if available.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 10
     */
    ipAddress?: string;
    /**
     * device type which indicates the device category.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 10
     */
    providerId?: number;
  }

  /**
   * Target Device Information Definition
   * @interface OutputDeviceInfo
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface OutputDeviceInfo {
    /**
     * Arrays of device information
     * @since 10
     */
    devices: Array<DeviceInfo>;
  }

  /**
   * Loop Play Mode Definition
   * @enum { number }
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  enum LoopMode {
    /**
     * The default mode is sequential playback
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    LOOP_MODE_SEQUENCE = 0,

    /**
     * Single loop mode
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    LOOP_MODE_SINGLE = 1,

    /**
     * List loop mode
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    LOOP_MODE_LIST = 2,

    /**
     * Shuffle playback mode
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    LOOP_MODE_SHUFFLE = 3,
  }

  /**
   * Definition of current playback state
   * @enum { number }
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  enum PlaybackState {
    /**
     * Initial state. The initial state of media file
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    PLAYBACK_STATE_INITIAL = 0,

    /**
     * Preparing state. Indicates that the media file is not ready to play,
     * the media is loading or buffering
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    PLAYBACK_STATE_PREPARE = 1,

    /**
     * Playing state.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    PLAYBACK_STATE_PLAY = 2,

    /**
     * Paused state.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    PLAYBACK_STATE_PAUSE = 3,

    /**
     * Fast forwarding state.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    PLAYBACK_STATE_FAST_FORWARD = 4,

    /**
     * Rewinding state.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    PLAYBACK_STATE_REWIND = 5,

    /**
     * Stopped state.The server will clear the media playback position and other information.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    PLAYBACK_STATE_STOP = 6,
  }

  /**
   * The description of the session
   * @interface AVSessionDescriptor
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  interface AVSessionDescriptor {
    /**
     * Unique ID of the session
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9
     */
    sessionId: string;
    /**
     * Session type, currently supports audio or video
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9
     */
    type: AVSessionType;
    /**
     * The session tag set by the application
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9
     */
    sessionTag: string;
    /**
     * The elementName of the ability that created this session. See {@link ElementName} in bundle/elementName.d.ts
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9
     */
    elementName: ElementName;
    /**
     * Session active state
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9
     */
    isActive: boolean;
    /**
     * Is it the top priority session
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9
     */
    isTopSession: boolean;
    /**
     * The current output device information.
     * It will be undefined if this is a local session.
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9
     */
    outputDevice: OutputDeviceInfo;
  }

  /**
   * Session controller,used to control media playback and get media information
   * @interface AVSessionController
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface AVSessionController {
    /**
     * Unique session Id
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    readonly sessionId: string;
    /**
     * Get the playback status of the current session
     * @param { AsyncCallback<AVPlaybackState> } callback - The triggered asyncCallback when (getAVPlaybackState).
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getAVPlaybackState(callback: AsyncCallback<AVPlaybackState>): void;

    /**
     * Get the playback status of the current session
     * @returns { Promise<AVPlaybackState> } (AVPlaybackState) returned through promise
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getAVPlaybackState(): Promise<AVPlaybackState>;

    /**
     * Get the metadata of the current session
     * @param { AsyncCallback<AVMetadata> } callback - The triggered asyncCallback when (getAVMetadata).
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getAVMetadata(callback: AsyncCallback<AVMetadata>): void;

    /**
     * Get the metadata of the current session
     * @returns { Promise<AVMetadata> } (AVMetadata) returned through promise
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getAVMetadata(): Promise<AVMetadata>;

    /**
     * Get the name of the playlist of the current session
     * @param { AsyncCallback<string> } callback - The triggered asyncCallback when (getAVQueueTitle).
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @throws { BusinessError } 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getAVQueueTitle(callback: AsyncCallback<string>): void;

    /**
     * Get the name of the playlist of the current session
     * @returns { Promise<string> } (string) returned through promise
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @throws { BusinessError } 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getAVQueueTitle(): Promise<string>;

    /**
     * Get the playlist of the current session
     * @param { AsyncCallback<Array<AVQueueItem>> } callback - The triggered asyncCallback when (getAVQueueItems).
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @throws { BusinessError } 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getAVQueueItems(callback: AsyncCallback<Array<AVQueueItem>>): void;

    /**
     * Get the playlist of the current session
     * @returns { Promise<Array<AVQueueItem>> } (Array<AVQueueItem>) returned through promise
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @throws { BusinessError } 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getAVQueueItems(): Promise<Array<AVQueueItem>>;

    /**
     * Set the item in the playlist to be played
     * @param { number } itemId - The serial number of the item to be played
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @throws { BusinessError } 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    skipToQueueItem(itemId: number, callback: AsyncCallback<void>): void;

    /**
     * Set the item in the playlist to be played
     * @param { number } itemId - The serial number of the item to be played
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @throws { BusinessError } 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    skipToQueueItem(itemId: number): Promise<void>;

    /**
     * Get output device information
     * @param { AsyncCallback<OutputDeviceInfo> } callback - The triggered asyncCallback when (getOutputDevice).
     * @throws { BusinessError } 600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void;

    /**
     * Get output device information
     * @returns { Promise<OutputDeviceInfo> } (OutputDeviceInfo) returned through promise
     * @throws { BusinessError } 600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getOutputDevice(): Promise<OutputDeviceInfo>;

    /**
     * Send media key event to this session
     * @param { KeyEvent } event - The KeyEvent
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @throws { BusinessError } 600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
     * @throws { BusinessError } 600106 - {@link #ERR_CODE_SESSION_INACTIVE} - session inactive
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    sendAVKeyEvent(event: KeyEvent, callback: AsyncCallback<void>): void;

    /**
     * Send media key event to this session
     * @param { KeyEvent } event - The KeyEvent
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @throws { BusinessError } 600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
     * @throws { BusinessError } 600106 - {@link #ERR_CODE_SESSION_INACTIVE} - session inactive
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    sendAVKeyEvent(event: KeyEvent): Promise<void>;

    /**
     * Get the {@link WantAgent} of this session that can launch the session ability
     * @param { AsyncCallback<WantAgent> } callback - The asyncCallback triggered when getting the WantAgent.
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getLaunchAbility(callback: AsyncCallback<WantAgent>): void;

    /**
     * Get the {@link WantAgent} of this session that can launch the session ability
     * @returns { Promise<WantAgent> } WantAgent promise
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getLaunchAbility(): Promise<WantAgent>;

    /**
     * Get the adjusted playback position. The time automatically calculated by the system
     * taking into account factors such as playback status, playback speed, and application update time.
     * @returns { number } current playback position in ms.Note that the returns value of each call will be different.
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getRealPlaybackPositionSync(): number;

    /**
     * Check if the current session is active
     * @param { AsyncCallback<boolean> } callback - The triggered asyncCallback when (isActive).
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    isActive(callback: AsyncCallback<boolean>): void;

    /**
     * Check if the current session is active
     * @returns { Promise<boolean> } boolean promise
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    isActive(): Promise<boolean>;

    /**
     * Destroy the server controller
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * Destroy the server controller
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    destroy(): Promise<void>;

    /**
     * Get commands supported by the current session
     * @param { AsyncCallback<Array<AVControlCommandType>> } callback - The triggered asyncCallback when (getValidCommands).
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getValidCommands(callback: AsyncCallback<Array<AVControlCommandType>>): void;

    /**
     * Get commands supported by the current session
     * @returns { Promise<Array<AVControlCommandType>> } array of AVControlCommandType promise
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getValidCommands(): Promise<Array<AVControlCommandType>>;

    /**
     * Send control commands to this session
     * @param { AVControlCommand } command - The command to be sent. See {@link AVControlCommand}
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @throws { BusinessError } 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
     * @throws { BusinessError } 6600106 - {@link #ERR_CODE_SESSION_INACTIVE} - session inactive
     * @throws { BusinessError } 6600107 - {@link #ERR_CODE_MESSAGE_OVERLOAD} - command or event overload
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    sendControlCommand(command: AVControlCommand, callback: AsyncCallback<void>): void;

    /**
     * Send control commands to this session
     * @param { AVControlCommand } command - The command to be sent. See {@link AVControlCommand}
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @throws { BusinessError } 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
     * @throws { BusinessError } 6600106 - {@link #ERR_CODE_SESSION_INACTIVE} - session inactive
     * @throws { BusinessError } 6600107 - {@link #ERR_CODE_MESSAGE_OVERLOAD} - command or event overload
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    sendControlCommand(command: AVControlCommand): Promise<void>;

    /**
     * Send common commands to this session
     * @param { string } command - The command name to be sent.
     * @param { {[key: string]: Object} } args - The parameters of session event
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @throws { BusinessError } 6600103 - controller does not exist
     * @throws { BusinessError } 6600105 - command not supported
     * @throws { BusinessError } 6600106 - session inactive
     * @throws { BusinessError } 6600107 - command or event overload
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    sendCommonCommand(command: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void;

    /**
     * Send common commands to this session
     * @param { string } command - The command name to be sent.
     * @param { {[key: string]: Object} } args - The parameters of session event
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @throws { BusinessError } 6600103 - controller does not exist
     * @throws { BusinessError } 6600105 - command not supported
     * @throws { BusinessError } 6600106 - session inactive
     * @throws { BusinessError } 6600107 - command or event overload
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    sendCommonCommand(command: string, args: {[key: string]: Object}): Promise<void>;

    /**
     * Get custom media packets provided by the corresponding session
     * @param { AsyncCallback<{[key: string]: Object}> } callback - The triggered asyncCallback when (getExtras).
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @throws { BusinessError } 6600103 - controller does not exist
     * @throws { BusinessError } 6600105 - command not supported
     * @throws { BusinessError } 6600107 - command or event overload
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getExtras(callback: AsyncCallback<{[key: string]: Object}>): void;

    /**
     * Get custom media packets provided by the corresponding session
     * @returns { Promise<{[key: string]: Object}> } the parameters of extras
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600102 - session does not exist
     * @throws { BusinessError } 6600103 - controller does not exist
     * @throws { BusinessError } 6600105 - command not supported
     * @throws { BusinessError } 6600107 - command or event overload
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    getExtras(): Promise<{[key: string]: Object}>;

    /**
     * Register metadata changed callback
     * @param { string } type 
     * @param { Array<keyof AVMetadata> | 'all' } filter - The properties of {@link AVMetadata} that you cared about
     * @param { function } callback - The callback used to handle metadata changed event.
     * The callback function provides the {@link AVMetadata} parameter.
     * It only contains the properties set in the filter.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'metadataChange', filter: Array<keyof AVMetadata> | 'all', callback: (data: AVMetadata) => void);

    /**
     * Unregister metadata changed callback
     * @param { string } type
     * @param { function } callback - The callback used to handle metadata changed event.
     * The callback function provides the {@link AVMetadata} parameter.
     * It only contains the properties set in the filter.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'metadataChange', callback?: (data: AVMetadata) => void);

    /**
     * Register playback state changed callback
     * @param { string } type
     * @param { Array<keyof AVPlaybackState> | 'all' } filter - The properties of {@link AVPlaybackState} that you cared about
     * @param { function } callback - The callback used to handle playback state changed event.
     * The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'playbackStateChange', filter: Array<keyof AVPlaybackState> | 'all', callback: (state: AVPlaybackState) => void);

    /**
     * Unregister playback state changed callback
     * @param { string } type
     * @param { function } callback - The callback used to handle playback state changed event.
     * The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'playbackStateChange', callback?: (state: AVPlaybackState) => void);

    /**
     * Register current session destroyed callback
     * @param { string } type
     * @param { function } callback - The callback used to handle current session destroyed event.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'sessionDestroy', callback: () => void);

    /**
     * Unregister current session destroyed callback
     * @param { string } type - 'sessionDestroy'
     * @param { function } callback - The callback used to handle current session destroyed event.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'sessionDestroy', callback?: () => void);

    /**
     * Register the active state of this session changed callback
     * @param { string } type - 'activeStateChange'
     * @param { function } callback - The callback used to handle the active state of this session changed event.
     * The callback function provides the changed session state.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'activeStateChange', callback: (isActive: boolean) => void);

    /**
     * Unregister the active state of this session changed callback
     * @param { string } type - 'activeStateChange'
     * @param { function } callback - The callback used to handle the active state of this session changed event.
     * The callback function provides the changed session state.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'activeStateChange', callback?: (isActive: boolean) => void);

    /**
     * Register the valid commands of the session changed callback
     * @param { string } type - 'validCommandChange'
     * @param { function } callback - The callback used to handle the changes.
     * The callback function provides an array of AVControlCommandType.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'validCommandChange', callback: (commands: Array<AVControlCommandType>) => void);

    /**
     * Unregister the valid commands of the session changed callback
     * @param { string } type - 'validCommandChange'
     * @param { function } callback - The callback used to handle the changes.
     * The callback function provides an array of AVControlCommandType.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'validCommandChange', callback?: (commands: Array<AVControlCommandType>) => void);

    /**
     * Register session output device change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle output device changed.
     * The callback provides the new device info {@link OutputDeviceInfo}
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'outputDeviceChange', callback: (device: OutputDeviceInfo) => void): void;

    /**
     * Unregister session output device change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle output device changed.
     * The callback provides the new device info {@link OutputDeviceInfo}
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'outputDeviceChange', callback?: (device: OutputDeviceInfo) => void): void;

    /**
     * Register session event callback
     * @param { string } type - 'sessionEvent'
     * @param { function } callback - The callback used to handle session event changed event.
     * The callback function provides the event string and key-value pair parameters.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'sessionEvent', callback: (sessionEvent: string, args: {[key: string]: Object}) => void): void;

    /**
     * Unregister session event callback
     * @param { string } type - 'sessionEvent'
     * @param { function } callback - Used to cancel a specific listener
     * The callback function provides the event string and key-value pair parameters.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'sessionEvent', callback?: (sessionEvent: string, args: {[key: string]: Object}) => void): void;

    /**
     * Register session playlist change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle playlist changed.
     * The callback provides the new array of AVQueueItem {@link AVQueueItem}
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'queueItemsChange', callback: (items: Array<AVQueueItem>) => void): void;

    /**
     * Unregister session playlist change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle playlist changed.
     * The callback provides the new array of AVQueueItem {@link AVQueueItem}
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'queueItemsChange', callback?: (items: Array<AVQueueItem>) => void): void;

    /**
     * Register the name of session playlist change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle name of playlist changed.
     * The callback provides the new name.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'queueTitleChange', callback: (title: string) => void): void;

    /**
     * Unregister the name of session playlist change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle name of playlist changed.
     * The callback provides the new name.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - server exception
     * @throws { BusinessError } 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'queueTitleChange', callback?: (title: string) => void): void;

    /**
     * Register the custom media packets change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle custom media packets changed.
     * The callback provides the new media packets.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    on(type: 'extrasChange', callback: (extras: {[key: string]: Object}) => void): void;

    /**
     * Unregister the custom media packets change callback
     * @param { string } type - Registration Type
     * @param { function } callback - Used to handle custom media packets changed.
     * The callback provides the new media packets.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws { BusinessError } 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    off(type: 'extrasChange', callback?: (extras: {[key: string]: Object}) => void): void;
  }

  /**
   * The type of control command
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  type AVControlCommandType = 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind' |
    'seek' | 'setSpeed' | 'setLoopMode' | 'toggleFavorite';

  /**
   * The definition of command to be sent to the session
   * @interface AVControlCommand
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface AVControlCommand {
    /**
     * The command value {@link AVControlCommandType}
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    command: AVControlCommandType;
    /**
     * parameter of the command. Whether this command requires parameters, see {@link AVSessionCommand}
     * seek command requires a number parameter
     * setSpeed command requires a number parameter
     * setLoopMode command requires a {@link LoopMode} parameter.
     * toggleFavorite command requires assetId {@link AVMetadata.assetId} parameter
     * other commands need no parameter
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    parameter?: LoopMode | string | number;
  }

  /**
   * Enumerates ErrorCode types, returns in BusinessError.code.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  enum AVSessionErrorCode {
    /**
     * Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    ERR_CODE_SERVICE_EXCEPTION = 6600101,

    /**
     * The session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    ERR_CODE_SESSION_NOT_EXIST = 6600102,

    /**
     * The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    ERR_CODE_CONTROLLER_NOT_EXIST = 6600103,

    /**
     * The remote session connection failed.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    ERR_CODE_REMOTE_CONNECTION_ERR = 6600104,

    /**
     * Invalid session command.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    ERR_CODE_COMMAND_INVALID = 6600105,

    /**
     * The session is not activated.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    ERR_CODE_SESSION_INACTIVE = 6600106,

    /**
     * Too many commands or events.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    ERR_CODE_MESSAGE_OVERLOAD = 6600107,

    /**
     * System or network response timeout.
     * @since 10
     */
    ERR_CODE_CONNECT_TIMEOUT = 6600108,

    /**
    * The media format is unsupported on remote device.
    * @since 10
    */
    ERR_CODE_REMOTE_UNSUPPORT_FORMAT = 6600109,

    /**
    * The cast service is died.
    * @since 10
    */
    ERR_CODE_CAST_SERVICE_DIED = 6600110,

    /**
    * The remote connection is not established.
    * @since 10
    */
    ERR_CODE_REMOTE_CONNECTION_NOT_EXIST = 6600111,
  }
}

export default avSession;
