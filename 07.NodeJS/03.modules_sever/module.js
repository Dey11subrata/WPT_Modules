const fl=require('fs');

fl.writeFile('demo.txt','hello it is an demo to use fs module asynchoronous way to write in files in java script',()=>{
    console.log('write operation complete');
});

console.log('after write operation complete');