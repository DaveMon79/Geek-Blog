const router = require('express').Router();
const { Blog, User } = require('../models');

// Returns all blogs and renders home page
router.get('/', async (req, res) => {

    try {
        const blogs = await Blog.findAll({
            attributes: ['id', 'title', 'blog', 'date_created', 'user_id'],
            include: [{ model: User, attributes: ['username'] }],
        }); 

        const blogsSerialized = blogs.map((blog) => blog.get({ plain: true }));
        const obj = { blogs: blogsSerialized, logged_in: req.session.logged_in }

        res.render('saved-blogs', obj);
  
    } catch (err) {
        res.status(500).json(err);
    }
});


// Renders new blog page
router.get('/new-blog' , async (req, res) => {
    try {

        res.render('new-blog');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Renders signup or signin prompt
router.get('/signin-signup', async (req, res) => {
    try {
        res.render('signprompt')
    } catch (err) {
        res.status(500).json(err)
    }
});

// Renders the sign in page
router.get('/sign-in', async (req, res) => {
    try {
        res.render('signin')
    } catch (err) {
        res.status(500).json(err)
    }
});

// Renders the sign up page
router.get('/sign-up', async (req, res) => {
    try {
        res.render('signup')
    } catch (err) {
        res.status(500).json(err)
    }
});



module.exports = router;