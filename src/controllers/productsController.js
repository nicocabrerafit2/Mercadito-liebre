const { Product, Brand, Type, Category } = require("../database/models");

const controller = {
  // Show all products
  index: async (req, res) => {
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
  edit: (req, res) => {},

  // Method to update a product

  // Delete one product from data base
  delete: (req, res) => {},
};

module.exports = controller;
