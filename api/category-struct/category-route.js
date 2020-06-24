/*core*/
var express = require('express');
var router = express.Router();

/*settings*/
// var config = require("../../config/config");
// var response = require("../../models/common/response");

/*services*/
const update_service = require('../../services/category/update');
const add_service = require('../../services/category/add');
const remove_service = require('../../services/category/remove');
const list_service = require('../../services/category/list');
// const productModel = require('../../models/product/product-model');
// const categoryModel = require('../../models/category/category-model');
// const { isValidObjectId } = require('mongoose');
// const { json } = require('body-parser');

router.put('/update', async function(req, res) {
    let body = req.body;
    await update_service.upd(body, res);
});

router.post('/add', async function(req, res) {
    let body = req.body;
    await add_service.add(body, res);
});

router.delete('/remove/:id', async function(req, res) {
    let id = Object(req.params.id.replace(":id=", ""));
    await remove_service.remove(id, res);
});

router.get('/list', async function(req, res) {
    await list_service.list(res);
});

module.exports = router;