const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { excludeSession } = require('../midlewares/authentication_session');
const User = require('../models/user');

app.get('/login', [excludeSession], (req, res) => {
    
    res.render('login/index');
    
});

app.post('/login/authentication', (req, res) => {
    let body = req.body;

    User.findOne({email: body.email}, (err, userDB) => {

        if(err){
            return res.redirect('back');
        }

        if(userDB == null){
            return res.redirect('back');

        }

        if(!bcrypt.compareSync(body.password, userDB.password)){
            return res.redirect('back');
        }

        req.session.user = userDB;
        return res.redirect('/users');
    });
});

app.delete('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/');
});

module.exports = app;