var categoryModel = require('../../models/category/category-model');
var response = require("../../models/common/response");
var config = require("../../config/config");
var util = require("../../util/property-getter");


function remove(id, res) {
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
        // return options;
}
module.exports = { remove }