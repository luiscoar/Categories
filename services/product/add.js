let mongoose = require('mongoose');
var config = require("../../config/config");
const categoryModel = require('../../models/category/category-model');
const { SetResponse } = require("../../models/common/response");

async function add(product) {
    try {
        let listProducts = product.products;

        if (Object.keys(listProducts).length > 0) {
            let id = product.products[0].category_id;
            let categoryDB = await categoryModel.findById(id);

            listProducts.forEach(product => {
                product.product_id = mongoose.Types.ObjectId();
                product.active = true;
                product.internal_code = "0";
                categoryDB.products.push(product);
            })

            const category = await categoryDB.save();
            return SetResponse(category, config.http_codes.SUCCESS, "Producto(s) agregados con exito");
        } else {
            throw "Error debes agregar minimo un producto a la categoria";
        }

    } catch (err) {
        return SetResponse(null, config.http_codes.SERVER_ERROR, err);
    }
}

module.exports = { add }