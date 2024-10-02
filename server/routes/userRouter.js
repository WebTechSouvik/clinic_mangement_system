const express = require('express');
const userRouter = express.Router();

const { createUserController, logInController, logoutController, updateUserController, showSignInForm, showSignUpForm, dashboard, landingPageController, profile } = require('../controller/userController');
const { jwtAuthMiddleware } = require('../middlewares/jwtAuthMiddleware');


userRouter.post('/signup', createUserController);
userRouter.post('/login', logInController);
userRouter.post('/user/logout', jwtAuthMiddleware, logoutController);
userRouter.post('/user/update/:id', jwtAuthMiddleware, updateUserController); // change to post

userRouter.get('/', landingPageController)
userRouter.get('/login', showSignInForm);
userRouter.get('/signup', showSignUpForm);
userRouter.get('/dashboard', dashboard);
userRouter.get('/profile', profile);


module.exports = userRouter;