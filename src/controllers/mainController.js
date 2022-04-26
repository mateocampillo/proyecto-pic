const path = require("path");

let controller = {
    index: (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "../views/main.html"));
    }
}

module.exports = controller;