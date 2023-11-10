const { User } = require("../database/models");

module.exports = {
  login: (req, res) => {
    return res.render("userLogin");
  },

  register: (req, res) => {
    return res.render("userRegister");
  },

  list: function (req, res) {
    res.render("userList");
  },

  detail: async (req, res) => {
    try {
      const userFinded = await User.findByPk(req.params.userID, {
        include: [{ association: "carts" }],
      });
      res.render("usersDetail");
    } catch {
      res.render("error404");
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },
};
