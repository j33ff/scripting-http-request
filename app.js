var getAndPrintHTML = require('./printing-parameters.js');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getAndPrintHTML(requestOptions, printHTML);