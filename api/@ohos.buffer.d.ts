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
 * The Buffer class is a global type for dealing with binary data directly. It can be constructed in a variety of ways.
 * @since 
 * @syscap SystemCapability.Utils.Lang
 * @import import buffer from '@ohos.buffer';
 * @permission N/A
 */
declare namespace buffer {

    type BufferEncoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex';

    interface TypedArray extends Int8Array {}
    /**
     * Allocates a new Buffer for a fixed size bytes. If fill is undefined, the Buffer will be zero-filled.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param size The desired length of the new Buffer
     * @param [fill=0] A value to pre-fill the new Buffer with
     * @param [encoding='utf8']  If `fill` is a string, this is its encoding
     * @return Return a new allocated Buffer
     * @throws TypeError: The "size" argument must be of type number and cannot be negative. Received [message]
     */
    function alloc(size: number, fill?: string | Buffer | number, encoding?: BufferEncoding): Buffer;

    /**
     * Allocates a new Buffer for a fixed size bytes. The Buffer will not be initially filled.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param size The desired length of the new Buffer
     * @return Return a new allocated Buffer
     * @throws TypeError: The "size" argument must be of type number and cannot be negative. Received [message]
     */
    function allocUninitializedFromPool(size: number): Buffer;
 
    /**
     * Allocates a new un-pooled Buffer for a fixed size bytes. The Buffer will not be initially filled.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param size The desired length of the new Buffer
     * @return Return a new allocated Buffer
     * @throws TypeError: The "size" argument must be of type number and cannot be negative. Received [message]
     */
    function allocUninitialized(size: number): Buffer;
 
    /**
     * Returns the byte length of a string when encoded using `encoding`.
     * This is not the same as [`String.prototype.length`], which does not account
     * for the encoding that is used to convert the string into bytes.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param string A value to calculate the length of
     * @param [encoding='utf8'] If `string` is a string, this is its encoding
     * @return The number of bytes contained within `string`
     * @throws TypeError: The "string" argument must be of type string or an instance of Buffer or ArrayBuffer. Received [message]
     */
    function byteLength(string: string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer, encoding?: BufferEncoding): number;
 
    /**
     * Returns a new `Buffer` which is the result of concatenating all the `Buffer`instances in the `list` together.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param list List of `Buffer` or Uint8Array instances to concatenate
     * @param totalLength Total length of the `Buffer` instances in `list` when concatenated
     * @return Return a new allocated Buffer
     * @throws TypeError: The "list" argument must be an instance of Array. Received [message]
     * @throws TypeError: The "list" argument must be an instance of Array. Received type number ([number])
     * @throws RangeError: The value of "length" is out of range. It must be >= 0 && <= max unsigned int. Received [number] 
     */
    function concat(list: Buffer[] | Uint8Array[], totalLength?: number): Buffer;

    /**
     * Allocates a new Buffer using an array of bytes in the range 0 – 255. Array entries outside that range will be truncated to fit into it.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param array an array of bytes in the range 0 – 255
     * @return Return a new allocated Buffer
     * @throws TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received [message] 
     */
    function from(array: number[]): Buffer;

    /**
     * This creates a view of the ArrayBuffer without copying the underlying memory. 
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param arrayBuffer An ArrayBuffer, SharedArrayBuffer, for example the .buffer property of a TypedArray.
     * @param [byteOffset = 0] Index of first byte to expose
     * @param [length = arrayBuffer.byteLength - byteOffset] Number of bytes to expose
     * @return Return a view of the ArrayBuffer
     * @throws TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received [message]
     * @throws BufferRangeError: Start offset [number] is outside the bounds of the buffer
     * @throws BufferRangeError: "length" is outside of buffer bounds
     */
    function from(arrayBuffer: ArrayBuffer | SharedArrayBuffer, byteOffset?: number, length?: number): Buffer;

    /**
     * Copies the passed buffer data onto a new Buffer instance.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param buffer An existing Buffer or Uint8Array from which to copy data
     * @return Return a new allocated Buffer
     * @throws TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received [message] 
     */
    function from(buffer: Buffer | Uint8Array): Buffer;

    /**
     * For the object whose value returned by valueof() function is strictly equal to object
     * or supports symbol To primitive object, a new buffer instance is created.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param object An object supporting Symbol.toPrimitive or valueOf()
     * @param offsetOrEncoding A byte-offset or encoding
     * @param length A length
     * @return Return a new allocated Buffer
     * @throws TypeError: Unknown encoding: [encoding]
     */
    function from(object: Object, offsetOrEncoding: number | string, length: number): Buffer;
    
    /**
     * Creates a new Buffer containing string. The encoding parameter identifies the character encoding
     * to be used when converting string into bytes.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param string  A string to encode
     * @param [encoding='utf8'] The encoding of string
     * @return Return a new Buffer containing string
     * @throws TypeError: Unknown encoding: [encoding]
     */
    function from(string: String, encoding?: BufferEncoding): Buffer;

    /**
     * Returns true if obj is a Buffer, false otherwise
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param obj Objects to be judged
     * @return true or false
     */
    function isBuffer(obj: Object): boolean;

    /**
     * Returns true if encoding is the name of a supported character encoding, or false otherwise.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param encoding A character encoding name to check
     * @return true or false
     */
    function isEncoding(encoding: string):boolean;

    /**
     * Compares buf1 to buf2
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     * @param buf1 A Buffer or Uint8Array instance.
     * @param buf2 A Buffer or Uint8Array instance.
     * @return 0 is returned if target is the same as buf
     *         1 is returned if target should come before buf when sorted.
     *        -1 is returned if target should come after buf when sorted.
     * @throws TypeError: The "buf1" argument must be an instance of Buffer or Uint8Array. Received [message]
     * @throws TypeError: The "buf2" argument must be an instance of Buffer or Uint8Array. Received [message]
     */
    function compare(buf1: Buffer | Uint8Array, buf2: Buffer | Uint8Array): -1 | 0 | 1;

    /**
     * Re-encodes the given Buffer or Uint8Array instance from one character encoding to another.
     * @since 9
     * @syscap SystemCapability.Utils.Lang 
     * @param source A Buffer or Uint8Array instance.
     * @param fromEnc The current encoding
     * @param toEnc To target encoding
     * @return Returns a new Buffer instance
     * @throws TypeError: The "source" argument must be an instance of Buffer or Uint8Array. Received [message]
     * @throws Error: Unable to transcode Buffer [U_ILLEGAL_ARGUMENT_ERROR]
     */
    function transcode(source: Buffer | Uint8Array, fromEnc: string, toEnc: string): Buffer;



    class Buffer {

        /**
         * Returns the number of bytes in buf
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
	 * @throws TypeError: Cannot set property length of [object Object] which has only a getter
         */
        length: number;

        /**
         * The underlying ArrayBuffer object based on which this Buffer object is created.
         * @since 9
         * @syscap SystemCapability.Utils.Lang
	 * @throws TypeError: Cannot set property buffer of [object Object] which has only a getter
         */
        buffer: ArrayBuffer;

        /**
         * The byteOffset of the Buffers underlying ArrayBuffer object
         * @since 9
         * @syscap SystemCapability.Utils.Lang
	 * @throws TypeError: Cannot set property byteOffset of [object Object] which has only a getter
         */
        byteOffset: number;

        /**
         * Fills buf with the specified value. If the offset and end are not given, the entire buf will be filled.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value The value with which to fill buf
         * @param [offset = 0] Number of bytes to skip before starting to fill buf
         * @param [end = buf.length] Where to stop filling buf (not inclusive)
         * @param [encoding='utf8'] The encoding for value if value is a string
         * @return A reference to buf
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 && <= max unsigned int. Received [number]
         * @throws RangeError: The value of "end" is out of range. It must be >= 0 && <= [number]. Received [number]
         * @throws TypeError: Unknown encoding: [encoding]
         */
        fill(value: string | Buffer | Uint8Array | number, offset?: number, end?: number, encoding?: BufferEncoding): Buffer;

        /**
         * Compares buf with target and returns a number indicating whether buf comes before, after,
         * or is the same as target in sort order. Comparison is based on the actual sequence of bytes in each Buffer.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param target A Buffer or Uint8Array with which to compare buf
         * @param [targetStart = 0] The offset within target at which to begin comparison
         * @param [targetEnd = target.length] The offset within target at which to end comparison (not inclusive)
         * @param [sourceStart = 0] The offset within buf at which to begin comparison
         * @param [sourceEnd = buf.length] The offset within buf at which to end comparison (not inclusive)
         * @return 0 is returned if target is the same as buf
         *         1 is returned if target should come before buf when sorted.
         *        -1 is returned if target should come after buf when sorted.
         * @throws TypeError: The "target" argument must be an instance of Buffer or Uint8Array. Received [message]
         * @throws TypeError: The "[param]" argument must be of type number. Received [message]
         * @throws RangeError: The value of "targetStart" is out of range. It must be >= 0 && <= max unsigned int. Received [number]
         * @throws RangeError: The value of "targetEnd" is out of range. It must be >= 0 && <= [number]. Received [number]
         * @throws RangeError: The value of "sourceStart" is out of range. It must be >= 0 && <= max unsigned int. Received [number]
         * @throws RangeError: The value of "sourceEnd" is out of range. It must be >= 0 && <= [number]. Received [number]
         */
        compare(target: Buffer | Uint8Array, targetStart?: number, targetEnd?: number, sourceStart?: number, sourceEnd?: number): -1 | 0 | 1;

        /**
         * Copies data from a region of buf to a region in target, even if the target memory region overlaps with buf.
         * If sourceEnd is greater than the length of the target, the length of the target shall prevail, and the extra part will not be overwritten.
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param target A Buffer or Uint8Array to copy into
         * @param [targetStart = 0] The offset within target at which to begin writing
         * @param [sourceStart = 0] The offset within buf from which to begin copying
         * @param [sourceEnd = buf.length] The offset within buf at which to stop copying (not inclusive)
         * @return The number of bytes copied
         * @throws TypeError: The "target" argument must be an instance of Buffer or Uint8Array. Received [message]
         * @throws RangeError: The value of "targetStart" is out of range. It must be >= 0. Received [number]
         * @throws RangeError: The value of "sourceStart" is out of range. It must be >= 0. Received [number]
         * @throws RangeError: The value of "sourceEnd" is out of range. It must be >= 0. Received [number]
         */
        copy(target: Buffer | Uint8Array, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;

        /**
         * Returns true if both buf and otherBuffer have exactly the same bytes, false otherwise
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param otherBuffer A Buffer or Uint8Array with which to compare buf
         * @return true or false
         * @throws TypeError: The "otherBuffer" argument must be an instance of Buffer or Uint8Array. Received [message]
         */
        equals(otherBuffer: Uint8Array | Buffer): boolean;

        /**
         * Returns true if value was found in buf, false otherwise
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param value What to search for
         * @param [byteOffset = 0] Where to begin searching in buf. If negative, then offset is calculated from the end of buf
         * @param [encoding='utf8'] If value is a string, this is its encoding
         * @return true or false
         * @throws TypeError: The "value" argument must be one of type number or string or an instance of Buffer or Uint8Array. Received [message]
         * @throws TypeError: Unknown encoding: [encoding]
         */
        includes(value: string | number | Buffer | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): boolean;

        /**
         * The index of the first occurrence of value in buf
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param value What to search for
         * @param [byteOffset = 0] Where to begin searching in buf
         * @param [encoding='utf8'] If value is a string, this is the encoding used to determine the binary representation of the string that will be searched for in buf
         * @return The index of the first occurrence of value in buf, or -1 if buf does not contain value
         * @throws TypeError: The "value" argument must be one of type number or string or an instance of Buffer or Uint8Array. Received [message]
         * @throws TypeError: Unknown encoding: [encoding]
         */
        indexOf(value: string | number | Buffer | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;

        /**
         * Creates and returns an iterator of buf keys (indices).
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         */
        keys(): IterableIterator<number>;
        
        /**
         * Creates and returns an iterator for buf values (bytes).
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         */
        values(): IterableIterator<number>;

        /**
         * Creates and returns an iterator of [index, byte] pairs from the contents of buf.
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         */
        entries(): IterableIterator<[number, number]>;

        /**
         * The index of the last occurrence of value in buf
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param value What to search for
         * @param [byteOffset = 0] Where to begin searching in buf
         * @param [encoding='utf8'] If value is a string, this is the encoding used to determine the binary representation of the string that will be searched for in buf
         * @return The index of the last occurrence of value in buf, or -1 if buf does not contain value
         * @throws TypeError: The "value" argument must be one of type number or string or an instance of Buffer or Uint8Array. Received [message]
         * @throws TypeError: Unknown encoding: [encoding]
         */
        lastIndexOf(value: string | number | Buffer | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;

        /**
         * Reads a signed, big-endian 64-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
         * @return Return a signed, big-endian 64-bit integer 
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         * @throws BufferBufferRangeError: Attempt to access memory outside buffer bounds
         */
        readBigInt64BE(offset?: number): number;

        /**
         * Reads a signed, little-endian 64-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
         * @return Return a signed, little-endian 64-bit integer
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         * @throws BufferBufferRangeError: Attempt to access memory outside buffer bounds 
         */
        readBigInt64LE(offset?: number): number;

        /**
         * Reads a unsigned, big-endian 64-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
         * @return Return a unsigned, big-endian 64-bit integer 
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         * @throws BufferBufferRangeError: Attempt to access memory outside buffer bounds
         */
        readBigUInt64BE(offset?: number): number;

        /**
         * Reads a unsigned, little-endian 64-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
         * @return Return a unsigned, little-endian 64-bit integer 
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readBigUInt64LE(offset?: number): number;

        /**
         * Reads a 64-bit, big-endian double from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
         * @return Return a 64-bit, big-endian double 
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readDoubleBE(offset?: number): number;

        /**
         * Reads a 64-bit, little-endian double from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
         * @return Return a 64-bit, little-endian double 
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readDoubleLE(offset?: number): number;

        /**
         * Reads a 32-bit, big-endian float from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 4
         * @return Return  a 32-bit, big-endian float 
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readFloatBE(offset?: number): number;

        /**
         * Reads a 32-bit, little-endian float from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 4
         * @return Return  a 32-bit, little-endian float
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readFloatLE(offset?: number): number;

        /**
         * Reads a signed 8-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 1
         * @return Return  a signed 8-bit integer
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readInt8(offset?: number): number;

        /**
         * Reads a signed, big-endian 16-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 2
         * @return Return a signed, big-endian 16-bit integer
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readInt16BE(offset?: number): number;

        /**
         * Reads a signed, little-endian 16-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 2
         * @return Return a signed, little-endian 16-bit integer
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readInt16LE(offset?: number): number;

        /**
         * Reads a signed, big-endian 32-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 4
         * @return Return a signed, big-endian 32-bit integer
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readInt32BE(offset?: number): number;

        /**
         * Reads a signed, little-endian 32-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 4
         * @return Return a signed, little-endian 32-bit integer
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readInt32LE(offset?: number): number;

        /**
         * Reads byteLength number of bytes from buf at the specified offset and interprets the result as a big-endian,
         * two's complement signed value supporting up to 48 bits of accuracy
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param offset Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - byteLength
         * @param byteLength Number of bytes to read. Must satisfy 0 < byteLength <= 6
         * @return 
         * @throws TypeError: The "byteLength" argument must be of type number. Received [message]
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - byteLength. Received [offset]
         * @throws RangeError: The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received [byteLength]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readIntBE(offset: number, byteLength: number): number;

        /**
         * Reads byteLength number of bytes from buf at the specified offset and interprets the result as a little-endian,
         * two's complement signed value supporting up to 48 bits of accuracy.
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param offset Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - byteLength
         * @param byteLength Number of bytes to read. Must satisfy 0 < byteLength <= 6
         * @return 
         * @throws TypeError: The "byteLength" argument must be of type number. Received [message]
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - byteLength. Received [offset]
         * @throws RangeError: The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received [byteLength]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readIntLE(offset: number, byteLength: number): number;

        /**
         * Reads an unsigned 8-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy 0 <= offset <= buf.length - 1
         * @return Reads an unsigned 8-bit integer
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readUInt8(offset?: number): number;

        /**
         * Reads an unsigned, big-endian 16-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy 0 <= offset <= buf.length - 2
         * @return Reads an unsigned, big-endian 16-bit integer
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readUInt16BE(offset?: number): number;

        /**
         * Reads an unsigned, little-endian 16-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy 0 <= offset <= buf.length - 2
         * @return Reads an unsigned, little-endian 16-bit integer
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readUInt16LE(offset?: number): number;

        /**
         * Reads an unsigned, big-endian 32-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy 0 <= offset <= buf.length - 4
         * @return Reads an unsigned, big-endian 32-bit integer
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readUInt32BE(offset?: number): number;

        /**
         * Reads an unsigned, little-endian 32-bit integer from buf at the specified offset
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [offset = 0] Number of bytes to skip before starting to read. Must satisfy 0 <= offset <= buf.length - 4
         * @return Reads an unsigned, little-endian 32-bit integer
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readUInt32LE(offset?: number): number;

        /**
         * Reads byteLength number of bytes from buf at the specified offset and interprets the result as
         * an unsigned big-endian integer supporting up to 48 bits of accuracy.
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param offset Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - byteLength
         * @param byteLength Number of bytes to read. Must satisfy 0 < byteLength <= 6
         * @return 
         * @throws TypeError: The "byteLength" argument must be of type number. Received [message]
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - byteLength. Received [offset]
         * @throws RangeError: The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received [byteLength]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readUIntBE(offset: number, byteLength: number): number;

        /**
         * Reads byteLength number of bytes from buf at the specified offset and interprets the result as an unsigned,
         * little-endian integer supporting up to 48 bits of accuracy.
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param offset Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - byteLength
         * @param byteLength Number of bytes to read. Must satisfy 0 < byteLength <= 6
         * @return 
         * @throws TypeError: The "byteLength" argument must be of type number. Received [message]
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - byteLength. Received [offset]
         * @throws RangeError: The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received [byteLength]
         * @throws BufferRangeError: Attempt to access memory outside buffer bounds
         */
        readUIntLE(offset: number, byteLength: number): number;

        /**
         * Returns a new Buffer that references the same memory as the original, but offset and cropped by the start and end indices.
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param [start = 0] Where the new Buffer will start
         * @param [end = buf.length] Where the new Buffer will end (not inclusive)
         * @return Returns a new Buffer that references the same memory as the original
         */
        subarray(start: number, end: number): Buffer;

        /**
         * Interprets buf as an array of unsigned 16-bit integers and swaps the byte order in-place.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @return A reference to buf
         * @throws BufferSizeError: Buffer size must be a multiple of 16-bits
         */
        swap16(): Buffer;

        /**
         * Interprets buf as an array of unsigned 32-bit integers and swaps the byte order in-place.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @return A reference to buf
         * @throws BufferSizeError: Buffer size must be a multiple of 32-bits
         */
        swap32(): Buffer;

        /**
         * Interprets buf as an array of unsigned 64-bit integers and swaps the byte order in-place.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @return A reference to buf
         * @throws BufferSizeError: Buffer size must be a multiple of 64-bits
         */
        swap64(): Buffer;

        /**
         * Returns a JSON representation of buf
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @return Returns a JSON
         */
        toJSON(): Object;

        /**
         * Decodes buf to a string according to the specified character encoding in encoding
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param [encoding='utf8'] The character encoding to use
         * @param [start = 0] The byte offset to start decoding at
         * @param [end = buf.length] The byte offset to stop decoding at (not inclusive)
         * @throws TypeError: Unknown encoding: [encoding]
         */
        toString(encoding?: string, start?: number, end?: number): string;

        /**
         * Writes string to buf at offset according to the character encoding in encoding
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param str Writes string to buf at offset according to the character encoding in encoding
         * @param [offset = 0] Number of bytes to skip before starting to write string
         * @param [length = buf.length - offset] Maximum number of bytes to write (written bytes will not exceed buf.length - offset)
         * @param [encoding='utf8'] The character encoding of string.
         * @return Number of bytes written.
         * @throws TypeError: The "str" argument must be of type string. Received [message]
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "length" argument must be of type number. Received [message]
         * @throws TypeError: Unknown encoding: [encoding]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 && <= buf.length. Received [offset]
         * @throws RangeError: The value of "length" is out of range. It must be >= 0 && <= buf.length. Received [offset]
         */
        write(str: string, offset?: number, length?: number, encoding?: string): number;

        /**
         * Writes value to buf at the specified offset as big-endian.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2n ** 64n. Received [value]
         */
        writeBigInt64BE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as little-endian.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2n ** 64n. Received [value]
         */
        writeBigInt64LE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as big-endian.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2n ** 64n. Received [value]
         */
        writeBigUInt64BE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as little-endian.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
         * @return offset plus the number of bytes written 
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2n ** 64n. Received [value]
         */
        writeBigUInt64LE(value: number, offset?: number): number;

         /**
         * Writes value to buf at the specified offset as big-endian.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         */
        writeDoubleBE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as little-endian.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received [offset]
         */
        writeDoubleLE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as big-endian.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 4
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         */
        writeFloatBE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as little-endian.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 4
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         */
        writeFloatLE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset. value must be a valid signed 8-bit integer.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0] Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 1
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**8 - 1. Received [value]
         */
        writeInt8(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as big-endian. The value must be a valid signed 16-bit integer
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0] Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 2
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**16 - 1. Received [value]
         */
        writeInt16BE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as little-endian. The value must be a valid signed 16-bit integer
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0] Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 2
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**16 - 1. Received [value]
         */
        writeInt16LE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as big-endian. The value must be a valid signed 32-bit integer.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0] Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 4
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**32 - 1. Received [value]
         */
        writeInt32BE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as little-endian. The value must be a valid signed 32-bit integer.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0] Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 4
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**32 - 1. Received [value]
         */
        writeInt32LE(value: number, offset?: number): number;

        /**
         * Writes byteLength bytes of value to buf at the specified offset as big-endian
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param offset Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - byteLength
         * @param byteLength Number of bytes to write. Must satisfy 0 < byteLength <= 6
         * @return offset plus the number of bytes written
         * @throws TypeError: The "byteLength" argument must be of type number. Received [message]
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received [byteLength] 
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - byteLength. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**48 - 1. Received [value]
         */
        writeIntBE(value: number, offset: number, byteLength: number): number;

        /**
         * Writes byteLength bytes of value to buf at the specified offset as little-endian
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param offset  Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - byteLength
         * @param byteLength Number of bytes to write. Must satisfy 0 < byteLength <= 6
         * @return offset plus the number of bytes written
         * @throws TypeError: The "byteLength" argument must be of type number. Received [message]
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received [byteLength] 
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - byteLength. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**48 - 1. Received [value]
         */
        writeIntLE(value : number, offset: number, byteLength: number): number;

        /**
         * Writes value to buf at the specified offset. value must be a valid unsigned 8-bit integer
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0] Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - 1
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**8 - 1. Received [value]
         */
        writeUInt8(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as big-endian. The value must be a valid unsigned 16-bit integer.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0] Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - 2
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**16 - 1. Received [value]
         */
        writeUInt16BE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as little-endian. The value must be a valid unsigned 16-bit integer.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0] Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - 2
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**16 - 1. Received [value]
         */
        writeUInt16LE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as big-endian. The value must be a valid unsigned 32-bit integer.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0] Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - 4
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**32 - 1. Received [value]
         */
        writeUInt32BE(value: number, offset?: number): number;

        /**
         * Writes value to buf at the specified offset as little-endian. The value must be a valid unsigned 32-bit integer.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param [offset = 0] Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - 4
         * @return offset plus the number of bytes written
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**32 - 1. Received [value]
         */
        writeUInt32LE(value: number, offset?: number): number;

        /**
         * Writes byteLength bytes of value to buf at the specified offset as big-endian
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param offset Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - byteLength
         * @param byteLength Number of bytes to write. Must satisfy 0 < byteLength <= 6
         * @return offset plus the number of bytes written
         * @throws TypeError: The "byteLength" argument must be of type number. Received [message]
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received [byteLength] 
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - byteLength. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**48 - 1. Received [value]
         */
        writeUIntBE(value: number, offset: number, byteLength: number): number;

        /**
         * Writes byteLength bytes of value to buf at the specified offset as little-endian
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param value Number to be written to buf
         * @param offset Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - byteLength
         * @param byteLength Number of bytes to write. Must satisfy 0 < byteLength <= 6
         * @return offset plus the number of bytes written
         * @throws TypeError: The "byteLength" argument must be of type number. Received [message]
         * @throws TypeError: The "offset" argument must be of type number. Received [message]
         * @throws TypeError: The "value" argument must be of type number. Received [message]
         * @throws RangeError: The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received [byteLength] 
         * @throws RangeError: The value of "offset" is out of range. It must be >= 0 and <= buf.length - byteLength. Received [offset]
         * @throws RangeError: The value of "value" is out of range. It must be >= 0 and <= 2**48 - 1. Received [value]
         */
        writeUIntLE(value: number, offset: number, byteLength: number): number;

    }

    class Blob {

        /**
         * Creates a new Blob object containing a concatenation of the given sources.
         * @since 9
         * @syscap SystemCapability.Utils.Lang
         * @param sources An array of string, <ArrayBuffer>, <TypedArray>, <DataView>, or <Blob> objects, or any mix of such objects, that will be stored within the Blob
         * @param options {endings: string, type: string} 
         *                 endings:  One of either 'transparent' or 'native'. 
         *                 type: The Blob content-type
         * @throws TypeError: The "sources" argument must be an instance of Iterable. Received [message]
         * @throws TypeError: The "options" argument must be of type object. Received [message]
         */
        constructor(sources: string[] | ArrayBuffer[] | TypedArray[] | DataView[] | Blob[] , options: Object);

        /**
         * The total size of the Blob in bytes
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         */
        size: number;

        /**
         * The content-type of the Blob
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         */
        type: string;

         /**
         * Returns a promise that fulfills with an <ArrayBuffer> containing a copy of the Blob data.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         */
        arrayBuffer(): Promise<ArrayBuffer>;

        /**
         * Creates and returns a new Blob containing a subset of this Blob objects data. The original Blob is not altered
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         * @param start The starting index
         * @param end The ending index
         * @param type The content-type for the new Blob
         */
        slice(start?: number, end?: number, type?: string): Blob;

         /**
         * Returns a promise that fulfills with the contents of the Blob decoded as a UTF-8 string.
         * @since 9
         * @syscap SystemCapability.Utils.Lang 
         */
        text(): Promise<string>;
    }

}
export default buffer;
