var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ProductModelSchema = new Schema({
    products: [{
        price: { type: Number }, //precio del producto
        description: { type: String }, //descripcion del producto
        internal_code: { type: String, default: "0" }, // codigo interno del negocio, por el momento guardar el mismo id el prducto
        discount: { type: Number }, //  % de descuento
        has_discount: { type: Boolean, default: false }, // true :  tiene descuento, false : no tiene descuento
        send_detail: { type: String }, // detalles para su envio, escribe un lorem ipsum
        active: { type: Boolean, default: true }, // 0 : borrado logico, 1 : activado logico
        status: { type: String, default: "" }, //estatus de negocio futuro, por el momento escribe un string vacio
        product_id: { type: Object, default: mongoose.Types.ObjectId() }, // Id autogenerado de la seccion
        // category_id: { type: Schema.Types.ObjectId, ref: 'CategoryModel', required: true }
        category_id: { type: Object, required: true }
    }]
});

//Se exporta el modelo creado a mongoose.model
module.exports = mongoose.model('ProductModel', ProductModelSchema);