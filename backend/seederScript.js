require("dotenv").config();

const productsData = require("./data/productos");
const connectDB = require("./config/db");
const Products = require("./models/productos")

connectDB();

const importData= async() =>{
    try{
        await Products.deleteMany({});
        await Products.insertMany(productsData);
        console.log("Se subieron bien los datos");
        process.exit();
    } catch{
        console.log("pailas, no se subió nada");
        process.exit(1);
    }
}
importData();