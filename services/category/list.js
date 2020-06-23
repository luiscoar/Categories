var productModel = require('../../models/product/product-model');
var categoryModel = require('../../models/category/category-model');
var response = require("../../models/common/response");
var config = require("../../config/config");
var util = require("../../util/property-getter");


// function list(option) {
function list(res) {
    categoryModel.find({ active: true })
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    error: err
                });
            }

            res.json({
                products
            });
        })
}
module.exports = { list }