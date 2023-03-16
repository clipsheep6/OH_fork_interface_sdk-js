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

import { AsyncCallback, Callback } from './basic';
import { WantAgent } from './@ohos.wantAgent';

/**
 * Provides interfaces for initiating location requests, ending the location service,
 * and obtaining the location result cached by the system.
 *
 * @namespace geolocation
 * @permission ohos.permission.LOCATION
 * @syscap SystemCapability.Location.Location.Core
 * @since 7
 * @deprecated since 9
 */
declare namespace geolocation {
    /**
     * subscribe location changed
     *
     * @permission ohos.permission.LOCATION
     * @param { 'locationChange' } type - Indicates the location service event to be subscribed to.
     * @param { LocationRequest } request - Indicates the location request parameters.
     * @param { Callback<Location> } callback - Indicates the callback for reporting the location result.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:locationChange
     */
    function on(type: 'locationChange', request: LocationRequest, callback: Callback<Location>): void;

    /**
     * unsubscribe location changed
     *
     * @permission ohos.permission.LOCATION
     * @param { 'locationChange' } type - Indicates the location service event to be subscribed to.
     * @param { Callback<Location> } [callback] - Indicates the callback for reporting the location result.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:locationChange
     */
    function off(type: 'locationChange', callback?: Callback<Location>): void;

    /**
     * subscribe location switch changed
     *
     * @permission ohos.permission.LOCATION
     * @param { 'locationServiceState' } type - Indicates the location service event to be subscribed to.
     * @param { Callback<boolean> } callback - Indicates the callback for reporting the location result.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:locationEnabledChange
     */
    function on(type: 'locationServiceState', callback: Callback<boolean>): void;

    /**
     * unsubscribe location switch changed
     *
     * @permission ohos.permission.LOCATION
     * @param { 'locationServiceState' } type - Indicates the location service event to be subscribed to.
     * @param { Callback<boolean> } [callback] - Indicates the callback for reporting the location result.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:locationEnabledChange
     */
    function off(type: 'locationServiceState', callback?: Callback<boolean>): void;

    /**
     * subscribe to cache GNSS locations update messages
     *
     * @permission ohos.permission.LOCATION
     * @param { 'cachedGnssLocationsReporting' } type - Indicates the location service event to be subscribed to.
     * @param { CachedGnssLocationsRequest } request - Indicates the cached GNSS locations request parameters.
     * @param { Callback<Array<Location>> } callback - Indicates the callback for reporting the cached GNSS locations.
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:cachedGnssLocationsChange
     */
    function on(type: 'cachedGnssLocationsReporting', request: CachedGnssLocationsRequest, callback: Callback<Array<Location>>): void;

    /**
     * unsubscribe to cache GNSS locations update messages
     *
     * @permission ohos.permission.LOCATION
     * @param { 'cachedGnssLocationsReporting' } type - Indicates the location service event to be subscribed to.
     * @param { Callback<Array<Location>> } [callback] - Indicates the callback for reporting the cached gnss locations.
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:cachedGnssLocationsChange
     */
    function off(type: 'cachedGnssLocationsReporting', callback?: Callback<Array<Location>>): void;

    /**
     * subscribe gnss status changed
     *
     * @permission ohos.permission.LOCATION
     * @param { 'gnssStatusChange' } type - Indicates the location service event to be subscribed to.
     * @param { Callback<SatelliteStatusInfo> } callback - Indicates the callback for reporting the gnss status change.
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:satelliteStatusChange
     */
    function on(type: 'gnssStatusChange', callback: Callback<SatelliteStatusInfo>): void;

    /**
     * unsubscribe gnss status changed
     *
     * @permission ohos.permission.LOCATION
     * @param { 'gnssStatusChange' } type - Indicates the location service event to be subscribed to.
     * @param { Callback<SatelliteStatusInfo> } [callback] - Indicates the callback for reporting the gnss status change.
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:satelliteStatusChange
     */
    function off(type: 'gnssStatusChange', callback?: Callback<SatelliteStatusInfo>): void;

    /**
     * subscribe nmea message changed
     *
     * @permission ohos.permission.LOCATION
     * @param { 'nmeaMessageChange' } type - Indicates the location service event to be subscribed to.
     * @param { Callback<string> } callback - Indicates the callback for reporting the nmea message.
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:nmeaMessage
     */
    function on(type: 'nmeaMessageChange', callback: Callback<string>): void;

    /**
     * unsubscribe nmea message changed
     *
     * @permission ohos.permission.LOCATION
     * @param { 'nmeaMessageChange' } type - Indicates the location service event to be subscribed to.
     * @param { Callback<string> } [callback] - Indicates the callback for reporting the nmea message.
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:nmeaMessage
     */
    function off(type: 'nmeaMessageChange', callback?: Callback<string>): void;

    /**
     * add a geofence and subscribe geo fence status changed
     *
     * @permission ohos.permission.LOCATION
     * @param { 'fenceStatusChange' } type - Indicates the location service event to be subscribed to.
     * @param { GeofenceRequest } request - Indicates the Geo-fence configuration parameters.
     * @param { WantAgent } want - Indicates which ability to start when the geofence event is triggered.
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:gnssFenceStatusChange
     */
    function on(type: 'fenceStatusChange', request: GeofenceRequest, want: WantAgent): void;

    /**
     * remove a geofence and unsubscribe geo fence status changed
     *
     * @permission ohos.permission.LOCATION
     * @param { 'fenceStatusChange' } type - Indicates the location service event to be subscribed to.
     * @param { GeofenceRequest } request - Indicates the Geo-fence configuration parameters.
     * @param { WantAgent } want - Indicates which ability to start when the geofence event is triggered.
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:gnssFenceStatusChange
     */
    function off(type: 'fenceStatusChange', request: GeofenceRequest, want: WantAgent): void;

    /**
     * obtain current location
     *
     * @permission ohos.permission.LOCATION
     * @param { CurrentLocationRequest } request - Indicates the location request parameters.
     * @param { AsyncCallback<Location> } callback - Indicates the callback for reporting the location result.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.getCurrentLocation
     */
    function getCurrentLocation(request: CurrentLocationRequest, callback: AsyncCallback<Location>): void;

    /**
     * obtain current location
     *
     * @permission ohos.permission.LOCATION
     * @param { AsyncCallback<Location> } callback - Indicates the callback for reporting the location result.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.getCurrentLocation
     */
    function getCurrentLocation(callback: AsyncCallback<Location>): void;

    /**
     * obtain current location
     *
     * @permission ohos.permission.LOCATION
     * @param { CurrentLocationRequest } [request] - Indicates the location request parameters.
     * @returns { Promise<Location> } The promise returned by the function.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.getCurrentLocation
     */
    function getCurrentLocation(request?: CurrentLocationRequest): Promise<Location>;

    /**
     * obtain last known location
     *
     * @permission ohos.permission.LOCATION
     * @param { AsyncCallback<Location> } callback - Indicates the callback for reporting the location result.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.getLastLocation
     */
    function getLastLocation(callback: AsyncCallback<Location>): void;

    /**
     * obtain last known location
     *
     * @permission ohos.permission.LOCATION
     * @returns { Promise<Location> } The promise returned by the function.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.getLastLocation
     */
    function getLastLocation(): Promise<Location>;

    /**
     * obtain current location switch status
     *
     * @permission ohos.permission.LOCATION
     * @param { AsyncCallback<boolean> } callback - Indicates the callback for reporting the location switch result.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.isLocationEnabled
     */
    function isLocationEnabled(callback: AsyncCallback<boolean>): void;

    /**
     * obtain current location switch status
     *
     * @permission ohos.permission.LOCATION
     * @returns { Promise<boolean> } The promise returned by the function.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.isLocationEnabled
     */
    function isLocationEnabled(): Promise<boolean>;

    /**
     * request enable location
     *
     * @permission ohos.permission.LOCATION
     * @param { AsyncCallback<boolean> } callback - Indicates the callback for reporting the location switch status.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     */
    function requestEnableLocation(callback: AsyncCallback<boolean>): void;

    /**
     * request enable location
     *
     * @permission ohos.permission.LOCATION
     * @returns { Promise<boolean> } The promise returned by the function.
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     */
    function requestEnableLocation(): Promise<boolean>;

    /**
     * obtain address info from location
     *
     * @permission ohos.permission.LOCATION
     * @param { ReverseGeoCodeRequest } request - Indicates the reverse geocode query parameters.
     * @param { AsyncCallback<Array<GeoAddress>> } callback - Indicates the callback for reporting the address info.
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.getAddressesFromLocation
     */
    function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void;

    /**
     * obtain address info from location
     *
     * @permission ohos.permission.LOCATION
     * @param { ReverseGeoCodeRequest } request - Indicates the reverse geocode query parameters.
     * @returns { Promise<Array<GeoAddress>> } The promise returned by the function.
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.getAddressesFromLocation
     */
    function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>;

    /**
     * obtain latitude and longitude info from location address
     *
     * @permission ohos.permission.LOCATION
     * @param { GeoCodeRequest } request - Indicates the reverse geocode query parameters.
     * @param { AsyncCallback<Array<GeoAddress>> } callback - Indicates the callback for reporting the latitude and longitude result.
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.getAddressesFromLocationName
     */
    function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void;

    /**
     * obtain latitude and longitude info from location address
     *
     * @permission ohos.permission.LOCATION
     * @param { GeoCodeRequest } request - Indicates the reverse geocode query parameters.
     * @returns { Promise<Array<GeoAddress>> } The promise returned by the function.
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.getAddressesFromLocationName
     */
    function getAddressesFromLocationName(request: GeoCodeRequest): Promise<Array<GeoAddress>>;

    /**
     * obtain geocode service status
     *
     * @permission ohos.permission.LOCATION
     * @param { AsyncCallback<boolean> } callback - Indicates the callback for reporting the geocode service status.
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.isGeocoderAvailable
     */
    function isGeoServiceAvailable(callback: AsyncCallback<boolean>): void;

    /**
     * obtain geocode service status
     *
     * @permission ohos.permission.LOCATION
     * @returns { Promise<boolean> } The promise returned by the function.
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.isGeocoderAvailable
     */
    function isGeoServiceAvailable(): Promise<boolean>;

    /**
     * obtain the number of cached GNSS locations reported at a time
     *
     * @permission ohos.permission.LOCATION
     * @param { AsyncCallback<number> } callback - Indicates the callback for reporting the cached GNSS locations size.
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.getCachedGnssLocationsSize
     */
    function getCachedGnssLocationsSize(callback: AsyncCallback<number>): void;

    /**
     * obtain the number of cached GNSS locations reported at a time
     *
     * @permission ohos.permission.LOCATION
     * @returns { Promise<number> } The promise returned by the function.
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.getCachedGnssLocationsSize
     */
    function getCachedGnssLocationsSize(): Promise<number>;

    /**
     * all prepared GNSS locations are returned to the application through the callback function,
     * and the bottom-layer buffer is cleared.
     *
     * @permission ohos.permission.LOCATION
     * @param { AsyncCallback<boolean> } callback - Indicates the callback for reporting the result.
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.flushCachedGnssLocations
     */
    function flushCachedGnssLocations(callback: AsyncCallback<boolean>): void;

    /**
     * all prepared GNSS locations are returned to the application through the callback function,
     * and the bottom-layer buffer is cleared.
     *
     * @permission ohos.permission.LOCATION
     * @returns { Promise<boolean> } The promise returned by the function.
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.flushCachedGnssLocations
     */
    function flushCachedGnssLocations(): Promise<boolean>;

    /**
     * send extended commands to location subsystem.
     *
     * @permission ohos.permission.LOCATION
     * @param { LocationCommand } command - Indicates the extended Command Message Body.
     * @param { AsyncCallback<boolean> } callback - Indicates the callback for reporting the send command result.
     * @syscap SystemCapability.Location.Location.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.sendCommand
     */
    function sendCommand(command: LocationCommand, callback: AsyncCallback<boolean>): void;

    /**
     * send extended commands to location subsystem.
     *
     * @permission ohos.permission.LOCATION
     * @param { LocationCommand } command - Indicates the extended Command Message Body.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @syscap SystemCapability.Location.Location.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.sendCommand
     */
    function sendCommand(command: LocationCommand): Promise<boolean>;

    /**
     * satellite status information
     *
     * @interface SatelliteStatusInfo
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.SatelliteStatusInfo
     */
    export interface SatelliteStatusInfo {
        satellitesNumber: number;
        satelliteIds: Array<number>;
        carrierToNoiseDensitys: Array<number>;
        altitudes: Array<number>;
        azimuths: Array<number>;
        carrierFrequencies: Array<number>;
    }

    /**
     * parameters for requesting to report cache location information
     *
     * @interface CachedGnssLocationsRequest
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.CachedGnssLocationsRequest
     */
    export interface CachedGnssLocationsRequest {
        reportingPeriodSec: number;
        wakeUpCacheQueueFull: boolean;
    }

    /**
     * configuring parameters in geo fence requests
     *
     * @interface GeofenceRequest
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeofenceRequest
     */
    export interface GeofenceRequest {
        priority: LocationRequestPriority;
        scenario: LocationRequestScenario;
        geofence: Geofence;
    }

    /**
     * configuring parameters in geo fence requests
     *
     * @interface Geofence
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Geofence
     */
    export interface Geofence {
        latitude: number;
        longitude: number;
        radius: number;
        expiration: number;
    }

    /**
     * configuring parameters in reverse geocode requests
     *
     * @interface ReverseGeoCodeRequest
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.ReverseGeoCodeRequest
     */
    export interface ReverseGeoCodeRequest {
        locale?: string;
        latitude: number;
        longitude: number;
        maxItems?: number;
    }

    /**
     * configuring parameters in geocode requests
     *
     * @interface GeoCodeRequest
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoCodeRequest
     */
    export interface GeoCodeRequest {
        locale?: string;
        description: string;
        maxItems?: number;
        minLatitude?: number;
        minLongitude?: number;
        maxLatitude?: number;
        maxLongitude?: number;
    }

    /**
     * data struct describes geographic locations.
     *
     * @interface GeoAddress
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress
     */
    export interface GeoAddress {
        /**
         * Indicates latitude information.
         * A positive value indicates north latitude,
         * and a negative value indicates south latitude.
         *
   	 * @syscap SystemCapability.Location.Location.Geocoder
    	 * @since 7
         * @deprecated since 9
         */
        latitude?: number;

        /**
         * Indicates longitude information.
         * A positive value indicates east longitude ,
         * and a negative value indicates west longitude .
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        longitude?: number;

        /**
         * Indicates language used for the location description.
         * zh indicates Chinese, and en indicates English.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        locale?: string;

        /**
         * Indicates landmark of the location.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        placeName?: string;

        /**
         * Indicates country code.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        countryCode?: string;

        /**
         * Indicates country name.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        countryName?: string;

        /**
         * Indicates administrative region name.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        administrativeArea?: string;

        /**
         * Indicates sub-administrative region name.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        subAdministrativeArea?: string;

        /**
         * Indicates locality information.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        locality?: string;

        /**
         * Indicates sub-locality information.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        subLocality?: string;

        /**
         * Indicates road name.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        roadName?: string;

        /**
         * Indicates auxiliary road information.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        subRoadName?: string;

        /**
         * Indicates house information.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        premises?: string;

        /**
         * Indicates postal code.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        postalCode?: string;

        /**
         * Indicates phone number.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        phoneNumber?: string;

        /**
         * Indicates website URL.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        addressUrl?: string;

        /**
         * Indicates additional information.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        descriptions?: Array<string>;

        /**
         * Indicates the amount of additional descriptive information.
         *
         * @syscap SystemCapability.Location.Location.Geocoder
         * @since 7
         * @deprecated since 9
         */
        descriptionsSize?: number;
    }

    /**
     * configuring parameters in location requests
     *
     * @interface LocationRequest
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequest
     */
    export interface LocationRequest {
        priority?: LocationRequestPriority;
        scenario?: LocationRequestScenario;
        timeInterval?: number;
        distanceInterval?: number;
        maxAccuracy?: number;
    }

    /**
     * configuring parameters in current location requests
     *
     * @interface CurrentLocationRequest
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.CurrentLocationRequest
     */
    export interface CurrentLocationRequest {
        priority?: LocationRequestPriority;
        scenario?: LocationRequestScenario;
        maxAccuracy?: number;
        timeoutMs?: number;
    }

    /**
     * provides information about geographic locations
     *
     * @interface Location
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location
     */
    export interface Location {
        /**
         * Indicates latitude information.
         * A positive value indicates north latitude,
         * and a negative value indicates south latitude.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        latitude: number;

        /**
         * Indicates Longitude information.
         * A positive value indicates east longitude ,
         * and a negative value indicates west longitude .
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        longitude: number;

        /**
         * Indicates location altitude, in meters.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        altitude: number;

        /**
         * Indicates location accuracy, in meters.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        accuracy: number;

        /**
         * Indicates speed, in m/s.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        speed: number;

        /**
         * Indicates location timestamp in the UTC format.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        timeStamp: number;

        /**
         * Indicates direction information.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        direction: number;

        /**
         * Indicates location timestamp since boot.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        timeSinceBoot: number;

        /**
         * Indicates additional information.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        additions?: Array<string>;

        /**
         * Indicates the amount of additional descriptive information.
     	 *
     	 * @syscap SystemCapability.Location.Location.Core
     	 * @since 7
    	 * @deprecated since 9
         */
        additionSize?: number;
    }

    /**
     * enum for location priority
     *
     * @permission ohos.permission.LOCATION
     * @enum { number }
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestPriority
     */
    export enum LocationRequestPriority {
        UNSET = 0x200,
        ACCURACY,
        LOW_POWER,
    	FIRST_FIX
    }

    /**
     * enum for location scenario
     *
     * @permission ohos.permission.LOCATION
     * @enum { number }
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestScenario
     */
    export enum LocationRequestScenario {
        UNSET = 0x300,
        NAVIGATION,
        TRAJECTORY_TRACKING,
        CAR_HAILING,
        DAILY_LIFE_SERVICE,
    	NO_POWER
    }

    /**
     * enum for error code
     *
     * @permission ohos.permission.LOCATION
     * @enum { number }
     * @syscap SystemCapability.Location.Location.Core
     * @since 7
     * @deprecated since 9
     */
    export enum GeoLocationErrorCode {
        /**
         * Indicates input parameter error.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        INPUT_PARAMS_ERROR,

        /**
         * Indicates reverse geocode query failed.
    	 *
     	 * @syscap SystemCapability.Location.Location.Core
    	 * @since 7
    	 * @deprecated since 9
         */
        REVERSE_GEOCODE_ERROR,

        /**
         * Indicates geocode query failed.
    	 *
    	 * @syscap SystemCapability.Location.Location.Core
    	 * @since 7
    	 * @deprecated since 9
         */
        GEOCODE_ERROR,

        /**
         * Indicates positioning failed.
    	 *
   	 * @syscap SystemCapability.Location.Location.Core
    	 * @since 7
   	 * @deprecated since 9
         */
        LOCATOR_ERROR,

        /**
         * Indicates operation failure caused by abnormal location switch.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        LOCATION_SWITCH_ERROR,

        /**
         * Indicates failed to get the last known location.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
        LAST_KNOWN_LOCATION_ERROR,

        /**
         * Indicates location request timeout.
         *
         * @syscap SystemCapability.Location.Location.Core
         * @since 7
         * @deprecated since 9
         */
    	LOCATION_REQUEST_TIMEOUT_ERROR
    }

    /**
     * enum for location privacy type
     *
     * @permission ohos.permission.LOCATION
     * @enum { number }
     * @syscap SystemCapability.Location.Location.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationPrivacyType
     */
    export enum LocationPrivacyType {
        OTHERS = 0,
        STARTUP,
    	CORE_LOCATION
    }

    /**
     * Location subsystem command structure
     *
     * @interface LocationCommand
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationCommand
     */
    export interface LocationCommand {
        scenario: LocationRequestScenario;
        command: string;
    }
}

export default geolocation;
