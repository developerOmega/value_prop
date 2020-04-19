const express = require('express');
const Belonging = require('../models/belonging');
const { authSession } = require('../midlewares/authentication_session');

const app = express();

app.get('/belongings', [authSession] ,(req, res) => {
    res.render('belongings/index', {
        session: req.session
    });
});

app.get('/belongings/:id/edit', [authSession], (req, res) => {
    let id = req.params.id;
    let body = req.body;

    Belonging.findById(id).exec( (err, belonging) => {
        if(err){
            res.render('back');
        }


        res.render('belongings/edit', {
            belonging,
            title: `Editar ${belonging.name}`,
            session: req.session
        });


    });
});

module.exports = app;