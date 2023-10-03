const { Product } = require("../database/models");

const controller = {
  // Show all products
  index: async (req, res) => {
    try {
      const product = await Product.findAll({});
      res.render("productsList", { product });
    } catch {
      res.render("error404");
    }
  },

  // Detail from one product
  detail: (req, res) => {},

  // Form to create one product
  productAdd: (req, res) => {
    res.render("productAdd", {});
  },

  // Method to store one product

  // Form to edit a product
  edit: (req, res) => {},

  // Method to update a product

  // Delete one product from data base
  delete: (req, res) => {},
};

module.exports = controller;
