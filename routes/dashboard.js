const express = require('express');
const router = express.Router();
//middleware to protect all dashboard routes

const requireLogin = (req, res, next) => {
    if(!req.session.user) {
        return res.redirect('/login');
    }
    next();
};
//Dashboard route
router.get('/dashboard', requireLogin, (req, res) =>{
    res.render('dashboard', {user:req.session.user});
});

module.exports = router;