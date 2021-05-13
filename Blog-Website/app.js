const express = require('express')
const moongose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

const app = express();

//Connect to databse
const DbUri = 'mongodb+srv://tejassg:test1234@blog-app.rpj8f.mongodb.net/blog-website?retryWrites=true&w=majority'
moongose.connect(DbUri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log('\n\n Error:' + err))

//Register view engine
app.set('view engine','ejs');
app.set('views','my-views');

//Middleware
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res) => {
   res.redirect('/blogs')
})

app.get('/about', (req,res) => {
    res.render('about', { title: 'About'})
 })
 
//redirects
app.get('/about-us', (req,res) => {
     res.redirect('/about');
 })

//blog routes
app.use('/blogs',blogRoutes)


//404 page
app.use((req,res) => {
    res.status(404).render('404',{title: 'Erro 404'});
})


//Mongoose and mongo sandbox routes

//---Adding the data
// app.get('/add-blog', (req, res) =>{
//     //Creating a instance for the blog and passing the value
//     const blog = new Blog({
//         title:'Blog 2',
//         snippet: 'Snippet of my blog',
//         body: 'Blog of my blog'
//     })

//     blog.save()
//     .then( result => res.send(result))
//     .catch ( err => console.log(err))
// })

// //-----Getting all the blogs
// app.get('/get-blogs', (req, res) => {
//     Blog.find()
//         .then( result => res.send(result))
//         .catch( err => console.log(err))
// })

// //----Getting a single blog
// app.get('/single-blog', (req,res) => {
//     Blog.findById('6098d361b6927308d4a972a0')
//         .then( (result) => res.send(result))
//         .catch( (err) => console.log(err))
// })

//Listen for requests


