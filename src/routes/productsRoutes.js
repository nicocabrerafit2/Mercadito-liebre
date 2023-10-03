const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

/* GET ALL PRODUCTS */
router.get("/", productsController.index);

/* CREATE ONE PRODUCT */
router.get("/productAdd", productsController.productAdd);

/* GET ONE PRODUCT DETAIL */
router.get("/detail/:productoID", productsController.detail);

/* EDIT ONE PRODUCT */
router.get("/edit/:productoID", productsController.edit);

/* DELETE ONE PRODUCT***/
router.post("/delete/:productoID", productsController.delete);

module.exports = router;
