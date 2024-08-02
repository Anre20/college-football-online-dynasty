const express = require('express');
const userRouter = express.Router();
const User = require('../models/users');

userRouter.get('/', async (req, res, next) => {
    try {
        const foundUsers = await User.find();
        return res.status(200).send(foundUsers);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

userRouter.post('/', async (req, res, next) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        return res.status(201).send(savedUser);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

userRouter.delete('/:userId', async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).send('User not found');
        }
        return res.status(200).send(`Successfully deleted ${deletedUser.name}`);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});


userRouter.put('/:userId', async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).send('User not found');
        }
        return res.status(200).send(updatedUser);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

userRouter.get('/type', async (req, res, next) => {
    try {
        const foundUsers = await User.find({ type: req.query.type });
        return res.status(200).send(foundUsers);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

module.exports = userRouter;
