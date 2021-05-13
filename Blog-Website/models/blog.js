const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema has a constructor function
//Schema defines the structure of our document

const blogSchema = new Schema({
    //Defining the paramter
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
},
//Defining the optional paramter
{
    timestamps: true
})


//Models wraps up on the schema and provide us with an interface to connect with the database
//First paramter singular name of the collection
Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;
