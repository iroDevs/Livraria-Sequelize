const express = require("express");
const LivroController = require("../controllers/livroController")
const routeLivro = express.Router();


routeLivro.get("/",(req,res)=> {
    
});

routeLivro.get("/{id}",(req,res)=> {
    
    
});

routeLivro.post("/",LivroController.createLivro);


routeLivro.put("/{id}",(req,res)=> {

});

routeLivro.delete("/{id}",(req,res)=>{

});


module.exports = routeLivro;