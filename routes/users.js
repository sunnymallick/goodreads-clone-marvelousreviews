const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { User, Movie, MovieShelf } = require('../db/models');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { loginUser, logoutUser, requireAuth, restoreUser } = require('../auth');

const signInValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a User Name')
    .isLength({ max: 50 })
    .withMessage('User name must not be more than 50 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an Email')
    .isEmail()
    .withMessage('Not a valid Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid Password'),
];


router.get('/signup', csrfProtection, (req, res) => {
  res.render('user-signup', { token: req.csrfToken() })
})

router.post('/signup', csrfProtection, signInValidators, asyncHandler(async (req, res) => {
  const { username, email, password } = req.body
  const user = User.build({ username, email, password })

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    // req.session.save((error) => {
    // if (error) {
    //   next(error)
    // } else {
    res.redirect('/user/profile')
    // }
    // })
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('user-signup', {
      user,
      errors,
      token: req.csrfToken(),
    })
  }
}));

router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', { token: req.csrfToken() })
})

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an Email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a Password')
];

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await User.findOne({ where: { email } })

    if (user !== null) {
      const isPassword = await bcrypt.compare(password, user.password.toString());

      if (isPassword) {
        loginUser(req, res, user)
        //
        // req.session.save((error) => {
        // if (error) {
        //   next(error)
        // } else {
        return res.redirect('/user/profile');
        // }
        // })
      }
    }
    errors.push('log-in failed for the provided email and password')
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('user-login', {
    email,
    errors,
    token: req.csrfToken(),
  });
}));

router.post('/logout', (req, res) => {
  // delete req.session.user
  logoutUser(req, res)
  //
  req.session.save((error) => {
    if (error) {
      next(error)
    } else {
      res.redirect('/')
    }
  })

})

//DEMO USER
router.post('/login/demo', csrfProtection, asyncHandler(async (req, res, next) => {
  const email = 'demouser@demo.com'
  const user = await User.findOne({ where: { email } })
  console.log(user)
  loginUser(req, res, user);
  req.session.save((error) => {
    if (error) {
      next(error)
    } else {
      res.redirect('/user/profile')
    }
  })
}))


/* GET users listing. */
// router.get('/profile', function (req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/profile', asyncHandler(async (req, res) => {
  const movieShelf = await MovieShelf.findAll()
  res.render('profile', { movieShelf })
}))

module.exports = router;
