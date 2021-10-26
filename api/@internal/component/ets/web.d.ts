/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { CommonMethod } from "./common";

export declare class WebController {
  constructor();
  reload();
}

interface Web extends CommonMethod<Web> {
  (value: { src: string; controller: WebController }): Web;
  onPageStart(callback: (url: string) => void): Web;
  onPageFinish(callback: (url: string) => void): Web;
  onError(callback: (errorMsg: string) => void): Web;
  onMessage(callback: (msg: string) => void): Web;
}

export declare const WebInterface: Web;
