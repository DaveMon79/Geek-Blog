const router = require('express').Router();
const { User, Blog } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/new-form/:id', withAuth, async (req, res) => {
    try {
        const comment = await Blog.findByPk(req.params.id, {
        
            attributes: ['id', 'user_id'],
            include: [{ model: User, attributes: ['id', 'username'] }],

        });

        const newCom = comment.get({ plain: true });
        const obj = { blogs: newCom, logged_in: req.session.logged_in }
        console.log(obj)
        res.render( "new-comment" , obj);
      
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});



router.post('/new-blog', withAuth, async (req, res) => {

    try {
        const blog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
            username: req.session.username,
        });

        res.json(blog)
    } catch (err) {
        res.status(500).json(err)
    }
});


router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            where: {
                user_id: req.session.user_id
            },

            attributes: ['id', 'title', 'blog', 'date_created', 'user_id'],
            include: [{ model: User, attributes: ['username'] }],

        });

        const blogsSerialized = blogs.map((blog) => blog.get({ plain: true }));
        const obj = { blogs: blogsSerialized, logged_in: req.session.logged_in }

        res.render('dashboard', obj);

    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/edit-blog/:id', withAuth, async (req, res) => {
    try {
        const blogs = await Blog.findByPk(req.params.id, {

            attributes: ['id', 'title', 'blog', 'date_created', 'user_id'],
            include: [{ model: User, attributes: ['username'] }],

        });

        const blog = blogs.get({ plain: true });
        const obj = { blogs: blog, logged_in: req.session.logged_in }

        res.render('edit-blog', obj);

    } catch (err) {
        res.status(500).json(err);
    }
});



router.post('/new-blog', withAuth, async (req, res) => {

    try {
        const blog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
            username: req.session.username,
        });

        res.json(blog)
    } catch (err) {
        res.status(500).json(err)
    }
});


router.put('/update-blog/:id', withAuth, async (req, res) => {

    try {
        const blog = await Blog.update({
            title: req.body.title,
            blog: req.body.blog,
            user_id: req.session.user_id
        },
            { where: { id: req.params.id } });

        res.json(blog);
    } catch (err) {
        res.status(500).json(err)
    }
});


router.delete('/delete-blog/:id', withAuth, async (req, res) => {

    try {
        const blog = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!blog) {
            res.status(404).json({ message: '404 No blog found' });
            return;
        }
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;