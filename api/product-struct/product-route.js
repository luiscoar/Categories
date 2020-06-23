/*core*/
var express = require('express');
var router = express.Router();

/*settings*/
var config = require("../../config/config");
var response = require("../../models/common/response");

/*services*/
const update_service = require('../../services/product/update');
const add_service = require('../../services/product/add');
const remove_service = require('../../services/product/remove');
const list_service = require('../../services/product/list');
const productModel = require('../../models/product/product-model');
const { json } = require('body-parser');

// router.post('/update', async function(req, res) {
router.put('/update/:id', async function(req, res) {
    let id = req.param.id;

    let body = req.body;

    console.log("id: " + id);
    console.log("body: " + JSON.stringify(body));

    let productUpd = new productModel({
        category: {
            name: body.name,
            products: {
                price: body.products.price,
                description: body.products.description,
                internal_code: body.products.internal_code,
                discount: body.products.discount,
                send_detail: body.products.send_detail,
                active: 1,
                status: "",
            }
        }
    })

    productModel.findByIdAndUpdate(id, productUpd, { new: true, runValidators: true }, (err, productDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }

        res.json({
            ok: true,
            product: productDB
        });
    });

    // res.send(null);
});

router.post('/add', async function(req, res) {
    let body = req.body.category;

    let product = add_service.add(body);

    res.send(product);
});

// router.get('/remove', async function(req, res) {
router.delete('/remove/:id', async function(req, res) {

    let id = req.params.id;

    let changeState = {
        active: false
    };

    productModel.findByIdAndUpdate(id, changeState, { new: true }, (err, productDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!productDelet) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Product no encontrado'
                }
            });
        }

        res.json({
            ok: true,
            product: productDelete
        });
    })

    res.send(null);
});

router.get('/list', async function(req, res) {
    console.log("Estoy listando");

    // let desde = req.query.desde || 0;
    // desde = Number(desde);

    // let limite = req.query.limite || 5;
    // limite = Number(limite);

    productModel.find({ active: true })
        // .skip(desde)
        // .limit(limite)
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    error: err
                });
            }

            productModel.count({ active: true }, (err, conteo) => {
                res.json({
                    ok: true,
                    products,
                    cuantos: conteo
                })
            })

        })

    // res.send(null);
});

module.exports = router;