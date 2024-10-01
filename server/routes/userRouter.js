const express = require('express');
const userRouter = express.Router();

const { createUserController, logInController, logoutController, updateUserController, showSignInForm, showSignUpForm, dashboard, landingPageController } = require('../controller/userController');
const { jwtAuthMiddleware } = require('../middlewares/jwtAuthMiddleware');


userRouter.post('/user/signup', createUserController);
userRouter.post('/user/login', logInController);
userRouter.post('/user/logout', jwtAuthMiddleware, logoutController);
userRouter.post('/user/update/:id', jwtAuthMiddleware, updateUserController); // change to post

userRouter.get('/', landingPageController)
userRouter.get('/showlogin', showSignInForm);
userRouter.get('/showSignUp', showSignUpForm);
userRouter.get('/dashboard', dashboard);


module.exports = userRouter;