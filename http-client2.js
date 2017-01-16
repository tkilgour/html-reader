var https = require('https');

function getAndPrintHTML() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    var buffer = "";

    response.setEncoding('utf8');
    response.on('data', function (data) {
      buffer += data + '\n';
    });
    response.on('end', function () {

      console.log(buffer);
    });
  });

}

getAndPrintHTML();