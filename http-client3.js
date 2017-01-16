var https = require('https');

function getAndPrintHTML(options) {

  https.get(options, function (response) {
    var buffer = "";

    response.setEncoding('utf8');
    response.on('error', function (error) {
      console.log('Whoops! An error occured: ' + error);
    });
    response.on('data', function (data) {
      buffer += data + '\n';
    });
    response.on('end', function () {

      console.log(buffer);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getAndPrintHTML(requestOptions);
