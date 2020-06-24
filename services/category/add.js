var response = require("../../models/common/response");
var config = require("../../config/config");
var util = require("../../util/property-getter");
const categoryModel = require('../../models/category/category-model');
const { json } = require('body-parser');
const { SetResponse } = require("../../models/common/response");

function add(category, res) {
    let categoryNew = new categoryModel({ name: category.name, discount: category.discount });

    categoryNew.save((err, categoryDB) => {
        if (err) { return res.json({ ok: false, categoryDB }) }
        return res.json({ ok: true, category: categoryDB });
    })
}

module.exports = { add }