module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {}
  );
  Cart.associate = function (models) {
    Cart.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    }),
      Cart.belongsToMany(models.Product, {
        as: "products",
        through: "cartProduct",
        foreingKey: "cartId",
        otherKey: "productId",
      });
  };
  return Cart;
};
