const express = require("express");
const router = express.Router();

/* CREATE USER */
router.get("/register", userController.register);

/* LOGIN USER */
router.get("/login", userController.login);
router.post("/login", userController.procesLogin);

/* LOGOUT USER */
router.get("/logout", userController.logout);

/* DETAIL USER */
router.get("/detail/:userID", userController.detail);

/* LIST OF USERS */
router.get("/userList", userController.list);

/* HOME */
router.get("/", userController.home);

/* Agregar un search users, perfil de user, delete user, modificar user*/

module.exports = router;
