'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

/*routes importaciones*/
var product_routes = require('./api/product-struct/product-route');

var category_routes = require('./api/category-struct/category-route');


/*core settings*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

/*routing*/
app.use('/api/product/', product_routes);

app.use('/api/category/', category_routes);

module.exports = app;