//Importing stuff from another files
//We can set any name to it and we need touse require keyword and pass the relative path
//It will call the file and run the code

const xyz = require('./people');


//It is returning a empty object because the file we are importing it not exporting anything
// console.log(xyz);

//Note: Even if we imported the file it doesn't give us excess to the fie variable
// To access the data from the imported we need to manually export the data
// Now we export something from the imported file we can now access the exported data using above
//declared variable while importing

// console.log(xyz);

//Now if we importing multiple data variable we can access each with twp methods

//1) Using the dot operator
//The name preceding the object should be same as what we are setting the key value value exporting
console.log(xyz.people);
console.log(xyz.ages);

//2) We can deconstruct the object while importing
//But while deconstructing the variable should have the same name as key or it will return undefined
// const {people,ages} = require('./people');
// console.log(people);
// console.log(ages);

//We can also predined files like os
// const os = require('os');
// console.log(os);