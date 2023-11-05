module.exports = (sequelize, DataTypes) => {
  const productCategory = sequelize.define(
    "productCategory",
    {
      productId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    { tableName: "categoryproduct" }
  );
  productCategory.associate = function (models) {};
  return productCategory;
};
