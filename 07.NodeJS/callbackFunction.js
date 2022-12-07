// a function that is passed inside the argument of some another function is known as callback function

function show(x){
    console.log("hello java script");
    x();
}

function greet(){
    console.log("hello node.....")
}

show(greet); // greet is callback function

