// Promise constructor will take a callback function as an argument.

var evenPromise = new Promise((resolve, reject)=>{
    var n=3;
    if(n%2==0){
        resolve();
    }
    else{
        reject();
    }
});

evenPromise.then(()=>{
    console.log("promisw is resolved and the number is even");
}).catch(()=>{
    console.log("oops promise is rejected and number is not even");
});