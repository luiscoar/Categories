var categoryModel = require('../../models/category/category-model');
var response = require("../../models/common/response");
var config = require("../../config/config");
var util = require("../../util/property-getter");

function upd(category, res) {
    let id = category.category_id;
    let _category = { name: category.name };

    categoryModel.findOneAndUpdate(id, _category, { new: true, runValidators: true }, (err, categoryDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }
        if (!categoryDB) {
            return res.status(400).json({
                ok: false,
                err: { message: 'id no existe' }
            });
        }
        categoryDB.category.name = _category.name;

        categoryDB.save((err, categoryDB) => {
            if (err) {
                res.json({
                    ok: false,
                    err: { message: 'Error al actualizar la categoria' }
                });
            }

            res.json({
                ok: true,
                category: categoryDB
            });
        })
    })
}

module.exports = { upd }