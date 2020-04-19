const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');
const methodOverride = require('method-override');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);

const app = express();
const bodyParser = require('body-parser');
require('./config/config');
require('./hbs/helpers');

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// ruta de las vistas
app.use('/', express.static('public') );
app.use('/users', express.static('public') );
app.use('/belongings/:id', express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Express HBS engine
app.set('view engine', 'hbs');

// Session express
app.use( session({
    secret: '123qwerty123',
    resave: true,
    saveUninitialized: true,
    store: new mongoStore({
        url: process.env.URLDB,
        autoReconnect: true
    })
}) );

app.use(require('./routes/users'));
app.use(require('./routes/authentication'));
app.use(require('./routes/belongings'));
app.use(require('./routes/api/v1/user_authentication'));
app.use(require('./routes/api/v1/belongings'));

app.get('/', (req, res) => {

    res.render('home', {
        name: 'Eduardo',
        title: 'Home'
    });
});

mongoose.connect(process.env.URLDB, 
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false},
(err, res) => {
    if(err){
        throw new Error(err);
    }
    else{
        console.log('Base de datos ONLINE');
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Conectado al puerto ${process.env.PORT}`);
});