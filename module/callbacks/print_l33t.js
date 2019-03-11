var getHTML = require("../http-functions");

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/1337.html"
};

function l337(html) {
  var modtext = html
    .replace(/a/g, "4")
    .replace(/er/g, "0r")
    .replace(/e/g, "3")
    .replace(/you/g, "j00")
    .replace(/o/g, "0")
    .replace(/l/g, "1")
    .replace(/s/g, "5")
    .replace(/t/g, "7")
    .replace(/ck/g, "x");
  console.log(modtext);
}

getHTML(requestOptions, l337);

//'5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'
