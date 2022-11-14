const Product = require("../models/productos")

const getAllProducts = async (req, res) =>{
    try {
        const products = await Product.find({});

        res.json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "alguna vaina falló en el servidor"});
    }
}

const getProductById = async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id);

        res.json(product)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "alguna vaina falló en el servidor"});
    }
}

const postProduct = async (req, res) =>{
    try {
        const {nombre, descripcion, precio, stock, imagenURL} = req.body;
        const product = new Product({nombre, descripcion, precio, stock, imagenURL});
        await product.save();
        res.json({user: 'CORS enabled'})
        res.json("datos subidos");
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "alguna vaina falló en el servidor"});
    }
}

const modProducts = async (req, res) =>{
    try {
        const {nombre, descripcion, precio, stock, imagenURL} = req.body;
        const product = {nombre, descripcion, precio, stock, imagenURL};
        await Product.findByIdAndUpdate(req.params.id, product);
        res.json("datos actualizados");
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "alguna vaina falló en el servidor"});
    }
}

const deleteProd = async (req, res) =>{
    try {
       await Product.findByIdAndRemove(req.params.id);
       res.json("producto eliminado")
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "alguna vaina falló en el servidor"});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    modProducts,
    deleteProd
}