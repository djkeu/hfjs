function writeCookie(name, value, days) {
    // By default the cookie is temporary
    var expires = "";

    // Specify number of days cookie should be persistant
    if (days) {
        var date = new Date();
        // Convert days to milliseconds, add to current time
        date,setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }

    // Set the cookie to the name, value and expiration date
    document.cookie = name + "=" + value + expires + "path=/";
}

function readCookie() {
    // Code, p.118
}

function eraseCookie() {
    // Code, p.118
}
