const express = require('express');
const userRouter = express.Router();

const { createUserController, logInController, logoutController, updateUserController, showSignInForm, showSignUpForm, dashboard, landingPageController, profile } = require('../controller/userController');
const { jwtAuthMiddleware } = require('../middlewares/jwtAuthMiddleware');

userRouter.get('/', landingPageController)
userRouter.route('/signup').get(showSignUpForm).post(createUserController);
userRouter.route("/login").get(showSignInForm).post(logInController)

// userRouter.use(jwtAuthMiddleware)

userRouter.post('/user/logout',logoutController);
userRouter.post('/user/update/:id',updateUserController); // change to post
userRouter.get('/dashboard', dashboard);
userRouter.get('/profile', profile);


module.exports = userRouter;