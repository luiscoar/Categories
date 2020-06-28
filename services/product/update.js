var response = require("../../models/common/response");
var config = require("../../config/config");
const categoryModel = require('../../models/category/category-model');

async function upd(options) {
    try {
        const idProduct = options.product_id;
        const idCategory = options.category_id;

        if (idProduct == undefined || idProduct == "" || idCategory == undefined || idCategory == "") throw "Es necesario un id de categoria y un id de un producto";
        //busco el id de la categoria
        let categoryDB = await categoryModel.findById(idCategory);

        if (categoryDB == undefined || categoryDB == null) throw "La categoria no existe, error al modificar producto";
        //obtengo el producto a modificar
        let productUpd = await categoryDB.products.filter(product => product.product_id == idProduct);
        if (productUpd == undefined || productUpd == null) throw "El producto a modificar no existe";
        const productPush = await categoryDB.products.filter(product => product.product_id != idProduct);

        //Actualizo el producto filtrado
        productUpd[0].price = options.price;
        productUpd[0].description = options.description;
        productUpd[0].discount = options.discount;
        productUpd[0].has_discount = options.has_discount;
        productUpd[0].send_detail = options.send_detail;

        //Reseto y agrego los productos existentes y el editado
        categoryDB.products = [];
        categoryDB.products = productPush;
        categoryDB.products.push(productUpd[0]);

        const category = await categoryDB.save();

        return response.SetResponse(category, config.http_codes.SUCCESS, "Producto actualizado correctamente");
    } catch (err) {
        response.SetResponse(null, config.http_codes.SERVER_ERROR, err);
    }
}

module.exports = { upd }