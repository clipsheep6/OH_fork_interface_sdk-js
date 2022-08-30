/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import {AsyncCallback} from "./basic";

/**
 * This module provides the capability to manage web modules.
 *
 * @since 9
 * @syscap SystemCapability.Web.Webview.Core
 */
declare namespace webview {
    /**
     * Provides basic information of web storage.
     * @name WebStorageOrigin
     * @since 9
     * @syscap SystemCapability.Web.Webview.Core
     */
    interface WebStorageOrigin {
        origin: string;
        usage: number;
        quota: number;
    }

    /**
     * Provides methods for managing web storage.
     * @name WebStorage
     * @since 9
     * @syscap SystemCapability.Web.Webview.Core
     */
    class WebStorage {
        /**
         * delete all the storage data.
         *
         * @since 9
         */
        static deleteAllData() : void;
    
        /**
         * delete the storage data with the origin.
         * @param origin the origin which to be deleted.
         * @since 9
         */
        static deleteOrigin(origin : string): void;

        /**
         * Get current all the web storage origins.
         *
         * @since 9
         */
        static getOrigins() : Promise<Array<WebStorageOrigin>>;
        static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>) : void;

        /**
         *  Get the web storage quota with the origin.
         * @param origin the origin which to be inquired.
         * @since 9
         */
        static getOriginQuota(origin : string) : Promise<number>;
        static getOriginQuota(origin : string, callback : AsyncCallback<number>) : void;

        /**
         *  Get the web storage quota with the origin.
         * @param origin the origin which to be inquired.
         * @since 9
         */
        static getOriginUsage(origin : string) : Promise<number> ;
        static getOriginUsage(origin : string, callback : AsyncCallback<number>) : void;
    }

    /**
     * Provides methods for managing web database.
     * @name WebDataBase
     * @since 9
     * @syscap SystemCapability.Web.Webview.Core
     */
    class WebDataBase {
        /**
        * Get whether instances holds any http authentication credentials.
        * @return true if instances saved any http authentication credentials otherwise false.
        *
        * @since 9
        */
        static existHttpAuthCredentials(): boolean;
      
        /**
         * delete all http authentication credentials.
         *
         * @since 9
         */
        static deleteHttpAuthCredentials(): void;
      
        /**
         * get http authentication credentials.
         * @param host the host to which the credentials apply.
         * @param realm the realm to which the credentials apply.
         * @return Return an array containing username and password.
         * @since 9
         */
        static getHttpAuthCredentials(host: string, realm: string): Array<string>;
      
        /**
         * save http authentication credentials.
         * @param host the host to which the credentials apply.
         * @param realm the realm to which the credentials apply.
         * @param username the username.
         * @param password the password.
         *
         * @since 9
         */
        static saveHttpAuthCredentials(host: string, realm: string, username: string, password: string): void;
      }

      /**
       * Provides asynchronous methods for manage the webview.
       *
       * @since 9
       */
      class WebAsyncController {
          /**
           * Constructor.
           *
           * @param controller WebAsyncController needs a WebController to associate with corresponding nweb.
           *
           * @since 9
           */
          constructor(controller: WebController);

          /**
           * Stores the current page as a web archive.
           *
           * @param baseName Where the generated offline webpage is stored, This value cannot be null.
           * @param autoName If it is false, the filename will be automatically generated according to
           *                 the url and the generated offline webpage will be stored in the directory
           *                 specified by baseName. If it is true, the offline webpage will be directly
           *                 stored in the path specified by baseName.
           * @returns a promise resolved after the web archive has been stored. The parameter will either
           *          be the filename under which the file was stored, or empty if storing the file failed.
           *
           * @since 9
           */
          storeWebArchive(baseName: string, autoName: boolean): Promise<string>;

          /**
           * Stores the current page as a web archive.
           *
           * @param baseName Where the generated offline webpage is stored, This value cannot be null.
           * @param autoName If it is false, the filename will be automatically generated according to
           *                 the url and the generated offline webpage will be stored in the directory
           *                 specified by baseName. If it is true, the offline webpage will be directly
           *                 stored in the path specified by baseName.
           * @param callback called after the web archive has been stored. The parameter will either be
           *                 the filename under which the file was stored, or empty if storing
           *                 the file failed.
           *
           * @since 9
           */
          storeWebArchive(baseName: string, autoName: boolean, callback : AsyncCallback<string>): void;
      }

      /**
       * Provides methods for managing the web cookies.
       *
       * @since 9
       */
      class WebCookieManager {
          /**
           * Gets all cookies for the given URL.
           *
           * @param url the URL for which the cookies are requested.
           * @returns the cookie value for the given URL.
           *
           * @since 9
           */
          getCookie(url: string): string;

          /**
           * Set a single cookie (key-value pair) for the given URL.
           *
           * @param url the URL for which the cookie is to be set.
           * @param value the cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
           * @returns true if the cookie was successfully set else false.
           *
           * @since 9
           */
          setCookie(url: string, value: string): boolean;

          /**
           * Save the cookies.
           * 
           * @return true if successfully save the cookies else false.
           * 
           * @since 9
           */
          saveCookieSync(): boolean;

          /**
           * Get whether the instance can send and accept cookies.
           *
           * @returns true if the instance can send and accept cookies else false.
           *
           * @since 9
           */
          isCookieAllowed(): boolean;

          /**
           * Set whether the instance should send and accept cookies.
           * By default this is set to true.
           * 
           * @param accept whether the instance should send and accept cookies.
           *
           * @since 9
           */
          putAcceptCookieEnabled(accept: boolean): void;

          /**
           * Get whether the instance can send and accept thirdparty cookies.
           *
           * @returns true if the instance can send and accept thirdparty cookies else false.
           *
           * @since 9
           */
          isThirdPartyCookieAllowed(): boolean;

          /**
           * Set whether the instance should send and accept thirdparty cookies.
           * By default this is set to true.
           * 
           * @param accept whether the instance should send and accept thirdparty cookies.
           *
           * @since 9
           */
          putAcceptThirdPartyCookieEnabled(accept: boolean): void;

          /**
           * Get whether file scheme cookies can be send or accepted.
           *
           * @returns true if can send and accept else false.
           *
           * @since 9
           */
          isFileURICookieAllowed(): boolean;

          /**
           * Set whether file scheme cookies can be send or accepted.
           * 
           * @param accept true if can send and accept else false.
           *
           * @since 9
           */
          putAcceptFileURICookieEnabled(accept: boolean): void;

          /**
           * Check whether exists any cookies.
           *
           * @returns true if exists cookies else false;
           *
           * @since 9
           */
          existCookie(): boolean;

          /**
           * Remove all cookies.
           *
           * @since 9
           */
          deleteEntireCookie(): void;

          /**
           * Delete session cookies.
           * 
           * @since 9
           */
          deleteSessionCookie(): void;

          /**
           * Delete all expired cookies.
           * 
           * @since 9
           */
          deleteExpiredCookie(): void;
      }
}

export default webview;
