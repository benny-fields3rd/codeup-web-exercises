(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split("|");
    // console.log(planetsArray);
    console.log(planetsArray);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
     // THIS IS INSTRUCTOR RYAN'S SOLUTION. STUDY THIS!!!
     var planetsBr = planetsArray.join("<br>");
     console.log(planetsBr);

    /*
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // THIS IS INSTRUCTOR RYAN'S SOLUTION. STUDY THIS!!!
    var htmlString = "<ul><li>";
    htmlString += planetsArray.join("</li><li>");
    htmlString += "</li></ul>";
    document.body.innerHTML = htmlString;

})();
