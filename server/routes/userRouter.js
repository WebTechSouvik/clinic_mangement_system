const express = require('express');
const userRouter = express.Router();

const { createUserController,logInController,logoutController,updateUserController } = require('../controller/userController');
const { jwtAuthMiddleware } = require('../middlewares/jwtAuthMiddleware');

userRouter.post('/signup', createUserController);
userRouter.post('/login', logInController);
userRouter.post('/logout', jwtAuthMiddleware, logoutController);
userRouter.put('/update/:id', jwtAuthMiddleware, updateUserController);

module.exports = userRouter;