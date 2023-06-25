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

import { BusinessError } from './basic';

/**
 * Provides international settings related APIs.
 *
 * @namespace i18n
 * @syscap SystemCapability.Global.I18n
 * @since 7
 */
declare namespace i18n {
  /**
   * Obtains the country or region name localized for display on a given locale.
   *
   * @param { string } country - The locale whose country or region name will be displayed.
   * @param { string } locale - The locale used to display the country or region.
   * @param { boolean } [sentenceCase] - Specifies whether the country or region name is displayed in sentence case.
   * @returns { string } the country or region name localized for display on a given locale.
   * @syscap SystemCapability.Global.I18n
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.System.getDisplayCountry
   */
  export function getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string;

  /**
   * Obtains the language name localized for display on a given locale.
   *
   * @param { string } language - The locale whose language name will be displayed.
   * @param { string } locale - The locale used to display the language.
   * @param { boolean } [sentenceCase] - Specifies whether the language name is displayed in sentence case.
   * @returns { string } the language name localized for display on a given locale.
   * @syscap SystemCapability.Global.I18n
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.System.getDisplayLanguage
   */
  export function getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string;

  /**
   * Obtains the language currently used by the system.
   *
   * @returns { string } the language currently used by the system.
   * @syscap SystemCapability.Global.I18n
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.System.getSystemLanguage
   */
  export function getSystemLanguage(): string;

  /**
   * Obtains the region currently used by the system.
   *
   * @returns { string } the region currently used by the system.
   * @syscap SystemCapability.Global.I18n
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.System.getSystemRegion
   */
  export function getSystemRegion(): string;

  /**
   * Obtains the locale currently used by the system.
   *
   * @returns { string } the locale currently used by the system.
   * @syscap SystemCapability.Global.I18n
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.System.getSystemLocale
   */
  export function getSystemLocale(): string;

  /**
   * Provides system functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 9
   */
  /**
   * Provides system functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  export class System {
    /**
     * Obtains the country or region name localized for display on a given locale.
     *
     * @param { string } country - The locale whose country or region name will be displayed.
     * @param { string } locale - The locale used to display the country or region.
     * @param { boolean } [sentenceCase] - Specifies whether the country or region name is displayed in sentence case.
     * @returns { string } the country or region name localized for display on a given locale.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the country or region name localized for display on a given locale.
     *
     * @param { string } country - The locale whose country or region name will be displayed.
     * @param { string } locale - The locale used to display the country or region.
     * @param { boolean } [sentenceCase] - Specifies whether the country or region name is displayed in sentence case.
     * @returns { string } the country or region name localized for display on a given locale.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string;

    /**
     * Obtains the language name localized for display on a given locale.
     *
     * @param { string } language - The locale whose language name will be displayed.
     * @param { string } locale - The locale used to display the language.
     * @param { boolean } [sentenceCase] - Specifies whether the language name is displayed in sentence case.
     * @returns { string } the language name localized for display on a given locale.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the language name localized for display on a given locale.
     *
     * @param { string } language - The locale whose language name will be displayed.
     * @param { string } locale - The locale used to display the language.
     * @param { boolean } [sentenceCase] - Specifies whether the language name is displayed in sentence case.
     * @returns { string } the language name localized for display on a given locale.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string;

    /**
     * Obtains all languages supported by the system.
     *
     * @returns { Array<string> } all languages supported by the system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static getSystemLanguages(): Array<string>;

    /**
     * Obtains all regions supported by the system in the language.
     *
     * @param { string } language - The language used to get the list of regions.
     * @returns { Array<string> } all countries or regions supported by the system in the language.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static getSystemCountries(language: string): Array<string>;

    /**
     * Determine whether the current language or region is recommended.
     *
     * @param { string } language - The language code.
     * @param { string } [region] - The region code.
     * @returns { boolean } whether the current language or region is recommended.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static isSuggested(language: string, region?: string): boolean;

    /**
     * Obtains the language currently used by the system.
     *
     * @returns { string } the language currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the language currently used by the system.
     *
     * @returns { string } the language currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static getSystemLanguage(): string;

    /**
     * Set the language currently used by the system.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } language - The language to be used.
     * @throws { BusinessError } 201 - the application does not have permission to call this function
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    static setSystemLanguage(language: string): void;

    /**
     * Obtains the region currently used by the system.
     *
     * @returns { string } the region currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the region currently used by the system.
     *
     * @returns { string } the region currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static getSystemRegion(): string;

    /**
     * Set the region currently used by the system.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } region - The region to be used.
     * @throws { BusinessError } 201 - the application does not have permission to call this function
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    static setSystemRegion(region: string): void;

    /**
     * Obtains the locale currently used by the system.
     *
     * @returns { string } the locale currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the locale currently used by the system.
     *
     * @returns { string } the locale currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static getSystemLocale(): string;

    /**
     * Set the locale currently used by the system.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } locale - The locale to be used.
     * @throws { BusinessError } 201 - the application does not have permission to call this function
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    static setSystemLocale(locale: string): void;

    /**
     * Check out whether system is 24-hour system.
     *
     * @returns { boolean } a boolean represent whether system is 24-hour system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Check out whether system is 24-hour system.
     *
     * @returns { boolean } a boolean represent whether system is 24-hour system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static is24HourClock(): boolean;

    /**
     * Set 24-hour system.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { boolean } option - represent the boolean to be set.
     * @throws { BusinessError } 201 - the application does not have permission to call this function
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    static set24HourClock(option: boolean): void;

    /**
     * Add one language to preferred language List.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } language - the language to be added.
     * @param { number } [index] - the position of preferred language list to be inserted.
     * @throws { BusinessError } 201 - the application does not have permission to call this function
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    static addPreferredLanguage(language: string, index?: number): void;

    /**
     * Remove one language from preferred language list.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { number } index - the position of removed language in preferred language list.
     * @throws { BusinessError } 201 - the application does not have permission to call this function
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    static removePreferredLanguage(index: number): void;

    /**
     * Access the system preferred language list.
     *
     * @returns { Array<string> } a string Array represent the preferred language list.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static getPreferredLanguageList(): Array<string>;

    /**
     * Get the first preferred language of system.
     *
     * @returns { string } a string represent the first preferred language of system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static getFirstPreferredLanguage(): string;

    /**
     * Get the preferred language of App.
     *
     * @returns { string } a string represent the preferred language of App.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static getAppPreferredLanguage(): string;

    /**
     * Set whether to use local digit.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { boolean } flag - a boolean variable represents whether to use local digit
     * @throws { BusinessError } 201 - the application does not have permission to call this function
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    static setUsingLocalDigit(flag: boolean): void;

    /**
     * Get whether to use local digit.
     *
     * @returns { boolean } a boolean represents whether to use local digit.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static getUsingLocalDigit(): boolean;
  }

  /**
   * Provides util functions.
   *
   * @interface Util
   * @syscap SystemCapability.Global.I18n
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.I18NUtil
   */
  export interface Util {
    /**
     * Convert from unit to unit and format according to the locale.
     *
     * @param { UnitInfo } fromUnit - Information of the unit to be converted.
     * @param { UnitInfo } toUnit - Information about the unit to be converted to.
     * @param { number } value - Indicates the number to be formatted.
     * @param { string } locale - The locale to be used.
     * @param { string } [style] - The style of format.
     * @returns { string } converted number and unit.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.i18n/i18n.I18NUtil#unitConvert
     */
    unitConvert(fromUnit: UnitInfo, toUnit: UnitInfo, value: number, locale: string, style?: string): string;
  }

  /**
   * Provides util functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 9
   */
  /**
   * Provides util functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  export class I18NUtil {
    /**
     * Convert from unit to unit and format according to the locale.
     *
     * @param { UnitInfo } fromUnit - Information of the unit to be converted.
     * @param { UnitInfo } toUnit - Information about the unit to be converted to.
     * @param { number } value - Indicates the number to be formatted.
     * @param { string } locale - The locale to be used.
     * @param { string } [style] - The style of format.
     * @returns { string } converted number and unit.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static unitConvert(fromUnit: UnitInfo, toUnit: UnitInfo, value: number, locale: string, style?: string): string;

    /**
     * Get the order of year, month, day in the specified locale. Year, month, day are separated by '-'.
     * 'y' stands for year, 'L' stands for month, d stands for day.
     *
     * @param { string } locale - Information of the locale
     * @returns { string } the string of 'y', 'L', 'd' joined by '-'.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Get the order of year, month, day in the specified locale. Year, month, day are separated by '-'.
     * 'y' stands for year, 'L' stands for month, d stands for day.
     *
     * @param { string } locale - Information of the locale
     * @returns { string } the string of 'y', 'L', 'd' joined by '-'.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static getDateOrder(locale: string): string;
  }

  /**
   * Provides the options of unit.
   *
   * @interface UnitInfo
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  export interface UnitInfo {
    /**
     * Unit name.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    unit: string;

    /**
     * The measurement system of the unit.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    measureSystem: string;
  }

  /**
   * Provides the options of PhoneNumberFormat.
   *
   * @interface PhoneNumberFormatOptions
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  export interface PhoneNumberFormatOptions {
    /**
     * Indicates the type to format phone number.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Indicates the type to format phone number.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    type?: string;
  }

  /**
   * Provides the API for formatting phone number strings
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  export class PhoneNumberFormat {
    /**
     * A constructor used to create a PhoneNumberFormat object.
     *
     * @param { string } country - Indicates a character string containing the country information for the PhoneNumberFormat object.
     * @param { PhoneNumberFormatOptions } [options] - format types: "E164", "RFC3966", "INTERNATIONAL", "NATIONAL".
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    constructor(country: string, options?: PhoneNumberFormatOptions);

    /**
     * Judge whether phone number is valid.
     *
     * @param { string } number - Indicates the input phone number.
     * @returns { boolean } a boolean indicates whether the input phone number is valid.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    isValidNumber(number: string): boolean;

    /**
     * Obtains the formatted phone number strings of number.
     *
     * @param { string } number - Indicates the input phone number to be formatted.
     * @returns { string } the formatted phone number.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    format(number: string): string;

    /**
     * Determine the location by phone number, and return it according to the specified regional language.
     *
     * @param { string } number - input phone number.
     * @param { string } locale - locale ID.
     * @returns { string } a string represents phone number's location.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    getLocationName(number: string, locale: string): string;
  }

  /**
   * Get a Calendar instance specified by locale and type.
   *
   * @param { string } locale - The locale used to get calendar.
   * @param { string } [type] - If type is not specified, get locale's default Calendar, else get the specified type of Calendar.
   *  such as buddhist, chinese, coptic, ethiopic, hebrew, gregory, indian, islamic_civil, islamic_tbla, islamic_umalqura,
   *  japanese, persian.
   * @returns { Calendar } Calendar object
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Get a Calendar instance specified by locale and type.
   *
   * @param { string } locale - The locale used to get calendar.
   * @param { string } [type] - If type is not specified, get locale's default Calendar, else get the specified type of Calendar.
   *  such as buddhist, chinese, coptic, ethiopic, hebrew, gregory, indian, islamic_civil, islamic_tbla, islamic_umalqura,
   *  japanese, persian.
   * @returns { Calendar } Calendar object
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  export function getCalendar(locale: string, type?: string): Calendar;

  export class Calendar {
    /**
     * set the date.
     *
     * @param { Date } date - Date object used to set the time and date.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * set the date.
     *
     * @param { Date } date - Date object used to set the time and date.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    setTime(date: Date): void;

    /**
     * set the time.
     *
     * @param { number } time - Indicates the elapsed milliseconds from 1970.1.1 00:00:00 GMT.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * set the time.
     *
     * @param { number } time - Indicates the elapsed milliseconds from 1970.1.1 00:00:00 GMT.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    setTime(time: number): void;

    /**
     * Set the time
     *
     * @param { number } year - The year field of the calendar, ranges from 0 to 9999.
     * @param { number } month - The month field of the calendar, ranges from 0 to 11.
     * @param { number } date - The day field of the calendar, ranges from 1 to 31.
     * @param { number } hour - The hour field of the calendar, ranges from 0 to 23.
     * @param { number } minute - The minute field of the calendar, ranges from 0 to 59.
     * @param { number } second - the second field of the calendar, ranges from 0 to 59.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Set the time
     *
     * @param { number } year - The year field of the calendar, ranges from 0 to 9999.
     * @param { number } month - The month field of the calendar, ranges from 0 to 11.
     * @param { number } date - The day field of the calendar, ranges from 1 to 31.
     * @param { number } hour - The hour field of the calendar, ranges from 0 to 23.
     * @param { number } minute - The minute field of the calendar, ranges from 0 to 59.
     * @param { number } second - the second field of the calendar, ranges from 0 to 59.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    set(year: number, month: number, date: number, hour?: number, minute?: number, second?: number): void;

    /**
     * Set the timezone of this calendar.
     *
     * @param { string } timezone - The id of a timezone.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Set the timezone of this calendar.
     *
     * @param { string } timezone - The id of a timezone.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    setTimeZone(timezone: string): void;

    /**
     * Get the timezone id of this calendar instance.
     *
     * @returns { string } the timezone id of this calendar.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Get the timezone id of this calendar instance.
     *
     * @returns { string } the timezone id of this calendar.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    getTimeZone(): string;

    /**
     * Get the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     *
     * @returns { number } start day of a week.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Get the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     *
     * @returns { number } start day of a week.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    getFirstDayOfWeek(): number;

    /**
     * Set the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     *
     * @param { number } value - Indicates the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Set the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     *
     * @param { number } value - Indicates the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    setFirstDayOfWeek(value: number): void;

    /**
     * Get the minimal days of a week, which is needed for the first day of a year.
     *
     * @returns { number } the minimal days of a week.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Get the minimal days of a week, which is needed for the first day of a year.
     *
     * @returns { number } the minimal days of a week.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    getMinimalDaysInFirstWeek(): number;

    /**
     * Set the minimal days of a week, which is needed for the first week of a year.
     *
     * @param { number } value - The value to be set.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Set the minimal days of a week, which is needed for the first week of a year.
     *
     * @param { number } value - The value to be set.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    setMinimalDaysInFirstWeek(value: number): void;

    /**
     * Get the associated value with the field.
     *
     * @param { string } field - Field values such as era, year, month, week_of_year, week_of_month, date, day_of_year, day_of_week
     *  day_of_week_in_month, hour, hour_of_day, minute, second, millisecond, zone_offset, dst_offset, year_woy,
     *  dow_local, extended_year, julian_day, milliseconds_in_day, is_leap_month.
     * @returns { number } the associated value.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Get the associated value with the field.
     *
     * @param { string } field - Field values such as era, year, month, week_of_year, week_of_month, date, day_of_year, day_of_week
     *  day_of_week_in_month, hour, hour_of_day, minute, second, millisecond, zone_offset, dst_offset, year_woy,
     *  dow_local, extended_year, julian_day, milliseconds_in_day, is_leap_month.
     * @returns { number } the associated value.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    get(field: string): number;

    /**
     * Get calendar's name localized for display in the given locale.
     *
     * @param { string } locale - Locale used to get the localized name for this calendar.
     * @returns { string } the localized name of this calendar.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    getDisplayName(locale: string): string;

    /**
     * Returns true if the given date is a weekend day. If the date is not given,
     *  the date object of this calendar is used.
     *
     * @param { Date } [date] - Date object whose attribute is desired.
     * @returns { boolean } whether the date is a weekend day.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Returns true if the given date is a weekend day. If the date is not given,
     *  the date object of this calendar is used.
     *
     * @param { Date } [date] - Date object whose attribute is desired.
     * @returns { boolean } whether the date is a weekend day.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    isWeekend(date?: Date): boolean;
  }

  /**
   * Judge whether the locale is RTL locale.
   *
   * @param { string } locale - The locale to be used.
   * @returns { boolean } true representing the locale is an RTL locale
   * @syscap SystemCapability.Global.I18n
   * @since 7
   */
  /**
   * Judge whether the locale is RTL locale.
   *
   * @param { string } locale - The locale to be used.
   * @returns { boolean } true representing the locale is an RTL locale
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  export function isRTL(locale: string): boolean;

  /**
   * Obtains a BreakIterator object for finding the location of break point in text.
   *
   * @param { string } locale - the returned BreakIterator will adapt the rule, specified by the locale, to break text.
   * @returns { BreakIterator } a newly constructed BreakIterator object.
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  export function getLineInstance(locale: string): BreakIterator;

  /**
   * The BreakIterator class is used for finding the location of break point in text.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  export class BreakIterator {
    /**
     * Obtains the current position of the BreakIterator instance.
     *
     * @returns { number } the current position of the BreakIterator instance.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    current(): number;

    /**
     * Set the BreakIterator's position to the first break point, the first break point is always the beginning of the
     * processed text.
     *
     * @returns { number } the index of the first break point.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    first(): number;

    /**
     * Set the BreakIterator's position to the last break point. the last break point is always the index beyond the
     * last character of the processed text.
     *
     * @returns { number } the index of the last break point.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    last(): number;

    /**
     * Set the BreakIterator's position to the nth break point from the current break point.
     *
     * @param { number } [index] - indicates the number of break points to advance. If index is not given, n is treated as 1.
     * @returns { number } the index of the BreakIterator after moving. If there is not enough break points, returns -1.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    next(index?: number): number;

    /**
     * Set the BreakIterator's position to the break point preceding the current break point.
     *
     * @returns { number } the index of the BreakIterator after moving. If there is not enough break points, returns -1.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    previous(): number;

    /**
     * Set the text to be processed.
     *
     * @param { string } text - Indicates the text to be processed by the BreakIterator.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    setLineBreakText(text: string): void;

    /**
     * Set the BreakIterator's position to the first break point following the specified offset.
     *
     * @param { number } offset
     * @returns { number } the index of the BreakIterator after moving. If there is not enough break points, returns -1.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    following(offset: number): number;

    /**
     * Obtains the text being processed.
     *
     * @returns { string } the text that is processed by the BreakIterator.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    getLineBreakText(): string;

    /**
     * Returns true if the position indicated by the offset is a break point, otherwise false. The BreakIterator's
     * position will be set to the position indicated by the offset if it returns true, otherwise the BreakIterator
     * will be moved to the break point following the offset.
     *
     * @param { number } offset The offset to be checked.
     * @returns { boolean } true if the offset is a break point.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    isBoundary(offset: number): boolean;
  }

  /**
   * Get IndexUtil object.
   *
   * @param { string } [locale] - Indicates a character string containing the locale information, including
   *               the language and optionally the script and region, for the NumberFormat object.
   * @returns { IndexUtil } IndexUtil object.
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  export function getInstance(locale?: string): IndexUtil;

  /**
   * Sequence text can be grouped under the specified area,
   * and grouping index with different lengths can be specified.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  export class IndexUtil {
    /**
     * Get a list of labels for use as a UI index
     *
     * @returns { Array<string> } a list of labels
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    getIndexList(): Array<string>;

    /**
     * Add the index characters from a Locale to the index.
     *
     * @param { string } locale - The locale whose index characters are to be added.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    addLocale(locale: string): void;

    /**
     * Get corresponding index of the input text.
     *
     * @param { string } text - input text
     * @returns { string } index of the input text
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    getIndex(text: string): string;
  }

  /**
   * Provides the API for accessing unicode character properties. For example, determine whether a character is a number.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8
   * @deprecated since 9
   * @useinstead Unicode
   */
  export class Character {
    /**
     * Determines whether the specified code point is a digit character
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a digit character
     * @syscap SystemCapability.Global.I18n
     * @since 8
     * @deprecated since 9
     * @useinstead Unicode.isDigit
     */
    isDigit(char: string): boolean;

    /**
     * Determines if the specified character is a space character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a space character
     * @syscap SystemCapability.Global.I18n
     * @since 8
     * @deprecated since 9
     * @useinstead Unicode.isSpaceChar
     */
    isSpaceChar(char: string): boolean;

    /**
     * Determines if the specified character is a whitespace character
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a whitespace character
     * @syscap SystemCapability.Global.I18n
     * @since 8
     * @deprecated since 9
     * @useinstead Unicode.isWhitespace
     */
    isWhitespace(char: string): boolean;

    /**
     * Determines if the specified character is a RTL character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a RTL character
     * @syscap SystemCapability.Global.I18n
     * @since 8
     * @deprecated since 9
     * @useinstead Unicode.isRTL
     */
    isRTL(char: string): boolean;

    /**
     * Determines if the specified character is a Ideographic character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a Ideographic character
     * @syscap SystemCapability.Global.I18n
     * @since 8
     * @deprecated since 9
     * @useinstead Unicode.isIdeograph
     */
    isIdeograph(char: string): boolean;

    /**
     * Determines if the specified character is a Letter or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a Letter
     * @syscap SystemCapability.Global.I18n
     * @since 8
     * @deprecated since 9
     * @useinstead Unicode.isLetter
     */
    isLetter(char: string): boolean;

    /**
     * Determines if the specified character is a LowerCase character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a LowerCase character
     * @syscap SystemCapability.Global.I18n
     * @since 8
     * @deprecated since 9
     * @useinstead Unicode.isLowerCase
     */
    isLowerCase(char: string): boolean;

    /**
     * Determines if the specified character is a UpperCase character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a UpperCase character
     * @syscap SystemCapability.Global.I18n
     * @since 8
     * @deprecated since 9
     * @useinstead Unicode.isUpperCase
     */
    isUpperCase(char: string): boolean;

    /**
     * Get the general category value of the specified character.
     *
     * @param { string } char - the character to be tested
     * @returns { string } the general category of the specified character.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     * @deprecated since 9
     * @useinstead Unicode.getType
     */
    getType(char: string): string;
  }

  /**
   * Provides the API for accessing unicode character properties. For example, determine whether a character is a number.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 9
   */
  /**
   * Provides the API for accessing unicode character properties. For example, determine whether a character is a number.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  export class Unicode {
    /**
     * Determines whether the specified code point is a digit character
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a digit character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines whether the specified code point is a digit character
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a digit character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static isDigit(char: string): boolean;

    /**
     * Determines if the specified character is a space character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a space character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a space character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a space character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static isSpaceChar(char: string): boolean;

    /**
     * Determines if the specified character is a whitespace character
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a whitespace character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a whitespace character
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a whitespace character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static isWhitespace(char: string): boolean;

    /**
     * Determines if the specified character is a RTL character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a RTL character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a RTL character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a RTL character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static isRTL(char: string): boolean;

    /**
     * Determines if the specified character is a Ideographic character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a Ideographic character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a Ideographic character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a Ideographic character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static isIdeograph(char: string): boolean;

    /**
     * Determines if the specified character is a Letter or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a Letter
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a Letter or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a Letter
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static isLetter(char: string): boolean;

    /**
     * Determines if the specified character is a LowerCase character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a LowerCase character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a LowerCase character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a LowerCase character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static isLowerCase(char: string): boolean;

    /**
     * Determines if the specified character is a UpperCase character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a UpperCase character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a UpperCase character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a UpperCase character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static isUpperCase(char: string): boolean;

    /**
     * Get the general category value of the specified character.
     *
     * @param { string } char - the character to be tested
     * @returns { string } the general category of the specified character.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Get the general category value of the specified character.
     *
     * @param { string } char - the character to be tested
     * @returns { string } the general category of the specified character.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static getType(char: string): string;
  }

  /**
   * check out whether system is 24-hour system.
   *
   * @returns { boolean } a boolean represent whether system is 24-hour system.
   * @syscap SystemCapability.Global.I18n
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#is24HourClock
   */
  export function is24HourClock(): boolean;

  /**
   * set 24-hour system.
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { boolean } option - represent the boolean to be set.
   * @returns { boolean } a boolean represent whether setting 24-hour system success.
   * @syscap SystemCapability.Global.I18n
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#set24HourClock
   */
  export function set24HourClock(option: boolean): boolean;

  /**
   * Add one language to preferred language List.
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { string } language - the language to be added.
   * @param { number } [index] - the position of preferred language list to be inserted.
   * @returns { boolean } a boolean represent whether language added success.
   * @syscap SystemCapability.Global.I18n
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#addPreferredLanguage
   */
  export function addPreferredLanguage(language: string, index?: number): boolean;

  /**
   * Remove one language from preferred language list.
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { number } index - the position of removed language in preferred language list.
   * @returns { boolean } a boolean represent whether removed success.
   * @syscap SystemCapability.Global.I18n
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#removePreferredLanguage
   */
  export function removePreferredLanguage(index: number): boolean;

  /**
   * Access the system preferred language list.
   *
   * @returns { Array<string> } a string Array represent the preferred language list.
   * @syscap SystemCapability.Global.I18n
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#getPreferredLanguageList
   */
  export function getPreferredLanguageList(): Array<string>;

  /**
   * Get the first preferred language of system.
   *
   * @returns { string } a string represent the first preferred language of system.
   * @syscap SystemCapability.Global.I18n
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#getFirstPreferredLanguage
   */
  export function getFirstPreferredLanguage(): string;

  /**
   * Get the default TimeZone object or the TimeZone object corresponds to zoneID.
   *
   * @param { string } [zoneID] - TimeZone ID used to create TimeZone Object.
   * @returns { TimeZone } a TimeZone object corresponds to zoneID.
   * @syscap SystemCapability.Global.I18n
   * @since 7
   */
  /**
   * Get the default TimeZone object or the TimeZone object corresponds to zoneID.
   *
   * @param { string } [zoneID] - TimeZone ID used to create TimeZone Object.
   * @returns { TimeZone } a TimeZone object corresponds to zoneID.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  export function getTimeZone(zoneID?: string): TimeZone;

  /**
   * Provides the API for accessing TimeZone name, rawOffset and offset information.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 7
   */
  /**
   * Provides the API for accessing TimeZone name, rawOffset and offset information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  export class TimeZone {
    /**
     * Get the id of the TimeZone object.
     *
     * @returns { string } a string represents the timezone id.
     * @syscap SystemCapability.Global.I18n
     * @since 7
     */
    /**
     * Get the id of the TimeZone object.
     *
     * @returns { string } a string represents the timezone id.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    getID(): string;

    /**
     * Get the displayName of the TimeZone Object under the locale.
     *
     * @param { string } [locale] - the locale tag use to display timezone object's name.
     * @param { boolean } [isDST] - wether consider daylight saving time when display timezone object's name.
     * @returns { string } a string represents the display name.
     * @syscap SystemCapability.Global.I18n
     * @since 7
     */
    getDisplayName(locale?: string, isDST?: boolean): string;

    /**
     * Get the raw offset of the TimeZone object.
     *
     * @returns { number } a number represents the raw offset.
     * @syscap SystemCapability.Global.I18n
     * @since 7
     */
    /**
     * Get the raw offset of the TimeZone object.
     *
     * @returns { number } a number represents the raw offset.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    getRawOffset(): number;

    /**
     * Get the offset of the TimeZone object.
     *
     * @param { number } [date] - Indicates a date use to compute offset.
     * @returns { number } a number represents the offset with date.
     * @syscap SystemCapability.Global.I18n
     * @since 7
     */
    /**
     * Get the offset of the TimeZone object.
     *
     * @param { number } [date] - Indicates a date use to compute offset.
     * @returns { number } a number represents the offset with date.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    getOffset(date?: number): number;

    /**
     * Get available TimeZone ID list.
     *
     * @returns { Array<string> } a string array represents the available TimeZone ID list.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Get available TimeZone ID list.
     *
     * @returns { Array<string> } a string array represents the available TimeZone ID list.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    static getAvailableIDs(): Array<string>;

    /**
     * Get available Zone City ID list.
     *
     * @returns { Array<string> } a string array represents the available Zone City ID list.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static getAvailableZoneCityIDs(): Array<string>;

    /**
     * Get City display name in a certain locale.
     *
     * @param { string } cityID - Zone City ID.
     * @param { string } locale - locale used to display city name.
     * @returns { string } a string represents the display name of City in locale.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static getCityDisplayName(cityID: string, locale: string): string;

    /**
     * Get TimeZone Object from city ID.
     *
     * @param { string } cityID - Zone City ID.
     * @returns { TimeZone } a TimeZone Object from city ID.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static getTimezoneFromCity(cityID: string): TimeZone;

    /**
     * Get the possible time zones from the specified longitude and latitude.
     *
     * @param { number } longitude value
     * @param { number } latitude value
     * @returns { Array<TimeZone> } Returns a TimeZone array from the specified longitude and latitude.
     * @throws {BusinessError} 401 - check param failed
     * @throws {BusinessError} 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    static getTimezonesByLocation(longitude: number, latitude: number): Array<TimeZone>;
  }

  /**
   * Provides the API for transliterate text from one format to another.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 9
   */
  export class Transliterator {
    /**
     * Get a string array of all available transliterator ids.
     *
     * @returns { string[] } a string array of all available transliterator ids.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static getAvailableIDs(): string[];

    /**
     * Get a Transliterator that is specified by id name.
     *
     * @param { string } id - specified the type of Transliterator. id is formed by source and dest. Transliterator will transliterate
     *           the input string from source format to the dest format. For example, a Simplified Chinese to Latn
     *           Transliterator will transform the text written in Chinese to Latn characters.
     * @returns { Transliterator } Transliterator that is specified by id name.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    static getInstance(id: string): Transliterator;

    /**
     * Transform the input text.
     *
     * @param { string } text - text to be transliterated.
     * @returns { string } the output text that is transliterated from source format to the dest format.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    transform(text: string): string;
  }

  /**
   * Enumerates the Normalizer modes.
   *
   * @enum { number }
   * @syscap SystemCapability.Global.I18n
   * @since 10
   */
  export enum NormalizerMode {
    /**
     * Normalization form C, characters are decomposed and then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    NFC = 1,
    /**
     * Normalization form D, characters are decomposed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    NFD = 2,
    /**
     * Normalization form KC, characters are decomposed by compatibility, then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    NFKC = 3,
    /**
     * Normalization form KD, characters are decomposed by compatibility
     *
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    NFKD = 4
  }

  /**
   * Provides the API for text encoding normalization.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 10
   */
  export class Normalizer {
    /**
     * Get a Normalizer that is specified by normalize mode.
     *
     * @param { NormalizerMode } mode - specified the mode of Normalizer.
     * @returns { Normalizer } Transliterator that is specified by id name.
     * @throws { BusinessError } 401 - check param failed
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    static getInstance(mode: NormalizerMode): Normalizer;

    /**
     * Get a normalized string of specified mode.
     *
     * @param { string } text - text to normalized.
     * @returns { string } a normalized string from source.
     * @throws { BusinessError } 401 - check param failed
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    normalize(text: string): string;
  }

  /**
   * Enumerates the locale suggestion type modes.
   *
   * @enum { number }
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export enum SuggestionType {
    /**
     * No correlation between language and region.
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    SUGGESTION_TYPE_NONE = 0,
    /**
     * The language related to the specified region
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    SUGGESTION_TYPE_RELATED = 1,
    /**
     * The region is SIM card region.
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    SUGGESTION_TYPE_SIM = 2,
  }

  /**
   * Provides the options which is used to sort the locales.
   *
   * @interface SortOptions
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface SortOptions {
    /**
     * Locale code.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    locale?: string;

    /**
     * Whether to use local names for sorting
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    isUseLocalName?: boolean;

    /**
     * Whether to put the suggested item at the top
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    isSuggestedFirst?: boolean;
  }

  /**
   * Provides the informations of one language or region.
   *
   * @interface LocaleItem
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface LocaleItem {
    /**
     * language or region code.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    code: string;

    /**
     * The suggestion type of the language or region.
     *
     * @type { SuggestionType }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    suggestionType: SuggestionType;

    /**
     * The display name of the language or region in specified language
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    displayName: string;

    /**
     * The display name of the language or region in local language
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    localName?: string;
  }

  /**
   * Provides the informations of one time zone city.
   *
   * @interface TimeZoneCityItem
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface ZoneCityItem {
    /**
     * Time zone code.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    zoneId: string;

    /**
     * City code.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    cityId: string;

    /**
     * The display name of the city.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    cityDisplayName: string;

    /**
     * The time zone offset for the city.
     * @type { number }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    offset: number;

    /**
     * The display name of the time zone for the city.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    zoneDisplayName: string;

    /**
     * The time zone raw offset for the city.
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    rawOffset?: number;
  }

  /**
   * Provide some functions for settings and startup guide to select language or region.
   *
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export class SystemLocaleManager {
    /**
     * A constructor used to create a SystemLocaleManager object.
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    constructor();

    /**
     * Obtains sorted language array to setting or startup guide app.
     *
     * @param { Array<string> } languages - The languages whose name will be sort and displayed.
     * @param { SortOptions } options - Specifies how to sort.
     * @returns { Array<LocaleItem> } Locale Informations sorted by Requirements.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
   getLanguageInfoArray(languages: Array<string>, options?: SortOptions): Array<LocaleItem>;

    /**
     * Obtains sorted region array to setting or startup guide app.
     *
     * @param { Array<string>  } regions - The regions whose name will be sort and displayed.
     * @param { SortOptions } options - Specifies how to sort.
     * @returns { Array<LocaleItem> } Locale Informations sorted by Requirements.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    getRegionInfoArray(regions: Array<string>, options?: SortOptions): Array<LocaleItem>;

    /**
     * Obtains sorted time zone city array to setting or startup guide app.
     *
     * @returns { Array<ZoneCityItem> } Time zone city informations sorted by Requirements.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    getTimeZoneCityInfoArray(): Array<ZoneCityItem>;
  }
}
export default i18n;
