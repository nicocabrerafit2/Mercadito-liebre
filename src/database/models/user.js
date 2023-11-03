module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      province: DataTypes.STRING,
      age: DataTypes.INTEGER,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {}
  );
  User.associate = function (models) {};
  return User;
};
