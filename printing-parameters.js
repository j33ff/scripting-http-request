var https = require('https');

// export and then  require html below
function getAndPrintHTML (options, callback) {


  console.log('MY DEBUGGER:', options, callback);


  /* Add your code here */
   https.get(options, function(response){
    response.setEncoding('utf8');

    var rawData = '';
    response.on('data', function (data) {
      rawData += data;
    })

    response.on('end', function() {
    callback(rawData);

    });

  })

}

module.exports = getAndPrintHTML;


///////////////////////

