// Declaración de desestructuración que asigna los modelos Product, Brand, Type y Category a las variables correspondientes.
const { Product, Brand, Type, Category } = require("../database/models");

const controller = {
  // Show all products
  productList: async (req, res) => {
    try {
      const product = await Product.findAll({ include: ["brand"] });
      res.render("productList", { product });
    } catch {
      res.render("error404");
    }
  },

  // Form to create one product
  create: async (req, res) => {
    try {
      const types = await Type.findAll();
      const categories = await Category.findAll();
      const brands = await Brand.findAll();
      res.render("productAdd", { brands, types, categories });
    } catch {
      res.render("error404");
    }
  },
  // Store one product
  store: async (req, res) => {
    try {
      const productStore = await Product.create(req.body);
      productStore.addCategories(req.body.categories);
      return res.redirect("/products");
    } catch {
      res.render("error404");
    }
  },
  // Detail from one product
  detail: (req, res) => {},

  // Method to store one product

  // Form to edit a product
  edit: async (req, res) => {
    try {
      const types = await Type.findAll();
      const categories = await Category.findAll();
      const brands = await Brand.findAll();
      res.render("productEditForm", { brands, types, categories });
    } catch {
      res.render("error404");
    }
  },

  // Method to update a product

  // Delete one product from data base
  destroy: async (req, res) => {
    const productID = req.params.id;
    Product.destroy({ where: { id: productID } });
    return res.redirect("/products");
  },
};

module.exports = controller;
