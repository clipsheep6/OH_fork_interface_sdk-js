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

import type { AsyncCallback } from './@ohos.base';

/**
 * @namespace logLibrary
 * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
 * @systemapi
 * @since 10
 */
declare namespace logLibrary {
  /**
   * Log file entry
   *
   * @typedef LogEntry
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10
   */
  interface LogEntry {
    /**
     * Log file name
     *
     * @type { string }
     * @since 10
     */
    name: string;

    /**
     * File modification time, expressed by the number of seconds elapsed from 1970-01-01
     *
     * @type { number }
     * @since 10
     */
    mtime: number;

    /**
     * Log file size, byte
     *
     * @type { number }
     * @since 10
     */
    size: number;
  }

  /**
   * List all log names of log type
   *
   * @permission ohos.permission.READ_HIVIEW_SYSTEM
   * @param  { string } logType - Log type
   * @returns { LogEntry[] } Return LogEntry[]
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10
   */
  function list(logType: string): LogEntry[];

  /**
   * Copy log to dest path
   *
   * @permission ohos.permission.READ_HIVIEW_SYSTEM
   * @param { string } logType - Log type
   * @param { string } logName - Log name
   * @param { string } dest - Log path under hiview sandbox of HAP
   * @returns { void } Return void
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument
   * @throws { BusinessError } 21300001 - Source file does not exists
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10
   */
  function copy(logType: string, logName: string, dest: string): Promise<void>;

  /**
   * Copy log to dest path
   *
   * @permission ohos.permission.READ_HIVIEW_SYSTEM
   * @param { string } logType - Log type
   * @param { string } logName - Log name
   * @param { string } dest - Log path under hiview sandbox of HAP
   * @param { AsyncCallback} callback - After finish copy log will callback
   * @returns { void } Return void
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument
   * @throws { BusinessError } 21300001 - Source file does not exists
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10
   */
  function copy(logType: string, logName: string, dest: string, callback: AsyncCallback<void>): void;

  /**
   * Move log to dest path
   *
   * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
   * @param { string } logType - Log type
   * @param { string } logName - Log name
   * @param { string } dest - Log path under hiview sandbox of HAP
   * @returns { void } Return void
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument
   * @throws { BusinessError } 21300001 - Source file does not exists
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10
   */
  function move(logType: string, logName: string, dest: string): Promise<void>;

  /**
   * Move log to dest path
   *
   * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
   * @param { string } logType - Log type
   * @param { string } logName - Log name
   * @param { string } dest - Log path under hiview sandbox of HAP
   * @param {AsyncCallback} callback - After finish move log will callback
   * @returns { void } Return void
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument
   * @throws { BusinessError } 21300001 - Source file does not exists
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10
   */
  function move(logType: string, logName: string, dest: string, callback: AsyncCallback<void>): void;

  /**
   * Delete the log based on log name and log type
   *
   * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
   * @param { string } logType - Log type
   * @param { string } logName - Log name
   * @returns { void } Return void
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api
   * @throws { BusinessError } 401 - Invalid argument
   * @throws { BusinessError } 21300001 - Source file does not exists
   * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
   * @systemapi
   * @since 10
   */
  function remove(logType: string, logName: string): void;
}

export default logLibrary;