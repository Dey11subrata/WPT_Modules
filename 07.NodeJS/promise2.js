
function checkEven(n){
    return new Promise((resolve,reject)=>{
        if(n%2==0){
            resolve([10,20,30,40]);
        }
        else{
            reject("oops promise is rejected and number is not even");
        }
    });
}

checkEven(8).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});