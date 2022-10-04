const router = require('express').Router()
const { User } = require('../../models')


// User sign in function
router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({
            where: { email: req.body.email }
        });

        if (!user) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' })
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password)

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' })
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.logged_in = true

            res.json({ user: userData, message: 'You are now logged in!' })
        });

    } catch (err) {
        res.status(400).json(err);
    }
});


// Create new user function
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body)

        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.logged_in = true

            res.status(200).json(userData)
        });
    } catch (err) {
        res.status(400).json(err)
    }
});




module.exports = router;