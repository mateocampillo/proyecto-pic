const path = require("path");

let controller = {
    index: (req, res) => {
        res.status(200).render("./main/main.ejs")
    }
}

module.exports = controller;