"use strict";

function initMap() {

    var contentStringSpot1 = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Lava Java</h1>' +
        '<div id="bodyContent">' +
        '<p><strong>Lava Java Main</strong> is a small ' +
        'family owned coffee shop with great breakfast and lunch menus. ' +
        'Some of the most popular items are: ' +
        '<ul>' +
        '<li>Karen&#39s Joy Cup - Coffee full of joy!</li>' +
        '<li>Benny&#39s Shock Expresso - Expresso with a twist!</li>' +
        '</ul>' +
        '</p>' +
        '<p>Website: Lava Java, <a href="http://www.lavajava.com/menu.html">' +
        'http://www.lavajava.com/menu.html</a> ' +
        '</div>' +
        '</div>';

    var contentStringSpot2 = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Lava Java 2</h1>' +
        '<div id="bodyContent">' +
        '<p><strong>Lava Java 2</strong>, is a small ' +
        'family owned coffee shop with great breakfast and lunch menus. ' +
        'Some of the most popular items are: ' +
        '</p>' +
        '<p>Website: Lava Java, <a href="http://www.lavajava.com/menu.html">' +
        'http://www.lavajava.com/menu.html</a> ' +
        '</div>' +
        '</div>';

    var contentStringSpot3 = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Lava Java 3</h1>' +
        '<div id="bodyContent">' +
        '<p><strong>Lava Java 3</strong>, is a small ' +
        'family owned coffee shop with great breakfast and lunch menus. ' +
        'Some of the most popular items are: ' +
        '</p>' +
        '<p>Website: Lava Java, <a href="http://www.lavajava.com/menu.html">' +
        'http://www.lavajava.com/menu.html</a> ' +
        '</div>' +
        '</div>';

    var coffeeSpot1 = {
        info: contentStringSpot1,
        lat: 29.5186519,
        lng: -98.508089
    };

    var coffeeSpot2 = {
        info: contentStringSpot2,
        lat: 29.608913,
        lng: -98.500183
    };

    var coffeeSpot3 = {
        info: contentStringSpot3,
        lat: 29.608263,
        lng: -98.507130
    };

    var locations = [
        [coffeeSpot1.info, coffeeSpot1.lat, coffeeSpot1.lng, 0],
        [coffeeSpot2.info, coffeeSpot2.lat, coffeeSpot2.lng, 1],
        [coffeeSpot3.info, coffeeSpot3.lat, coffeeSpot3.lng, 2]
    ];

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: new google.maps.LatLng(29.554349, -98.491142),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation: google.maps.Animation.DROP
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
initMap();


