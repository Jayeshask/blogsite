const express = require('express')
const blogControllers = require('./../controllers/blogController')


const router = express.Router()

router.get('/', blogControllers.get_index )

router.get('/create', blogControllers.get_create )

router.post('/', blogControllers.post_create)

router.get('/:id', blogControllers.get_detials )

router.delete('/:id', blogControllers.delete_blog )

module.exports = router