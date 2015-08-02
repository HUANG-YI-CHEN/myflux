var RSVP = require('rsvp');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

getJSON("http://www.twgreenergy.net/api/jsonfeed.php?did=2&limitnum=5")
.then(function(data) {
 	console.log(data);
}, function(data) {
  	console.log('error',data);
});



function getJSON(url){
	return new RSVP.Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			console.log(this.status);
			if (this.status == 200) resolve(this.responseText);
			else reject(this);
		};
		xhr.open("GET", url);
		xhr.send();
	});
}