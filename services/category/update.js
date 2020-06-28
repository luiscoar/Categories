var categoryModel = require('../../models/category/category-model');
var response = require("../../models/common/response");
var config = require("../../config/config");
var util = require("../../util/property-getter");
const { options } = require('../../api/category-struct/category-route');
const { SetResponse } = require('../../models/common/response');

async function upd(options) {
    try {
        const id = Object(options.body._id);
        let categoryUpd = await categoryModel.findById(id);

        categoryUpd.name = options.body.name;
        categoryUpd.discount = options.body.discount;
        categoryUpd.nm = options.headers.nm;

        const category = await categoryUpd.save();
        return SetResponse(category, config.http_codes.SUCCESS, "Categoria actualizada  correctamente.");
    } catch (err) {
        return SetResponse(null, config.http_codes.SUCCESS, "", err);
    }
}

module.exports = { upd }