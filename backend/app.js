const express = require('express');
const bodyparser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
//=====================================Routes=======================================

const contactus = require('./routes/contactus');
const authRoute = require('./routes/auth');

const config = require('./config');
const { mongoose } = require('./db/mongoose');
require('./passport');

const port = process.env.port || 3001;
const app = express();

app.use(cookieParser());
app.use(session({
    secret: config.sessionKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cors());
app.use((req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
    }
    next();
})

app.use('/contact', contactus);
app.use('/', authRoute)

global.User = require('./models/user');

app.get('/', (req, res) => {
    res.send('Stranger Things!');
});

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
})