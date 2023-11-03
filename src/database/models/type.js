module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    "Type",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Type.associate = function (models) {
    Type.belongsToMany(models.Product, {
      as: "products",
      through: "typeProduct",
      foreignKey: "typeId",
      otherKey: "productId",
    });
  };
  return Type;
};
