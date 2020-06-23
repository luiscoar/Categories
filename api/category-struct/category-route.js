/*core*/
var express = require('express');
var router = express.Router();

/*settings*/
// var config = require("../../config/config");
// var response = require("../../models/common/response");

/*services*/
const update_service = require('../../services/category/update');
const add_service = require('../../services/category/add');
// const remove_service = require('../../services/category/remove');
const list_service = require('../../services/category/list');
const productModel = require('../../models/product/product-model');
const categoryModel = require('../../models/category/category-model');
const { isValidObjectId } = require('mongoose');
// const { json } = require('body-parser');

router.put('/update', async function(req, res) {
    let body = req.body;

    update_service.upd(body, res);
});


router.post('/add', async function(req, res) {
    let body = req.body.category;
    add_service.add(body, res);
});

router.delete('/remove/:id', async function(req, res) {
    let id = req.params.id;
    console.log("id: " + id);

    id = id.replace(":id=", "").toString();
    console.log("replace: " + id);

    let category_active = {
        active: false
    };

    categoryModel.findByIdAndUpdate(id, category_active, { new: true, runValidators: true }, (err, categoryDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!categoryDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'id no existe'
                }
            });
        }

        categoryDB.active = false;
        categoryDB.category.active = false

        categoryDB.save((err, categoryDel) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                categorys: categoryDel,
                mensaje: 'Category delete'
            });
        })

    })
});

router.get('/list', async function(req, res) {

    list_service.list(res);
});

module.exports = router;