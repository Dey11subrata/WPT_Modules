const flread=require('fs');

flread.readFile('demo.txt',(error,data)=>{
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
    console.log('reading data complete');
});
    console.log('after reading data complete');