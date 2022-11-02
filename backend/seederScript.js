require("dotenv").config();

const productsData = require("./data/productos");
const connectDB = require("./config/db");
const Product = require("./models/productos");

connectDB();

const importData= async() =>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Se subieron bien los datos");
        process.exit();
    } catch{
        console.log("pailas, no se subió nada");
        process.exit(1);
    }
};
importData();