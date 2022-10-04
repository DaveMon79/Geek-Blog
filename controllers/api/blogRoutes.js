const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req,res) => {
    Blog.findAll({})
    .then(comment => res.json(comment))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});


router.get('/:id', withAuth, (req, res) => {
    Blog.findByPk({
            where: {
                id: req.params.id
            }
        })
        .then(comment => res.json(comment))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});


router.post('/', withAuth, async (req, res) => {
  try {
    const comment = await Blog.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.json(comment)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/', withAuth, async (req, res) => {
    try {
      const comment = await Blog.update({
        ...req.body,
        user_id: req.session.user_id
      });
      res.json(comment);
    } catch (err) {
      res.status(500).json(err)
    }
  });


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const comment = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
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