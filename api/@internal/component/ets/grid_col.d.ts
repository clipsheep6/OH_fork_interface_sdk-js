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
* Defines the option in number unit of grid-col child component.
* @since 9
*/
declare interface GridColColumnOption {
    /**
     * Grid Col Column Option xs
     * @since 9
     */
    xs?: number,

    /**
     * Grid Col Column Option sm
     * @since 9
     */
    sm?: number,

    /**
     * Grid Col Column Option md
     * @since 9
     */
    md?: number,

    /**
     * Grid Col Column Option lg
     * @since 9
     */
    lg?: number,

    /**
     * Grid Col Column Option xl
     * @since 9
     */
    xl?: number,

    /**
     * Grid Col Column Option xxl
     * @since 9
     */
    xxl?: number,
}

/**
 * Defines the options of grid-col child component.
 * @since 9
 */
declare interface GridColOptions {
    /**
     * Sets the span of current grid-col item.
     * @since 9
     */
    span?: number | GridColColumnOption;

    /**
     * Sets the offset of current grid-col item.
     * @since 9
     */
    gridColOffset?: number | GridColColumnOption;

    /**
     * Sets the order of current grid-col item.
     * @since 9
     */
    order?: number | GridColColumnOption;
}


/**
 * Defines the the new version of grid-col child component.
 * @since 9
 */
interface GridColInterface {
    /**
     * Defines the constructor of grid-col.
     * @since 9
     */
    (option?: GridColOptions): GridColAttribute;
}

declare class GridColAttribute extends CommonMethod<GridColAttribute> {
    /**
    * Sets the span of current grid-col item.
    * @since 9
    */
    span(value: number | GridColColumnOption): GridRowAttribute;

    /**
    * Sets the offset of  current grid-col item.
    * @since 9
    */
    offset(value: number | GridColColumnOption): GridRowAttribute;

    /**
    * Sets the order of current grid-col item.
    * @since 9
    */
    order(value: number | GridColColumnOption): GridRowAttribute;
}

declare const GridCol: GridColInterface
declare const GridColInstance: GridColAttribute;