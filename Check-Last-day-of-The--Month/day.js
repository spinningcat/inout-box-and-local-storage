var lastDay = function(day, month, year) {
    const n31 = [0, 2, 4, 6, 7, 9, 11];
    const n30 = [3, 5, 8, 10];

    if ((n31.includes(month)) && (day === 31)) {
        // Months with 31 days
        return true;
    } else if ((n30.includes(month)) && (day === 30)) {
        // Months with 30 days
        return true;
    } else if ((month === 1) && (day === 29) && ((year % 4) === 0)) {
        // Check if leap year and 29th of February
        return true;
    } else if ((month === 1) && (day === 28) && ((year % 4) !== 0)) {
        // Check if not leap year and 28th of February
        return true;
    } else {
        return false;
    }
}

const date = new Date();
const div = document.querySelector("#days");
if (lastDay(date.getDate(), date.getMonth(), date.getYear())) {
    div.innerHTML = "Last day";
} else {
    div.innerHTML = "Sorry, gotta wait a few more days!";
}

if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
        'use strict';
        var O = Object(this);
        var len = parseInt(O.length) || 0;
        if (len === 0) {
            return false;
        }
        var n = parseInt(arguments[1]) || 0;
        var k;
        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) {
                k = 0;
            }
        }
        var currentElement;
        while (k < len) {
            currentElement = O[k];
            if (searchElement === currentElement ||
                (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
                return true;
            }
            k++;
        }
        return false;
    };
}

