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

import {CommonMethod} from "./common";

/**
 * Show routing content.
 * @since 7
 */
export declare class NavigationViewExtend<T> extends NavigationViewAttribute<T> {
}

/**
 * Provide navigator view interface
 * @since 7
 */
interface NavigationView extends NavigationViewAttribute<NavigationView> {
  /**
   * Called when the navigator view interface is used.
   * @since 7
   */
  (): NavigationView;
}

/**
 * Declare Navigation view properties.
 * @since 7
 */
declare class NavigationViewAttribute<T> extends CommonMethod<T> {
}

/**
 * @since 7
 */
export declare const NavigationViewInterface: NavigationView;
