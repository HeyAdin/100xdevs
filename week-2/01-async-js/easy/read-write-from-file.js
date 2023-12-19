const fs  = require('fs');
fs.readFile("/home/hey_adin/Desktop/100xdevs/week-2/01-async-js/easy/file.txt","utf-8",function(err,data){
    console.log(data);
});
let a =0;
for(let i = 0;i<10000000000;i++){
    a++;
}
console.log(a);