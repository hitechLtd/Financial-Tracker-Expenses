const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//REGISTER
router.post('/register', async (req, res) =>{
    try {
        const {username, email, password } = req.body;
        const newUser = new User({username, email, password});
        await newUser.save();

        req.session.user = newUser;
        console.log('Registered & logged in:', newUser.username);
        res.redirect('/dashboard');
    } catch (err) {
        console.log('Register error:', err);
        if (err.code === 11000) {
            return res.send('Username or email already taken')
        }
        res.redirect('/register');

    }
});

router.post('/login', async (req, res) =>{
    try {
        const {email, password}  = req.body;
        const user = await User.findOne({email});

        if(!user) {
            console.log('Login failed: USer not found');
            return res.redirect('/login')
        }
    } catch (err) {
        console.log("Login error:", err);
        res.redirect('/login');
    }
});

//LOGOUT
router.get('/logout', (req, res) =>{
    req.session.destroy(() =>{
        res.redirect('/login')
    });
});
module.exports = router;
