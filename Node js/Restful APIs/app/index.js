/*
* Primary file for the API

*/

// Dependencies 
const http = require("http");
const url = require('url')

//Server should response to incoming requests with string

const server = http.createServer((req,res)=>{


    //parse the incoming URL
    const parsedUrl = url.parse(req.url,true);
    
    //Get path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    
    //Get http method 
    const method = req.method.toLocaleLowerCase();

    //Send response
    res.end("Hello World \n");

    console.log("Requested path is "+ trimmedPath + " and request method is "+method)
})

//Start listening on the server
server.listen(3000,()=>{
    console.log("Server is Listening on PORT 3000")
})
