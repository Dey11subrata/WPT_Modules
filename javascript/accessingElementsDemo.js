// Accessing elements

// var list=document.getElementsByTagName('*');

// document.write(list);
// console.log(list);

var item = document.getElementById("form");
var list = item.getElementsByTagName('*');
document.write(list);
console.log(list);

// direct accessing all the elments of form is not allowed 
// but indirectly with the help of ID all elements of form is also accessible.
