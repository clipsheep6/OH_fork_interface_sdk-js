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
 * @kit DeviceCertificateKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * OpenHarmony Universal CertificateManager
 *
 * @namespace certificateManager
 * @syscap SystemCapability.Security.CertificateManager
 * @since 11
 */
declare namespace certificateManager {
  /**
   * Enum for result code
   *
   * @enum { number }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  export enum CMErrorCode {
    /**
     * Indicates that the application has no permission to call the API.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_ERROR_NO_PERMISSION = 201,

    /**
     * Indicates that the application is not a system application.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @systemapi
     * @since 11
     */
    CM_ERROR_NOT_SYSTEM_APP = 202,

    /**
     * Indicates that the input parameters is invalid.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_ERROR_INVALID_PARAMS = 401,

    /**
     * Indicates that there is an internal error occurred when calling the API.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_ERROR_GENERIC = 17500001,

    /**
     * Indicates that the certificate do not exist.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_ERROR_NO_FOUND = 17500002,

    /**
     * Indicates that the input is not valid certificate or credential.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_ERROR_INCORRECT_FORMAT = 17500003
  }

  /**
   * Provides the CertInfo type.
   *
   * @typedef CertInfo
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  export interface CertInfo {
    /**
     * Indicates the uri of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    uri: string;

    /**
     * Indicates the alias of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    certAlias: string;

    /**
     * Indicates the state of certificate.
     *
     * @type { boolean }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    state: boolean;

    /**
     * Indicates the issuer name of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    issuerName: string;

    /**
     * Indicates the subject name of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    subjectName: string;

    /**
     * Indicates the serial number of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    serial: string;

    /**
     * Indicates the not before time of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    notBefore: string;

    /**
     * Indicates the not after time of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    notAfter: string;

    /**
     * Indicates the fingerprint of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    fingerprintSha256: string;

    /**
     * Indicates the certificate binary data.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    cert: Uint8Array;
  }

  /**
   * Provides the abstract Cert type.
   *
   * @typedef CertAbstract
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  export interface CertAbstract {
    /**
     * Indicates the uri of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    uri: string;

    /**
     * Indicates the alias of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    certAlias: string;

    /**
     * Indicates the state of certificate.
     *
     * @type { boolean }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    state: boolean;

    /**
     * Indicates the subject name of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    subjectName: string;
  }

  /**
   * Provides the Credential type.
   *
   * @typedef Credential
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  export interface Credential {
    /**
     * Indicates the type of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    type: string;

    /**
     * Indicates the alias of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    alias: string;

    /**
     * Indicates the uri of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    keyUri: string;

    /**
     * Indicates the number of certificates included in the credential.
     *
     * @type { number }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    certNum: number;

    /**
     * Indicates the number of key included in the credential.
     *
     * @type { number }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    keyNum: number;

    /**
     * Indicates the credential binary data.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    credentialData: Uint8Array;
  }

  /**
   * Provides the abstract Credential type.
   *
   * @typedef CredentialAbstract
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  export interface CredentialAbstract {
    /**
     * Indicates the type of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    type: string;

    /**
     * Indicates the alias of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    alias: string;

    /**
     * Indicates the uri of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    keyUri: string;
  }

  /**
   * Provides the CMResult type.
   *
   * @typedef CMResult
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  export interface CMResult {
    /**
     * Indicates the certificate list of CMResult.
     *
     * @type { ?Array<CertAbstract> }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    certList?: Array<CertAbstract>;

    /**
     * Indicates the certificate info of CMResult.
     *
     * @type { ?CertInfo }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    certInfo?: CertInfo;

    /**
     * Indicates the credential list of CMResult.
     *
     * @type { ?Array<CredentialAbstract> }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    credentialList?: Array<CredentialAbstract>;

    /**
     * Indicates the credential of CMResult.
     *
     * @type { ?Credential }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    credential?: Credential;

    /**
     * Indicates the app uid list of CMResult.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    appUidList?: Array<string>;

    /**
     * Indicates the certificate uri of CMResult.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    uri?: string;

    /**
     * Indicates the outData of CMResult.
     *
     * @type { ?Uint8Array }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    outData?: Uint8Array;
  }

  /**
   * Enum for Key Purpose
   *
   * @enum { number }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  export enum CmKeyPurpose {
    /**
     * Indicates that key for signature.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_KEY_PURPOSE_SIGN = 4,

    /**
     * Indicates that key for verify.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_KEY_PURPOSE_VERIFY = 8
  }

  /**
   * Enum for Key Digest
   *
   * @enum { number }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  export enum CmKeyDigest {
    /**
     * Indicates that key digest is none.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_DIGEST_NONE = 0,

    /**
     * Indicates that key digest is md5.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_DIGEST_MD5 = 1,

    /**
     * Indicates that key digest is sha1.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_DIGEST_SHA1 = 2,

    /**
     * Indicates that key digest is sha224.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_DIGEST_SHA224 = 3,

    /**
     * Indicates that key digest is sha256.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_DIGEST_SHA256 = 4,

    /**
     * Indicates that key digest is sha384.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_DIGEST_SHA384 = 5,

    /**
     * Indicates that key digest is sha512.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_DIGEST_SHA512 = 6
  }

  /**
   * Enum for Key Padding
   *
   * @enum { number }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  export enum CmKeyPadding {
    /**
     * Indicates that key padding is none.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_PADDING_NONE = 0,

    /**
     * Indicates that key padding is PSS.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_PADDING_PSS = 1,

    /**
     * Indicates that key padding is PKCS1_V1_5.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    CM_PADDING_PKCS1_V1_5 = 2
  }

  /**
   * Provides the CMSignatureSpec type.
   *
   * @typedef CMSignatureSpec
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  export interface CMSignatureSpec {
    /**
     * Indicates the key purpose of CMSignatureSpec.
     *
     * @type { CmKeyPurpose }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    purpose: CmKeyPurpose;

    /**
     * Indicates the key padding of CMSignatureSpec.
     *
     * @type { ?CmKeyPadding }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    padding?: CmKeyPadding;

    /**
     * Indicates the key digest of CMSignatureSpec.
     *
     * @type { ?CmKeyDigest }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    digest?: CmKeyDigest;
  }

  /**
   * Provides the CMHandle type.
   *
   * @typedef CMHandle
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  export interface CMHandle {
    /**
     * Indicates the handle .
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11
     */
    handle: Uint8Array;
  }

  /**
   * Install private application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - Indicates the keystore file with key pair and certificate.
   * @param { string } keystorePwd - Indicates the password of keystore file.
   * @param { string } certAlias - Indicates the certificate name inputted by the user.
   * @param { AsyncCallback<CMResult> } callback - the callback of installPrivateCertificate.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @throws { BusinessError } 17500003 - the keystore is not valid format or keystorePwd is not correct.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function installPrivateCertificate(
    keystore: Uint8Array,
    keystorePwd: string,
    certAlias: string,
    callback: AsyncCallback<CMResult>
  ): void;

  /**
   * Install private application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - Indicates the keystore file with key pair and certificate.
   * @param { string } keystorePwd - Indicates the password of keystore file.
   * @param { string } certAlias - Indicates the certificate name inputted by the user.
   * @returns { Promise<CMResult> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @throws { BusinessError } 17500003 - the keystore is not valid format or keystorePwd is not correct.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string): Promise<CMResult>;

  /**
   * Uninstall the specified normal application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates key's name.
   * @param { AsyncCallback<void> } callback - the callback of uninstallPrivateCertificate.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @throws { BusinessError } 17500002 - the certificate do not exist .
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function uninstallPrivateCertificate(keyUri: string, callback: AsyncCallback<void>): void;

  /**
   * Uninstall the specified normal application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates key's name.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @throws { BusinessError } 17500002 - the certificate do not exist .
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function uninstallPrivateCertificate(keyUri: string): Promise<void>;

  /**
   * Get a list of all applications private certificates.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { AsyncCallback<CMResult> } callback - the callback of getAllAppPrivateCertificates.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 11
   */
  function getAllAppPrivateCertificates(callback: AsyncCallback<CMResult>): void;

  /**
   * Get a list of all applications private certificates.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<CMResult> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 11
   */
  function getAllAppPrivateCertificates(): Promise<CMResult>;

  /**
   * Get the detail of private application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates key's name.
   * @param { AsyncCallback<CMResult> } callback - the callback of getPrivateCertificate.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @throws { BusinessError } 17500002 - the certificate do not exist .
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function getPrivateCertificate(keyUri: string, callback: AsyncCallback<CMResult>): void;

  /**
   * Get the detail of private application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates key's name.
   * @returns { Promise<CMResult> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @throws { BusinessError } 17500002 - the certificate do not exist .
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function getPrivateCertificate(keyUri: string): Promise<CMResult>;

  /**
   * Init operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } authUri - Indicates the authorization relationship between application and application certificate.
   * @param { CMSignatureSpec } spec - Indicates the properties of the signature and verification..
   * @param { AsyncCallback<CMHandle> } callback - the callback of init.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @throws { BusinessError } 17500002 - the certificate do not exist .
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function init(authUri: string, spec: CMSignatureSpec, callback: AsyncCallback<CMHandle>): void;

  /**
   * Init operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } authUri - Indicates the authorization relationship between application and application certificate.
   * @param { CMSignatureSpec } spec - Indicates the properties of the signature and verification.
   * @returns { Promise<CMHandle> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @throws { BusinessError } 17500002 - the certificate do not exist .
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function init(authUri: string, spec: CMSignatureSpec): Promise<CMHandle>;

  /**
   * Update operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { Uint8Array } data - Indicates the input value.
   * @param { AsyncCallback<void> } callback - the callback of update.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function update(handle: Uint8Array, data: Uint8Array, callback: AsyncCallback<void>): void;

  /**
   * Update operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { Uint8Array } data - Indicates the input value.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function update(handle: Uint8Array, data: Uint8Array): Promise<void>;

  /**
   * Finish operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { AsyncCallback<CMResult> } callback - the callback of finish.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function finish(handle: Uint8Array, callback: AsyncCallback<CMResult>): void;

  /**
   * Finish operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { Uint8Array } signature - Indicates the sign data.
   * @param { AsyncCallback<CMResult> } callback - the callback of finish.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function finish(handle: Uint8Array, signature: Uint8Array, callback: AsyncCallback<CMResult>): void;

  /**
   * Finish operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { Uint8Array } [options] signature - Indicates the sign data.
   * @returns { Promise<CMResult> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function finish(handle: Uint8Array, signature?: Uint8Array): Promise<CMResult>;

  /**
   * Abort operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { AsyncCallback<void> } callback - the callback of abort.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function abort(handle: Uint8Array, callback: AsyncCallback<void>): void;

  /**
   * Abort operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  function abort(handle: Uint8Array): Promise<void>;

  /**
   * Get a list of normal application certificates.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { AsyncCallback<CMResult> } callback - the callback of getAllPublicCertificates.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function getAllPublicCertificates(callback: AsyncCallback<CMResult>): void;

  /**
   * Get a list of normal application certificates.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<CMResult> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function getAllPublicCertificates(): Promise<CMResult>;

  /**
   * Get the detail of normal application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates the key's name.
   * @param { AsyncCallback<CMResult> } callback - the callback of getPublicCertificate.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12
   */
  function getPublicCertificate(keyUri: string, callback: AsyncCallback<CMResult>): void;

  /**
   * Get the detail of normal application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates the key's name.
   * @returns { Promise<CMResult> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12
   */
  function getPublicCertificate(keyUri: string): Promise<CMResult>;

  /**
   * Install normal application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { Uint8Array } keystore - Indicates the keystore file with key pair and certificate.
   * @param { string } keystorePwd - Indicates the password of keystore file.
   * @param { string } certAlias - Indicates the certificate name inputted by the user.
   * @param { AsyncCallback<CMResult> } callback - the callback of installPublicCertificate.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function installPublicCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string, callback: AsyncCallback<CMResult>): void;

  /**
   * Install normal application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { Uint8Array } keystore - Indicates the keystore file with key pair and certificate.
   * @param { string } keystorePwd - Indicates the password of keystore file.
   * @param { string } certAlias - Indicates the certificate name inputted by the user.
   * @returns { Promise<CMResult> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function installPublicCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string): Promise<CMResult>;

  /**
   * Get the list of applications authorized by the specified certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates key's name.
   * @param { AsyncCallback<CMResult> } callback - the callback of getAuthorizedAppList.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function getAuthorizedAppList(keyUri: string, callback: AsyncCallback<CMResult>): void;

  /**
   * Get the list of applications authorized by the specified certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates key's name.
   * @returns { Promise<CMResult> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function getAuthorizedAppList(keyUri: string): Promise<CMResult>;

  /**
   * Authorize the specified application certificate for the specified application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates key's name.
   * @param { string } clientAppUid - Indicates the uid of the authorized application.
   * @param { AsyncCallback<CMResult> } callback - the callback of grantPublicCertificate.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function grantPublicCertificate(keyUri: string, clientAppUid: string, callback: AsyncCallback<CMResult>): void;

  /**
   * Authorize the specified application certificate for the specified application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates key's name.
   * @param { string } clientAppUid - Indicates key's name.
   * @returns { Promise<CMResult> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function grantPublicCertificate(keyUri: string, clientAppUid: string): Promise<CMResult>;

  /**
   * Whether the current application is authorized by the specified application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates key's name.
   * @param { AsyncCallback<boolean> } callback - the callback of isAuthorizedApp.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12
   */
  function isAuthorizedApp(keyUri: string, callback: AsyncCallback<boolean>): void;

  /**
   * Whether the current application is authorized by the specified application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates key's name.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12
   */
  function isAuthorizedApp(keyUri: string): Promise<boolean>;

  /**
   * Deauthorize the specified application from the specified application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates key's name.
   * @param { string } clientAppUid - Indicates the uid of the authorized application.
   * @param { AsyncCallback<boolean> } callback - the callback of removeGrantedPublicCertificate.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function removeGrantedPublicCertificate(keyUri: string, clientAppUid: string, callback: AsyncCallback<boolean>): void;

  /**
   * Deauthorize the specified application from the specified application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates key's name.
   * @param { string } clientAppUid - Indicates the uid of the authorized application.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function removeGrantedPublicCertificate(keyUri: string, clientAppUid: string): Promise<boolean>;

  /**
   * Uninstall all application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { AsyncCallback<boolean> } callback - the callback of uninstallAllAppCertificate.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function uninstallAllAppCertificate(callback: AsyncCallback<boolean>): void;

  /**
   * Uninstall all application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function uninstallAllAppCertificate(): Promise<boolean>;

  /**
   * Uninstall the specified normal application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates key's name.
   * @param { AsyncCallback<boolean> } callback - the callback of uninstallPublicCertificate.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function uninstallPublicCertificate(keyUri: string, callback: AsyncCallback<boolean>): void;

  /**
   * Uninstall the specified normal application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates key's name.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 202 - the application is not system app.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12
   */
  function uninstallPublicCertificate(keyUri: string): Promise<boolean>;

  /**
   * Get a list of user root certificates.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { AsyncCallback<CMResult> } callback - the callback of getAllUserTrustedCertificates.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12
   */
  function getAllUserTrustedCertificates(callback: AsyncCallback<CMResult>): void;

  /**
   * Get a list of user root certificates.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @returns { Promise<CMResult> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12
   */
  function getAllUserTrustedCertificates(): Promise<CMResult>;

  /**
   * Get the detail of user root certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } certUri - Indicates the certificate's name.
   * @param { AsyncCallback<CMResult> } callback - the callback of getUserTrustedCertificate.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12
   */
  function getUserTrustedCertificate(certUri: string, callback: AsyncCallback<CMResult>): void;

  /**
   * Get the detail of user root certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } certUri - Indicates the certificate's name.
   * @returns { Promise<CMResult> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application has no permission to call the API.
   * @throws { BusinessError } 401 - the parameter check failed.
   * @throws { BusinessError } 17500001 - there is an generic error occurred when calling the API.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12
   */
  function getUserTrustedCertificate(certUri: string): Promise<CMResult>;
}

export default certificateManager;
