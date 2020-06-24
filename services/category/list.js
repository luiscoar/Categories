var categoryModel = require('../../models/category/category-model');
var response = require("../../models/common/response");
var config = require("../../config/config");
var util = require("../../util/property-getter");

// function list(option) {
function list(res) {
    categoryModel.find({ active: true })
        .exec((err, category) => {
            if (err) {
                return res.status(400).json({ ok: false, error: err });
            }
            res.json({ category: category });
        })
}
module.exports = { list }