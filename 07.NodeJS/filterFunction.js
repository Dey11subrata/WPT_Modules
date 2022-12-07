// filter() function will return boolean value and on the basis of it elements will get filtered

var array=[1,2,5,3,7,8,9,4,10,15,11];

var arr=array.filter(function(item){
    return item%2==0;
})

console.log(arr);
console.log(array);