const Blog = require('./../models/blog')

const get_index = (req,res) => {
    Blog.find().sort({createdAt: -1})
        .then( (result) => {
            res.render('index', {
                title: 'All Blogs',
                blogs: result
            })
        })
        .catch( err => console.log(err))
}

const get_create = (req,res) => {
    res.render('create', { title: 'Create a new blog'});
}

const post_create = (req,res) => {
    const blog = new Blog(req.body)

    blog.save()
        .then( result => res.redirect('/'))
        .catch( err => console.log(err) )
}

const get_detials = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then( result => res.render('detials', { blog: result, title: 'Blog detials'}))
        .catch( err => res.status(404).render('404',{title: 'Erro 404'}))
}

const delete_blog = (req,res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then( result => {
            res.json({redirect:'/blogs'})
        })
        .catch( err => console.log(err))
}

module.exports = {
    get_index,
    get_create,
    post_create,
    get_detials,
    delete_blog
}

