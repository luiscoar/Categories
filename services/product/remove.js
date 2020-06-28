var response = require("../../models/common/response");
var config = require("../../config/config");
const categoryModel = require('../../models/category/category-model');

async function remove(options) {
    try {
        const idProduct = options.product_id.toString();
        const idCategory = options.category_id.toString();

        if (idProduct == undefined || idProduct == "" || idCategory == undefined || idCategory == "")
            throw "Es necesario un id de categoria y un id de un producto";

        let categoryDB = await categoryModel.findById(idCategory);
        if (categoryDB == undefined || categoryDB == null) throw "La categoria no existe, error al modificar producto";
        let productDel = await categoryDB.products.filter(product => product.product_id == idProduct);
        let productPush = await categoryDB.products.filter(product => product.product_id != idProduct);

        //Actualizo el producto filtrado
        productDel[0].active = options.active;
        //Reseto y agrego los productos existentes y el editado
        categoryDB.products = [];
        categoryDB.products = productPush;
        categoryDB.products.push(productDel[0]);

        const category = await categoryDB.save();
        return response.SetResponse(category, config.http_codes.SUCCESS, "Producto actualizado correctamente");
    } catch (err) {
        response.SetResponse(null, config.http_codes.SERVER_ERROR, err);
    }
}
module.exports = { remove }