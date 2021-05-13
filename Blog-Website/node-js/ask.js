//Demonstrating how core modules can make things easy
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question("How do you like node", (answer) => {
//     console.log(`Your answer is: ${answer}`);
// })


//Questins and answers using readline

const questions = [
    'What is your name? ',
    'Where do you live? ',
    'What are you gonna do after learning nodejs'
];

//A function to ask questions and after getting all the questions calling the call back function
const collectAnswers = (questions, done =f => f) =>{
    const answers = [];
    const [firstQuestion] = questions;

    const answeredQuestion = answer => {
        //Adding the answer in the answers array
        answers.push(answer);
        //Checking if we get all the answers
        if(answers.length<questions.length){
            rl.question(questions[answers.length], answeredQuestion);
        }else{
            done(answers);
        }
    }

    //Asking the first question and after getting the first answer calling the call back function
    rl.question(firstQuestion, answeredQuestion);
}

collectAnswers(questions,(answers)=>{
    console.log("Thank You for answering the questions");
    console.log(`Here are your answers\n ${answers}`);
    process.exit();
})