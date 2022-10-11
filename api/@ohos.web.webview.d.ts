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

/// <reference path="../component/units.d.ts" />

import {AsyncCallback} from "./basic";
import {Resource} from 'GlobalResource';

/**
 * Defines the Web's request/response header.
 * @since 9
 */
 declare interface Header {
    /**
     * Gets the key of the request/response header.
     * @since 9
     */
    headerKey: string;
  
    /**
     * Gets the value of the request/response header.
     * @since 9
     */
    headerValue: string;
  }

/**
 * Enum type supplied to {@link getHitTest} for indicating the cursor node HitTest.
 * @since 9
 */
 declare enum HitTestTypeV9 {
    /**
     * The edit text.
     * @since 9
     */
    EditText,
  
    /**
     * The email address.
     * @since 9
     */
    Email,
  
    /**
     * The HTML::a tag with src=http.
     * @since 9
     */
    HttpAnchor,
  
    /**
     * The HTML::a tag with src=http + HTML::img.
     * @since 9
     */
    HttpAnchorImg,
  
    /**
     * The HTML::img tag.
     * @since 9
     */
    Img,
  
    /**
     * The map address.
     * @since 9
     */
    Map,
  
    /**
     * The phone number.
     * @since 9
     */
    Phone,
  
    /**
     * Other unknown HitTest.
     * @since 9
     */
    Unknown,
  }

/**
 * Defines the hit test value, related to {@link getHitTestValue} method.
 * @since 9
 */
declare interface HitTestValue {

    /**
     * Get the hit test type.
     *
     * @since 9
     */
    type: HitTestTypeV9;

    /**
     * Get the hit test extra data.
     *
     * @since 9
     */
    extra: string;
}

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
         * Delete all the storage data.
         *
         * @since 9
         */
        static deleteAllData() : void;

        /**
         * Delete the storage data with the origin.
         *
         * @param { string } origin - The origin which to be deleted.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100011 - Invaild permission origin.
         * @since 9
         */
        static deleteOrigin(origin : string): void;

        /**
         * Get current all the web storage origins.
         *
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100012 - Invaild web storage origin.
         * @since 9
         */
        static getOrigins() : Promise<Array<WebStorageOrigin>>;
        static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>) : void;

        /**
         * Get the web storage quota with the origin.
         * @param { string } origin -  The origin which to be inquired.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100011 - Invaild permission origin.
         * @since 9
         */
        static getOriginQuota(origin : string) : Promise<number>;
        static getOriginQuota(origin : string, callback : AsyncCallback<number>) : void;

        /**
         * Get the web storage quota with the origin.
         * @param { string } origin -  The origin which to be inquired.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100011 - Invaild permission origin.
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
        * @return { boolean } true if instances saved any http authentication credentials otherwise false.
        *
        * @since 9
        */
        static existHttpAuthCredentials(): boolean;

        /**
         * Delete all http authentication credentials.
         *
         * @since 9
         */
        static deleteHttpAuthCredentials(): void;

        /**
         * Get http authentication credentials.
         * @param { string } host - The host to which the credentials apply.
         * @param { string } realm - The realm to which the credentials apply.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @return { Array<string> } Return an array containing username and password.
         * @since 9
         */
        static getHttpAuthCredentials(host: string, realm: string): Array<string>;

        /**
         * Save http authentication credentials.
         * @param { string } host - The host to which the credentials apply.
         * @param { string } realm - The realm to which the credentials apply.
         * @param { string } username - The username.
         * @param { string } password - The password.
         * @throws { BusinessError } 401 - Invaild input parameter.
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
           * @param { WebController } controller WebAsyncController needs a WebController 
           *                          to associate with corresponding nweb.
           *
           * @since 9
           */
          constructor(controller: WebController);

          /**
           * Stores the current page as a web archive.
           *
           * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
           * @param { boolean } autoName - If it is false, the filename will be automatically generated according to
           *                               the url and the generated offline webpage will be stored in the directory
           *                               specified by baseName. If it is true, the offline webpage will be directly
           *                               stored in the path specified by baseName.
           * @returns { Promise<string> } A promise resolved after the web archive has been stored.
           *                              The parameter will either be the filename under which the file was stored,
           *                              or empty if storing the file failed.
           *
           * @since 9
           */
          storeWebArchive(baseName: string, autoName: boolean): Promise<string>;

          /**
           * Stores the current page as a web archive.
           *
           * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
           * @param { boolean } autoName - If it is false, the filename will be automatically generated according to
           *                               the url and the generated offline webpage will be stored in the directory
           *                               specified by baseName. If it is true, the offline webpage will be directly
           *                               stored in the path specified by baseName.
           * @param { AsyncCallback<string> } callback - Called after the web archive has been stored.
           *                                             The parameter will either be the filename under which the file
           *                                             was stored, or empty if storing the file failed.
           *
           * @since 9
           */
          storeWebArchive(baseName: string, autoName: boolean, callback : AsyncCallback<string>): void;
      }

    /**
     * Provides a method for managing web geographic location permissions.
     * @name GeolocationPermissions
     * @since 9
     * @syscap SystemCapability.Web.Webview.Core
     */
    class GeolocationPermissions {
        /**
         * Allow geolocation permissions for specifies source.
         * @param { string } origin - Url source.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100011 - Invaild permission origin.
         *
         * @since 9
         */
        static allowGeolocation(origin: string): void;

        /**
         * Delete geolocation permissions for specifies source.
         * @param { string } origin - Url source.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100011 - Invaild permission origin.
         *
         * @since 9
         */
        static deleteGeolocation(origin: string): void;

        /**
         * Delete all geolocation permissions.
         *
         * @since 9
         */
         static deleteAllGeolocation(): void;

        /**
         * Gets the geolocation permission status of the specified source.
         * @param { string } origin - Url source.
         * @param { AsyncCallback<boolean> } callback - Return to the specified source
         *                                              geographic location permission status.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100011 - Invaild permission origin.
         * @return { Promise<boolean> } Return whether there is a saved result.
         *
         * @since 9
         */
        static getAccessibleGeolocation(origin: string): Promise<boolean>;
        static getAccessibleGeolocation(origin: string, callback: AsyncCallback<boolean>): void;

        /**
         * Get all stored geolocation permission url source.
         * @param { AsyncCallback<boolean> } callback - Return all source information of
         *                                              stored geographic location permission status.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @return { Promise<Array<string>> } Return whether there is a saved result.
         *
         * @since 9
         */
        static getStoredGeolocation() : Promise<Array<string>>;
        static getStoredGeolocation(callback : AsyncCallback<Array<string>>): void;
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
         * @param { string } url - The URL for which the cookies are requested.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100002 - Invaild url.
         * @returns The cookie value for the given URL.
         *
         * @since 9
         */
        static getCookie(url: string): string;

        /**
         * Set a single cookie (key-value pair) for the given URL.
         *
         * @param { string } url - The URL for which the cookie is to be set.
         * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100002 - Invaild url.
         * @throws { BusinessError } 17100005 - Invaild cookie value.
         *
         * @since 9
         */
        static setCookie(url: string, value: string): void;

        /**
         * Save the cookies Synchronously.
         *
         * @since 9
         */
        static saveCookieSync(): void;

        /**
         * Save the cookies Asynchronously.
         *
         * @param { AsyncCallback<boolean> } callback - Called after the cookies have been saved.
         *                                              The parameter will either be true if the cookies
         *                                              have been successfully saved, or false if failed.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @return { Promise<boolean> } A promise resolved after the cookies have been saved.
         *                              The parameter will either be true if the cookies have
         *                              been successfully saved, or false if failed.
         *
         * @since 9
         */
        static saveCookieAsync(): Promise<boolean>;
        static saveCookieAsync(callback: AsyncCallback<boolean>): void;

        /**
         * Get whether the instance can send and accept cookies.
         *
         * @returns { boolean } True if the instance can send and accept cookies else false.
         *
         * @since 9
         */
        static isCookieAllowed(): boolean;

        /**
         * Set whether the instance should send and accept cookies.
         * By default this is set to be true.
         * 
         * @param { boolean } accept - Whether the instance should send and accept cookies.
         * @throws { BusinessError } 401 - Invaild input parameter.
         *
         * @since 9
         */
        static putAcceptCookieEnabled(accept: boolean): void;

        /**
         * Get whether the instance can send and accept thirdparty cookies.
         *
         * @returns { boolean } True if the instance can send and accept thirdparty cookies else false.
         *
         * @since 9
         */
        static isThirdPartyCookieAllowed(): boolean;

        /**
         * Set whether the instance should send and accept thirdparty cookies.
         * By default this is set to be true.
         * 
         * @param { boolean } accept - Whether the instance should send and accept thirdparty cookies.
         * @throws { BusinessError } 401 - Invaild input parameter.
         *
         * @since 9
         */
        static putAcceptThirdPartyCookieEnabled(accept: boolean): void;

        /**
         * Check whether exists any cookies.
         *
         * @returns { boolean } True if exists more than one cookie else false;
         *
         * @since 9
         */
        static existCookie(): boolean;

        /**
         * Remove all cookies.
         *
         * @since 9
         */
        static deleteEntireCookie(): void;

        /**
         * Delete the session cookies.
         *
         * @since 9
         */
        static deleteSessionCookie(): void;
    }

    /**
     * Define html web message port.
     * @since 9
     */
    interface WebMessagePort {
        /**
         * Close port.
         * @since 9
         */
        close(): void;

        /**
         * Post a message to other port.
         * @param { string } message - Message to send.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100010 - Can not post message using this port.
         *
         * @since 9
         */
        postMessageEvent(message: string): void;

        /**
         * Receive message from other port.
         * @param { (result: string) => void } callback - Callback function for receiving messages.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100006 - Can not register message event using this port.
         *
         * @since 9
         */
        onMessageEvent(callback: (result: string) => void): void;
    }

    /**
     * Provides methods for controlling the web controller.
     *
     * @since 9
     */
     class WebviewController {
        /**
         * Checks whether the web page can go forward.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { boolean } True if the web page can go forward else false.
         *
         * @since 9
         */
        accessForward(): boolean;

        /**
         * Checks whether the web page can go back.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { boolean } True if the web page can go back else false.
         *
         * @since 9
         */
        accessBackward(): boolean;

        /**
         * Checks whether the web page can go back or forward the given number of steps.
         *
         * @param { number } step - The number of steps.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { boolean } True if the web page can go back else false.
         *
         * @since 9
         */
        accessStep(step: number): boolean;

        /**
         * Goes forward in the history of the web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @throws { BusinessError } 17100007 - Invalid back or forward operation.
         *
         * @since 9
         */
        forward(): void;

        /**
         * Goes back in the history of the web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @throws { BusinessError } 17100007 - Invalid back or forward operation.
         *
         * @since 9
         */
        backward(): void;

        /**
         * Clears the history in the Web.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @since 9
         */
        clearHistory(): void;

        /**
         * Let the Web active.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @since 9
         */
        onActive(): void;

        /**
         * Let the Web inactive.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @since 9
         */
        onInactive(): void;

        /**
         * Refreshes the current URL.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @since 9
         */
        refresh(): void;

        /**
         * Loads the data or URL.
         *
         * @param { string } data - A string encoded according to "Base64" or "URL".
         * @param { string } mimeType - Media type. For example: "text/html".
         * @param { string } encoding - Encoding type. For example: "UTF-8".
         * @param { string } [baseUrl] - A specified URL path ("http"/"https"/"data" protocol),
         *                             which is assigned to window.origin by the Web component.
         * @param { string } [historyUrl] - History URL. When it is not empty, it can be managed by
         *                                history records to realize the back and forth function.
         *                                This property is invalid when baseUrl is empty.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @throws { BusinessError } 17100002 - Invaild url.
         *
         * @since 9
         */
        loadData(data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string): void;

        /**
         * Loads the data or URL.
         *
         * @param { string | Resource } url - The URL to load.
         * @param { Array<Header> } [headers] - Additional HTTP request header for URL.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @throws { BusinessError } 17100002 - Invaild url.
         * @throws { BusinessError } 17100003 - Invalid resource path or file type.
         *
         * @since 9
         */
        loadUrl(url: string | Resource, headers?: Array<Header>): void;

        /**
         * Gets the type of HitTest.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { HitTestTypeV9 } The type of HitTest.
         *
         * @since 9
         */
        getHitTest(): HitTestTypeV9;

        /**
         * Stores the current page as a web archive.
         *
         * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
         * @param { boolean } autoName - If it is false, the filename will be automatically generated according to
         *                               the url and the generated offline webpage will be stored in the directory
         *                               specified by baseName. If it is true, the offline webpage will be directly
         *                               stored in the path specified by baseName.
         * @param { AsyncCallback<string> } callback - called after the web archive has been stored. The parameter
         *                                             will either be the filename under which the file was stored,
         *                                             or empty if storing the file failed.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @throws { BusinessError } 17100003 - Invalid resource path or file type.
         * @returns { Promise<string> } a promise resolved after the web archive has been stored. The parameter
         *                              will either be the filename under which the file was stored, or empty
         *                              if storing the file failed.
         *
         * @since 9
         */
        storeWebArchive(baseName: string, autoName: boolean): Promise<string>;
        storeWebArchive(baseName: string, autoName: boolean, callback : AsyncCallback<string>): void;

        /**
         * Let the Web zoom by.
         *
         * @param { number } factor - The zoom factor.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @throws { BusinessError } 17100004 - Function not enable.
         * @throws { BusinessError } 17100009 - Cannot zoom in or zoom out.
         *
         * @since 9
         */
        zoom(factor: number): void;

        /**
         * Let the Web zoom in.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @throws { BusinessError } 17100004 - Function not enable.
         * @throws { BusinessError } 17100009 - Cannot zoom in or zoom out.
         *
         * @since 9
         */
        zoomIn(): void;

        /**
         * Let the Web zoom out.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @throws { BusinessError } 17100004 - Function not enable.
         * @throws { BusinessError } 17100009 - Cannot zoom in or zoom out.
         *
         * @since 9
         */
        zoomOut(): void;

        /**
         * Gets the hit test value of HitTest.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { HitTestValue } Return the element information of the clicked area.
         *
         * @since 9
         */
        getHitTestValue(): HitTestValue;

        /**
         * Gets the id for the current Web.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { number } Returns the index value of the current Web component.
         *
         * @since 9
         */
        getWebId(): number;

        /**
         * Gets the default user agent.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { string } Return user agent information.
         *
         * @since 9
         */
        getUserAgent(): string;

        /**
         * Gets the title of current Web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { string } Return to File Selector Title.
         *
         * @since 9
         */
        getTitle(): string;

        /**
         * Gets the content height of current Web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { number } Returns the page height of the current page.
         *
         * @since 9
         */
        getPageHeight(): number;

        /**
         * Goes forward or back backOrForward in the history of the web page.
         *
         * @param { number } step - Steps to go forward or backward.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @throws { BusinessError } 17100007 - Invalid back or forward operation.
         *
         * @since 9
         */
        backOrForward(step: number): void;

        /**
         * Gets the request focus.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         *
         * @since 9
         */
        requestFocus(): void;

        /**
         * Create web message ports
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { Array<WebMessagePort> } An array represent 2 WebMessagePort, then can use
         *                                    those ports to communication with html pages.
         *
         * @since 9
         */
        createWebMessagePorts(): Array<WebMessagePort>;

        /**
         * Post web message port to html
         *
         * @param { string } name - Data name information to send.
         * @param { Array<WebMessagePort> } ports - Port number array information to send.
         * @param { string } uri - URI to receive this information.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         *
         * @since 9
         */
        postMessage(name: string, ports: Array<WebMessagePort>, uri: string): void;

        /**
         * Stops the current load.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         *
         * @since 9
         */
        stop();

        /**
         * Registers the JavaScript object and method list.
         *
         * @param { object } object - Application side JavaScript objects participating in registration.
         * @param { string } name - The name of the registered object, which is consistent with the 
         *                          object name called in the window.
         * @param { Array<string> } methodList - Thr method of the application side JavaScript object participating
         *                                       in the registration.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         *
         * @since 9
         */
        registerJavaScriptProxy(object: object, name: string, methodList: Array<string>): void;

        /**
         * Deletes a registered JavaScript object with given name.
         *
         * @param { string } name - The name of a registered JavaScript object to be deleted.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @throws { BusinessError } 17100008 - Cannot delete JavaScriptProxy.
         *
         * @since 9
         */
        deleteJavaScriptRegister(name: string): void;

        /**
         * Search all instances of 'searchString' on the page and highlights them,
         * result will be notify through callback onSearchResultReceive.
         *
         * @param { string } searchString - String to be search.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                         The WebviewController must be associted with a Web component.
         *
         * @since 9
         */
        searchAllAsync(searchString: string): void;

        /**
         * Clears the highlighting surrounding text matches created by searchAllAsync.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         *
         * @since 9
         */
        clearMatches(): void;

        /**
         * Highlights and scrolls to the next match search.
         *
         * @param { boolean } forward - Step of search is back or forward.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         *
         * @since 9
         */
        searchNext(forward: boolean): void;

        /**
         * Clears the ssl cache in the Web.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         *
         * @since 9
         */
        clearSslCache(): void;

        /**
         * Clears the client authentication certificate cache in the Web.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         *
         * @since 9
         */
        clearClientAuthenticationCache(): void;

        /**
         * Loads a piece of code and execute JS code in the context of the currently displayed page.
         *
         * @param { string } script - JavaScript Script.
         * @param { AsyncCallback<string> } callback - Callbacks execute JavaScript script results.
         * @throws { BusinessError } 401 - Invaild input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { Promise<string> } A promise is solved after the JavaScript script is executed.
         *                              This parameter will be the result of JavaScript script execution.
         *                              If the JavaScript script fails to execute or has no return value,
         *                              null will be returned.
         *
         * @since 9
         */
        runJavaScript(script: string): Promise<string>;
        runJavaScript(script: string, callback : AsyncCallback<string>): void;

        /**
         * Gets the url of current Web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associted with a Web component.
         * @returns { string } Return the url of the current page.
         *
         * @since 9
         */
        getUrl(): string;
    }
}

export default webview;
