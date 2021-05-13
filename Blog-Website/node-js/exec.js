const cp = require("child_process");
//With node we can create child process 

//Execute a system code, can't handle async
// cp.exec("dir",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// });

//For handling async we need not to exec but to spawn it
//Can a spawn a process and can communicate with stdin and stdout
const question = cp.spawn("node", ["ask.js"]);

question.stdout.on("data",data => console.log(data.toString()));



