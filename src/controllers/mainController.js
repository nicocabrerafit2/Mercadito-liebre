module.exports = {
  home: (req, res) => {
    return res.render("home");
  },
  login: (req, res) => {
    return res.render("userLogin", {});
  },
};
