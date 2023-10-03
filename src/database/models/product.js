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
  Product.associate = function (models) {};
  return Product;
};
