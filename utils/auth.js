const withAuth = (req, res, next) => {

    if (!req.session.loggedIn) {
      res.redirect('/signin-signup');
    } else {

      next();
    }
  };
  
  module.exports = withAuth;
  