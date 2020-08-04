const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const bodyParser = require('body-parser'); // To access req.body
const session = require('express-session');
const routes = require('./routes');

const app = express();

app.engine('mustache', mustacheExpress());

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'mustache');

app.use(session({ 'secret': 'secret_key', resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/styles', express.static(path.resolve(__dirname, 'views', 'styles'))); // To enable css files
app.use(routes);

app.listen(3333);