/*
 * Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
import image from './@ohos.multimedia.image';
import dataSharePredicates from './@ohos.data.dataSharePredicates';

/**
 * @name userFileManager
 * @since 9
 * @systemapi
 * @syscap SystemCapability.FileManagement.UserFileManager.Core
 */
declare namespace userFileManager {
  /**
   * Returns an instance of UserFileManager
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @StageModelOnly
   * @param context Hap context information
   * @returns Instance of UserFileManager
   */
  function getUserFileMgr(context: Context): UserFileManager;

  /**
   * Enumeration types for different kinds of Files
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum FileType {
    /**
     * Image file type
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    IMAGE = 1,
    /**
     * Video file type
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    VIDEO,
    /**
     * Audio file type
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    AUDIO
  }

  /**
   * Enumeration types for different types of FileAsset
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10
   */
  enum PhotoSubType {
    /**
     * Default Photo Type
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    DEFAULT,
    /**
     * Screenshot Photo Type
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    SCREENSHOT,
    /**
     * Camera Photo Type
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    CAMERA
  }

  /**
   * File position
   *
   * @enum File position, which indicates the file is in local device or cloud
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10
   */
  enum PositionType {
    /**
     * File exists only in local device
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    LOCAL = 1,
    /**
     * File exists only in cloud
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    CLOUD,
    /**
     * File exists in both local and cloud
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    BOTH
  }

  /**
   * Indicates the type of file asset member.
   * @since 9
   * @systemapi
   */
  type MemberType = number | string | boolean;

  /**
   * Indicates the type of notify event.
   * @since 9
   * @systemapi
   */
  type ChangeEvent = 'deviceChange' | 'albumChange' | 'imageChange' | 'audioChange' | 'videoChange' | 'remoteFileChange';

  /**
   * Provides methods to encapsulate file attributes.
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface FileAsset {
    /**
     * URI of the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly uri: string;
    /**
     * File type, for example, IMAGE, VIDEO, AUDIO
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly fileType: FileType;
    /**
     * Display name (with a file name extension) of the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    displayName: string;
    /**
     * Return the fileAsset member parameter.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param member the name of the parameter. for example : get(ImageVideoKey.URI)
     */
    get(member: string): MemberType;
    /**
     * Set the fileAsset member parameter.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param member The name of the parameter
     * @param string The value of the parameter.
     * @example : Set(ImageVideoKey.TITLE, "newTitle"), call commitModify after set value
     */
    set(member: string, value: string): void;
    /**
     * Modify meta data where the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param callback No value will be returned.
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify meta data where the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     */
    commitModify(): Promise<void>;
    /**
     * Open local file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param mode Mode for open, for example: rw, r, w.
     * @param callback Callback return the fd of the file.
     */
    open(mode: string, callback: AsyncCallback<number>): void;
    /**
     * Open local file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param mode Mode for open, for example: rw, r, w.
     */
    open(mode: string): Promise<number>;
    /**
     * Close the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param fd Fd of the file which had been opened
     * @param callback No value will be returned.
     */
    close(fd: number, callback: AsyncCallback<void>): void;
    /**
     * Close the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param fd Fd of the file which had been opened
     */
    close(fd: number): Promise<void>;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param callback Callback used to return the thumbnail's pixelMap.
     */
    getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param size Thumbnail's size
     * @param callback Callback used to return the thumbnail's pixelMap.
     */
    getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param size Thumbnail's size
     */
    getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    /**
     * Set favorite for the file when the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param isFavorite True is favorite file, false is not favorite file
     * @param callback Callback used to return, No value is returned.
     */
    favorite(isFavorite: boolean, callback: AsyncCallback<void>): void;
    /**
     * Set favorite for the file when the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param isFavorite True is favorite file, false is not favorite file
     */
    favorite(isFavorite: boolean): Promise<void>;
    /**
     * Set file hidden state.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - true: Put the asset into hidden album; false: Recover the asset from hidden album.
     * @param { AsyncCallback<void> } callback - Return void.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    setHidden(hiddenState: boolean, callback: AsyncCallback<void>): void;
    /**
     * Set file hidden state.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - true: Put the asset into hidden album; false: Recover the asset from hidden album.
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    setHidden(hiddenState: boolean): Promise<void>;
  }

  /**
   * Describes AUDIO TYPE FetchOptions's predicate
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum AudioKey {
    /**
     * File uri, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    URI,
    /**
     * File name
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DISPLAY_NAME,
    /**
     * Date of the file creation, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_ADDED,
    /**
     * Modify date of the file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_MODIFIED,
    /**
     * Title of the file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    TITLE,
    /**
     * Artist of the audio file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    ARTIST,
    /**
     * Audio album of the audio file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    AUDIOALBUM,
    /**
     * Duration of the audio file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DURATION,
    /**
     * Favorite state of the file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    FAVORITE
  }

  /**
    * Describes Image, Video TYPE FetchOptions's predicate
    * @since 9
    * @systemapi
    * @syscap SystemCapability.FileManagement.UserFileManager.Core
    */
  enum ImageVideoKey {
    /**
     * File uri, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    URI,
    /**
     * File type of the Asset, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    FILE_TYPE,
    /**
     * File name
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DISPLAY_NAME,
    /**
     * Date of the file creation, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_ADDED,
    /**
     * Modify date of the file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_MODIFIED,
    /**
     * Title of the file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    TITLE,
    /**
     * Duration of the audio and video file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DURATION,
    /**
     * Width of the image file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    WIDTH,
    /**
     * Height of the image file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    HEIGHT,
    /**
     * Date taken of the file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_TAKEN,
    /**
     * Orientation of the image file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    ORIENTATION,
    /**
     * Favorite state of the file, read only
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    FAVORITE,
    /**
     * File position, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    POSITION,
    /**
     * Trashed date of the file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    DATE_TRASHED,
    /**
     * Hidden state of the file, read only
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    HIDDEN
  }

  /**
   * Describes Album TYPE predicate
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum AlbumKey {
    /**
     * Album uri
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    URI,
    /**
     * File type of the Album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    FILE_TYPE,
    /**
     * Album name
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    ALBUM_NAME,
    /**
     * Date of the Album creation
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_ADDED,
    /**
     * Modify date of the Album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_MODIFIED
  }

  /**
   * Fetch parameters
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface FetchOptions {
    /**
     * Indicates the columns to query.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param fetchColumns Indicates the columns to query. If this parameter is null, only uri, name, fileType will query.
     */
    fetchColumns: Array<string>;
    /**
     * Predicate to query
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param predicates Indicates filter criteria.
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * Fetch parameters
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface AlbumFetchOptions {
    /**
     * Predicate to query
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param predicates Indicates filter criteria.
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * Describe additional operations for creating photo
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10
   */
  interface PhotoCreateOptions {
    /**
     * SubType of the photo
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    subType?: PhotoSubType;
  }

  /**
   * Implements file retrieval.
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface FetchResult<T> {
    /**
     * Obtains the total number of files in the file retrieval result.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @returns Total number of files.
     */
    getCount(): number;
    /**
     * Checks whether the result set points to the last row.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @returns Whether the file is the last one.
     * You need to check whether the file is the last one before calling getNextObject,
     * which returns the next file only when False is returned for this method.
     */
    isAfterLast(): boolean;
    /**
     * Releases the FetchResult instance and invalidates it. Other methods cannot be called.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    close(): void;
    /**
     * Obtains the first FileAsset in the file retrieval result. This method uses a callback to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     */
    getFirstObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the first T in the file retrieval result. This method uses a promise to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @returns A Promise instance used to return the file in the format of a T instance.
     */
    getFirstObject(): Promise<T>;
    /**
     * Obtains the next T in the file retrieval result.
     * This method uses a callback to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when False is returned for isAfterLast().
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback used to return the file in the format of a T instance.
     */
    getNextObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the next T in the file retrieval result.
     * This method uses a promise to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when False is returned for isAfterLast().
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @returns A Promise instance used to return the file in the format of a T instance.
     */
    getNextObject(): Promise<T>;
    /**
     * Obtains the last T in the file retrieval result. This method uses a callback to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback used to return the file in the format of a T instance.
     */
    getLastObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the last T in the file retrieval result. This method uses a promise to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @returns A Promise instance used to return the file in the format of a T instance.
     */
    getLastObject(): Promise<T>;
    /**
     * Obtains the T with the specified index in the file retrieval result.
     * This method uses a callback to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param index Index of the file to obtain.
     * @param callback Callback used to return the file in the format of a T instance.
     * @throws {BusinessError} 13900020 - if type index is not number
     */
    getPositionObject(index: number, callback: AsyncCallback<T>): void;
    /**
     * Obtains the T with the specified index in the file retrieval result.
     * This method uses a promise to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param index Index of the file to obtain.
     * @throws {BusinessError} 13900020 - if type index is not number
     * @returns A Promise instance used to return the file in the format of a T instance.
     */
    getPositionObject(index: number): Promise<T>;
    /**
     * Obtains all T in the file retrieval result.
     * This method uses a callback to return the result. After this method is called,
     *
     * @param callback Callback used to return a T array.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    getAllObject(callback: AsyncCallback<Array<T>>): void;
    /**
     * Obtains all T in the file retrieval result.
     * This method uses a promise to return the result. that store the selected media resources.
     *
     * @returns A Promise instance used to return a T array.
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    getAllObject(): Promise<Array<T>>;
  }

  /**
   * Album type.
   *
   * @enum Album type
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10
   */
  enum AlbumType {
    /**
     * Album created by user.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    USER = 0,
    /**
     * Album created by system, which metadata cannot be modified by user.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    SYSTEM = 1024
  }

  /**
   * Album subtype
   *
   * @enum Album subtype
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10
   */
  enum AlbumSubType {
    /**
     * Generic user-created albums.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    USER_GENERIC = 1,
    /**
     * Favorite album, which assets are marked as favorite.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    FAVORITE = 1025,
    /**
     * Video album, which contains all video assets.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    VIDEO,
    /**
     * Hidden album, which assets are marked as hidden.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    HIDDEN,
    /**
     * Trash album, which assets are deleted.
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    TRASH,
    /**
     * Screenshot album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    SCREENSHOT,
    /**
     * Camera album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    CAMERA,
    /**
     * Any album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    ANY = 2147483647
  }

  /**
   * Defines the AbsAlbum.
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface AbsAlbum {
    /**
     * Album type
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    readonly albumType: AlbumType;
    /**
     * Album subtype
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    readonly albumSubType: AlbumSubType;
    /**
     * Album name.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    albumName: string;
    /**
     * Album uri.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly albumUri: string;
    /**
     * Date (timestamp) when the album was last modified.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly dateModified: number;
    /**
     * File count for the album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly count: number;
    /**
     * CoverUri for the album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    coverUri: string;
    /**
     * Obtains files in an album. This method uses an asynchronous callback to return the files.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param type Determined which kinds of PhotoAssets to retrive.
     * @param options Retrieval options.
     * @param callback Callback used to return the files in the format of a FetchResult instance.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     */
    getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Obtains files in an album. This method uses a promise to return the files.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param type Determined which kinds of PhotoAssets to retrive.
     * @param options Retrieval options.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     * @returns A Promise instance used to return the files in the format of a FetchResult instance.
     */
    getPhotoAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>;
  }

  /**
   * Defines the album.
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface Album extends AbsAlbum {
    /**
     * Modify the meta data for the album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param callback No value will be returned.
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify the meta data for the album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     */
    commitModify(): Promise<void>;
    /**
     * Add PhotoAssets to the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to add
     * @param { AsyncCallback<void> } callback Returns void
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    addPhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Add PhotoAssets to the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to add
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    addPhotoAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Remove PhotoAssets from the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to remove
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    removePhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Remove PhotoAssets from the album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to remove
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    removePhotoAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Recover PhotoAssets from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to recover
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    recoverPhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Recover PhotoAssets from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to recover
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    recoverPhotoAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Delete PhotoAssets permanently from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to delete
     * @param { AsyncCallback<void> } callback - Returns void
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    deletePhotoAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Delete PhotoAssets permanently from the trash album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Assets to delete
     * @returns { Promise<void> } Returns the promise
     * @throws { BusinessError } 13900020 - if PhotoAssets is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    deletePhotoAssets(assets: Array<FileAsset>): Promise<void>;
  }

  /**
   * Defines the UserFileManager class and provides functions to access the data in user file storage. 
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface UserFileManager {
    /**
     * Query photo, video assets
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param options retrieval options.
     * @param callback Callback return the FetchResult.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     */
    getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Query photo, video assets
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param type Determined which kinds of PhotoAssets to retrive.
     * @param options Retrieval options.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     * @returns A promise instance used to return the files in the format of a FetchResult instance
     */
    getPhotoAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>;
    /**
     * Create Photo Asset
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param displayName File name
     * @param albumUri Asset will put into the album.
     * @param callback Callback used to return the FileAsset
     * @throws {BusinessError} 13900020 - if type displayName or albumUri is not string
     * @throws {BusinessError} 14000001 - if type displayName invalid
     */
    createPhotoAsset(displayName: string, albumUri: string, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create Photo Asset
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param displayName File name
     * @param callback Callback used to return the FileAsset
     * @throws {BusinessError} 13900020 - if type displayName is not string
     * @throws {BusinessError} 14000001 - if type displayName invalid
     */
    createPhotoAsset(displayName: string, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create Photo Asset
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param displayName File name
     * @param albumUri Album uri is optional, PhotoAssets will put into the default album without albumUri
     * @throws {BusinessError} 13900020 - if type displayName or albumUri is not string
     * @returns A Promise instance used to return the FileAsset
     */
    createPhotoAsset(displayName: string, albumUri?: string): Promise<FileAsset>;
    /**
     * Create Photo Asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param displayName File name
     * @param createOption Create operation
     * @returns A Promise instance used to return the FileAsset
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9
     */
    createPhotoAsset(displayName: string, createOption: PhotoCreateOptions): Promise<FileAsset>;
    /**
     * Create Photo Asset
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param displayName File name
     * @param createOption Photo create operation
     * @param callback Callback used to return the FileAsset
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @throws { BusinessError } 14000001 - if type displayName invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 9
     */
    createPhotoAsset(displayName: string, createOption: PhotoCreateOptions, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create Audio Asset
     *
     * @permission ohos.permission.WRITE_AUDIO
     * @param displayName File name
     * @param callback Callback used to return the FileAsset
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @throws { BusinessError } 14000001 - if type displayName invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    createAudioAsset(displayName: string, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create Audio Asset
     *
     * @permission ohos.permission.WRITE_AUDIO
     * @param displayName File name
     * @returns A Promise instance used to return the FileAsset
     * @throws { BusinessError } 13900020 - if type displayName is not string
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    createAudioAsset(displayName: string): Promise<FileAsset>;
    /**
     * Obtains albums based on the retrieval options. This method uses an asynchronous callback to return.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param options Retrieval options.
     * @param callback Callback used to return an album array.
     * @throws {BusinessError} 13900020 - if type options is not AlbumFetchOptions
     */
    getPhotoAlbums(options: AlbumFetchOptions, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the retrieval options. This method uses a promise to return the albums.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param options Retrieval options.
     * @throws {BusinessError} 13900020 - if type options is not AlbumFetchOptions
     * @returns A Promise instance used to return an album array.
     */
    getPhotoAlbums(options: AlbumFetchOptions): Promise<FetchResult<Album>>;
    /**
     * Create a generic user album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Album name to be created.
     * @param { AsyncCallback<Album> } callback - Returns the instance of newly created Album
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    createAlbum(name: string, callback: AsyncCallback<Album>): void;
    /**
     * Create a generic user album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Album name to be created.
     * @returns { Promise<Album> } Returns the instance of newly created Album
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    createAlbum(name: string): Promise<Album>;
    /**
     * Delete generic user-created albums.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Specify which album to delete
     * @param { AsyncCallback<void> } callback - Returns void
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    deleteAlbums(albums: Array<Album>, callback: AsyncCallback<void>): void;
    /**
     * Delete generic user-created albums.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Specify which album to delete
     * @returns { Promise<void> } Returns the promise
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    deleteAlbums(albums: Array<Album>): Promise<void>;
    /**
     * Obtains albums based on the retrieval options and album types.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubType } subType - Album subtype.
     * @param { FetchOptions } options - options to fetch albums
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result of the albums
     * @throws { BusinessError } 13900020 - if type options is not FetchOption
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    getAlbums(
      type: AlbumType,
      subType: AlbumSubType,
      options: FetchOptions,
      callback: AsyncCallback<FetchResult<Album>>
    ): void;
    /**
     * Obtains albums based on the album types.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubType } subType - Album subtype.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result of the albums
     * @throws { BusinessError } 13900020 - if type options is not FetchOption
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    getAlbums(type: AlbumType, subType: AlbumSubType, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the retrieval options and album types.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubType } subType - Album subtype.
     * @param { FetchOptions } [options] -options to fetch albums
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result of the albums
     * @throws { BusinessError } 13900020 - if type options is not FetchOption
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    getAlbums(type: AlbumType, subType: AlbumSubType, options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Obtains system private albums based on the private album type. This method uses an asynchronous callback to return.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param type Private album type
     * @param callback Used to return a private album FetchResult.
     * @throws {BusinessError} 13900020 - if type type is not PrivateAlbumType
     */
    getPrivateAlbum(type: PrivateAlbumType, callback: AsyncCallback<FetchResult<PrivateAlbum>>): void;
    /**
     * Obtains system private albums based on the private album type. This method uses a promise to return.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param type Private album type
     * @throws {BusinessError} 13900020 - if type type is not PrivateAlbumType
     * @returns A Promise instance used to return a private album FetchResult.
     */
    getPrivateAlbum(type: PrivateAlbumType): Promise<FetchResult<PrivateAlbum>>;
    /**
     * Query audio assets
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_AUDIO
     * @param options Retrieval options.
     * @param callback Callback return the FetchResult.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     */
    getAudioAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Query audio assets
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_AUDIO
     * @param type Determined which kinds of AudioAssets to retrive.
     * @param options Retrieval options.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     * @returns A promise instance used to return the files in the format of a FetchResult instance
     */
    getAudioAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>;
    /**
    * Delete Asset
    * @since 9
    * @systemapi
    * @syscap SystemCapability.FileManagement.UserFileManager.Core
    * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
    * @param uri Uri of FileAsset
    * @param callback No value returned
    * @throws {BusinessError} 13900020 - if type uri is not string
    */
    delete(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Delete Asset
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param uri Uri of FileAsset
     * @throws {BusinessError} 13900020 - if type uri is not string
     * @returns A Promise instance, no value returned
     */
    delete(uri: string): Promise<void>;
    /**
     * Turn on monitor the data changes
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param type One of 'deviceChange','albumChange','imageChange','audioChange','videoChange','remoteFileChange'
     * @param callback No value returned
     */
    on(type: ChangeEvent, callback: Callback<void>): void;
    /**
     * Turn off monitor the data changes
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param type One of 'deviceChange','albumChange','imageChange','audioChange','videoChange','remoteFileChange'
     * @param callback No value returned
     */
    off(type: ChangeEvent, callback?: Callback<void>): void;
    /**
     * Turn on monitor for the specified uri.
     *
     * @param { string } uri - FileAsset's uri, album's uri or DefaultChangeUri
     * @param { boolean } forSubUri - Monitor the sub uri.
     * @param { Callback<ChangeData> } callback - callback function, return the ChangeData to be monitored
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    on(uri: string, forSubUri: boolean, callback: Callback<ChangeData>): void;
    /**
     * Turn off monitor for the specified uri.
     *
     * @param { string } uri - FileAsset's uri、 Album's uri or DefaultChangeUri value
     * @param { Callback<ChangeData> } [callback] - Remove specified callback from monitoring to a specified uri
     * @throws { BusinessError } 13900020 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    off(uri: string, callback?: Callback<ChangeData>): void;
    /**
     * Get Active Peer device information
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @param callback, Callback return the list of the active peer devices' information
     */
    getActivePeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Get Active Peer device information
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @returns Promise used to return the list of the active peer devices' information
     */
    getActivePeers(): Promise<Array<PeerInfo>>;
    /**
     * Get all the peer devices' information
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @param callback Callback return the list of the all the peer devices' information
     */
    getAllPeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Get all the peer devices' information
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @returns Promise used to return the list of the all the peer devices' information
     */
    getAllPeers(): Promise<Array<PeerInfo>>;
    /**
     * Release UserFileManager instance
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback no value returned
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Release UserFileManager instance
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    release(): Promise<void>;
        /**
     * Copy media assets
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
     * @param uriList uri list to be copied
     * @param path destination path of copying file
     * @param callback returned fail list
     */
        copyAssets(uriList: Array<string>, path: string, callback: AsyncCallback<Array<string>>): void;

        /**
         * Copy media assets
         * @since 9
         * @systemapi
         * @syscap SystemCapability.FileManagement.UserFileManager.Core
         * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
         * @param uriList uri list to be copied
         * @param path destination path of copying file
         * @param overwrite whether to overwrite if the same file exists
         * @param callback returned fail list
         */
        copyAssets(uriList: Array<string>, path: string, overwrite: boolean, callback: AsyncCallback<Array<string>>): void;
        
        /**
         * Copy media assets
         * @since 9
         * @systemapi
         * @syscap SystemCapability.FileManagement.UserFileManager.Core
         * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
         * @param uriList uri list to be copied
         * @param path destination path of copying file
         * @returns Promise used to return the list of fail
         */
        copyAssets(uriList: Array<string>, path: string): Promise<Array<string>>;
    
        /**
         * Copy media assets
         * @since 9
         * @systemapi
         * @syscap SystemCapability.FileManagement.UserFileManager.Core
         * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
         * @param uriList uri list to be copied
         * @param path destination path of copying file
         * @param overwrite whether to overwrite if the same file exist
         * @returns Promise used to return the list of fail
         */
        copyAssets(uriList: Array<string>, path: string , overwrite: boolean): Promise<Array<string>>;
        
        /**
         * Move media assets
         * @since 9
         * @systemapi
         * @syscap SystemCapability.FileManagement.UserFileManager.Core
         * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
         * @param uriList uri list to be moved
         * @param path destination path of moving file
         * @param callback returned fail list
         */
        moveAssets(uriList: Array<string>, path: string, callback: AsyncCallback<Array<string>>): void;
    
        /**
         * Move media assets
         * @since 9
         * @systemapi
         * @syscap SystemCapability.FileManagement.UserFileManager.Core
         * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
         * @param uriList uri list to be moved
         * @param path destination path of moving file
         * @param overwrite whether to overwrite if the same file exist
         * @param callback returned fail list
         */
        moveAssets(uriList: Array<string>, path: string, overwrite: boolean, callback: AsyncCallback<Array<string>>): void;
    
        /**
         * Move media assets
         * @since 9
         * @systemapi
         * @syscap SystemCapability.FileManagement.UserFileManager.Core
         * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
         * @param uriList uri list to be moved
         * @param path destination path of moving file
         * @returns Promise used to return the list of fail
         */
        moveAssets(uriList: Array<string>, path: string): Promise<Array<string>>;
    
        /**
         * Move media assets
         * @since 9
         * @systemapi
         * @syscap SystemCapability.FileManagement.UserFileManager.Core
         * @permission ohos.permission.READ_MEDIA and ohos.permission.WRITE_MEDIA
         * @param uriList uri list to be moved
         * @param path destination path of moving file
         * @param overwrite whether to overwrite if the same file exist
         * @returns Promise used to return the list of fail
         */
        moveAssets(uriList: Array<string>, path: string, overwrite: boolean): Promise<Array<string>>;
        /**
         * Get thumbnails
         * @since 9
         * @systemapi
         * @syscap SystemCapability.FileManagement.UserFileManager.Core
         * @permission ohos.permission.READ_MEDIA
         * @param options Options of URI list
         * @param callback thumbnails in PixelMap format
         */
  }

  /**
   * NotifyType subtype
   *
   * @enum NotifyType subtype
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10
   */
  enum NotifyType {
    /**
     * Type for add notification of the FileAsset or Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    NOTIFY_ADD,
    /**
     * Type for update notification of the FileAsset or Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    NOTIFY_UPDATE,
    /**
     * Type for remove notification of the FileAsset or Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    NOTIFY_REMOVE,
    /**
     * Type for notification of the FileAsset added at an Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    NOTIFY_ALBUM_ADD_ASSET,
    /**
     * Type for notification of the FileAsset removed at an Album
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    NOTIFY_ALBUM_REMOVE_ASSET
  }

  /**
   * DefaultChangeUri subtype
   *
   * @enum DefaultChangeUri subtype
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10
   */
  enum DefaultChangeUri {
    /**
     * Uri for default PhotoAsset, use with forDescendant{true}, will recieve all PhotoAsset's change notifications
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    DEFAULT_PHOTO_URI,
    /**
     * Uri for default Album, use with forDescendant{true}, will recieve all Album's change notifications
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    DEFAULT_ALBUM_URI,
    /**
     * Uri for default AudioAsset, use with forDescendant{true}, will recieve all AudioAsset's change notifications
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    DEFAULT_AUDIO_URI
  }

  /**
   * the value of the monitor callback function
   *
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @systemapi
   * @since 10
   */
  interface ChangeData {
    /**
     * the NotifyType of ChangeData
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    type: NotifyType;
    /**
     * all uris of the same NotifyType, could be FileAssets' or Albums'
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    uris: Array<string>;
    /**
     * change details of the Album's FileAssets when uris is the Album's uri type
     *
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @systemapi
     * @since 10
     */
    subUris: Array<string>;
  }

  /**
   * Peer devices' information
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
   */
  interface PeerInfo {
    /**
     * Peer device name
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     */
    readonly deviceName: string;
    /**
     * Peer device network id
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     */
    readonly networkId: string;
    /**
     * Peer device online status
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     */
    readonly isOnline: boolean;
  }

  /**
   * Private album type
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum PrivateAlbumType {
    /**
     * System Private Album: Favorite album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    TYPE_FAVORITE,
    /**
     * System Private Album: Trash album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    TYPE_TRASH
  }

  /**
   * Defines the private album
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface PrivateAlbum extends AbsAlbum {
    /**
     * Delete asset permanently from Trash bin, only support the Trash album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param uri uri of asset
     * @param callback No value returned
     */
    delete(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Delete asset permanently from Trash bin, only support the Trash album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param uri Uri of asset
     * @returns A Promise instance, no value returned
     */
    delete(uri: string): Promise<void>;
    /**
     * Recover asset from Trash bin, only support the Trash album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param uri Uri of asset
     * @param callback No value returned
     */
    recover(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Recover asset from Trash bin, only support the Trash album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param uri Uri of asset
     * @returns A Promise instance, no value returned
     */
    recover(uri: string): Promise<void>;
  }
}

export default userFileManager;
