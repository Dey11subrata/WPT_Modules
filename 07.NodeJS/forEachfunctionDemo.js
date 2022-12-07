// using forEach() method to itterate on array in js

var array=[8,52,4,23,58,41,78,52,63,66,321,9];

array.forEach(function(item){
    console.log(item);
})
// printing each element of array 
// forEach () will pick an array element from array and assign it to the 
// first argument of callback function.

console.log("giving two argument to callback function");
array.forEach(function(item,index){
    console.log(index);
})

console.log("giving three arguments ")
array.forEach(function(item,index,element){
    console.log(element);
})

// in each itteration element will print
// [
//     8, 52,  4, 23, 58,
//    41, 78, 52, 63, 66,
//   321,  9
// ]

// printing value and its index
console.log("item and its index");
array.forEach(function(item,index){
    console.log(item +" at index: "+index);
})


console.log("printing only even items");
array.forEach(function(item, index){
    if (item%2==0)
    console.log(item+", "+index);
})