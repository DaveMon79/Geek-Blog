const router = require('express').Router();
const { User, Blog } = require('../../models');
const withAuth = require('../../utils/auth');


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
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/edit-blog/:id', async (req, res) => {
    try {
        const blogs = await Blog.findByPk(req.params.id, {

            attributes: ['id', 'title', 'blog', 'date_created', 'user_id'],
            include: [{ model: User, attributes: ['username'] }],

        });

        const blog = blogs.get({ plain: true });
        const obj = { blogs: blog, logged_in: req.session.logged_in }

        res.render('edit-blog', obj);

    } catch (err) {
        console.log(err);
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
        console.log(blog)
        res.json(blog)
    } catch (err) {
        res.status(500).json(err)
    }
});


router.put('/update-blog/:id', async (req, res) => {

   const put = { 
    id: req.params.id,
    title: req.body.title,
    blog: req.body.text,
    date_created: "",
    user_id: req.session.user_id
   }

    console.log(put)
    try {
        const blog = await Blog.update({
            put

        });

        res.json(blog);
    } catch (err) {
        console.log(err)
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