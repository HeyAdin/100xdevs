const fs = require('fs');
let mydata = "Hi there, I am Adin";
fs.writeFile('/home/hey_adin/Desktop/100xdevs/week-2/01-async-js/easy/file.txt', mydata, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log(mydata);
  });