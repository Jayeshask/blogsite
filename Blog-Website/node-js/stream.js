// fs is good for small files but for big files it will take a lot of time for reading the file
// Streams: Start using data, before it has finished loading
// Example: Streaming videos


//Importing the fs module
const fs = require('fs');


//using fs.createReadStream to read data in form of small stream and can also pass extra argument object to 
//Specify the encoding
const readStream = fs.createReadStream('./docs/bigdoc.txt', {
    encoding:'utf-8'
});
//For writing in stream
const writeStream = fs.createWriteStream('./docs/writestream.txt');


//After getting the data the call back function will be called 
// i.e with the on function every time it receive data it will call the call back function
// readStream.on('data',(chunk) => {

//     console.log("New Chunk Of data");
//     //it will write the data
//     writeStream.write('\n NEW CHUNK OF DATA \n')
//     writeStream.write(chunk);
    
// });

//Alternate for writing the stream while it receiving
readStream.pipe(writeStream);


//It is asyc in nature
console.log("----------------Async in NAture--------------------------------------------");

