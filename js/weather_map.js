"use strict";

$(document).ready(function() {

// MAKE THE WEATHER FORECAST

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



    // practice writing console.logs of various parts of the OpenWeatherMap object...
    // console.log the current weather description
        console.log(data.list[0].weather[0].description);
    // console.log the humidity of the 2nd day
        console.log(data.list[2].main.humidity);

    // console.log the humidity of all the days (use a for loop)
        for(var i = 0; i < data.list.length; i += 1) {
            console.log(data.list[i].main.humidity);
        }

    // console.log the temperature of the 3rd day in celsius
        console.log(data.list[3].main.temp);

    // console.log the temperature of the 3rd day in Fahrenheit
        console.log(data.list[3].main.temp);

    // console.log all types of information you will ultimately display for a single day in the 3-day
            // forecast div
        console.log();

    // console.log all type of information you will ultimately display for all days in the 3-day forecast divs
        });
    } getWeather();

    // write html and css to make/style a three-day forecast set of divs (may use design from curriculum)


    // create a function to append specific parts of the OpenWeatherMap map object to the DOM and call it in
    // the .done() of the OpenWeatherMap map GET request.


    // remember to first console.log specific data from the OpenWeatherMap object, then work on adding to the DOM


    // read and reread the curriculum and OpenWeatherMap docs carefully on how to get an image of the weather forecast


    // hint: "http://openweathermap.org/img/w/" + whateverTheWeatherIconValueIs


    // verify that the OpenWeatherMap data populates by hard coding in lat and lon values


    // create lat and lon variables to hold lat and lon values.


    // add lat and lon properties to the function that calls the OpenWeatheMap API GET request


    // add an input field for lat and lon with button that fires a new request to the OpenWeatherMap API and passes
    // the lat and lon values from the input fields into the request.




// CREATE THE MAP

    // using syntax from the previous Maps exercise, add a map below the OpenWeatherMap forecast


    // add a marker to the map and make it draggable


    // create a marker drag event that console logs the lat and lon where the marker is dropped



// WIRE UP MAP TO WEATHER API

    // add the function call that makes the Weather API request to the marker drag event and pass in the lat and lon
    // values of the marker to the Weather API request function



    const getMinMaxDayTemp = (data, day) => {
        const temps = data.list.slice(day * 8 - 8, day * 8)
            .reduce((prev, curr) => {
                prev.push(curr.main.temp);
                return prev;
            }, []).sort();
        return {min: temps.shift(), max: temps.pop()};
    };


    // Google Maps Marker Draggable
    // var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    // var mapOptions = {
    //     zoom: 4,
    //     center: myLatlng
    // }
    // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //
    // // Place a draggable marker on the map
    // var marker = new google.maps.Marker({
    //     position: myLatlng,
    //     map: map,
    //     draggable:true,
    //     title:"Drag me!"
    // });








});