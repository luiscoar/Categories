var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var CategoryModelSchema = new Schema({
    name: { type: String }, //nombre de la categoria
    status: { type: String, default: "" }, // estatus de negocio futuro, por el momento escribe un string vacio
    discount: { type: Number }, // % de descuento
    products: [],
    settings: [{ key: String, default: "" }], // vacio por default
    active: { type: Boolean, default: true }, //0 : borrado logico, 1 : activado logico
    created_at: { type: Date, default: Date.now }, // al registrar escribe el getdate()
    edited_at: { type: Date, default: Date.now }, // al modificar escribe el getdate, por default al crear escribe un getdate()
    mn: mongoose.ObjectId // el mn es este valor 5eb24d82ab9909dfe8df58dd es un negocio ya creado, ponlo en duro en tu request
});

//Se exporta el modelo creado a mongoose.model
module.exports = mongoose.model('CategoryModel', CategoryModelSchema);