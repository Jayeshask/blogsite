

//Process is available from the global

//To print the process id
console.log(process.pid);
//to get the version of the node
console.log(process.versions.node);

//To write a command line program we need to get the argument as input
//The following will return the array of arguments while running the node file

//So it returns a array we can desconstruct the array
[, ,firstName,lastName] = process.argv;
//Running the command node process Tejas Gudulekar
//console.log(`My first name is ${firstName} and last name is ${lastName}`);


//Or we can declare a grab function as follows
// const grab = (flag) => {
//     let indexOfFlagValue = process.argv.indexOf(flag) + 1;
//     return process.argv[indexOfFlagValue];
// }

// //Getting the flag values
// const nameValue = grab("--user");
// const greetingValue = grab("--greeting");
// console.log(`${greetingValue} ${nameValue}`);


//Stdin and stdout
//It allows us to commmunicate with the process while its running
//With console.log we are getting a new line
//But with process.stdout.write it will stick to the current line untill explicitly asked to change the line

const question = [
    'What is your name?',
    'What is your preferred programming language?',
    'What would you rather be doing?',
]

const askQuestion = (i=0) => {
    process.stdout.write(`\n\n ${question[i]}`);
    process.stdout.write('>  ');
}

//Asking the first question
askQuestion();
answers = [];

//Creating a sync function which will keep running until expliicilty exit
// process.stdin.on is event function which will lookfor data and if it get data and user its hit enter
// it will call the call back function
process.stdin.on('data',(data)=>{
    answers.push(data.toString().trim())

    if(answers.length < question.length){
        askQuestion(answers.length);
    }
    else{
        //Telling to exit
        process.exit();
    }
});

//When exit is called
process.on('exit',()=> {
    [name,lang,activity] = answers;
    console.log(`
Go ${name} , ${activity} you can code ${lang} later!!
    `)
})