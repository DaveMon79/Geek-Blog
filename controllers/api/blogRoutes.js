const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');



router.get('/dashboard/:id', withAuth, async (req, res) => {
    try {
        const blogs = await Blog.findByPk({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
              },

            attributes: ['username', 'title', 'blog', 'date_created' ,'user_id'],
            include: [{ model: Comment }, { model: User }],

        });

        const blogsSerialized = blogs.map((blog) => blog.get({ plain: true }));
        const obj = { blogs: blogsSerialized }
        res.render('dashboard', obj);

    } catch (err) {
        res.status(500).json(err);
    }
});



router.post('/', withAuth, async (req, res) => {
    try {
        const blog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.json(blog)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const blog = await Blog.update({
            ...req.body,
            user_id: req.session.user_id
        });
        res.json(blog);
    } catch (err) {
        res.status(500).json(err)
    }
});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blog = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!blog) {
            res.status(404).json({ message: '404 No comment found' });
            return;
        }
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;