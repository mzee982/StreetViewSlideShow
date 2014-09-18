var DEFAULT_BOUNDS = new google.maps.LatLngBounds(new google.maps.LatLng(47.481560, 18.964263), new google.maps.LatLng(47.517861, 19.024387));
var DEFAULT_SETTINGS = {swapPanoramaInterval: 5000, panoramaFadeOutSpeed: 2000, animatePanoramaInterval: 150, animatePanoramaHeadingStep: 0.2, animatePanoramaZoomStep: 10};
var BOUNDS_SOUTH_STORAGE_ID = "boundsSouth";
var BOUNDS_WEST_STORAGE_ID = "boundsWest";
var BOUNDS_NORTH_STORAGE_ID = "boundsNorth";
var BOUNDS_EAST_STORAGE_ID = "boundsEast";
var SWAP_PANORAMA_INTERVAL_STORAGE_ID = "swapPanoramaInterval";
var PANORAMA_FADE_OUT_SPEED_STORAGE_ID = "panoramaFadeOutSpeed";
var ANIMATE_PANORAMA_INTERVAL_STORAGE_ID = "animatePanoramaInterval";
var ANIMATE_PANORAMA_HEADING_STEP_STORAGE_ID = "animatePanoramaHeadingStep";
var ANIMATE_PANORAMA_ZOOM_STEP_STORAGE_ID = "animatePanoramaZoomStep";

function isLocalStorageSupported() {
    try {
        //return "localStorage" in window && window["localStorage"] !== null;
        return typeof(localStorage) !== "undefined";
    } catch (e) {
        return false;
    }
}

function getBoundsFromLocalStorage() {
    var boundsSouthString = window.localStorage.getItem(BOUNDS_SOUTH_STORAGE_ID);
    var boundsWestString = window.localStorage.getItem(BOUNDS_WEST_STORAGE_ID);
    var boundsNorthString = window.localStorage.getItem(BOUNDS_NORTH_STORAGE_ID);
    var boundsEastString = window.localStorage.getItem(BOUNDS_EAST_STORAGE_ID);
    
    if ((boundsSouthString != null) 
            && (boundsWestString != null) 
            && (boundsNorthString != null) 
            && (boundsEastString != null)) {
        return new google.maps.LatLngBounds(
                new google.maps.LatLng(Number.parseFloat(boundsSouthString), Number.parseFloat(boundsWestString)), 
                new google.maps.LatLng(Number.parseFloat(boundsNorthString), Number.parseFloat(boundsEastString)));
    }
    else {
        setBoundsToLocalStorage(DEFAULT_BOUNDS);
        return DEFAULT_BOUNDS;
    }
}

function setBoundsToLocalStorage(bounds) {
    window.localStorage.setItem(BOUNDS_SOUTH_STORAGE_ID, bounds.getSouthWest().lat().toString());
    window.localStorage.setItem(BOUNDS_WEST_STORAGE_ID, bounds.getSouthWest().lng().toString());
    window.localStorage.setItem(BOUNDS_NORTH_STORAGE_ID, bounds.getNorthEast().lat().toString());
    window.localStorage.setItem(BOUNDS_EAST_STORAGE_ID, bounds.getNorthEast().lng().toString());
}

function removeBoundsFromLocalStorage() {
    window.localStorage.removeItem(BOUNDS_SOUTH_STORAGE_ID);
    window.localStorage.removeItem(BOUNDS_WEST_STORAGE_ID);
    window.localStorage.removeItem(BOUNDS_NORTH_STORAGE_ID);
    window.localStorage.removeItem(BOUNDS_EAST_STORAGE_ID);
}

function getSettingsFromLocalStorage() {
    var swapPanoramaIntervalString = window.localStorage.getItem(SWAP_PANORAMA_INTERVAL_STORAGE_ID);
    var panoramaFadeOutSpeedString = window.localStorage.getItem(PANORAMA_FADE_OUT_SPEED_STORAGE_ID);
    var animatePanoramaIntervalString = window.localStorage.getItem(ANIMATE_PANORAMA_INTERVAL_STORAGE_ID);
    var animatePanoramaHeadingStepString = window.localStorage.getItem(ANIMATE_PANORAMA_HEADING_STEP_STORAGE_ID);
    var animatePanoramaZoomStepString = window.localStorage.getItem(ANIMATE_PANORAMA_ZOOM_STEP_STORAGE_ID);
    
    if ((swapPanoramaIntervalString != null) 
            && (panoramaFadeOutSpeedString != null) 
            && (animatePanoramaIntervalString != null) 
            && (animatePanoramaHeadingStepString != null) 
            && (animatePanoramaZoomStepString != null)) {
        return {swapPanoramaInterval: Number.parseInt(swapPanoramaIntervalString),
                panoramaFadeOutSpeed: Number.parseInt(panoramaFadeOutSpeedString), 
                animatePanoramaInterval: Number.parseInt(animatePanoramaIntervalString),
                animatePanoramaHeadingStep: Number.parseFloat(animatePanoramaHeadingStepString),
                animatePanoramaZoomStep: Number.parseInt(animatePanoramaZoomStepString)};
    }
    else {
        setSettingsToLocalStorage(DEFAULT_SETTINGS);
        return DEFAULT_SETTINGS;
    }
}

function setSettingsToLocalStorage(settings) {
    window.localStorage.setItem(SWAP_PANORAMA_INTERVAL_STORAGE_ID, settings.swapPanoramaInterval);
    window.localStorage.setItem(PANORAMA_FADE_OUT_SPEED_STORAGE_ID, settings.panoramaFadeOutSpeed);
    window.localStorage.setItem(ANIMATE_PANORAMA_INTERVAL_STORAGE_ID, settings.animatePanoramaInterval);
    window.localStorage.setItem(ANIMATE_PANORAMA_HEADING_STEP_STORAGE_ID, settings.animatePanoramaHeadingStep);
    window.localStorage.setItem(ANIMATE_PANORAMA_ZOOM_STEP_STORAGE_ID, settings.animatePanoramaZoomStep);
}

function removeSettingsFromLocalStorage() {
    window.localStorage.removeItem(SWAP_PANORAMA_INTERVAL_STORAGE_ID);
    window.localStorage.removeItem(PANORAMA_FADE_OUT_SPEED_STORAGE_ID);
    window.localStorage.removeItem(ANIMATE_PANORAMA_INTERVAL_STORAGE_ID);
    window.localStorage.removeItem(ANIMATE_PANORAMA_HEADING_STEP_STORAGE_ID);
    window.localStorage.removeItem(ANIMATE_PANORAMA_ZOOM_STEP_STORAGE_ID);
}
