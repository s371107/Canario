var request;
if(window.XMLHttpRequest)
    request = new XMLHttpRequest();
else
    request = new ActiveXObject("Microsoft.XMLHTTP");
request.open('GET', 'http://www.mozilla.org', false);
request.send(); // there will be a 'pause' here until the response to come.
// the object request will be actually modified
if (request.status === 404) {
    alert("The page you are trying to reach is not available.");
}