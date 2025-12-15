const express = require('express');
const session = require('express-session');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const connectDB = require('./config/db')
const User =  require('./models/User')
const port = 3000;

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "our little secret",
    resave: false,
    saveUninitialized: false
}));

// Simple middleware to make current user available
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

connectDB();

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});


//use the auth routes
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/dashboard'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});