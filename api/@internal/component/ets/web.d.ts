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

/**
 * Enum type supplied to {@link getMessageLevel} for receiving the console log level of JavaScript.
 * @since 8
 */
declare enum MessageLevel {
  /**
   * Debug level.
   * @since 8
   */
  Debug,

  /**
   * Error level.
   * @since 8
   */
  Error,

  /**
   * Info level.
   * @since 8
   */
  Info,

  /**
   * Log level.
   * @since 8
   */
  Log,

  /**
   * Warn level.
   * @since 8
   */
  Warn,
}

/**
 * The Web's behavior to load from HTTP or HTTPS. Defaults to MixedMode.None.
 * @since 8
 */
declare enum MixedMode {
  /**
   * Allows all sources.
   * @since 8
   */
  All,

  /**
   * Allows sources Compatibly.
   * @since 8
   */
  Compatible,

  /**
   * Don't allow unsecure sources from a secure origin.
   * @since 8
   */
  None,
}

/**
 * Enum type supplied to {@link getHitTest} for indicating the cursor node HitTest.
 * @since 8
 */
declare enum HitTestType {
  /**
   * The edit text.
   * @since 8
   */
  EditText,

  /**
   * The email address.
   * @since 8
   */
  Email,

  /**
   * The HTML::a tag with src=http.
   * @since 8
   */
  HttpAnchor,

  /**
   * The HTML::a tag with src=http + HTML::img.
   * @since 8
   */
  HttpAnchorImg,

  /**
   * The HTML::img tag.
   * @since 8
   */
  Img,

  /**
   * The map address.
   * @since 8
   */
  Map,

  /**
   * The phone number.
   * @since 8
   */
  Phone,

  /**
   * Other unknown HitTest.
   * @since 8
   */
  Unknown,
}

/**
 * Enum type supplied to {@link cacheMode} for setting the Web cache mode.
 * @since 8
 */
declare enum CacheMode {
  /**
   * load cache when they are available and not expired, otherwise load online.
   * @since 9
   */
  Default,

  /**
   * load cache when they are available, otherwise load online.
   * @since 8
   */
  None,

  /**
   * Load cache first, then online.
   * @since 8
   */
  Online,

  /**
   * load cache and not online.
   * @since 8
   */
  Only,
}

/**
 * Define html5 web message port.
 * @since 9
 */
declare class WebMessagePort {
  /**
   * Constructor.
   * @since 9
   */
  constructor();

  /**
   * Close port.
   * @since 9
   */
  close(): void;

  /**
   * Post a message to other port.
   * @since 9
   */
  postMessageEvent(message: WebMessageEvent): void;

  /**
   * Receive message from other port.
   * @since 9
   */
  onMessageEvent(callback: (result: string) => void): void;
}


/**
 * Define html5 web message, which include message and ports.
 * @since 9
 */
declare class WebMessageEvent {
  /**
   * Constructor.
   * @since 9
   */
  constructor();

  /**
   * Get message.
   * @since 9
   */
  getData(): string;

  /**
   * Set message.
   * @since 9
   */
  setData(data: string): void;

  /**
   * Get ports.
   * @since 9
   */
  getPorts(): Array<WebMessagePort>;

  /**
   * Set ports.
   * @since 9
   */
  setPorts(ports: Array<WebMessagePort>): void;
}

/**
 * Enum type supplied to {@link renderExitReason} when onRenderExited being called.
 * @since 9
 */
declare enum RenderExitReason {
  /**
   * Render process non-zero exit status.
   * @since 9
   */
  ProcessAbnormalTermination,

  /**
   * SIGKILL or task manager kill.
   * @since 9
   */
  ProcessWasKilled,

  /**
   * Segmentation fault.
   * @since 9
   */
  ProcessCrashed,

  /**
   * Out of memory.
   * @since 9
   */
  ProcessOom,

  /**
   * Unknown reason.
   * @since 9
   */
  ProcessExitUnknown,
}

/**
 * Enum type supplied to {@link error} when onSslErrorEventReceive being called.
 * @since 9
 */
 declare enum SslError {
  /**
   * General error.
   * @since 9
   */
   Invalid,

  /**
   * Hostname mismatch.
   * @since 9
   */
   HostMismatch,

  /**
   * The certificate date is invalid.
   * @since 9
   */
   DateInvalid,

  /**
   * The certificate authority is not trusted.
   * @since 9
   */
   Untrusted,
}

/**
 * Enum type supplied to {@link FileSelectorParam} when onFileSelectorShow being called.
 * @since 9
 */
declare enum FileSelectorMode {
  /**
   * Allows single file to be selected.
   * @since 9
   */
  FileOpenMode,

  /**
   * Allows multiple files to be selected.
   * @since 9
   */
  FileOpenMultipleMode,

  /**
   * Allows file folders to be selected.
   * @since 9
   */
  FileOpenFolderMode,

  /**
   * Allows select files to save.
   * @since 9
   */
  FileSaveMode,
}

/**
 * Encompassed message information as parameters to {@link onFileSelectorShow} method.
 * @since 9
 */
declare class FileSelectorParam {
  /**
   * Constructor.
   * @since 9
   */
  constructor();

  /**
    * Gets the title of this file selector.
    * @return Return the title of this file selector.
    *
    * @since 9
    */
  getTitle(): string;

  /**
    * Gets the FileSelectorMode of this file selector.
    * @return Return the FileSelectorMode of this file selector.
    *
    * @since 9
    */
  getMode(): FileSelectorMode;

  /**
    * Gets an array of acceptable MMIE type.
    * @return Return an array of acceptable MMIE type.
    *
    * @since 9
    */
  getAcceptType(): Array<string>;

  /**
   * Gets whether this file selector use a live media captured value.
   * @return Return {@code true} if captured media; return {@code false} otherwise.
   * @since 9
   */
  isCapture(): boolean;
}

/**
 * Defines the js result.
 * @since 8
 */
declare class JsResult {
  /**
   * Constructor.
   * @since 8
   */
  constructor();

  /**
   * Handle the user's JavaScript result if cancel the dialog.
   * @since 8
   */
  handleCancel(): void;

  /**
   * Handle the user's JavaScript result if confirm the dialog.
   * @since 8
   */
  handleConfirm(): void;

  /**
   * Handle the user's JavaScript result if confirm the prompt dialog.
   * @since 9
   */
  handlePromptConfirm(result: string): void;
}

/**
 * Defines the file selector result, related to {@link onFileSelectorShow} method.
 * @since 9
 */
declare class FileSelectorResult {
  /**
   * Constructor.
   * @since 9
   */
  constructor();

   /**
    * select a list of files.
    * @since 9
    */
  handleFileList(fileList: Array<string>): void;
}

/**
 * Defines the hit test value, related to {@link getHitTestValue} method.
 * @since 9
 */
declare class HitTestValue {
  /**
   * Constructor.
   * @since 9
   */
  constructor();

  /**
   * get the hit test type.
   * @since 9
   */
  getType(): HitTestType;

  /**
   * get the hit test extra data.
   * @since 9
   */
  getExtra(): string;
}

/**
 * Defines the http auth request result, related to {@link onHttpAuthRequest} method.
 * @since 9
 */
declare class HttpAuthHandler {
  /**
   * Constructor.
   * @since 9
   */
  constructor();

  /**
   * confirm.
   * @since 9
   */
  confirm(userName: string, password: string): boolean;

  /**
   * cancel.
   * @since 9
   */
  cancel(): void;

  /**
   * isHttpAuthInfoSaved.
   * @since 9
   */
  isHttpAuthInfoSaved(): boolean;
}

/**
 * Defines the ssl error request result, related to {@link onSslErrorEventReceive} method.
 * @since 9
 */
 declare class SslErrorHandler {
  /**
   * Constructor.
   * @since 9
   */
   constructor();

  /**
   * Confirm to use the SSL certificate.
   * @since 9
   */
   handleConfirm(): void;

  /**
   * Cancel this request.
   * @since 9
   */
   handleCancel(): void;
}

/**
 * Defines the accessible resource type, related to {@link onPermissionRequest} method.
 * @since 9
 */
declare enum ProtectedResourceType {
  /**
   * The MidiSysex resource.
   * @since 9
   */
  MidiSysex = "TYPE_MIDI_SYSEX"
}

/**
 * Defines the onPermissionRequest callback, related to {@link onPermissionRequest} method.
 * @since 9
 */
declare class PermissionRequest {
  /**
   * Constructor.
   * @since 9
   */
  constructor();

  /**
   * Reject the request.
   * @since 9
   */
  deny(): void;

  /**
   * Gets the source if the webpage that attempted to access the restricted resource.
   * @since 9
   */
  getOrigin(): string;

  /**
   * Gets the resource that the webpage is trying to access.
   * @since 9
   */
  getAccessibleResource(): Array<string>;

  /**
   * Grant origin access to a given resource.
   * @since 9
   */
  grant(resources: Array<string>): void;
}

/**
* Defines the context menu param, related to {@link WebContextMenuParam} method.
* @since 9
*/
declare class WebContextMenuParam {
  /**
   * Constructor.
   * @since 9
   */
  constructor();

  /**
   * Horizontal offset coordinates of the menu within the Web component.
   * @return The context menu x coordinate.
   * 
   * @since 9
   */
  x(): number;

  /**
   * Vertical offset coordinates for the menu within the Web component.
   * @return The context menu y coordinate.
   * 
   * @since 9
   */
  y(): number;

  /**
   * If the long-press location is the link returns the link's security-checked URL.
   * @return If relate to a link return link url, else return null.
   * 
   * @since 9
   */
  getLinkUrl(): string;

  /**
   * If the long-press location is the link returns the link's original URL.
   * @return If relate to a link return unfilterend link url, else return null.
   * 
   * @since 9
   */
  getUnfilterendLinkUrl(): string;

  /**
   * Returns the SRC URL if the selected element has a SRC attribute.
   * @return If this context menu is "src" attribute, return link url, else return null.
   * 
   * @since 9
   */
  getSourceUrl(): string;

  /**
   * Long press menu location has image content.
   * @return Return whether this context menu has image content.
   * 
   * @since 9
   */
  existsImageContents(): boolean;
}

/**
 * Defines the context menu result, related to {@link WebContextMenuResult} method.
 * @since 9
 */
declare class WebContextMenuResult {
  /**
   * Constructor.
   * @since 9
   */
  constructor();

  /**
   * When close context menu without other call in WebContextMenuResult,
   * User should call this function to close menu
   * 
   * @since 9
   */
  closeContextMenu(): void;

  /**
   * If WebContextMenuParam has image content, this function will copy image ralated to this context menu.
   * If WebContextMenuParam has not image content, this function will do nothing. 
   * 
   * @since 9
   */
  copyImage(): void;
}

/**
 * Encompassed message information as parameters to {@link onConsole} method.
 * @since 8
 */
declare class ConsoleMessage {
  /**
   * Constructor.
   * @param message The console message.
   * @param sourceId The Web source file's path and name.
   * @param lineNumber The line number of the console message.
   * @param messageLevel The console log level.
   *
   * @since 8
   */
  constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel);

  /**
   * Gets the message of a console message.
   * @return Return the message of a console message.
   *
   * @since 8
   */
  getMessage(): string;

  /**
   * Gets the Web source file's path and name of a console message.
   * @return Return the Web source file's path and name of a console message.
   *
   * @since 8
   */
  getSourceId(): string;

  /**
   * Gets the line number of a console message.
   * @return Return the line number of a console message.
   *
   * @since 8
   */
  getLineNumber(): number;

  /**
   * Gets the message level of a console message.
   * @return Return the message level of a console message, which can be {@link MessageLevel}.
   *
   * @since 8
   */
  getMessageLevel(): MessageLevel;
}

/**
 * Encompassed message information as parameters to {@link onConsole} method.
 * @since 8
 */

/**
 * Defines the Web resource request.
 * @since 8
 */
declare class WebResourceRequest {
  /**
   * Constructor.
   * @since 8
   */
  constructor();

  /**
   * Gets request headers.
   * @return Return the request headers
   *
   * @since 8
   */
  getRequestHeader(): Array<Header>;

  /**
   * Gets the request URL.
   * @return Return the request URL.
   *
   * @since 8
   */
  getRequestUrl(): string;

  /**
   * Check whether the request is associated with gesture.
   * @return Return {@code true} if the request is associated with gesture;return {@code false} otherwise.
   *
   * @since 8
   */
  isRequestGesture(): boolean;

  /**
   * Check whether the request is for getting the main frame.
   * @return Return {@code true} if the request is associated with gesture for getting the main frame; return {@code false} otherwise.
   *
   * @since 8
   */
  isMainFrame(): boolean;

  /**
   * Check whether the request redirects.
   * @return Return {@code true} if the request redirects; return {@code false} otherwise.
   *
   * @since 8
   */
  isRedirect(): boolean;
}


/**
 * Defines the Web resource response.
 * @since 8
 */
 declare class WebResourceResponse {
  /**
   * Constructor.
   * @since 8
   */
  constructor();

  /**
   * Gets the response data.
   * @return Return the response data.
   *
   * @since 8
   */
  getResponseData(): string;

  /**
   * Gets the response encoding.
   * @return Return the response encoding.
   *
   * @since 8
   */
  getResponseEncoding(): string;

  /**
   * Gets the response MIME type.
   * @return Return the response MIME type.
   *
   * @since 8
   */
  getResponseMimeType(): string;

  /**
   * Gets the reason message.
   * @return Return the reason message.
   *
   * @since 8
   */
  getReasonMessage(): string;

  /**
   * Gets the response headers.
   * @return Return the response headers.
   *
   * @since 8
   */
  getResponseHeader() : Array<Header>;

  /**
   * Gets the response code.
   * @return Return the response code.
   *
   * @since 8
   */
  getResponseCode(): number;

  /**
   * Sets the response data.
   * @param data the response data.
   *
   * @since 9
   */
  setResponseData(data: string);
  
  /**
   * Sets the response encoding.
   * @param encoding the response encoding.
   *
   * @since 9
   */
  setResponseEncoding(encoding: string);

 /**
   * Sets the response MIME type.
   * @param mimeType the response MIME type.
   *
   * @since 9
   */
  setResponseMimeType(mimeType: string);

  /**
   * Sets the reason message.
   * @param reason the reason message.
   *
   * @since 9
   */
  setReasonMessage(reason: string);

  /**
   * Sets the response headers.
   * @param header the response headers.
   *
   * @since 9
   */
  setResponseHeader(header: Array<Header>);

  /**
   * Sets the response code.
   * @param code the response code.
   *
   * @since 9
   */
  setResponseCode(code: number);
}

/**
 * Defines the Web's request/response header.
 * @since 8
 */
declare interface Header {
  /**
   * Gets the key of the request/response header.
   * @since 8
   */
  headerKey: string;

  /**
   * Gets the value of the request/response header.
   * @since 8
   */
  headerValue: string;
}

/**
 * Defines the Web resource error.
 * @since 8
 */
declare class WebResourceError {
  /**
   * Constructor.
   * @since 8
   */
  constructor();

  /**
   * Gets the info of the Web resource error.
   * @return Return the info of the Web resource error.
   *
   * @since 8
   */
  getErrorInfo(): string;

  /**
   * Gets the code of the Web resource error.
   * @return Return the code of the Web resource error.
   *
   * @since 8
   */
  getErrorCode(): number;
}

/**
 * Defines the js geolocation request.
 * @since 8
 */
declare class JsGeolocation {
  /**
   * Constructor.
   * @since 8
   */
  constructor();

  /**
   * Report the geolocation permission status from users.
   * @param origin The origin that ask for the geolocation permission.
   * @param allow The geolocation permission status.
   * @param retain Whether to allow the geolocation permission status to be saved to the system.
   *
   * @since 8
   */
  invoke(origin: string, allow: boolean, retain: boolean): void;
}

/**
 * Defines the Web cookie.
 * @since 8
 */
declare class WebCookie {
  /**
   * Constructor.
   * @since 8
   */
  constructor();

  /**
   * Get whether cookies can be send or accepted.
   * @return true if can send and accept cookies else false.
   * 
   * @since 9
   */
  isCookieAllowed(): boolean;

  /**
   * Get whether third party cookies can be send or accepted.
   * @return true if can send and accept third party cookies else false.
   * 
   * @since 9
   */
  isThirdPartyCookieAllowed(): boolean;

  /**
   * Get whether file scheme cookies can be send or accepted.
   * @return true if can send and accept else false.
   * @since 9
   */
  isFileURICookieAllowed(): boolean;

  /**
   * Set whether cookies can be send or accepted.
   * @param accept whether can send and accept cookies
   * 
   * @since 9
   */
  putAcceptCookieEnabled(accept: boolean): void;

  /**
   * Set whether third party cookies can be send or accepted.
   * @param accept true if can send and accept else false.
   *  
   * @since 9
   */
  putAcceptThirdPartyCookieEnabled(accept: boolean): void;

  /**
   * Set whether file scheme cookies can be send or accepted.
   * @param accept true if can send and accept else false.
   * 
   * @since 9
   */
  putAcceptFileURICookieEnabled(accept: boolean): void;  

  /**
   * Sets the cookie.
   * @since 8
   * @deprecated since 9
   */
  setCookie();

  /**
   * Sets the cookie.
   * @since 9
   */
  setCookie(url: string, value: string): boolean;

  /**
   * Saves the cookies.
   * @since 8
   * @deprecated since 9
   */
  saveCookie();

  /**
   * Saves the cookies.
   * @since 9
   */
  saveCookieSync(): boolean;

  /**
   * Gets all cookies for the given URL.
   * 
   * @param url the URL for which the cookies are requested.
   * @return the cookie value for the given URL.
   * 
   * @since 9
   */
  getCookie(url: string): string;

  /**
   * Check whether exists any cookies.
   * 
   * @return true if exists cookies else false;
   * @since 9
   */
  existCookie(): boolean;

  /**
   * Delete all cookies.
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

/**
 * Defines the Web controller.
 * @since 8
 */
 declare class WebController {
  /**
   * Constructor.
   * @since 8
   */
  constructor();

  /**
   * Let the Web inactive.
   * @since 8
   */
  onInactive(): void;

  /**
   * Let the Web active.
   * @since 8
   */
  onActive(): void;

  /**
   * Let the Web zoom by.
   * @param factor The zoom factor.
   *
   * @since 8
   */
  zoom(factor: number): void;

  /**
   * Let the Web zoom in.
   * @since 9
   */
   zoomIn(): boolean;

  /**
   * Let the Web zoom out.
   * @since 9
   */
   zoomOut(): boolean;

  /**
   * Clears the history in the Web.
   * @since 8
   */
  clearHistory(): void;

  /**
   * Loads a piece of code and execute JS code in the context of the currently displayed page.
   * @param options The options with a piece of code and a callback.
   *
   * @since 8
   */
  runJavaScript(options: { script: string, callback?: (result: string) => void });

  /**
   * Create web message ports
   *
   * @since 9
   */
  createWebMessagePorts(): Array<WebMessagePort>;

  /**
   * Post web message port to html5
   * @param options The options with a message event and a uri.
   *
   * @since 9
   */
  postMessage(options: { message: WebMessageEvent, uri: string}): void;

  /**
   * Loads the data or URL.
   * @param options The options with the data or URL and other information.
   *
   * @since 8
   */
  loadData(options: { data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string });

  /**
   * Loads the given URL.
   * @param options The options with the URL and other information.
   *
   * @since 8
   */
  loadUrl(options: { url: string | Resource, headers?: Array<Header> });

  /**
   * refreshes the current URL.
   * @since 8
   */
  refresh();

  /**
   * Stops the current load.
   * @since 8
   */
  stop();

  /**
   * Registers the JavaScript object and method list.
   * @param options The option with the JavaScript object and method list.
   *
   * @since 8
   */
  registerJavaScriptProxy(options: { object: object, name: string, methodList: Array<string> });

  /**
   * Deletes a registered JavaScript object with given name.
   * @param name The name of a registered JavaScript object to be deleted.
   *
   * @since 8
   */
  deleteJavaScriptRegister(name: string);

  /**
   * Gets the type of HitTest.
   * @since 8
   */
  getHitTest(): HitTestType;

  /**
   * Gets the hit test value of HitTest.
   * @since 9
   */
  getHitTestValue(): HitTestValue;

  /**
   * Gets the id for the current Web.
   * @since 9
   */
  getWebId(): number;

  /**
   * Gets the default user agent.
   * @since 9
   */
  getDefaultUserAgent(): string;

  /**
   * Gets the title of current Web page.
   * @since 9
   */
  getTitle(): string;

  /**
   * Gets the content height of current Web page.
   * @since 9
   */
  getPageHeight(): number;

  /**
   * Gets the request focus.
   * @since 8
   */
  requestFocus();

  /**
   * Checks whether the web page can go back.
   * @since 8
   */
  accessBackward(): boolean;

  /**
   * Checks whether the web page can go forward.
   * @since 8
   */
  accessForward(): boolean;

  /**
   * Checks whether the web page can go back or forward the given number of steps.
   * @param step The number of steps.
   *
   * @since 8
   */
  accessStep(step: number): boolean;

  /**
   * Goes back in the history of the web page.
   * @since 8
   */
  backward();

  /**
   * Goes forward in the history of the web page.
   * @since 8
   */
  forward();

  /**
   * Goes forward or back backOrForward in the history of the web page.
   * @since 9
   */
  backOrForward(step: number): void;

  /**
   * Gets network cookie manager
   * @since 9
   */
  getCookieManager() : WebCookie

  /**
   * Search all instances of 'searchString' on the page and highlights them,
   * result will be notify through callback onSearchResultReceive.
   * @param searchString string to be search.
   * @since 9
   */
  searchAllAsync(searchString: string): void;

  /**
   * Clears the highlighting surrounding text matches created by searchAllAsync.
   * @since 9
   */
  clearMatches(): void;

  /**
   * Highlights and scrolls to the next match search.
   * @param forward step of search is back or forward.
   * @since 9
   */
  searchNext(forward: boolean): void;

  /**
   * Clears the ssl cache in the Web.
   * @since 8
   */
   clearSslCache(): void;
}

/**
 * Defines the Web options.
 * @since 8
 */
declare interface WebOptions {
  /**
   * Sets the address of the web page to be displayed.
   * @since 8
   */
  src: string | Resource;
  /**
   * Sets the controller of the Web.
   * @since 8
   */
  controller: WebController;
}

/**
 * Defines the Web interface.
 * @since 8
 */
interface WebInterface {
  /**
   * Sets Value.
   * @since 8
   */
  (value: WebOptions): WebAttribute;
}

/**
 * Defines the Web attribute functions.
 * @since 8
 */
declare class WebAttribute extends CommonMethod<WebAttribute> {
  /**
   * Sets whether the Web allows JavaScript scripts to execute.
   * @param javaScriptAccess {@code true} means the Web can allows JavaScript scripts to execute; {@code false} otherwise.
   *
   * @since 8
   */
  javaScriptAccess(javaScriptAccess: boolean): WebAttribute;

  /**
   * Sets whether enable local file system access in Web.
   * @param fileAccess {@code true} means enable local file system access in Web; {@code false} otherwise.
   *
   * @since 8
   */
  fileAccess(fileAccess: boolean): WebAttribute;

  /**
   * Sets whether javaScript running in the context of a file URL can access content from other file URLs.
   * @param fileFromUrlAccess {@code true} means enable a file URL can access other file URLs;
   * {@code false} otherwise.
   * 
   * @since 9
   */
  fileFromUrlAccess(fileFromUrlAccess: boolean): WebAttribute;

  /**
   * Sets whether to allow image resources to be loaded from the network.
   * @param onlineImageAccess {@code true} means the Web can allow image resources to be loaded from the network;
   * {@code false} otherwise.
   *
   * @since 8
   */
  onlineImageAccess(onlineImageAccess: boolean): WebAttribute;

  /**
   * Sets whether to enable the DOM Storage API permission.
   * @param domStorageAccess {@code true} means enable the DOM Storage API permission in Web; {@code false} otherwise.
   *
   * @since 8
   */
  domStorageAccess(domStorageAccess: boolean): WebAttribute;

  /**
   * Sets whether the Web can automatically load image resources.
   * @param imageAccess {@code true} means the Web can automatically load image resources; {@code false} otherwise.
   *
   * @since 8
   */
  imageAccess(imageAccess: boolean): WebAttribute;

  /**
   * Sets how to load HTTP and HTTPS content.
   * @param mixedMode The mixed mode, which can be {@link MixedMode}.
   *
   * @since 8
   */
  mixedMode(mixedMode: MixedMode): WebAttribute;

  /**
   * Sets whether the Web supports zooming using gestures.
   * @param zoomAccess {@code true} means the Web supports zooming using gestures; {@code false} otherwise.
   *
   * @since 8
   */
  zoomAccess(zoomAccess: boolean): WebAttribute;

  /**
   * Sets whether to allow access to geographical locations.
   * @param geolocationAccess {@code true} means the Web allows access to geographical locations; {@code false} otherwise.
   *
   * @since 8
   */
  geolocationAccess(geolocationAccess: boolean): WebAttribute;

  /**
   * Injects the JavaScript object into window and invoke the function in window.
   * @param javaScriptProxy The JavaScript object to be injected.
   *
   * @since 8
   */
  javaScriptProxy(javaScriptProxy: { object: object, name: string, methodList: Array<string>,
    controller: WebController }): WebAttribute;

  /**
   * Sets whether the Web should save the password.
   * @param password {@code true} means the Web can save the password; {@code false} otherwise.
   *
   * @since 8
   */
  password(password: boolean): WebAttribute;

  /**
   * Sets the mode of cache in Web.
   * @param cacheMode The cache mode, which can be {@link CacheMode}.
   *
   * @since 8
   */
  cacheMode(cacheMode: CacheMode): WebAttribute;

  /**
   * Sets whether the Web should save the table data.
   * @param tableData {@code true} means the Web can save the table data; {@code false} otherwise.
   *
   * @since 8
   */
  tableData(tableData: boolean): WebAttribute;

  /**
   * Sets whether the Web access meta 'viewport' in HTML.
   * @param wideViewModeAccess {@code true} means the Web access meta 'viewport' in HTML; {@code false} otherwise.
   *
   * @since 8
   */
  wideViewModeAccess(wideViewModeAccess: boolean): WebAttribute;

  /**
   * Sets whether the Web access overview mode.
   * @param overviewModeAccess {@code true} means the Web access overview mode; {@code false} otherwise.
   *
   * @since 8
   */
  overviewModeAccess(overviewModeAccess: boolean): WebAttribute;

  /**
   * Sets the ratio of the text zoom.
   * @param textZoomAtio The ratio of the text zoom.
   *
   * @since 8
   * @deprecated since 9
   */
  textZoomAtio(textZoomAtio: number): WebAttribute;

  /**
   * Sets the ratio of the text zoom.
   * @param textZoomRatio The ratio of the text zoom.
   *
   * @since 9
   */
   textZoomRatio(textZoomRatio: number): WebAttribute;

  /**
   * Sets whether the Web access the database.
   * @param databaseAccess {@code true} means the Web access the database; {@code false} otherwise.
   *
   * @since 8
   */
  databaseAccess(databaseAccess: boolean): WebAttribute;

  /**
   * Sets the initial scale for the Web.
   * @param percent the initial scale for the Web.
   *
   * @since 9
   */
  initialScale(percent: number): WebAttribute;

  /**
   * Sets the Web's user agent.
   * @param userAgent The Web's user agent.
   *
   * @since 8
   */
  userAgent(userAgent: string): WebAttribute;

  /**
   * Enables debugging of web contents.
   * @param webDebuggingAccess {@code true} enables debugging of web contents; {@code false} otherwise.
   * 
   * @since 9
   */
  webDebuggingAccess(webDebuggingAccess: boolean): WebAttribute;

  /**
   * Triggered at the end of web page loading.
   * @param callback The triggered function at the end of web page loading.
   *
   * @since 8
   */
  onPageEnd(callback: (event?: { url: string }) => void): WebAttribute;

  /**
   * Triggered at the begin of web page loading.
   * @param callback The triggered function at the begin of web page loading.
   *
   * @since 8
   */
  onPageBegin(callback: (event?: { url: string }) => void): WebAttribute;

  /**
   * Triggered when the page loading progress changes.
   * @param callback The triggered function when the page loading progress changes.
   *
   * @since 8
   */
  onProgressChange(callback: (event?: { newProgress: number }) => void): WebAttribute;

  /**
   * Triggered when the title of the main application document changes.
   * @param callback The triggered function when the title of the main application document changes.
   *
   * @since 8
   */
  onTitleReceive(callback: (event?: { title: string }) => void): WebAttribute;

  /**
   * Triggered when requesting to hide the geolocation.
   * @param callback The triggered function when requesting to hide the geolocation permission.
   *
   * @since 8
   */
  onGeolocationHide(callback: () => void): WebAttribute;

  /**
   * Triggered when requesting to show the geolocation permission.
   * @param callback The triggered function when requesting to show the geolocation permission.
   *
   * @since 8
   */
  onGeolocationShow(callback: (event?: { origin: string, geolocation: JsGeolocation }) => void): WebAttribute;

  /**
   * Triggered when the Web gets the focus.
   * @param callback The triggered function when the Web gets the focus.
   *
   * @since 8
   */
  onRequestSelected(callback: () => void): WebAttribute;

  /**
   * Triggered when the Web wants to display a JavaScript alert() dialog.
   * @param callback The triggered function when the web page wants to display a JavaScript alert() dialog.
   *
   * @since 8
   */
  onAlert(callback: (event?: { url: string, message: string, result: JsResult }) => boolean): WebAttribute;

  /**
   * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
   * @param callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
   *
   * @since 8
   */
  onBeforeUnload(callback: (event?: { url: string, message: string, result: JsResult }) => boolean): WebAttribute;

  /**
   * Triggered when the web page wants to display a JavaScript confirm() dialog.
   * @param callback The Triggered function when the web page wants to display a JavaScript confirm() dialog.
   *
   * @since 8
   */
  onConfirm(callback: (event?: { url: string, message: string, result: JsResult }) => boolean): WebAttribute;

  /**
   * Triggered when the web page wants to display a JavaScript prompt() dialog.
   * @param callback The Triggered function when the web page wants to display a JavaScript prompt() dialog.
   *
   * @since 9
   */
  onPrompt(callback: (event?: {url: string, message: string, value: string, result: JsResult }) => boolean): WebAttribute;

  /**
   * Triggered when the web page receives a JavaScript console message.
   * @param callback The triggered function when the web page receives a JavaScript console message.
   *
   * @since 8
   */
  onConsole(callback: (event?: { message: ConsoleMessage }) => boolean): WebAttribute;

  /**
   * Triggered when the web page receives a web resource loading error.
   * @param callback The triggered function when the web page receives a web resource loading error.
   *
   * @since 8
   */
  onErrorReceive(callback: (event?: { request: WebResourceRequest, error: WebResourceError }) => void): WebAttribute;

  /**
   * Triggered when the web page receives a web resource loading HTTP error.
   * @param callback The triggered function when the web page receives a web resource loading HTTP error.
   *
   * @since 8
   */
  onHttpErrorReceive(callback: (event?: { request: WebResourceRequest,
    response: WebResourceResponse }) => void): WebAttribute;

  /**
   * Triggered when starting to download.
   * @param callback The triggered function when starting to download.
   *
   * @since 8
   */
  onDownloadStart(callback: (event?: { url: string, userAgent: string, contentDisposition: string, mimetype: string,
    contentLength: number }) => void): WebAttribute;

  /**
   * Triggered when the Web page refreshes accessed history.
   * @param callback The triggered callback when the Web page refreshes accessed history.
   *
   * @since 8
   */
  onRefreshAccessedHistory(callback: (event?: { url: string, isRefreshed: boolean }) => void): WebAttribute;

  /**
   * Triggered when the URL loading is intercepted.
   * @param callback The triggered callback when the URL loading is intercepted.
   *
   * @since 8
   */
  onUrlLoadIntercept(callback: (event?: { data: string | WebResourceRequest }) => boolean): WebAttribute;

  /**
   * Triggered when the Web page receives an ssl Error.
   * @param callback The triggered callback when the Web page receives an ssl Error.
   *
   * @since 8
   * @deprecated since 9
   */
  onSslErrorReceive(callback: (event?: { handler: Function, error: object }) => void): WebAttribute;

  /**
   * Triggered when the render process exits.
   * @param callback The triggered when the render process exits.
   *
   * @since 9
   */
  onRenderExited(callback: (event?: { renderExitReason: RenderExitReason }) => void): WebAttribute;

  /**
   * Triggered when the file selector shows.
   * @param callback The triggered when the file selector shows.
   *
   * @since 9
   */
  onShowFileSelector(callback: (event?: { result: FileSelectorResult,
    fileSelector: FileSelectorParam }) => boolean): WebAttribute;
  
  /**
   * Triggered when the render process exits.
   * @param callback The triggered when the render process exits.
   *
   * @since 8
   * @deprecated since 9
   */
  onRenderExited(callback: (event?: { detail: object }) => boolean): WebAttribute;

  /**
   * Triggered when the file selector shows.
   * @param callback The triggered when the file selector shows.
   *
   * @since 8
   * @deprecated since 9
   */
  onFileSelectorShow(callback: (event?: { callback: Function, fileSelector: object }) => void): WebAttribute;

  /**
   * Triggered when the url loading.
   * @param callback The triggered when the url loading.
   *
   * @since 9
   */
  onResourceLoad(callback: (event: {url: string}) => void): WebAttribute;

  /**
   * Triggered when the scale of WebView changed.
   * @param callback The triggered when the scale of WebView changed.
   *
   * @since 9
   */
  onScaleChange(callback: (event: {oldScale: number, newScale: number}) => void): WebAttribute;

  /**
   * Triggered when the browser needs credentials from the user.
   * @param callback The triggered when the browser needs credentials from the user.
   *
   * @since 9
   */
   onHttpAuthRequest(callback: (event?: { handler: HttpAuthHandler, host: string, realm: string }) => boolean): WebAttribute;

  /**
   * Triggered when the resouces loading is intercepted.
   * @param callback The triggered callback when the resouces loading is intercepted.
   *
   * @return If the response value is null, the Web will continue to load the resouces. Otherwise, the response value will be used
   * @since 9
   */
  onInterceptRequest(callback: (event?: { request: WebResourceRequest}) => WebResourceResponse): WebAttribute;

  /**
   * Triggered when the host application that web content from the specified origin is attempting to access the resources.
   * @param callback The triggered callback when the host application that web content from the specified origin is
   *     attempting to access the resources.
   *
   * @since 9
   */
  onPermissionRequest(callback: (event?: { request: PermissionRequest }) => void): WebAttribute;

  /**
   * Triggered when called to allow custom display of the context menu.
   * @param callback The triggered callback when called to allow custom display of the context menu.
   *
   * @return If custom display return true.Otherwise, default display return false.
   * @since 9
   */
  onContextMenuShow(callback: (event?: { param: WebContextMenuParam, result: WebContextMenuResult }) => boolean): WebAttribute;

  /**
   * Notify search result to host application through onSearchResultReceive.
   * @param callback Function Triggered when the host application call searchAllAsync
   * or searchNext api on WebController and the request is valid.
   *
   * @since 9
   */
   onSearchResultReceive(callback: (event?: {activeMatchOrdinal: number, numberOfMatches: number, isDoneCounting: boolean}) => void): WebAttribute

  /**
   * Triggered when the scroll bar slides to the specified position.
   * @param callback Function Triggered when the scroll bar slides to the specified position.
   *
   * @since 9
   */
   onScroll(callback: (event: {xOffset: number, yOffset: number}) => void): WebAttribute;

  /**
   * Triggered when the Web page receives an ssl Error.
   * @param callback The triggered callback when the Web page receives an ssl Error.
   *
   * @since 9
   */
   onSslErrorEventReceive(callback: (event: { handler: SslErrorHandler, error: SslError }) => void): WebAttribute;
}

declare const Web: WebInterface;
declare const WebInstance: WebAttribute;
