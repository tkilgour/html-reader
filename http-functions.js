module.exports = function getHTML (options, callback) {
  var https = require('https');
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
};