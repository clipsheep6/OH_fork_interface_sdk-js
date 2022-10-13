/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import { NfcATag as _NfcATag,
         NfcBTag as _NfcBTag,
         NfcFTag as _NfcFTag,
         NfcVTag as _NfcVTag } from './tag/nfctech';
import { IsoDepTag as _IsoDepTag,
         NdefTag as _NdefTag,
         MifareClassicTag as _MifareClassicTag,
         MifareUltralightTag as _MifareUltralightTag,
         NdefFormatableTag as _NdefFormatableTag} from './tag/nfctech';
import { NdefMessage as _NdefMessage } from './tag/nfctech';
import { TagSession as _TagSession } from './tag/tagSession';
import { PacMap } from "./ability/dataAbilityHelper";
import rpc from "./@ohos.rpc";
import { AsyncCallback, Callback } from './basic';
import Want from './@ohos.application.Want';

/**
 * Provides methods to operate or manage NFC tag.
 *
 * @import import tag from '@ohos.nfc.tag';
 *
 * @since 7
 * @syscap SystemCapability.Communication.NFC.Core
 */
declare namespace tag {
  /** Indicates an NFC-A tag. */
  const NFC_A = 1;

  /** Indicates an NFC-B tag. */
  const NFC_B = 2;

  /** Indicates an ISO-DEP tag. */
  const ISO_DEP = 3;

  /** Indicates an NFC-F tag. */
  const NFC_F = 4;

  /** Indicates an NFC-V tag. */
  const NFC_V = 5;

  /** Indicates an NDEF tag. */
  const NDEF = 6;

  /** Indicates a MifareClassic tag. */
  const MIFARE_CLASSIC = 8;

  /** Indicates a MifareUltralight tag. */
  const MIFARE_ULTRALIGHT = 9;

  /**
   * Indicates an NdefFormatable tag.
   *
   * @since 9
   */
  const NDEF_FORMATABLE = 10;

  /**
   * TNF types definitions, see NFCForum-TS-NDEF_1.0.
   *
   * @since 9
   * @syscap SystemCapability.Communication.NFC.Core
   */
   enum TnfType {
    /** Empty */
    TNF_EMPTY = 0x0,

    /** NFC Forum well-known type [NFC RTD] */
    TNF_WELL_KNOWN = 0x1,

    /** Media-type as defined in RFC 2046 [RFC 2046] */
    TNF_MEDIA = 0x2,

    /** Absolute URI as defined in RFC 3986 [RFC 3986] */
    TNF_ABSOLUTE_URI = 0x3,

    /** NFC Forum external type [NFC RTD] */
    TNF_EXT_APP = 0x4,

    /** Unknown */
    TNF_UNKNOWN = 0x5,

    /** Unchanged (see section 2.3.3) */
    TNF_UNCHANGED = 0x6,
  }

  /**
   * NfcForum Type definition. The Ndef tag may use one of them.
   *
   * @since 9
   * @syscap SystemCapability.Communication.NFC.Core
   */
  enum NfcForumType {
    /** NFC FORUM TYPE 1 */
    NFC_FORUM_TYPE_1 = 1,

    /** NFC FORUM TYPE 2 */
    NFC_FORUM_TYPE_2 = 2,

    /** NFC FORUM TYPE 3 */
    NFC_FORUM_TYPE_3 = 3,

    /** NFC FORUM TYPE 4 */
    NFC_FORUM_TYPE_4 = 4,

    /** Mifare Classic */
    MIFARE_CLASSIC = 101,
  }

  /**
   * RTD type TEXT, see NFC Record Type Definition (RTD) Specification.
   *
   * @since 9
   */
  const RTD_TEXT: number[];

  /**
   * RTD type URI, see NFC Record Type Definition (RTD) Specification.
   *
   * @since 9
   */
  const RTD_URI: number[];

  /**
   * MifareClassic Type definition
   *
   * @since 9
   * @syscap SystemCapability.Communication.NFC.Core
   */
  enum MifareClassicType {
    /** Mifare Type unknown */
    TYPE_UNKNOWN = 0,

    /** Mifare Classic */
    TYPE_CLASSIC = 1,

    /** Mifare Plus */
    TYPE_PLUS = 2,

    /** Mifare Pro */
    TYPE_PRO = 3,
  }

  /**
   * MifareClassic Tag size.
   *
   * @since 9
   * @syscap SystemCapability.Communication.NFC.Core
   */
  enum MifareClassicSize {
    /** 5 sectors per tag, 4 blocks per sector */
    MC_SIZE_MINI = 320,

    /** 16 sectors per tag, 4 blocks per sector */
    MC_SIZE_1K = 1024,

    /** 32 sectors per tag, 4 blocks per sector */
    MC_SIZE_2K = 2048,

    /** 40 sectors per tag, 4 blocks per sector */
    MC_SIZE_4K = 4096,
  }

  /**
   * MifareUltralight Type definition
   *
   * @since 9
   * @syscap SystemCapability.Communication.NFC.Core
   */
  enum MifareUltralightType {
    /** Mifare Type unknown */
    TYPE_UNKNOWN = 0,

    /** Mifare Ultralight */
    TYPE_ULTRALIGHT = 1,

    /** Mifare UltralightC */
    TYPE_ULTRALIGHT_C = 2
  }

  /**
   * Obtains an {@link NfcATag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-A technology, an {@link NfcATag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  function getNfcATag(tagInfo: TagInfo): NfcATag

  /**
   * Obtains an {@link NfcBTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-B technology, an {@link NfcBTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  function getNfcBTag(tagInfo: TagInfo): NfcBTag

  /**
   * Obtains an {@link NfcFTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-F technology, an {@link NfcFTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  function getNfcFTag(tagInfo: TagInfo): NfcFTag

  /**
   * Obtains an {@link NfcVTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-V technology, an {@link NfcVTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  function getNfcVTag(tagInfo: TagInfo): NfcVTag

  /**
   * Obtains an {@link IsoDepTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the IsoDep technology, an {@link IsoDepTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 9
   */
  function getIsoDepTag(tagInfo: TagInfo): IsoDepTag

  /**
   * Obtains an {@link NdefTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NDEF technology, an {@link NdefTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 9
   */
  function getNdefTag(tagInfo: TagInfo): NdefTag

  /**
   * Obtains an {@link MifareClassicTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the MifareClassic technology,
   * an {@link MifareClassicTag} object will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 9
   */
  function getMifareClassicTag(tagInfo: TagInfo): MifareClassicTag

   /**
   * Obtains an {@link MifareUltralightTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the MifareUltralight technology,
   * an {@link MifareUltralightTag} object will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 9
   */
  function getMifareUltralightTag(tagInfo: TagInfo): MifareUltralightTag

  /**
   * Obtains an {@link NdefFormatableTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NdefFormatable technology,
   * an {@link NdefFormatableTag} object will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 9
   */
  function getNdefFormatableTag(tagInfo: TagInfo): NdefFormatableTag

  /**
   * Parse a {@link TagInfo} object from Want.
   *
   * @param want The want object that contains the values of TagInfo.
   * @return The TagInfo object that's parsed.
   * @syscap SystemCapability.Communication.NFC.Core
   * @permission ohos.permission.NFC_TAG
   * @since 9
   */
  function getTagInfo(want: Want): TagInfo

  /**
   * Provides tag information.
   *
   * <p>This class provides the technology a tag supports, for example, NFC-A. Applications can create
   * different tags based on the supported technology.
   *
   * @since 7
   * @syscap SystemCapability.Communication.NFC.Core
   * @permission ohos.permission.NFC_TAG
   */
  export interface TagInfo {
   /**
    * The uid of this tag, it.
    *
    * @since 9
    */
    uid: number[];

   /**
    * The supported technology list of this tag.
    *
    * @since 9
    */
    technology: number[];

   /**
    * The extra data for each technology of this tag.
    *
    * @since 9
    * @systemapi hide for inner use.
    */
    extrasData: PacMap[];

   /**
    * The the RF discovery id of this tag.
    *
    * @since 9
    * @systemapi hide for inner use.
    */
    tagRfDiscId: number;

   /**
    * The extra data for the technology of this tag.
    *
    * @since 9
    * @systemapi hide for inner use.
    */
    remoteTagService: rpc.RemoteObject;

   /**
    * The supported technology list of this tag.
    *
    * @since 7
    * @deprecated since 9
    */
    supportedProfiles: number[];
  }

  /**
   * NDEF records definition, see NFCForum-TS-NDEF_1.0.
   *
   * @since 9
   * @syscap SystemCapability.Communication.NFC.Core
   */
  export interface NdefRecord {
    /** tnf of NdefRecord */
    tnf: number;

    /** RTD type of NdefRecord */
    rtdType: number[];

    /** id of NdefRecord */
    id: number[];

    /** payload of NdefRecord */
    payload: number[];
  }

  export type NfcATag = _NfcATag
  export type NfcBTag = _NfcBTag
  export type NfcFTag = _NfcFTag
  export type NfcVTag = _NfcVTag
  export type IsoDepTag = _IsoDepTag
  export type NdefTag = _NdefTag
  export type MifareClassicTag = _MifareClassicTag
  export type MifareUltralightTag = _MifareUltralightTag
  export type NdefFormatableTag = _NdefFormatableTag
  export type NdefMessage = _NdefMessage
  export type TagSession = _TagSession
}
export default tag;