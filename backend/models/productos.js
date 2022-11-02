const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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

const Product = mongoose.model("product", productSchema);

module.exports= Product;