var categoryModel = require('../../models/category/category-model');
var config = require("../../config/config");
const { SetResponse } = require('../../models/common/response');

async function list(options) {
    try {
        if (options.headers.mn == undefined) throw "Se debe enviar el negocio";
        const categories = await categoryModel.find({ active: true, mn: options.headers.mn }).exec();
        return SetResponse(categories, config.http_codes.SUCCESS, "");
    } catch (err) {
        return SetResponse(null, config.http_codes.SERVER_ERROR, err);
    }
}

module.exports = { list }