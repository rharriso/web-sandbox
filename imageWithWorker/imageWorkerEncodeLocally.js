importScripts("base64.js");

self.onmessage = function(e){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("text/plain; charset=x-user-defined");
    xhr.open('GET', e.data, false);
    
    xhr.onreadystatechange = function() {
    	postMessage("data:image/jpeg;base64,"+base64.encode(xhr.responseText));
    };
    xhr.send();
}