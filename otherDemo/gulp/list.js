var list_template = "\
<ul> \
<% for(var i=0; i < data.length; i++ ) { %> \
  <li> <%= data[i] %> </li>  \
<% } %> \
</ul>";

module.exports = list_template;