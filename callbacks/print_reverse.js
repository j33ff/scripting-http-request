var https = require('https');
var getAndPrintHTML = require('../printing-parameters.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printReverse(html){
  console.log(html.split('').reverse().join(""));
}



getAndPrintHTML(requestOptions, printReverse);