const http = require('http');
const fs = require('fs');
//Importing the http module for creating of the server

//Creating a server and saving its instance in server variable
//It takes a call back function has a argument which has two argument req and res
//the call back function will be called everytime when a request is made

const server = http.createServer((req,res) => {
    console.log("Request is made");
    // req object has man methods and properties
   // console.log(req.url, req.method);

    //Dealing with the response


    //Setting the header for the response
    //We can set multiple header which is available in http
    // res.setHeader('Content-Type' ,'text/html');
    // //To write back the response
    // res.write('<p>Hello World</p>');
    // res.write('<p>Hello, agian</p>');
    //Returning big html pages like the above method could look messy 


    //Or we can return a file with fs module
    // fs.readFile('./views/view.html',(err, data) =>{
    //     if(err){
    //         console.log(`error ${err}`)
    //         res.end();
    //     }
    //     else{
    //        res.write(data);
    //        res.end();
    //     }
    // });
    //The problem is that it will return the same response for each request

    //Routng
    
    //setting up the path
    path = './views/';

    switch(req.url){
        case '/':
            path += 'view.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            console.log("Reached here");
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path,(err,data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    })


    //To end the response
    //res.end();
})


//After creating a server we also need to listen on the server
// So we have to mention the ip, port and a call back function
server.listen(3001, 'localhost', () => {
    console.log("Sever is running");
});