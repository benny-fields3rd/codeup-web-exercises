"use strict";

var platform = new H.service.Platform({
    'app_id' : 'mY8kBUxf4mE4yH28DDzZ',
    'app_code' : '-wpo5T9kzCH3n_ta0-mrdg'
});

//Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

//Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.normal.map,
    {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4}
    });

// Create the default UI:
var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

var mapSettings=ui.getControl('mapsettings');
var zoom=ui.getControl('zoom');
var scalebar=ui.getControl('scalebar');
var panorama=ui.getControl('panorama');

panorama.setAlignment('top-left');
mapSettings.setAlignment('top-left');
zoom.setAlignment('top-left');
scalebar.setAlignment('top-left');

// Create an info bubble object at a specific geographic location:
var bubble = new H.ui.InfoBubble({ lng: 13.4, lat: 52.51 }, {
    content: '<b>Coffee Time!</b>'
});

// Add info bubble to the UI:
ui.addBubble(bubble);