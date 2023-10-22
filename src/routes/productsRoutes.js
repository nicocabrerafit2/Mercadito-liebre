const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

/* GET ALL PRODUCTS */
router.get("/", productsController.productList);

/* CREATE ONE PRODUCT */
router.get("/productAdd", productsController.create);
router.post("/productAdd", productsController.store);

/* GET ONE PRODUCT DETAIL */
router.get("/detail/:productoID", productsController.detail);

/* EDIT ONE PRODUCT */
router.get("/edit/:productoID", productsController.edit);

/* DELETE ONE PRODUCT***/
router.post("/destroy/:id", productsController.destroy);

module.exports = router;
