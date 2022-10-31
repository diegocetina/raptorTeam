const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
    nombre : {
        type:String,
        required: true
    },
    descripcion : {
        type: String,
        required:true
    },
    precio : {
        type: Number,
        required:true
    },
    stock : {
        type: Number,
        required : true
    },
    imagenURL : {
        type:String,
        required:false
    }
})

const Producto = mongoose.model("products", productScheme);

module.exports= Producto;