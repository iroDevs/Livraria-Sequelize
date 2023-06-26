const express = require("express");
const LivroController = require("../controllers/livroController")
const routeLivro = express.Router();


routeLivro.get("/",LivroController.getAllLivro);

routeLivro.get("/:id",LivroController.getLivroById);

routeLivro.post("/",LivroController.createLivro);


routeLivro.put("/:id",LivroController.updateLivro);

routeLivro.delete("/:id",LivroController.deleteLivro);


module.exports = routeLivro;