const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, (req,res) => {
    Comment.findAll({})
    .then(comment => res.json(comment))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});


router.get('/:id',withAuth, (req, res) => {
    Comment.findByPk({
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



router.post('/create', async (req, res) => {
  try {
    const comment = await Comment.create({
      // ...req.body,
      // user_id: req.session.user_id
    });
    res.json(comment)
  } catch (err) {
    res.status(500).json(err)
  }
});



router.put('/update', withAuth, async (req, res) => {
    try {
      const comment = await Comment.update({
        ...req.body,
        user_id: req.session.user_id
      });
      res.json(comment);
    } catch (err) {
      res.status(500).json(err)
    }
  });


  
router.delete('/delete/:id', withAuth, async (req, res) => {
  try {
    const comment = await Comment.destroy({
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