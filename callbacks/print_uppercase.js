var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printHTMLUppercase (html) {
  html = html.toUpperCase();
  console.log(html);
}


getHTML(requestOptions, printHTMLUppercase);

