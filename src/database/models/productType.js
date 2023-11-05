module.exports = (sequelize, DataTypes) => {
  const productType = sequelize.define(
    "productType",
    {
      typeId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    { tableName: "typeproduct" }
  );
  productType.associate = function (models) {};
  return productType;
};
