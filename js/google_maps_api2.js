"use strict";

function initMap() {

    var contentStringIlsong = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Ilsong Garden</h1>' +
        '<div id="bodyContent">' +
        '<p><strong>Ilsong Garden</strong>, also referred to as <strong>Ilsong</strong>, is a small ' +
        'korean restaurant that not only serves korean food, but japanese and chinese ' +
        'cuisine as well. I enjoy this place because of the following dishes: ' +
        '<ul>' +
        '<li>ChajangMyun - black bean sauced noodles</li>' +
        '<li>Kalbi - korean style BBQ beef ribs</li>' +
        '<li>Kimchi - assorted spicy, pickled vegetables</li>' +
        '</ul>' +
        '</p>' +
        '<p>Website: Ilsong Garden, <a href="http://www.ilsonggarden.com/menu.html">' +
        'http://www.ilsonggarden.com/menu.html</a> ' +
        '</div>' +
        '</div>';

    var contentStringKirbys = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Kirby &#39s Steakhouse</h1>' +
        '<div id="bodyContent">' +
        '<p><strong>Kirby&#39s Steakhouse</strong>, also referred to as <strong>Kirby&#39s</strong>, is a national ' +
        'steak restaurant specializes in outstanding steak and seafood dishes.' +
        'I enjoy this place because of the following dishes: ' +
        '<ul>' +
        '<li>Lobstercargot - addicting lobster and cheese dish.</li>' +
        '<li>Steaks - Some of the most delicious steaks around.</li>' +
        '</ul>' +
        '</p>' +
        '<p>Website: Kirby &#39s Steakhouse, <a href="https://kirbyssteakhouse.com/san-antonio/">' +
        'https://kirbyssteakhouse.com/san-antonio/</a> ' +
        '</div>' +
        '</div>';

    var contentStringWildfish = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Wildfish</h1>' +
        '<div id="bodyContent">' +
        '<p><strong>Wildfish</strong>, also referred to as <strong>Eddie V &#39 s</strong>, is a chain ' +
        'of restaurants that serve premium beef and seafood dishes ' +
        'I enjoy this place because of the following reasons: ' +
        '<ul>' +
        '<li>Quiet and romantic atmosphere - dim lights, soft music</li>' +
        '<li>Great staff - friendly and very professional</li>' +
        '</ul>' +
        '</p>' +
        '<p>Website: Eddie V &#39s Wildfish, <a href="https://www.eddiev.com/locations/tx/san-antonio/san-antonio/8505">' +
        'https://www.eddiev.com/locations/tx/san-antonio</a> ' +
        '</div>' +
        '</div>';

    var ilsong = {
        info: contentStringIlsong,
        lat: 29.5186519,
        lng: -98.508089
    };

    var kirbys = {
        info: contentStringKirbys,
        lat: 29.608913,
        lng: -98.500183
    };

    var wildfish = {
        info: contentStringWildfish,
        lat: 29.608263,
        lng: -98.507130
    };

    var locations = [
        [ilsong.info, ilsong.lat, ilsong.lng, 0],
        [kirbys.info, kirbys.lat, kirbys.lng, 1],
        [wildfish.info, wildfish.lat, wildfish.lng, 2]
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


