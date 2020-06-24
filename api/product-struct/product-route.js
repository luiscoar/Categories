/*core*/
var express = require('express');
var router = express.Router();

/*settings*/
var config = require("../../config/config");
var response = require("../../models/common/response");

/*services*/
// const update_service = require('../../services/product/update');
const add_service = require('../../services/product/add');
// const remove_service = require('../../services/product/remove');
// const list_service = require('../../services/product/list');
// const productModel = require('../../models/product/product-model');
const { json } = require('body-parser');

router.put('/update/', async function(req, res) {
    res.send(null);
});

router.post('/add', async function(req, res) {
    let body = req.body;
    await add_service.add(body, res);
});

router.delete('/remove/:id', async function(req, res) {
    res.send(null);
});

router.get('/list', async function(req, res) {
    res.send(null);
});

module.exports = router;