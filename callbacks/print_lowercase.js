var https = require('https');
var getAndPrintHTML = require('../printing-parameters.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printLowercase(html){
  console.log(html.toLowerCase());
}



getAndPrintHTML(requestOptions, printLowercase);