const people = ['Person-1', 'Person-2','Person-3','Person-4'];
const ages = [21, 22, 23, 24];

//To export something and pass it to the file which is importing this file
//We can export using modules.export;

//Following is exporting single variable
//module.exports = people;

//We can export multiple objects using object as follows

module.exports = {
    //Object setting the key value pair
    // people : people,
    // age: age

    // We can shorten the age two lines as follows
    people,
    ages
}