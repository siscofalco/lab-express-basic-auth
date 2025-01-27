const express = require('express');
const router = express.Router();

function isLoggedIn(req, res, next){
    if(req.session.currentUser) next()
    else(res.redirect('/auth/login'))
}

router.get('/main', isLoggedIn, (req, res) => {
    res.render('main', {user:req.session.currentUser})
}) 

router.get('/private', isLoggedIn, (req, res) => {
    res.render('private')
})

module.exports = router;
