const express = require('express');
const bcrypt = require('bcrypt');
const { authSession, adminSession } = require('../midlewares/authentication_session');
const User = require('../models/user');
const app = express();

const path = require('path');

app.get('/users', [authSession], (req, res) => {
    User.find({status: true}, 'first_name last_name email type').exec((err, users) => {
        if(err){
            res.render();
        }

        res.render('users/index', {
            users,
            session: req.session
        });

        
    });

});

app.get('/users/new', [authSession, adminSession], (req, res) => {
    res.render('users/new', {
        session: req.session
    });
});

app.post('/users', [authSession, adminSession], (req, res) => {
    let body = req.body;

    let user = new User({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        type: body.type
    });

    user.save((err, userDB) => {
        if(err){
            res.redirect('back');
        }

        res.redirect(`/users`);
    });
});

app.get('/users/:id/edit', [authSession, adminSession], (req, res) => {
    let id = req.params.id;
    let body = req.body;

    User.findById(id).exec( (err, user) => {
        if(err){
            res.render('back');
        }

        res.render('users/edit', {
            user,
            title: `Editar ${user.first_name}`,
            session: req.session
        });


    });
});

app.put('/users/:id', [authSession, adminSession], (req, res) => {
    let id = req.params.id;
    let { first_name, last_name, email, type } = req.body;

    User.findByIdAndUpdate(id, req.body, (err, userDB) =>{
        if(err){
            res.redirect('back');
        }

        res.redirect('/users');
    } );


});

app.delete('/users/:id', [authSession, adminSession], (req, res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, {status: false}, (err, userDB) => {
        if(err){
            res.redirect('back');
        }

        res.redirect('/users');
    })
});

module.exports = app;