//synchronously:

var fs = require("fs");

console.log("Begin reading append sync");
var data = fs.readFileSync('input.txt');
 console.log(data.toString());
  console.log("End reading file");

    console.log("Appending something");

    var data = fs.appendFileSync('input.txt','Append something new here...');
    console.log("Appending something");
       console.log("Begin re-reading file");

var data = fs.readFileSync('input.txt');
  console.log(data.toString());
  console.log("Finish re-reading");

