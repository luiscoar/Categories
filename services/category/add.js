var config = require("../../config/config");
const categoryModel = require('../../models/category/category-model');
const { SetResponse } = require("../../models/common/response");

async function add(options) {
    try {
        if (Object.keys(options.headers.mn) != undefined && options.body.name != undefined && options.body.discount != undefined) {
            let categoryNew = new categoryModel({ name: options.body.name, discount: options.body.discount, mn: options.headers.mn });
            let category = await categoryNew.save();
            return SetResponse(category, config.http_codes.SUCCESS, "Categoria agregada correctamente.", "");
        } else {
            throw "El mn, el nombre y/o el descuento no deben ir vacios";
        }
    } catch (err) {
        return SetResponse(null, config.http_codes.stringify, "", err);
    }
}

module.exports = { add }