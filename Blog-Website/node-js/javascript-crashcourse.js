//Pop-up alert
//alert("Hello");

//Loging on console
//console.log("Logging in");


//Variables
// let age = 25;
// console.log(age);

// the == operator is used to compare two variables and === is used to compare two variables and their data types
// Data types: var let and const
// Numbers: 1, 2, 3... declared without quotes
// Strings: declare using quotes
// Boolean: true false
// Null: explicitly declared as null
// Undefined: values are not defined yet

//Functions

//function declartion
// function greet(name){
//     console.log("Hello there" + name);
// }

// In javascript with function declartion we can call the function above the declartion because of javascript
//Hoistingg, but we cannot do it function expression

//function expression
//Anytime we use a variable to initialzed a function, string or anything it is called expression
//If a function is called without passing the value for argument defined it will return the undefined
//But to vaoid that we can set default value in the argument
// const greet = function(){
//     console.log("Expression");
// };

//Arrow function
//const greet =name=> console.log(`Heeelo ${name}`);
// In arrow function we will remove the function keyword and if there is exactly one paramter
// we can also remove the paranthesis and if it has single line of code we can also remove the braces
 
//greet("tejas");

//Call back function
//In callback function we pass function as a argument
// const myFunc = (callback) => {
//     let value = 50;
//     callback(value);
// }

// myFunc(function(value){
//     console.log(value);
// });


// For each is a method which iterates every element
//Takes upto 2 argument first the element and second the index
// let people = ['People 1', 'People 2', 'People 3', 'People 4'];

// people.forEach((person)=>{
//     console.log(person)
// });