// program to use user defined module
// for this we have to first create an user defined module

// require modules
const http=require('http');
const userdef=require('./myModule');


// create a server

var server=http.createServer((request,response)=>{
    var x=10;
    var y=20;

    var sm=userdef.sum(x.y);
    var fact=userdef.factorial(6);
    var mul=userdef.multiplication(x,y)
    response.write(`sum is ${sm}, factorial is ${fact}, multipliction is ${mul} `);
    console.log('complete');
    // response has not been closed yet
    response.end();
});

// add a listner to start the server

server.listen(8900,()=>{
    console.log('srver is listning to port 8900........')
})