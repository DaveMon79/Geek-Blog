const router = require('express').Router()

const signInRoutes = require('./signInRoutes')
const signOutRoutes = require('./signOutRoutes')
const signUpRoutes = require('./signUpRoutes')
const blogRoutes = require('./blogRoutes')
const commentRoutes = require('./signInRoutes')

router.use('/sign-up', signUpRoutes)
router.use('/sign-in', signInRoutes)
router.use('/sign-out', signOutRoutes)
router.use('/blogs', blogRoutes)
router.use('/comment', commentRoutes)


module.exports = router