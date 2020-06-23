var response = require("../../models/common/response");
var config = require("../../config/config");
var util = require("../../util/property-getter");
const categoryModel = require('../../models/category/category-model');
const productModel = require('../../models/product/product-model')
const { json } = require('body-parser');

function add(category, res) {

    let categoryNew = new categoryModel({
        category: {
            name: category.name,
            products: []
        }
    })

    categoryNew.save((err, categoryDB) => {
        if (err) {
            console.log("Error al guardar categoria");
        }
        res.json({
            ok: true,
            resu: categoryDB
        })
    })
}


module.exports = { add }