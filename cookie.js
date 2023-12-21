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
    // Find the specified cookie and return its value
    var searchName = name + "=";
    var cookies = document.cookie.split(";");

    for (var i=0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(searchName) == 0)
            return c.substring(searchName.length, c.length);
    }
    return null;
}

function eraseCookie() {
    // Code, p.118
}
