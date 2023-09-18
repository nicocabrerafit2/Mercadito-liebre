const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const userController = require("../controllers/userController");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Mercadito-liebre/public/img/imgUsers");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const validacionesRegistro = [
  body("nombre")
    .notEmpty()
    .isLength({ min: 2 })
    .withMessage("Debe introducir su nombre de mas de 2 caracteres"),
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Debe introducir un mail válido (ejemplo@email.com)"),
  body("contrasena")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Debe introducir una contraseña de 8 o mas caracteres"),
  body("fotoUsuario").custom(async (value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".jpeg"];

    if (!file) {
      throw new Error(
        "Tienes que elegir una imagen en alguno de estos formatos jpg-png-jpeg"
      );
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];

const validacionesLogin = [
  body("emailLogin") // **** Agregar validacion que el mail ya esta registrado para poder entrar ****
    .notEmpty()
    .isEmail()
    .withMessage("Debe introducir un mail válido (ejemplo@email.com)"),
  body("contrasenaLogin")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Debe introducir una contraseña de 8 o mas caracteres"),
];

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    fileLocal = file;
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

router.get("/login", userController.login);
router.get("/detail/:usuarioID", userController.detail);
router.post("/login", validacionesLogin, userController.procesLogin);
router.get("/", userController.home);
//router.get('/search', mainController.search)
router.get("/register", userController.register);
router.get("/logout", userController.logout);
router.get("/userList", userController.list);
router.post(
  "/",
  upload.single("imagen"),
  validacionesRegistro,
  userController.store
);

module.exports = router;
