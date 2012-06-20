self.onmessage = function(){
	var xhr = new XMLHttpRequest();
    xhr.open('GET', "image.php", false);
    xhr.overrideMimeType("text/plain; charset=x-user-defined");
    xhr.send();
    
    postMessage(xhr.responseText);
}