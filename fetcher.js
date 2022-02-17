const request = require('request');
const fs = require('fs');
let args = process.argv;
let link = args[2];
let location = args[3];

request(link, (error, response, body) => {

  const content = body;

  //Displays the file size in bytes
  console.log(`Downloaded and saved ${(new TextEncoder().encode(content)).length} bytes to ${location}`);

  //taking in the file location to save the data to
  fs.writeFile(location, content, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
});