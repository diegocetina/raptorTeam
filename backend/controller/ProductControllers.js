const Product = require("../models/productos")

const getAllProducts = async (req, res) =>{
    try {
        const products = await Product.find({});

        res.json(products)
    } catch (error) {
        console.log("pailas, la embarró en algún lado");
        res.status(500).json({message: "alguna vaina falló en el servidor"});
    }
}

const getProductById = async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id);

        res.json(product)
    } catch (error) {
        console.log("pailas, la embarró en algún lado");
        res.status(500).json({message: "alguna vaina falló en el servidor"});
    }
}

module.exports = {
    getAllProducts,
    getProductById
}