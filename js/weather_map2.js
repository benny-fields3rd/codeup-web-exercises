"use strict";

$(document).ready(function() {

// MAKE THE WEATHER FORECAST
    /**
     * author Justin Reich
     * getMinMaxDayTemp returns the minimum and maximum temp for a given day based on the response of a
     * query to the OpenWeatherMap 5-Day Hourly Forecast API
     * @param data - the response object from the OpenWeatherMap 5-Day Hourly Forecast API
     * @param day - a number (1-5) representing which day in the next five days to get the min and max temp for;l
     * @returns {{min: T, max: T}}
     */
    const getMinMaxDayTemp = (data, day) => {
        const temps = data.list.slice(day * 8 - 8, day * 8)
            .reduce((prev, curr) => {
                prev.push(curr.main.temp);
                return prev;
            }, []).sort();
        return {min: temps.shift(), max: temps.pop()};
    };

    // make a function to get the weather object from the OpenWeatherMap API
    // base url should be "http://api.openweathermap.org/data/2.5/forecast"
    function getWeather(){
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "c622ec1ca034b8afac941b07ce7b12b8",
            id:     "4726206",
            units: "imperial",
        }).done(function(data) {
            console.log(data);
            // console.log(getMinMaxDayTemp(data, 1));
            $('#city1').html(getWeatherDay1(data)); // calling getWeatherDay1 function
            // $('#city2').html(getWeatherDay2(data)); // calling buildHTML function
            // $('#city3').html(getWeatherDay3(data)); // calling buildHTML function

    // practice writing console.logs of various parts of the OpenWeatherMap object...
    // console.log the current weather description
    //     console.log(data.list[0].weather[0].description);

    // console.log the humidity of the 2nd day
    //     console.log(data.list[2].main.humidity);

    // console.log the humidity of all the days (use a for loop)
    //     for(var i = 0; i < data.list.length; i += 1) {
    //         console.log(data.list[i].main.humidity);
    //     }

    // console.log the temperature of the 3rd day in celsius
    //     console.log(data.list[3].main.temp);

    // console.log the temperature of the 3rd day in Fahrenheit
    //     console.log(data.list[3].main.temp);

    // console.log all types of information you will ultimately display for a single day in the 3-day
    // forecast div
    //     console.log(data.list[0].main.temp_max); // min temp
    //     console.log(data.list[0].main.temp_min); // max temp
    //     console.log(data.list[0].weather[0].description); // clouds if any
    //     console.log(data.list[0].rain); // rain if any
    //     console.log(data.list[0].main.humidity); // humidity
    //     console.log(data.list[0].wind.speed); // wind
    //     console.log(data.list[0].main.pressure); // pressure

    // console.log all type of information you will ultimately display for all days in the 3-day forecast divs
    //     console.log(data.list[8].main.temp_max); // min temp
    //     console.log(data.list[8].main.temp_min); // max temp
    //     console.log(data.list[8].weather[0].description); // clouds if any
    //     console.log(data.list[8].rain); // rain if any
    //     console.log(data.list[8].main.humidity); // humidity
    //     console.log(data.list[8].wind.speed); // wind
    //     console.log(data.list[8].main.pressure); // pressure
    //
    //     console.log(data.list[16].main.temp_min); // max temp
    //     console.log(data.list[16].weather[0].description); // clouds if any
    //     console.log(data.list[16].rain); // rain if any
    //     console.log(data.list[16].main.humidity); // humidity
    //     console.log(data.list[16].wind.speed); // wind
    //     console.log(data.list[16].main.pressure); // pressure

    });
}
getWeather();

    // write html and css to make/style a three-day forecast set of divs (may use design from curriculum)
    function getWeatherDay1(data) {
        var html = "";
        for(var i = 0; i < 3; i += 1) {
            var temps = getMinMaxDayTemp(data, i + 1);
                // build html elements
                html += '<div class="col s12 m4">';
                html += '<div class="card blue-grey darken-1 z-depth-2 hoverable">';
                html += '<div class="card-content white-text">';
                html += '<span class="card-title">' + "High " + temps.max.toFixed(0) + '&deg' + "/ " + "Low " + temps.min.toFixed(0) + '&deg' + '</span>';
                html += '<img src="http://openweathermap.org/img/w/' + data.list[i * 8].weather[0].icon + '.png">';
                html += '<p><span class="weatherCategory">Clouds: </span>' + data.list[i * 8].weather[0].description + '</p>';
                html += '<p><span class="weatherCategory">Humidity: </span>' + data.list[i * 8].main.humidity + '%</p>';
                html += '<p><span class="weatherCategory">Wind: </span>' + data.list[i * 8].wind.speed + " mph" + '</p>';
                html += '<p><span class="weatherCategory">Pressure: </span>' + data.list[i * 8].main.pressure + '</p>';
                html += '</div>';
                html += '<div class="card-action">';
                html += '<a class="waves-effect waves-teal btn-flat">Refresh</a>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
        }
            return html;
    }
    // function getWeatherDay2(data) {
    //     var html = "";
    //     html += '<div class="col s12 m4">';
    //     html += '<div class="card blue-grey darken-1 z-depth-2 hoverable">';
    //     html += '<div class="card-content white-text">';
    //     html += '<span class="card-title">' + "High " + getMinMaxDayTemp(data, 2).max.toFixed(0) + '&deg' + "/ " + "Low " + getMinMaxDayTemp(data, 2).min.toFixed(0) + '&deg' + '</span>';
    //     html += '<img src="http://openweathermap.org/img/w/' + data.list[8].weather[0].icon + '.png">';
    //     html += '<p><span class="weatherCategory">Clouds: </span>' + data.list[8].weather[0].description + '</p>';
    //     html += '<p><span class="weatherCategory">Humidity: </span>' + data.list[8].main.humidity + '%</p>';
    //     html += '<p><span class="weatherCategory">Wind: </span>' + data.list[8].wind.speed + " mph" + '</p>';
    //     html += '<p><span class="weatherCategory">Pressure: </span>' + data.list[8].main.pressure + '</p>';
    //     html += '</div>';
    //     html += '<div class="card-action">';
    //     html += '<a class="waves-effect waves-teal btn-flat">Refresh</a>';
    //     html += '</div>';
    //     html += '</div>';
    //     html += '</div>';
    //     return html;
    // }
    // function getWeatherDay3(data) {
    //     var html = "";
    //     html += '<div class="col s12 m4">';
    //     html += '<div class="card blue-grey darken-1 z-depth-2 hoverable">';
    //     html += '<div class="card-content white-text">';
    //     html += '<span class="card-title">' + "High " + getMinMaxDayTemp(data, 3).max.toFixed(0) + '&deg' + "/ " + "Low " + getMinMaxDayTemp(data, 3).min.toFixed(0) + '&deg' + '</span>';
    //     html += '<img class="weather-icon" src="http://openweathermap.org/img/w/' + data.list[16].weather[0].icon + '.png">';
    //     html += '<p><span class="weatherCategory">Clouds: </span>' + data.list[16].weather[0].description + '</p>';
    //     html += '<p><span class="weatherCategory">Humidity: </span>' + data.list[16].main.humidity + '%</p>';
    //     html += '<p><span class="weatherCategory">Wind: </span>' + data.list[16].wind.speed + " mph" + '</p>';
    //     html += '<p><span class="weatherCategory">Pressure: </span>' + data.list[16].main.pressure + '</p>';
    //     html += '</div>';
    //     html += '<div class="card-action">';
    //     html += '<a class="waves-effect waves-teal btn-flat">Refresh</a>';
    //     html += '</div>';
    //     html += '</div>';
    //     html += '</div>';
    //     return html;
    // }


    // create a function to append specific parts of the OpenWeatherMap map object to the DOM and call it in
    // the .done() of the OpenWeatherMap map GET request.


    // remember to first console.log specific data from the OpenWeatherMap object, then work on adding to the DOM


    // read and reread the curriculum and OpenWeatherMap docs carefully on how to get an image of the weather forecast
    // hint: "http://openweathermap.org/img/w/" + whateverTheWeatherIconValueIs


    // verify that the OpenWeatherMap data populates by hard coding in lat and lon values


    // create lat and lon variables to hold lat and lon values.
    var lat =
    // add lat and lon properties to the function that calls the OpenWeatheMap API GET request


    // add an input field for lat and lon with button that fires a new request to the OpenWeatherMap API and passes
    // the lat and lon values from the input fields into the request.




// CREATE THE MAP

    // using syntax from the previous Maps exercise, add a map below the OpenWeatherMap forecast
        "use strict";
        var myLatlng = new google.maps.LatLng(29.5186519,-98.508089);

        var mapOptions = {
            zoom: 4,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
        // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        // Set our map options
        // var mapOptions = {
        //     // Set the zoom level
        //     zoom: 4.2,
        //
        //     // This sets the center of the map at our location 29.5186519!4d-98.508089
        //     center: {
        //         lat:  29.5186519,
        //         lng: -98.508089
        //     },
        //     // Show this map in satellite view 29.5185682,-98.5080466,49
        //     mapTypeId: google.maps.MapTypeId.ROADMAP,
        // };

        // Render the map
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // Create a new infoWindow object with content
        // var infowindow = new google.maps.InfoWindow({
        //     content: contentString
        // });

        // Create lat and long for our marker position
        // var sanAntonio = { lat: 29.5186519, lng: -98.508089 };
        //
        // // Add the marker to our existing map
        //
        // var marker = new google.maps.Marker({
        //     position: sanAntonio,
        //     map: map,
        //     animation: google.maps.Animation.DROP,
        //     draggable: true,
        //     title:"Drag me!"
        // });

        // Open the window using our map and marker
        // infowindow.open(map, marker);
        // marker.addListener("click", function() {
        //     infowindow.open(map, marker);
        // });


    // add a marker to the map and make it draggable

    // Google Maps Marker Draggable


    // Place a draggable marker on the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        animation: google.maps.Animation.DROP,
        map: map,
        draggable:true,
        title:"Drag me!"
    });
    google.maps.event.addListener(marker, 'dragend', function (event) {
        console.log().value = event.latLng.lat();
        document.getElementById("long").value = event.latLng.lng();
        infoWindow.open(map, marker);
    });
    // create a marker drag event that console logs the lat and lon where the marker is dropped

    var lat = marker.getPosition().lat();
    var lng = marker.getPosition().lng();

// WIRE UP MAP TO WEATHER API

    // add the function call that makes the Weather API request to the marker drag event and pass in the lat and lon
    // values of the marker to the Weather API request function


    var markerLat;
    var markerLng;

    marker.addListener('dragend', function () {
        markerLat = marker.getPosition().lat();
        markerLng = marker.getPosition().lng();

        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast",
            type: "GET",
            data: {
                APPID: "c622ec1ca034b8afac941b07ce7b12b8",
                lat: markerLat,
                lon: markerLng,
                units: "imperial"
            }
        }).done(function(data) {
            console.log(data);
            updateCity(data);
            // console.log(getMinMaxDayTemp(data, 1));
            // console.log(getWeatherDay1(data));
        });
        function updateCity() {
            $("#city-name").html(data.city.name + " " + data.city.country);
        }











});