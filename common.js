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
    var boundsSouthString = $.jStorage.get(BOUNDS_SOUTH_STORAGE_ID);
    var boundsWestString = $.jStorage.get(BOUNDS_WEST_STORAGE_ID);
    var boundsNorthString = $.jStorage.get(BOUNDS_NORTH_STORAGE_ID);
    var boundsEastString = $.jStorage.get(BOUNDS_EAST_STORAGE_ID);

    if ((boundsSouthString != null) 
            && (boundsWestString != null) 
            && (boundsNorthString != null) 
            && (boundsEastString != null)) {
        return new google.maps.LatLngBounds(
                new google.maps.LatLng(parseFloat(boundsSouthString), parseFloat(boundsWestString)),
                new google.maps.LatLng(parseFloat(boundsNorthString), parseFloat(boundsEastString)));
    }
    else {
        setBoundsToLocalStorage(DEFAULT_BOUNDS);
        return DEFAULT_BOUNDS;
    }
}

function setBoundsToLocalStorage(bounds) {
    $.jStorage.set(BOUNDS_SOUTH_STORAGE_ID, bounds.getSouthWest().lat().toString());
    $.jStorage.set(BOUNDS_WEST_STORAGE_ID, bounds.getSouthWest().lng().toString());
    $.jStorage.set(BOUNDS_NORTH_STORAGE_ID, bounds.getNorthEast().lat().toString());
    $.jStorage.set(BOUNDS_EAST_STORAGE_ID, bounds.getNorthEast().lng().toString());
}

function removeBoundsFromLocalStorage() {
    $.jStorage.deleteKey(BOUNDS_SOUTH_STORAGE_ID);
    $.jStorage.deleteKey(BOUNDS_WEST_STORAGE_ID);
    $.jStorage.deleteKey(BOUNDS_NORTH_STORAGE_ID);
    $.jStorage.deleteKey(BOUNDS_EAST_STORAGE_ID);
}

function getSettingsFromLocalStorage() {
    var swapPanoramaIntervalString = $.jStorage.get(SWAP_PANORAMA_INTERVAL_STORAGE_ID);
    var panoramaFadeOutSpeedString = $.jStorage.get(PANORAMA_FADE_OUT_SPEED_STORAGE_ID);
    var animatePanoramaIntervalString = $.jStorage.get(ANIMATE_PANORAMA_INTERVAL_STORAGE_ID);
    var animatePanoramaHeadingStepString = $.jStorage.get(ANIMATE_PANORAMA_HEADING_STEP_STORAGE_ID);
    var animatePanoramaZoomStepString = $.jStorage.get(ANIMATE_PANORAMA_ZOOM_STEP_STORAGE_ID);

    if ((swapPanoramaIntervalString != null) 
            && (panoramaFadeOutSpeedString != null) 
            && (animatePanoramaIntervalString != null) 
            && (animatePanoramaHeadingStepString != null) 
            && (animatePanoramaZoomStepString != null)) {
        return {swapPanoramaInterval: parseInt(swapPanoramaIntervalString),
                panoramaFadeOutSpeed: parseInt(panoramaFadeOutSpeedString),
                animatePanoramaInterval: parseInt(animatePanoramaIntervalString),
                animatePanoramaHeadingStep: parseFloat(animatePanoramaHeadingStepString),
                animatePanoramaZoomStep: parseInt(animatePanoramaZoomStepString)};
    }
    else {
        setSettingsToLocalStorage(DEFAULT_SETTINGS);
        return DEFAULT_SETTINGS;
    }
}

function setSettingsToLocalStorage(settings) {
    $.jStorage.set(SWAP_PANORAMA_INTERVAL_STORAGE_ID, settings.swapPanoramaInterval);
    $.jStorage.set(PANORAMA_FADE_OUT_SPEED_STORAGE_ID, settings.panoramaFadeOutSpeed);
    $.jStorage.set(ANIMATE_PANORAMA_INTERVAL_STORAGE_ID, settings.animatePanoramaInterval);
    $.jStorage.set(ANIMATE_PANORAMA_HEADING_STEP_STORAGE_ID, settings.animatePanoramaHeadingStep);
    $.jStorage.set(ANIMATE_PANORAMA_ZOOM_STEP_STORAGE_ID, settings.animatePanoramaZoomStep);
}

function removeSettingsFromLocalStorage() {
    $.jStorage.deleteKey(SWAP_PANORAMA_INTERVAL_STORAGE_ID);
    $.jStorage.deleteKey(PANORAMA_FADE_OUT_SPEED_STORAGE_ID);
    $.jStorage.deleteKey(ANIMATE_PANORAMA_INTERVAL_STORAGE_ID);
    $.jStorage.deleteKey(ANIMATE_PANORAMA_HEADING_STEP_STORAGE_ID);
    $.jStorage.deleteKey(ANIMATE_PANORAMA_ZOOM_STEP_STORAGE_ID);
}
