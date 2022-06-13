const path = require("path");
const db = require('../database/models/');
let moment = require('moment')

let controller = {
    //controlador del index
    index: function(req, res){
        db.Comentario.findAll()
            .then(function(comentarios){
                res.status(200).render("./main/main.ejs", {comentarios: comentarios});
            })
    },
    //controlador que recibe los comentarios nuevos
    comentario: function(req, res){
        const format = "YYYY-MM-DD";
        let date = new Date();
        let dateTime = moment(date).format(format);
        db.Comentario.create({
            usuario: req.body.usuario,
            comentario: req.body.comentario,
            created_at: dateTime,
        })
        res.status(200).redirect('/');
    }
}

module.exports = controller;