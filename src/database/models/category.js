module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Category.associate = function (models) {
    Category.belongsToMany(models.Product, {
      as: "products",
      through: "categoryProduct",
      foreingKey: "categoryId",
      otherKey: "productId",
    });
  };
  return Category;
};
