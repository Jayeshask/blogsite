const fs = require('fs');

//Reading a file
//It is async in nature it will continue to the next line untill the function is running and then when ready it will call the callbackfunc
//It will take two parameter the relative file location in string and a function which has two
// parameter err and data.
// fs.readFile('./readme.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

//Writng a file
// It is a agian async function takes three parametrs the relative file path, data and callback function
// if a file all ready exits it will re-write the data and if not it will create a new file
// fs.writeFile('./newfile.txt',"Hello World",() => console.log("file is written"));
//appendFile will append the file; wehere writeFile will overwrite


//Directories
//We can chech if a folder exists or not because if try to re-create same folder it will give us a error
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=> {
//         if(err){
//             console.log(err);
//         }
//         console.log("Directory created")
//     })
// }
// else{
//     fs.rmdir('./assets',(err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Directory removed');
//     })
// }
//Deleting a dir with multiple files would through err if it contain file, we need to first remove the files
// deleting files
// if(!fs.existsSync()){
//     fs.unlink('./newfile.txt',(err) =>{
//         if(err){
//             console.log(err);
//         }
//         console.log("file deleted");
//     })
// }

//read all the files

//Using the sync
// const files = fs.readdirSync("./views");
// console.log(files);

//With async
fs.readdir("./views",(err,files) => {
    if(err){
        console.log(err);
    }
    console.log(files);
})

//Renaming file or moving the file
// fs.renameSync("relativeLocation","newLocation");
//fs.rename("relativeOlfLocation","newLocation",(err)=>console.log(err))

