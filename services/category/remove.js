var categoryModel = require('../../models/category/category-model');
var response = require("../../models/common/response");
var config = require("../../config/config");
var util = require("../../util/property-getter");
const { SetResponse } = require('../../models/common/response');

async function remove(id) {
    try {
        let categoryDel = await categoryModel.findById(id);
        categoryDel.active = false;
        const category = await categoryDel.save();
        return SetResponse(category, config.http_codes.SUCCESS, "");
    } catch (err) {
        return SetResponse(null, config.http_codes.SERVER_ERROR, "", err);
    }
}

module.exports = { remove }