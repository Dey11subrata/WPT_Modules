// use http module

const http=require('http');

const server=http.createServer((request,response)=>{
    // here all the coding from accepting the request to processing the request and to send the response would be entered.
    console.log('server is processing the request');
    response.write('hello welcome....');
    response.end();
    console.log('request served');

});

//server.listen(1200);// this will listen the request and start the server.

server.listen(1200,()=>{
    console.log("server is listining.......")
})