const express = require('express');
const router = express.Router();
const passport = require('passport');

router.route('/register')
  .post((req, res) => {
    req.checkBody('email', 'Invalid Email').isEmail();
    req.checkBody('username', 'Empty Username').notEmpty();
    req.checkBody('password', 'Empty Password').notEmpty();
    req.checkBody('password', 'Passwords do not match').equals(req.body.confirm_password).notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      res.send({
        username: req.body.username,
        email: req.body.email,
        errorMessages: errors
      });
    } else {
      const user = new User();
      user.username = req.body.username;
      user.email = req.body.email;
      user.setPassword(req.body.password);
      user.save((err, data) => {
        if (err) {
          res.send({ errorMessages: err });
        }
        res.send(data);
      })
    }
  })

router.route('/login')
  .post(passport.authenticate('local'), (req, res) => {
    res.send(req.user);
    //console.log(res.locals.user);
  })

router.route('/logout')
  .get((req, res) => {
    req.logOut();
    res.status(200).send();
  })

module.exports = router;