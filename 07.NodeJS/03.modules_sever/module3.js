const fsSync=require('fs');

fsSync.writeFileSync('demo.txt', 'appending date in the existing file');
console.log('file written');
console.log('complete');