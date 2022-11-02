const express = require("express");
const router = express.Router();
const { getAllProducts} = require("../controller/ProductControllers");

router.get("/", getAllProducts);



module.exports= router;