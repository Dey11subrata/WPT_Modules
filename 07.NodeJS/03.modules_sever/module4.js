const fsRdSync=require('fs');

const data=fsRdSync.readFileSync('demo.txt');
// console.log(data);
console.log(data.toString());

