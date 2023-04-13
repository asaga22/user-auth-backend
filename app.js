require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const APP_VERSION = `v${process.env.APP_VERSION}`;

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user.routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(`/${APP_VERSION}`, indexRouter);

// ROUTES GROUPING OF RESOURCE User
app.use(`/${APP_VERSION}`, userRouter);


module.exports = app;
