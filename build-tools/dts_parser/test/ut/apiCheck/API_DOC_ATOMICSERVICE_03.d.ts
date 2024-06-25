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

/**
 * @file
 * @kit AdsKit
 */

/**
 * A test case for atomicservice tag's inherit
 * @namespace advertising
 * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
 * @since 12
 */
declare namespace advertising {
  /**
   * @typedef { _Advertisement }
   * Indicates the advertisement data model.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @atomicservice
   * @since 12
   */
  export type Advertisement = _Advertisement;
}