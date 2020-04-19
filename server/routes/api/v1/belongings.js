const express = require('express');
const mongoose = require('mongoose');
const Belonging = require('../../../models/belonging');
const User = require('../../../models/user');
const { authToken } = require('../../../midlewares/authentication_api');

const app = express();

app.get('/api/v1/belongings', [authToken],(req, res) => {
    Belonging.find({user: req.user}).exec((err, belongings) => {
        
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        Belonging.count({}, (err, count) => {
            User.populate(belongings, {path: 'user'}, (err, belongings) => {
                return res.status(200).json({
                    ok: true,
                    belongings,
                    count
                });
            });
        });
        
    });
});

app.post('/api/v1/belongings', [authToken], (req, res) => {
    let body = req.body;

    let belonging =  new Belonging({
        name: body.name,
        value: body.value,
        quantity: body.quantity,
        active: body.active,
        value_active: body.value_active === '' ? 0 : body.value_active,
        user: req.user
    });

    belonging.save((err, belongingDB) => {
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        return res.status(200).json({
            ok: true,
            belonging: belongingDB
        });
    });

});

app.put('/api/v1/belongings/:id', [authToken], (req, res) => {
    let id = req.params.id;
    let body = req.body;

    Belonging.findByIdAndUpdate(id, body, {new: true, runValidators: true}, (err, belonging) => {
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true, 
            belonging
        });
    });

});

app.delete('/api/v1/belongings/:id', [authToken], (req, res) => {
    let id = req.params.id;
    
    Belonging.findByIdAndRemove(id, (err, belonging) => { 
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if(!belonging){
            return res.status(400).json({
                ok: false,
                err: 'Usuario no encontrado'
            });
        }

        res.json({
            ok: true,
            belonging
        });
    });
});

module.exports = app;