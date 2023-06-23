const express = require("express");
const routeAutor = express.Router();
const autorController = require("../controllers/autorController");


routeAutor.get("/",(req,res)=> {
    
});

routeAutor.get("/{id}",(req,res)=> {
    
    
});

routeAutor.post("/",autorController.createAutor);


routeAutor.put("/{id}",(req,res)=> {

});

routeAutor.delete("/{id}",(req,res)=>{

});


module.exports = routeAutor;