var categoryModel = require('../../models/category/category-model');
var response = require("../../models/common/response");
var config = require("../../config/config");
var util = require("../../util/property-getter");

function upd(category, res) {
    let id = Object(category._id);

    categoryModel.findById(id, (err, categoryDB) => {
        if (err) { return res.status(400).json({ ok: false, error: err }); }
        if (!categoryDB) { return res.status(400).json({ ok: false, error: { message: 'El Id no existe' } }); }

        categoryDB.name = category.name;
        categoryDB.discount = category.discount;

        categoryDB.save((err, categorySave) => {
            if (err) {
                return res.status(400).json({ ok: false, error: err });
            }
            return res.status(200).json({ ok: true, category: categorySave });
        });
    });
}

module.exports = { upd }