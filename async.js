var fs = require("fs");

console.log("Begin reading async");
fs.readFile('input.txt', function (err,data){
	if (err) return console.error(err);

	console.log(data.toString());
	console.log("End reading");
});