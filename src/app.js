const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");
app.use(express.static(path.resolve(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.use("/", mainRoutes);
app.listen(3001, console.log("Servidor corriendo en el puerto", 3001));
