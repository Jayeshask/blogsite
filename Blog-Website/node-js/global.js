//Global Object

// TO get all the methods in global object
//console.log(global);

// globalThis.setTimeout(()=>{
//     console.log('Time Out');
// }, 3000);

//We don't habve to explicitly mention global it is available to us out of the box
//Example down


//setTimeout will run exacatly once after the given interval and the before the intterval occure js will move with next line of code
// setInterval will be called every defined interval, and will also go with the next line of code
// clearInterval to exit the function

// setTimeout(()=>{
//     clearInterval(int);
// }, 3000);

// const int = setInterval(() => {
//     console.log('Calling interval')
// }, 1000);

// console.log("Dirname " + __dirname);
// console.log("Filename " + __filename);


const waitTime = 5000;
const intervalTime = 500;
let currentTime = 0;
console.log(`Setting a timer for ${3000/1000} seconds`)

const incCurrentTime = () => {
    currentTime += intervalTime;
    let p = (currentTime/waitTime) * 100;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting.....${p}%`);
    
}

const afterWaitTime = () => {
    clearInterval(interval);
    console.log("\ndone");
}


setTimeout(afterWaitTime,waitTime);
const interval = setInterval(incCurrentTime, intervalTime);

