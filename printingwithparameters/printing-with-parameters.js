var https = require("https");

function getAndPrintHTML(options) {
  /* Add your code here */

  var bufferedStr;

  https.get(requestOptions, function(response) {
    // set encoding of received data to UTF-8
    response.setEncoding("utf8");

    // the callback is invoked when a `data` chunk is received
    response.on("data", function(data) {
      bufferedStr += data;
      console.log(bufferedStr);
    });
  });
}

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step3.html"
};

getAndPrintHTML(requestOptions);

//----------------------------------

// function getAndPrintHTML() {
//   var requestOptions = {
//     host: "sytantris.github.io",
//     path: "/http-examples/step2.html"
//   };
//   var bufferedStr;
//   /* Add your code here */
//   https.get(requestOptions, function(response) {
//     // set encoding of received data to UTF-8
//     response.setEncoding("utf8");

//     // the callback is invoked when a `data` chunk is received
//     response.on("data", function(data) {
//       bufferedStr += data;
//       console.log(bufferedStr);
//     });
//   });
// }
