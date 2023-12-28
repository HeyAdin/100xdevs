const fs = require('fs');
// const { resolve } = require('path');

function callback (err,data){
    data = data.replace(/\s+/g, ' ');
    console.log(data);
    fs.writeFile("/home/hey_adin/Desktop/100xdevs/week-2/01-async-js/medium/test-file.txt",data,(err) => {
        if (err) {
          console.error('Error writing to file:', err);
          return;
        }
      });
}

fs.readFile("/home/hey_adin/Desktop/100xdevs/week-2/01-async-js/medium/test-file.txt", "utf-8",callback);


// function readFunc() {
//   return new Promise((resolve) => {
//     fs.readFile('/home/hey_adin/Desktop/100xdevs/week-2/01-async-js/medium/test-file.txt', 'utf-8', (err, data) => {
//       console.log(data);
//       data = data.replace(/\s+/g, ' ');
//       resolve(data);
//     })
//   })
// }

// function writeFunc(data){
//   fs.writeFile('/home/hey_adin/Desktop/100xdevs/week-2/01-async-js/medium/test-file.txt', data, (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//       return;
//     }
//   })
//   console.log(a);
// }

// // let a = readFunc();
// // console.log(a);
// // a.then(writeFunc);

// //ASYNC AWAITS

// function asyncReadFunc() {
//   return new Promise((resolve) => {
//     fs.readFile('/home/hey_adin/Desktop/100xdevs/week-2/01-async-js/medium/test-file.txt', 'utf-8', (err, data) => {
//       console.log(data);
//       data = data.replace(/\s+/g, ' ');
//       resolve(data);
//     })
//   })
// }

// async function asyncWriteFunc(){
//   let data = await asyncReadFunc();
//   fs.writeFile('/home/hey_adin/Desktop/100xdevs/week-2/01-async-js/medium/test-file.txt', data, (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//       return;
//     }
//   });
// }

// asyncWriteFunc();
// console.log("Hello I am Adin as per my learning this line should come first ");