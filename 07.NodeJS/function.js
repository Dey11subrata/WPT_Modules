// applying function concept in js

function show(){
    console.log('hello world');
    return 5;
}

var object = show;
console.log(object);
var val = object();
console.log(val);