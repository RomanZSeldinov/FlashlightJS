/**
 Flashlight JS library - web.js
 HTTP Flashlight functions
 */

// ---- POST/GET requests

// snedPostRequest
function sendPostRequest(URI, content, contentType) {

    var http;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        http = new XMLHttpRequest();
    }
    else {
        // code for IE6, IE5
        http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    http.open("POST", URI);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-Type", contentType);
    /*http.onreadystatechange = function() { //Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {

        }
    }*/
    http.send(content);
}
