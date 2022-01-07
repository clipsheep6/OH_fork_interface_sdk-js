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

import { AsyncCallback, Callback } from './basic';
import { ApplicationInfo } from './bundle/applicationInfo';
import { BundleInfo } from './bundle/bundleInfo';
import { AbilityInfo } from './bundle/abilityInfo';
import { Want } from './ability/want';
import { BundleInstaller } from './bundle/bundleInstaller';
import { ShortcutInfo } from './bundle/shortcutInfo';
import { ModuleUsageRecord } from './bundle/moduleUsageRecord';

/**
 * bundle.
 * @name bundle
 * @since 7
 * @sysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable
 * @permission NA
 */
declare namespace bundle {

/**
 * @name BundleFlag
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import NA
 * @permission NA
 * @devices phone, tablet, tv, wearable
 */
  enum BundleFlag {
    GET_BUNDLE_DEFAULT = 0x00000000,
    GET_BUNDLE_WITH_ABILITIES = 0x00000001,
    GET_ABILITY_INFO_WITH_PERMISSION = 0x00000002,
    GET_ABILITY_INFO_WITH_APPLICATION = 0x00000004,
    GET_APPLICATION_INFO_WITH_PERMISSION = 0x00000008,
    GET_BUNDLE_WITH_REQUESTED_PERMISSION = 0x00000010,
    GET_ALL_APPLICATION_INFO = 0xFFFF0000,
    /**
      * @since 8
      */
    GET_ABILITY_INFO_WITH_METADATA = 0x00000020,
    /**
      * @since 8
      */
    GET_APPLICATION_INFO_WITH_METADATA = 0x00000040,
    /**
      * @since 8
      */
    GET_ABILITY_INFO_SYSTEMAPP_ONLY = 0x00000080,
  }

/**
 * @name ColorMode
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import NA
 * @permission NA
 * @devices phone, tablet, tv, wearable
 */
  export enum ColorMode {
    AUTO_MODE = -1,
    DARK_MODE = 0,
    LIGHT_MODE = 1,
  }

/**
 * @name GrantStatus
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import NA
 * @permission NA
 * @devices phone, tablet, tv, wearable
 */
  export enum GrantStatus {
    PERMISSION_DENIED = -1,
    PERMISSION_GRANTED = 0,
  }

  /**
   * @name AbilityType
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @import NA
   * @permission NA
   * @devices phone, tablet, tv, wearable
   */
  export enum AbilityType {
    /**
      * @default Indicates an unknown ability type
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    UNKNOWN,

    /**
      * @default Indicates that the ability has a UI
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    PAGE,

    /**
      * @default Indicates that the ability does not have a UI
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    SERVICE,

    /**
      * @default Indicates that the ability is used to provide data access services
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    DATA,
  }

  /**
   * @name AbilitySubType
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @import NA
   * @permission NA
   * @devices phone, tablet, tv, wearable
   */
  export enum AbilitySubType {
    UNSPECIFIED = 0,
    CA = 1,
  }

  /**
   * @name DisplayOrientation
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @import NA
   * @permission NA
   * @devices phone, tablet, tv, wearable
   */
  export enum DisplayOrientation {
    /**
      * @default Indicates that the system automatically determines the display orientation
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    UNSPECIFIED,

    /**
      * @default Indicates the landscape orientation
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    LANDSCAPE,

    /**
      * @default Indicates the portrait orientation
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    PORTRAIT,

    /**
      * @default Indicates the page ability orientation is the same as that of the nearest ability in the stack
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    FOLLOW_RECENT,
  }

  /**
   * @name LaunchMode
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @import NA
   * @permission NA
   * @devices phone, tablet, tv, wearable
   */
  export enum LaunchMode {
    /**
      * @default Indicates that the ability has only one instance
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    SINGLETON = 0,

    /**
      * @default Indicates that the ability can have multiple instances
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    STANDARD = 1,
  }

  /**
   * @name BundleOptions
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @import NA
   * @permission NA
   * @devices phone, tablet, tv, wearable
   */
  export interface BundleOptions {
    /**
      * @default Indicates the user id
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    userId?: number;

    /**
      * @default Indicates the network id
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    networkId?: string;
  }

  /**
   * @name InstallErrorCode
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @import NA
   * @permission NA
   * @devices phone, tablet, tv, wearable
   */
  export enum InstallErrorCode{
    SUCCESS = 0,
    STATUS_INSTALL_FAILURE = 1,
    STATUS_INSTALL_FAILURE_ABORTED = 2,
    STATUS_INSTALL_FAILURE_INVALID = 3,
    STATUS_INSTALL_FAILURE_CONFLICT = 4,
    STATUS_INSTALL_FAILURE_STORAGE = 5,
    STATUS_INSTALL_FAILURE_INCOMPATIBLE = 6,
    STATUS_UNINSTALL_FAILURE = 7,
    STATUS_UNINSTALL_FAILURE_BLOCKED = 8,
    STATUS_UNINSTALL_FAILURE_ABORTED = 9,
    STATUS_UNINSTALL_FAILURE_CONFLICT = 10,
    STATUS_INSTALL_FAILURE_DOWNLOAD_TIMEOUT = 0x0B,
    STATUS_INSTALL_FAILURE_DOWNLOAD_FAILED = 0x0C,
    STATUS_RECOVER_FAILURE_INVALID = 0x0D,
    STATUS_ABILITY_NOT_FOUND = 0x40,
    STATUS_BMS_SERVICE_ERROR = 0x41
  }

  /**
   * Obtains bundleInfo based on bundleName, bundleFlags and options.
   *
   * @devices phone, tablet, tv, wearable
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param bundleName Indicates the application bundle name to be queried.
   * @param bundleFlags Indicates the application bundle flags to be queried.
   * @param options Indicates the bundle options object.
   * @return Returns the BundleInfo object.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED,ohos.permission.GET_BUNDLE_INFO
   */
   function getBundleInfo(bundleName: string, bundleFlags: number, options: BundleOptions, callback: AsyncCallback<BundleInfo>): void;
   function getBundleInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void;
   function getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions): Promise<BundleInfo>;

  /**
   * Obtains the interface used to install bundles.
   *
   * @devices phone, tablet, tv, wearable
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @return Returns the IBundleInstaller interface.
   * @permission ohos.permission.INSTALL_BUNDLE
   */
  function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void;
  function getBundleInstaller(): Promise<BundleInstaller>;

  /**
   * Obtains based on a given bundle name.
   *
   * @devices phone, tablet, tv, wearable
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param bundleName Indicates the application bundle name to be queried.
   * @param flags Indicates the flag used to specify information contained in the ApplicationInfo object
   *              that will be returned.
   * @param userId Indicates the user ID.
   * @return Returns the ApplicationInfo object.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED, ohos.permission.GET_BUNDLE_INFO
   */
  function getApplicationInfo(bundleName: string, bundleFlags: number, userId: number, callback: AsyncCallback<ApplicationInfo>) : void;
  function getApplicationInfo(bundleName: string, bundleFlags: number, userId: number) : Promise<ApplicationInfo>;

  /**
   * Checks whether a specified bundle has been granted a specific permission.
   *
   * @devices phone, tablet, tv, wearable
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param bundleName Indicates the name of the bundle to check.
   * @param permission Indicates the permission to check.
   * @return Returns 0 if the bundle has the permission; returns -1 otherwise.
   */
  function checkPermission(bundleName: string, permission: string, callback: AsyncCallback<GrantStatus>): void;
  function checkPermission(bundleName: string, permission: string): Promise<GrantStatus>;

  /**
   * Query the AbilityInfo by the given Want.
   *
   * @devices phone, tablet, tv, wearable
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param intent Indicates the Intent containing the application bundle name to
   *               be queried.
   * @param flags Indicates the flag used to specify information contained in the AbilityInfo objects that
   *              will be returned.
   * @param userId Indicates the user ID.
   * @return Returns a list of AbilityInfo objects.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED, ohos.permission.GET_BUNDLE_INFO
   */
  function queryAbilityByWant(want: Want, bundleFlags: number, userId: number, callback: AsyncCallback<Array<AbilityInfo>>): void;
  function queryAbilityByWant(want: Want, bundleFlags: number, callback: AsyncCallback<Array<AbilityInfo>>): void;
  function queryAbilityByWant(want: Want, bundleFlags: number, userId?:number): Promise<Array<AbilityInfo>>;

  /**
   * Obtains BundleInfo of all bundles available in the system.
   *
   * @devices phone, tablet, tv, wearable
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param bundlelFlag Indicates the flag used to specify information contained in the BundleInfo that will be
   *              returned.
   * @param userId Indicates the user id.
   * @return Returns a list of BundleInfo objects.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   */
  function getAllBundleInfo(bundlelFlag: BundleFlag, userId: number, callback: AsyncCallback<Array<BundleInfo>>) : void;
  function getAllBundleInfo(bundlelFlag: BundleFlag, callback: AsyncCallback<Array<BundleInfo>>) : void;
  function getAllBundleInfo(bundlelFlag: BundleFlag, userId?: number) : Promise<Array<BundleInfo>>;

  /**
   * Obtains information about all installed applications of a specified user.
   *
   * @devices phone, tablet, tv, wearable
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param flags Indicates the flag used to specify information contained in the ApplicationInfo objects
   *              that will be returned.
   * @param userId Indicates the user ID.
   * @return Returns a list of ApplicationInfo objects.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   */
  function getAllApplicationInfo(bundleFlags: number, userId: number, callback: AsyncCallback<Array<ApplicationInfo>>) : void;
  function getAllApplicationInfo(bundleFlags: number, userId: number) : Promise<Array<ApplicationInfo>>;

  /**
   * Obtains information about an application bundle contained in an ohos Ability Package (HAP).
   *
   * @devices phone, tablet, tv, wearable
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param hapFilePath Indicates the path storing the HAP. The path should be the relative path to the data
   *                    directory of the current application.
   * @param flags Indicates the flag used to specify information contained in the BundleInfo object to be
   *              returned.
   * @return Returns the BundleInfo object.
   */
  function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>) : void
  function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number) : Promise<BundleInfo>;

  /**

  /**
   * Obtains the Intent for starting the main ability of an application based on the
   * given bundle name. The main ability of an application is the ability that has the
   * #ACTION_HOME and #ENTITY_HOME intent
   * filters set in the application's <b>config.json</b> file.
   *
   * @devices phone, tablet, tv, wearable
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param bundleName Indicates the bundle name of the application.
   * @return Returns the Intent for starting the application's main ability if any; returns null if
   *         the given bundle does not exist or does not contain any main ability.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   */
  function getLaunchWantForBundle(bundleName: string, callback: AsyncCallback<Want>): void;
  function getLaunchWantForBundle(bundleName: string): Promise<Want>;
  
  /**
   * Obtains information about the shortcuts of the application.
   *
   * @devices phone, tablet, tv, wearable
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param bundleName Indicates the bundle name of the application.
   * @return Returns a list of ShortcutInfo objects containing shortcut information about the application.
   * @permission ohos.permission.MANAGE_SHORTCUTS
   */
  function getAllShortcutInfo(bundleName: string, callback: AsyncCallback<Array<ShortcutInfo>>): void;
  function getAllShortcutInfo(bundleName: string): Promise<Array<ShortcutInfo>>;

  /**
   * get module usage record list in descending order of lastLaunchTime.
   *
   * @devices phone, tablet, tv, wearable
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param maxNum the return size of the records, must be in range of 1 to 1000.
   * @return Returns ability usage record list.
   * @systemapi hide this for inner system use
   */
  function getModuleUsageRecords(maxNum: number, callback: AsyncCallback<Array<ModuleUsageRecord>>): void;
  function getModuleUsageRecords(maxNum: number): Promise<Array<ModuleUsageRecord>>;

  /**
   * Clears cache data of a specified application.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 8
   * @SysCap SystemCapability.Appexecfwk
   * @param bundleName Indicates the bundle name of the application whose cache data is to be cleared.
   * @param callback Indicates the callback to be invoked for returning the operation result.
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @systemapi Hide this for inner system use
   */
  function cleanBundleCacheFiles(bundleName: string, callback: AsyncCallback<void>): void;
  function cleanBundleCacheFiles(bundleName: string): Promise<void>;

  /**
   * Sets whether to enable a specified application.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 8
   * @SysCap SystemCapability.Appexecfwk
   * @param bundleName Indicates the bundle name of the application.
   * @param isEnabled Specifies whether to enable the application. The value true means to enable it, and the
   *                  value false means to disable it.
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @systemapi Hide this for inner system use
   */
  function setApplicationEnabled(bundleName: string, isEnable: boolean, callback: AsyncCallback<void>): void;
  function setApplicationEnabled(bundleName: string, isEnable: boolean): Promise<void>;

  /**
   * Sets whether to enable a specified ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 8
   * @SysCap SystemCapability.Appexecfwk
   * @param abilityInfo Indicates information about the ability to set.
   * @param isEnabled Specifies whether to enable the ability. The value true means to enable it, and the
   *                  value false means to disable it..
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @systemapi Hide this for inner system use
   */
  function setAbilityEnabled(info: AbilityInfo, isEnable: boolean, callback: AsyncCallback<void>): void;
  function setAbilityEnabled(info: AbilityInfo, isEnable: boolean): Promise<void>;
}

export default bundle;