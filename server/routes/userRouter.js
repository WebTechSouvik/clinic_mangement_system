const express = require('express');
const userRouter = express.Router();

const { createUserController, logInController, logoutController, updateUserController, showSignInForm, showSignUpForm, landingPage } = require('../controller/userController');
const { jwtAuthMiddleware } = require('../middlewares/jwtAuthMiddleware');

userRouter.post('/signup', createUserController);
userRouter.get('/showSignUp', showSignUpForm);
userRouter.get('/showlogin', showSignInForm);
userRouter.get('/landing', landingPage);
userRouter.post('/login', logInController);
userRouter.post('/logout', jwtAuthMiddleware, logoutController);
userRouter.put('/update/:id', jwtAuthMiddleware, updateUserController); // change to post

module.exports = userRouter;