var ejs = require('ejs');
var template_list = require('./list');


var data = {data:["Acer","Sony","Apple","ASUS","BenQ","HTC"]}

var html = ejs.render(template_list, data);


document.getElementById("section").innerHTML = html;