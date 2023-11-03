module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      brandId: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
    },
    {}
  );
  Product.associate = function (models) {
    Product.belongsTo(models.Brand, {
      as: "brand",
      foreignKey: "brandId",
    }),
      Product.belongsToMany(models.Category, {
        as: "categories",
        through: "categoryProduct",
        foreignKey: "productId",
        otherKey: "categoryId",
      }),
      Product.belongsToMany(models.Type, {
        as: "types",
        through: "typeProduct",
        foreignKey: "productId",
        otherKey: "typeId",
      }),
      Product.belongsToMany(models.Cart, {
        as: "carts",
        through: "cartProduct",
        foreingKey: "productId",
        otherKey: "cartId",
      });
  };
  return Product;
};
