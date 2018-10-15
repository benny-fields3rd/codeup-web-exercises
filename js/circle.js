(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area=  Math.PI * Math.pow(circle.radius, 2); // Use Math.pow to raise to second power; can use this as well instead of circle.
            // TODO: return the proper value
            return area; // another way is to us return = Math.PI..etc..instead of assigning a variable of area.
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            var area = circle.getArea(); // can use "this" as well instead of circle.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding) { // already implied true but could do doRounding == true
                area = Math.round(area);
            } console.log("Area of a circle with radius: " + this.radius + ", is: " + area + ".");
        }
    };

    // log info about the circle
    console.log("Raw circle information:");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number:");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5; // changing the radius to 5 by calling "circle.radius"
    // log info about the circle
    console.log("Raw circle information:");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number:");
    circle.logInfo(true);

    console.log("=======================================================");
    // testing on my own changing radius to 10.
    circle.radius = 10;
    // log info about the circle
    console.log("Raw circle information:");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number:");
    circle.logInfo(true);
})();
