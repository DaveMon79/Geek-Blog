const router = require('express').Router()
const userRoutes = require('./userRoutes')
const blogRoutes = require('./blogRoutes')
const signInRoutes = require('./signInRoutes')
const signOutRoutes = require('./signInRoutes')
const commentRoutes = require('./signInRoutes')

router.use('/sign-in', signInRoutes)
router.use('/users', userRoutes)
router.use('/blogs', blogRoutes)
router.use('/sign-out', signOutRoutes)
router.use('/comment', commentRoutes)


module.exports = router;