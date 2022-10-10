const router = require('express').Router();
const { Comment, Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');



// Returns edit comment handlebar
router.get('/edit/:id', withAuth, async (req, res) => {

  try {
    const comments = await Comment.findByPk(req.params.id, {

      attributes: ['id', 'comment', 'date_created', 'blog_id'],
      include: [{ model: User, attributes: ['id','username'] },
      { model: Blog, attributes: ['id'] }
      ],

    });

    const comment = comments.get({ plain: true });
    const obj = { comments: comment, logged_in: req.session.logged_in }

    res.render("edit-comment", obj);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Returns all comments on selected blog
router.get('/:id', withAuth, async (req, res) => {

  try {
    const comments = await Comment.findAll({
      where: {
        blog_id: req.params.id,

      },

      attributes: ['id', 'comment', 'date_created', 'blog_id'],
      include: [{ model: User, attributes: ['id','username'] },
      { model: Blog, attributes: ['id'] }
      ],

    });

    const commentsSerialized = comments.map((comment) => comment.get({ plain: true }));
    const obj = { comments: commentsSerialized, logged_in: req.session.logged_in }

    res.render('comment', obj);

    if (!comments) {
      res.status(404).json({ message: '404 No comments found' });
      return;
    }

  } catch (err) {

    res.status(500).json(err);
  }
});


// Creates a new comment on selected blog
router.post('/create/:id', withAuth, async (req, res) => {
  try {
    const comment = await Comment.create({
      comment: req.body.comment,
      blog_id: req.params.id,
      user_id: req.body.user_id,

    });
    console.log("hello")
    res.json(comment)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});


// Updates an exsisting comment
router.put('/update/:id', withAuth, async (req, res) => {
  try {
    const comment = await Comment.update({
      comment: req.body.comment,
      blog_id: req.body.blog_id,
      user_id: req.body.user_id
    },
      { where: { id: req.params.id } });
console.log(comment)
    res.json(comment);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});


// Deletes an exsisting comment
router.delete('/delete/:id', withAuth, async (req, res) => {

  try {
    const comment = await Comment.destroy({
      where: {
        id: req.params.id

      },
    });
    if (!comment) {
      res.status(404).json({ message: '404 No comment found' });
      return;
    }
    res.status(200).json(comment);
  } catch (err) {

    res.status(500).json(err);
  }
});


module.exports = router;