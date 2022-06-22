/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
* Defines the option in number unit of grid-container child component.
* @since 9
*/
declare interface GridColColumnOption {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
}

/**
 * Defines the options of grid-container child component.
 * @since 9
 */
declare interface GridColOptions {
    /**
     * Sets the span of current gird-container item.
     * @since 9
     */
    span?: GridColColumnOption;

    /**
     * Sets the offset of current gird-container item.
     * @since 9
     */
    offset?: GridColColumnOption;

    /**
     * Sets the order of current gird-container item.
     * @since 9
     */
    order?: GridColColumnOption;
}


/**
 * Defines the the new version of grid-container child component.
 * @since 9
 */
interface GridColInterface {
    /**
     * Defines the constructor of GridContainer.
     * @since 7
     */
    (optiion?: GridColOptions): GridColAttribute;
}

declare class GridColAttribute extends CommonMethod<GridColAttribute> {
    onBreakpointChange(callback: (breakpoints: string) => void)
}

declare const GridCol: GridColInterface
declare const GridColInstance: GridColAttribute;
