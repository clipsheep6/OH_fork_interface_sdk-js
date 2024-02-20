/*
* Copyright (C) 2022 Huawei Device Co., Ltd.
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
 * @kit PerformanceAnalysisKit
 */

/**
 * Provide interfaces related to debugger access and obtaining CPU,
 * memory and other virtual machine information during runtime for JS programs
 *
 * @namespace hidebug
 * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
 * @since 8
 */


declare namespace hidebug {
  /**
   * Get total native heap memory size
   *
   * @returns { bigint } Returns total native heap memory size.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8
   */
  function getNativeHeapSize(): bigint;

  /**
   * Get Native heap memory allocation size.
   * @returns { bigint } Returns native heap memory allocation size.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8
   */
  function getNativeHeapAllocatedSize(): bigint;

  /**
   * Get Native heap memory free size
   *
   * @returns { bigint } Returns native heap memory free size.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8
   */
  function getNativeHeapFreeSize(): bigint;

  /**
   * Get the virtual set size memory of the application process
   *
   * @returns { bigint } Returns application process virtual set size memory information.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 11
   * @deprecated since 12
   * @useinstead ohos.hidebug/hidebug.getAppNativeMemInfo
   */
  function getVss(): bigint;

  /**
   * Get application process proportional set size memory information
   *
   * @returns { bigint } Returns application process proportional set size memory information.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8
   * @deprecated since 12
   * @useinstead ohos.hidebug/hidebug.getAppNativeMemInfo
   */
  function getPss(): bigint;

  /**
   * Obtains the size of the shared dirty memory of a process.
   *
   * @returns { bigint } Returns the size of the shared dirty memory.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8
   * @deprecated since 12
   * @useinstead ohos.hidebug/hidebug.getAppNativeMemInfo
   */
  function getSharedDirty(): bigint;

  /**
   * Obtains the size of the private dirty memory of a process.
   * @returns { bigint } Returns the size of the private dirty memory.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9
   * @deprecated since 12
   * @useinstead ohos.hidebug/hidebug.getAppNativeMemInfo
   */
  function getPrivateDirty(): bigint;

  /**
   * Obtains the cpu usage percent of a process.
   *
   * @returns { number } Returns the cpu usage of a process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9
   */
  function getCpuUsage(): number;

  /**
   * Start CPU Profiling.
   * The input parameter is a user-defined file name, excluding the file suffix.
   * The generated file is in the files folder under the application directory.
   * Such as "/data/accounts/account_0/appdata/[package name]/files/cpuprofiler-xxx.json"
   *
   * @param { string } filename - Indicates the user-defined file name,  excluding the file suffix.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.hidebug/hidebug.startJsCpuProfiling
   */
  function startProfiling(filename: string): void;

  /**
   * Stop CPU Profiling.
   * It takes effect only when the CPU profiler is turned on
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.hidebug/hidebug.stopJsCpuProfiling
   */
  function stopProfiling(): void;

  /**
   * Dump JS Virtual Machine Heap Snapshot.
   * The input parameter is a user-defined file name, excluding the file suffix.
   * The generated file is in the files folder under the application directory.
   * Such as "/data/accounts/account_0/appdata/[package name]/files/xxx.heapsnapshot"
   *
   * @param { string } filename - Indicates the user-defined file name, excluding the file suffix.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.hidebug/hidebug.dumpJsHeapData
   */
  function dumpHeapData(filename: string): void;

  /**
   * Start CPU Profiling.
   * The input parameter is a user-defined file name, excluding the file suffix.
   * The generated file is in the files folder under the application directory.
   *
   * @param { string } filename - Indicates the user-defined file name,  excluding the file suffix.
   * @throws {BusinessError} 401 - the parameter check failed
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9
   */
  function startJsCpuProfiling(filename: string): void;

  /**
   * Stop CPU Profiling.
   * It takes effect only when the CPU profiler is turned on
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9
   */
  function stopJsCpuProfiling(): void;

  /**
   * Dump JS Virtual Machine Heap Snapshot.
   * The input parameter is a user-defined file name, excluding the file suffix.
   * The generated file is in the files folder under the application directory.
   *
   * @param { string } filename - Indicates the user-defined file name, excluding the file suffix.
   * @throws {BusinessError} 401 - the parameter check failed
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9
   */
  function dumpJsHeapData(filename: string): void;

  /**
   * Get a debugging dump of a system service by service id.
   * It need dump permission.
   *
   * @permission ohos.permission.DUMP
   * @param { number } serviceid - Indicates the id of the service ability.
   * @param { number } fd - The file descriptor.
   * @param { Array<string> } args - The args list of the system ability dump interface.
   * @throws {BusinessError} 401 - the parameter check failed
   * @throws {BusinessError} 11400101 - the service id is invalid
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9
   */
  function getServiceDump(serviceid: number, fd: number, args: Array<string>): void;

  /**
   * Obtains the cpu usage of system.
   *
   * @returns { number } Returns the cpu usage of system.
   * @throws { BusinessError } 11400104 - The status of the system cpu usage is abnormal
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  function getSystemCpuUsage(): number;

  /**
   * Application CPU usage of threads.
   *
   * @typedef ThreadCpuUsage
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  interface ThreadCpuUsage {
    /**
     * Thread id
     *
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    threadId: number;
    /**
     * Cpu usage of thread
     *
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    cpuUsage: number;
  }

  /**
   * Get the CPU usage of all threads in the application.
   *
   * @returns { ThreadCpuUsage[] } Returns the CPU usage of all threads in the application.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  function getAppThreadCpuUsage(): ThreadCpuUsage[];

  /**
   * System memory information
   *
   * @typedef SystemMemInfo
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  interface SystemMemInfo {
    /**
     * Total system memory size, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    totalMem: bigint;
    /**
     * System free memory size, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    freeMem: bigint;
    /**
     * System available memory size, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    availableMem: bigint;
  }

  /**
   * Obtains the system memory size.
   *
   * @returns { SystemMemInfo } Returns system memory size.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  function getSystemMemInfo(): SystemMemInfo;

  /**
   * Application process native memory information.
   *
   * @typedef NativeMemInfo
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  interface NativeMemInfo {
    /**
     * Process proportional set size memory, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    pss: bigint;
    /**
     * Virtual set size memory, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    vss: bigint;
    /**
     * Resident set size, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    rss: bigint;
    /**
     * The size of the shared dirty memory, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    sharedDirty: bigint;
    /**
     * The size of the private dirty memory, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    privateDirty: bigint;
    /**
     * The size of the shared clean memory, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    sharedClean: bigint;
    /**
     * The size of the private clean memory, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    privateClean: bigint;
  }

  /**
   * Obtains the memory information of application process.
   *
   * @returns { NativeMemInfo } Returns the native memory of a process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  function getAppNativeMemInfo(): NativeMemInfo;

  /**
   * Application process memory limit
   *
   * @typedef MemoryLimit
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  interface MemoryLimit {
    /**
     * The limit of the application process's resident set, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    rssLimit: bigint;
    /**
     * The limit of the application process's virtual memory, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    vssLimit: bigint;
    /**
     * The limit of the js vm heap size of current virtual machine, in kibibytes
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    vmHeapLimit: bigint;
  }

  /**
   * Obtains the memory limit of application process.
   *
   * @returns { MemoryLimit } Returns memory limit of application.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  function getAppMemoryLimit(): MemoryLimit;

  /**
   * The memory information of application virtual machine.
   *
   * @typedef VMMemoryInfo
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  interface VMMemoryInfo {
    /**
     * Total size of current virtual machine Heap
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    totalHeap: bigint;
    /**
     * Used size of current virtual machine Heap
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    usedHeap: bigint;
    /**
     * All array object size of current virtual machine
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    allArraySize: bigint;
  }

  /**
   * Obtains the memory information of application virtual machine.
   *
   * @returns { VMMemoryInfo } Returns memory information of application virtual machine.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  function getAppVMMemoryInfo(): VMMemoryInfo;

  /**
   * Enum for trace flag
   *
   * @enum { number }
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  enum TraceFlag {
    /**
     * Only capture main thread trace
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    MAIN_THREAD = 1,
    /**
     * Capture all thread trace
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    ALL_THREADS = 2
  }

  /**
   * Provide trace tags
   *
   * @namespace tags
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  namespace tags {
    /**
     * Ability Manager tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const ABILITY_MANAGER: number;
    /**
     * ACE development framework tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const ACE: number;
    /**
     * ARK tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const ARK: number;
    /**
     * Bluetooth tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const BLUETOOTH: number;
    /**
     * Common library subsystem tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const COMMON_LIBRARY: number;
    /**
     * Distributed hardware device manager tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const DISTRIBUTED_HARDWARE_DEVICE_MANAGER: number;
    /**
     * Distributed audio tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const DISTRIBUTED_AUDIO: number;
    /**
     * Distributed camera tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const DISTRIBUTED_CAMERA: number;
    /**
     * Distributed data manager module tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const DISTRIBUTED_DATA: number;
    /**
     * Distributed hardware fwk tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const DISTRIBUTED_HARDWARE_FWK: number;
    /**
     * Distributed input tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const DISTRIBUTED_INPUT: number;
    /**
     * Distributed screen tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const DISTRIBUTED_SCREEN: number;
    /**
     * Distributed schedule tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const DISTRIBUTED_SCHEDULE: number;
    /**
     * FFRT tasks.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const FFRT: number;
    /**
     * File management tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const FILE_MANAGEMENT: number;
    /**
     * Global resource manager tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const GLOBAL_RESOURCE_MANAGER: number;
    /**
     * Graphic module tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const GRAPHIC: number;
    /**
     * HDF subsystem tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const HDF: number;
    /**
     * MISC module tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const MISC: number;
    /**
     * Multimodal input module tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const MULTIMODAL_INPUT: number;
    /**
     * Net tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const NET: number;
    /**
     * Notification module tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const NOTIFICATION: number;
    /**
     * NWeb tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const NWEB: number;
    /**
     * OHOS generic tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const OHOS: number;
    /**
     * Power manager tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const POWER_MANAGER: number;
    /**
     * RPC tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const RPC: number;
    /**
     * SA tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const SAMGR: number;
    /**
     * Window manager tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const WINDOW_MANAGER: number;
    /**
     * Audio module tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const AUDIO: number;
    /**
     * Camera module tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const CAMERA: number;
    /**
     * Image module tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const IMAGE: number;
    /**
     * Media module tag.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    const MEDIA: number;
  }

  /**
   * Start capture application trace.
   *
   * @param { number[] } tags - Tag of trace.
   * @param { TraceFlag } flag - Trace flag.
   * @param { number } limitSize - Max size of trace file, in bytes, the max is 500MB.
   * @returns { string } Returns absolute path of the trace file.
   * @throws { BusinessError } 401 - Invalid argument
   * @throws { BusinessError } 11400102 - Have already capture trace
   * @throws { BusinessError } 11400103 - Without write permission on the file
   * @throws { BusinessError } 11400104 - The status of the trace is abnormal
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  function startCaptureAppTrace(tags: number[], flag: TraceFlag, limitSize: number): string;

  /**
   * Stop capture application trace.
   *
   * @throws { BusinessError } 11400104 - The status of the trace is abnormal
   * @throws { BusinessError } 11400105 - No capture trace running
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12
   */
  function stopCaptureAppTrace(): void;
}
export default hidebug;
