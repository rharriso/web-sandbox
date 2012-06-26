importScripts("base64.js");

/*
	Property: dataPrefix
		lookup of data prefixes for different content types
*/
var dataPrefix = {
	"jpg": "data:image/jpeg;base64,",
	"jpeg": "data:image/jpeg;base64,",
	"png": "data:image/png;base64,",
	"gif": "data:image/gif;base64,",
}

/*
	Function: onMessage
		prepare request for image data
 */
self.onmessage = function(e){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("text/plain; charset=x-user-defined");
    xhr.open('GET', e.data, false);
    
    //determine the suffix
    var componentArr = e.data.split("."),
    	suffix = componentArr[componentArr.length-1];
    	suffix = suffix.toLowerCase();

    //on complete
    xhr.addEventListener("load", function() {

    	resp = {
    		status: xhr.status,
    		requestURL: e.data,
    		content: null
    	}

    	//if success, convert to base64 encoding
		if(xhr.status === 200){
			resp.content = dataPrefix[suffix]+base64.encode(xhr.responseText);	
		}else{
			resp.content = xhr.responseText
		}		

		//send json back in response
		postMessage(JSON.stringify(resp));

    }, false);

    xhr.send();
}