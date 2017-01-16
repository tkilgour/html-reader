var https = require('https');

function getHTML(options, callback) {
  var buffer = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');
    // response.on('error', function (error) {
    //   console.log('Whoops! An error occured: ' + error);
    // });
    response.on('data', function (data) {
      buffer += data + '\n';
    });
    response.on('end', function () {
      callback(buffer);
    });
  });
  return buffer;
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printHTML);
