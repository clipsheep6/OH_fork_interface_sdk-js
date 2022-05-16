/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,software
 * distributed under the License is distributed on an "ASIS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Enumerates the string value match pattern.
 *
 * @since 8
 */
 enum MatchPattern{
   /**
    * Equals to a string.
    * @syscap SystemCapability.Test.UiTest
    * @since 8
    * @test
    */
   EQUALS = 0,
   /**
    * Contains a substring.
    * @syscap SystemCapability.Test.UiTest
    * @since 8
    * @test
    */
   CONTAINS = 1,
   /**
    * StartsWith a substring.
    * @syscap SystemCapability.Test.UiTest
    * @since 8
    * @test	
    */
   STARTS_WITH = 2,
   /**
    * EndsWith a substring.
    * @syscap SystemCapability.Test.UiTest
    * @since 8
    * @test
    */
   ENDS_WITH = 3
}

/**
 * Represents the point on the device screen.
 *
 * @since 9
 */
declare interface Point {
    readonly  X: number;
    readonly  Y: number;
}

/**
 * Represents the rectangle area on the device screen.
 *
 * @since 9
 */
declare interface Rect {
    readonly  leftX: number;
    readonly  topY: number;
    readonly  rightX: number;
    readonly  bottomY: number;
}

/**
 * Describes the attribute requirements for the target UiComponents.
 *
 * @since 8
 * @syscap SystemCapability.Test.UiTest
 */
 class By{
   /**
    * Specifies the text for the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param txt the text value.
    * @param pattern the {@link MatchPattern} of the text value,default to {@link MatchPattern.EQUALS}
    * @return Returns this {@link By} object.
    * @since 8
    * @test
    */
   text(txt:string,pattern?:MatchPattern):By;

   /**
    * Specifies the inspectorKey of the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param key the inspectorKey value.
    * @return Returns this {@link By} object.
    * @since 8
    * @test
    */
   key(key:string):By;

   /**
    * Specifies the id of the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param id the id value.
    * @return Returns this {@link By} object.
    * @since 8
    * @test
    */
   id(id:number):By;

   /**
    * Specifies the type of the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param tp the type value.
    * @return Returns this {@link By} object.
    * @since 8
    * @test
    */
   type(tp:string):By;

   /**
    * Specifies the clickable status of the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param b the clickable status,default to true.
    * @return Returns this {@link By} object.
    * @since 8
    * @test
    */
   clickable(b?:bool):By;

   /**
    * Specifies the longClickable status of the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param b the clickable status,default to true.
    * @return Returns this {@link By} object.
    * @since 9
    * @test
    */
   longClickable(b?: bool): By;

   /**
    * Specifies the scrollable status of the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param b the scrollable status,default to true.
    * @return Returns this {@link By} object.
    * @since 8
    * @test
    */
   scrollable(b?:bool):By;

   /**
    * Specifies the enabled status of the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param b the enabled status,default to true.
    * @return Returns this {@link By} object.
    * @since 8
    * @test
    */
   enabled(b?:bool):By;

   /**
    * Specifies the focused status of the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param b the focused status,default to true.
    * @return Returns this {@link By} object.
    * @since 8
    * @test
    */
   focused(b?:bool):By;

   /**
    * Specifies the selected status of the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param b the selected status,default to true.
    * @return Returns this {@link By} object.
    * @since 8
    * @test
    */
   selected(b?:bool):By;

   /**
    * Specifies the checked status of the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param b the checked status,default to false.
    * @return Returns this {@link By} object.
    * @since 9
    * @test
    */
   checked(b?: bool): By;

   /**
    * Specifies the checkable status of the target UiComponent.
    * @syscap SystemCapability.Test.UiTest
    * @param b the checkable status,default to false.
    * @return Returns this {@link By} object.
    * @since 9
    * @test
    */
   checkable(b?: bool): By;

   /**
    * Requires that the target UiComponent which is before another UiComponent that specified by the given {@link By}
    * object,used to locate UiComponent relatively.
    * @syscap SystemCapability.Test.UiTest
    * @param by describes the attribute requirements of UiComponent which the target one is in front of.
    * @return Returns this {@link By} object.
    * @since 8
    * @test
    */
   isBefore(by:By):By;

    /**
     * Requires that the target UiComponent which is after another UiComponent that specified by the given {@link By}
     * object,used to locate UiComponent relatively.
     * @syscap SystemCapability.Test.UiTest
     * @param by describes the attribute requirements of UiComponent which the target one is in back of.
     * @return Returns this {@link By} object.
     * @since 8
     * @test
     */
    isAfter(by:By):By;
    }

    /**
     * Represents a UiComponent of the ohos application,user can perform operations or query attributes on it.
     *
     * @since 8
     * @test
     * @syscap SystemCapability.Test.UiTest
     */
     class UiComponent{
      /**
       * Click this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @since 8
       * @test
       */
      click():Promise<void>;

      /**
       * Double click this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @since 8
       * @test
       */
      doubleClick():Promise<void>;

      /**
       * Long click this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @since 8
       * @test
       */
      longClick():Promise<void>;

      /**
       * Get the id attribute value.
       * @syscap SystemCapability.Test.UiTest
       * @returns the id value.
       * @since 8
       * @test
       */
      getId():Promise<number>;

      /**
       * Get the inspectorKey attribute value.
       * @syscap SystemCapability.Test.UiTest
       * @returns the inspectorKey value.
       * @since 8
       * @test
       */
      getKey():Promise<string>;

      /**
       * Get the text attribute value.
       * @syscap SystemCapability.Test.UiTest
       * @since 8
       * @test
       */
      getText():Promise<string>;

      /**
       * Get the type name.
       * @syscap SystemCapability.Test.UiTest
       * @returns the type name.
       * @since 8
       * @test
       */
      getType():Promise<string>;

      /**
       * Get the clickable status of this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @returns the clickable status.
       * @since 8
       * @test
       */
      isClickable():Promise<bool>;

      /**
       * Get the longClickable status of this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @returns the longClickable status.
       * @since 9
       * @test
       */
      isLongClickable(): Promise<bool>;

      /**
       * Get the scrollable status of this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @returns the scrollable status.
       * @since 8
       * @test
       */
      isScrollable():Promise<bool>;

      /**
       * Get the enabled status of this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @returns the enabled status.
       * @since 8
       * @test
       */
      isEnabled():Promise<bool>;

      /**
       * Get the focused status of this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @returns the focused status.
       * @since 8
       * @test
       */
      isFocused():Promise<bool>;

      /**
       * Get the selected status of this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @returns the selected status.
       * @since 8
       * @test
       */
      isSelected():Promise<bool>;
	
      /**
       * Get the checked status of this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @returns the checked status.
       * @since 9
       * @test
       */
      isChecked(): Promise<bool>;

      /**
       * Get the checkable status of this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @returns the checkable status.
       * @since 9
       * @test
       */
      isCheckable(): Promise<bool>;

      /**
       * Inject text to this {@link UiComponent},applicable to TextInput.
       * @syscap SystemCapability.Test.UiTest
       * @param text the text to inject.
       * @since 8
       * @test
       */
      inputText(text: string):Promise<void>;

      /**
       * Clear text of this {@link UiComponent},applicable to TextInput.
       * @syscap SystemCapability.Test.UiTest
       * @since 9
       * @test
       */
      clearText(): Promise<void>;

      /**
       * Scroll on this {@link UiComponent} to the top,applicable to scrollable one.
       * @syscap SystemCapability.Test.UiTest
       * @param speed the speed of swipe,default 600.
       * @since 9
       * @test
       */
      scrollToTop(speed?: number): Promise<void>;

      /**
       * Scroll on this {@link UiComponent} to the bottom,applicable to scrollable one.
       * @syscap SystemCapability.Test.UiTest
       * @param speed the speed of swipe,default 600.
       * @since 9
       * @test
       */
      scrollToBottom(speed?: number): Promise<void>;

      /**
       * Scroll on this {@link UiComponent}to find matched {@link UiComponent},applicable to scrollable one.
       * @syscap SystemCapability.Test.UiTest
       * @param by the attribute requirements of the target {@link UiComponent}.
       * @return the found result,or undefined if not found.
       * @since 8
       * @test
       */
      scrollSearch(by:By):Promise<UiComponent>;

      /**
       * Get the bounds rect of this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @return the bounds rect object.
       * @since 9
       * @test
       */
      getBounds(): Promise<Rect>;

      /**
       * Get the boundsCenter of this {@link UiComponent}.
       * @syscap SystemCapability.Test.UiTest
       * @return the boundsCenter object.
       * @since 9
       * @test
       */
      getBoundsCenter(): Promise<Point>;

      /**
       * Drag this {@link UiComponent} to the bounds rect of target UiComponent.
       * @syscap SystemCapability.Test.UiTest
       * @param target the target {@link UiComponent}.
       * @since 9
       * @test
       */
      dragTo(target: UiComponent): Promise<void>;
}

/**
 * The unified facade of UiTest framework,can be used to find {@link UiComponent},trigger keyEvents,perform
 * coordinates-based UI actions,capture screen and so on.
 *
 * @since 8
 * @test
 * @syscap SystemCapability.Test.UiTest
 */
 class UiDriver{
  /**
   * Create an {@link UiDriver} object.
   * @syscap SystemCapability.Test.UiTest
   * @returns the {@link UiDriver} object.
   * @since 8
   * @test
   */
  static create():UiDriver;

  /**
   * Delay with specified duration.
   * @syscap SystemCapability.Test.UiTest
   * @param duration the delay duration in milliseconds.
   * @since 8
   * @test
   */
  delayMs(duration:number):Promise<void>;

  /**
   * Find the first matched {@link UiComponent} on current UI.
   * @syscap SystemCapability.Test.UiTest
   * @param by the attribute requirements of the target {@link UiComponent}.
   * @returns the first matched {@link UiComponent} or undefined.
   * @since 8
   * @test
   */
  findComponent(by:By):Promise<UiComponent>;

  /**
   * Find the first matched {@link UiComponent} on current UI during the time given.
   * @syscap SystemCapability.Test.UiTest
   * @param by the attribute requirements of the target {@link UiComponent}.
   * @param time duration of finding in milliseconds
   * @returns the first matched {@link UiComponent} or undefined.
   * @since 9
   * @test
   */
  waitForComponent(by: By, time: number): Promise<UiComponent>;

  /**
   * Find all the matched {@link UiComponent}s on current UI.
   * @syscap SystemCapability.Test.UiTest
   * @param by the attribute requirements of the target {@link UiComponent}.
   * @returns the matched {@link UiComponent}s list.
   * @since 8
   * @test
   */
  findComponents(by:By):Promise<Array<UiComponent>>;

  /**
   * Assert t the matched {@link UiComponent}s exists on current UI;if not,assertError will be raised.
   * @syscap SystemCapability.Test.UiTest
   * @param by the attribute requirements of the target {@link UiComponent}.
   * @throws Throws this exception if following error occurs:{@code ComponentExistAssertion Failure}.
   * @since 8
   * @test
   */
  assertComponentExist(by:By):Promise<void>;

  /**
   * Press the BACK key.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  pressBack():Promise<void>;

  /**
   * Press the specified key.
   * @syscap SystemCapability.Test.UiTest
   * @param keyCode the target keyCode.
   * @since 8
   * @test
   */
  triggerKey(keyCode:number):Promise<void>;

  /**
   * Click on the specified location on the screen.
   * @syscap SystemCapability.Test.UiTest
   * @param x the x-coordinate.
   * @param y the y-coordinate.
   * @since 8
   * @test
   */
  click(x:number,y:number):Promise<void>;

  /**
   * DoubleClick on the specified location on the screen.
   * @syscap SystemCapability.Test.UiTest
   * @param x the x-coordinate.
   * @param y the y-coordinate.
   * @since 8
   * @test
   */
  doubleClick(x:number,y:number):Promise<void>;

  /**
   * LongClick on the specified location on the screen.
   * @syscap SystemCapability.Test.UiTest
   * @param x the x-coordinate.
   * @param y the y-coordinate.
   * @since 8
   * @test
   */
  longClick(x:number,y:number):Promise<void>;

  /**
   * Swipe on the screen between the specified points.
   * @syscap SystemCapability.Test.UiTest
   * @param startx the x-coordinate of the starting point.
   * @param starty the y-coordinate of the starting point.
   * @param endx the x-coordinate of the ending point.
   * @param endy the y-coordinate of the ending point.
   * @since 8
   * @test
   */
  swipe(startx:number,starty:number,endx:number,endy:number):Promise<void>;

  /**
   * Drag on the screen between the specified points.
   * @syscap SystemCapability.Test.UiTest
   * @param startx the x-coordinate of the starting point.
   * @param starty the y-coordinate of the starting point.
   * @param endx the x-coordinate of the ending point.
   * @param endy the y-coordinate of the ending point.
   * @since 9
   * @test
   */
  drag(startx: number, starty: number, endx: number, endy: number): Promise<void>;

  /**
   * Capture current screen and save as picture which PNG format.
   * @syscap SystemCapability.Test.UiTest
   * @param savePath the path where to store the picture.
   * @returns true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @since 8
   * @test
   */
  screenCap(savePath:string):Promise<bool>;
}

/**
 * The static builder for building {@link By}object conveniently,usage example:BY.text('txt').enabled(true).
 * @syscap SystemCapability.Test.UiTest
 * @since 8
 * @test
 */
 const BY:By;

 export {UiComponent,UiDriver,BY,MatchPattern};
