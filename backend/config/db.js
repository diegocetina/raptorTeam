require("dotenv").config();
const mongoose = require("mongoose");

const connectDB =  () => {
    try{
         mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log("La conexión a Mongo fue exitosa");
    }catch(error){
        console.log("pailas, no se conectó");
        process.exit(1);
    }
}

module.exports = connectDB;