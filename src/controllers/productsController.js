// Declaración de desestructuración que asigna los modelos Product, Brand, Type y Category a las variables correspondientes.
const { Product, Brand, Type, Category } = require("../database/models");

const controller = {
  // Show all products
  productList: async (req, res) => {
    try {
      const product = await Product.findAll({
        include: ["brand", "categories", "types"],
      });
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
      productStore.addTypes(req.body.types);
      return res.redirect("/products");
    } catch {
      res.render("error404");
    }
  },
  // Detail from one product
  detail: async (req, res) => {
    const productID = req.params.id;
    const productFinded = await Product.findByPk(productID, {
      include: ["brand", "categories", "types"],
    });
    return res.render("productDetail", { productFinded });
  },
  // Form to edit a product
  editForm: async (req, res) => {
    try {
      const types = await Type.findAll();
      const categories = await Category.findAll();
      const brands = await Brand.findAll();
      const productID = req.params.id;
      const productFinded = await Product.findByPk(productID, {
        include: ["brand", "categories", "types"],
      });
      res.render("productEditForm", {
        productFinded,
        brands,
        types,
        categories,
      });
    } catch {
      res.render("error404");
    }
  },

  edit: async (req, res) => {
    try {
      const productID = req.params.id;
      const productFinded = await Product.update(req.body, {
        where: { id: productID },
      });
      productFinded.addCategories(req.body.categories);
      productFinded.addTypes(req.body.types);
      return res.redirect("/products");
    } catch {
      res.render("error404");
    }
  },
  // Delete one product from data base
  destroy: async (req, res) => {
    const productID = req.params.id;
    Product.destroy({ where: { id: productID } });
    return res.redirect("/products");
  },
};

module.exports = controller;
