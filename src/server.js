const express = require("express");
const app = express();
const methodOverride = require("method-override");

app.use(express.static("./public"));
app.use("/static", express.static('./static/'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//server abierto
app.listen(3000, () => { console.log("Servidor corriendo en el puerto 3000") });

//imports
const main = require("./routes/main");
const users = require("./routes/users");

//seteo de rutas
app.use("/", main);
app.use("/users", users);
    //error 404
app.use((req, res, next) => {
    res.status(404).render("./main/not-found");
});