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

/**
 * The data panel component is used to display multiple data proportions in a circular proportion chart.
 * @since 7
 */
export declare class DataPanelExtend<T> extends DataPanelAttribute<T> {}

/**
 * @since 7
 */
interface DataPanel extends DataPanelAttribute<DataPanel> {
  /**
   * Return a DataPanel.
   * values: Current data value. A maximum of nine data records are supported.
   * max: Maximum value of the current data.
   * @since 7
   */
  (options: { values: number[]; max?: number }): DataPanel;
}

/**
 * @since 7
 */
declare class DataPanelAttribute<T> extends CommonMethod<T> {
  /**
   * Disable the special effect of the data ratio chart.
   * @since 7
   */
  closeEffect(value: boolean): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const DataPanelInterface: DataPanel;
