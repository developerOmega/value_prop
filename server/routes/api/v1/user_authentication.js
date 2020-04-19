const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../../models/user');
const app = express();

app.post('/api/v1/login', (req, res) => {
    
    let body = req.body;

    User.findOne({ email: body.email }, (err, userDB) => {
        
        if(err){
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if(!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'usuario y  contrasenia incorrectos'
                }
            });
        }

        if(!bcrypt.compareSync(body.password, userDB.password)){
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'usuario y  contrasenia incorrectos'                    
                }
            });
        }

        let token = jwt.sign({
            user: userDB
        }, process.env.SEED, { expiresIn: process.env.EXPIRED_TOKEN });

        return res.status(200).json({
            ok: true,
            user: userDB,
            token
        });

    });
});


module.exports = app;