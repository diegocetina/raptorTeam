const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById, postProduct, modProducts, deleteProd} = require("../controller/ProductControllers");

router.get("/", getAllProducts);

router.get("/:id", getProductById)

router.post("/", postProduct)

router.put("/:id", modProducts)

router.delete("/id", deleteProd)

module.exports= router;