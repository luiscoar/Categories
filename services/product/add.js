var response = require("../../models/common/response");
var config = require("../../config/config");
var util = require("../../util/property-getter");
const productModel = require('../../models/product/product-model');
const categoryModel = require('../../models/category/category-model');
const { json } = require('body-parser');

function add(product, res) {
    let listProducts = product.products;
    let id = product.products[0].category_id;
    // let countProducts = Object.keys(listProducts.products).length;

    categoryModel.findById(id, (err, categoryDB) => {
        if (err) { return res.status(400).json({ ok: false, error: err }); }
        if (!categoryDB) { return res.status(400).json({ ok: false, error: { message: 'El Id no existe' } }); }

        categoryDB.products = listProducts;

        categoryDB.save((err, categorySave) => {
            if (err) { return res.status(400).json({ ok: false, error: err }); }
            return res.status(200).json({ ok: true, products: categorySave.products });
        });
    });
}

module.exports = { add }