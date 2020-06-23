var productSC = require('../../models/product/product-model');
var response = require("../../models/common/response");
var config = require("../../config/config");
var util = require("../../util/property-getter");
const productModel = require('../../models/product/product-model');
const { json } = require('body-parser');

function add(product) {
    let body = product;
    let id = body.category_id;
    let productNew;

    if (id != undefined || id != "") {
        console.log("Agregare productos a la categoria");

        let listaProductos = body.products;
        // console.log(JSON.stringify(listaProductos));
        // console.log("");
        let conteoProductos = Object.keys(listaProductos).length;
        // console.log(conteoProductos);

        // //genero un nuevo objeto para realizar el llenado
        let product1 = new productModel({
            category: {
                name: body.name,
                category_id: body.category_id,
                products: {
                    price: body.products.price,
                    description: body.products.description,
                    discount: body.products.discount,
                    send_detail: body.products.send_detail
                }
            }
        })


        // console.log("product1" + JSON.stringify(product1));
        // console.log("");

        //  //actualizo los productos de la categoria
        //  for (let i = 0; i < conteoProductos; i++) {

        //     let prod = new Object({
        //         price: listaProductos[i].price,
        //         description: listaProductos[i].description,
        //         internal_code: listaProductos[i].internal_code,
        //         discount: listaProductos[i].discount,
        //         send_detail: listaProductos[i].send_detail,
        //     });

        //     console.log("entre al ciclo: " + i + " prod: " + JSON.stringify(prod));

        //     product1.category.products.push(prod);
        // }



        productModel.findById(id, (err, productDB) => {

            if (err) {
                console.log("Error findbyid " + err);
            }

            // console.log(Object.keys(product1.category.products));
            console.log(JSON.stringify(productDB));


            // res.json({
            //     ok: true,
            //     prod: productDB
            // });
        });


        // console.log("Product1" + JSON.stringify(product1));

    }
    //else {
    //     console.log("registro una categoria");

    //     productNew = new productSC({
    //         category: {
    //             name: body.name,
    //             discount: body.discount,
    //             products: {
    // price: body.products.price,
    // description: body.products.description,
    // discount: body.products.discount,
    // send_detail: body.products.send_detail,
    //             }
    //         }
    //     })

    //     console.log(JSON.stringify(productNew));
    //     console.log("");
    // }

    // productNew.save((err, productDB) => {
    //     if (err) {
    //         return res.status(400).json({
    //             ok: false,
    //             error: err
    //         })
    //     }
    //     return productDB;
    // })
}


module.exports = { add }