const events = require('events');


//Creating a instance
const emitter = new events.EventEmitter();

//Creating a event first argument is the name and follow up are the data
emitter.on("CustomEvent",(message, user) => {
    console.log(`${user} : ${message}`);
});

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if(input==="exit"){
        emitter.emit("CustomEvent","Exitting..","Process");
        process.exit();
    }
    emitter.emit("CustomEvent",input,"Computer");

})