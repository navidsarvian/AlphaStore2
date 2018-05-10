const path = require('path');

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile( path.join(__dirname, "./../public/index.html"));
  });

  // app.get("/hi", function(req, res) {
  //   res.sendFile( path.join(__dirname, "./../public/index.html"));
  // });

  app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));

  app.post('/login',
    passport.authenticate('local'),
    function(req, res) {
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
      res.redirect('/users/' + req.user.username);
    });
};
