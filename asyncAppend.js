// Asynchronously:

var fs = require("fs");

console.log("Begin reading file");
fs.readFile('input.txt', (err,data)=>{
  if (err) console.log(err)
     console.log(data.toString());
  console.log("End reading file");

    console.log("Appending something");
    fs.appendFile('input.txt',"Add something new..",(err)=>{
    if (err) console.log(err);
    console.log("Successfully append something");

    console.log("Begin re-reading file");
    fs.readFile('input.txt', (err,data)=>{
          if (err) console.error(err);
          console.log(data.toString())
          console.log("Finish re-reading file")
    })

    })

})



