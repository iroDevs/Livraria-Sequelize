require('dotenv').config();
const express = require("express");
const app = express();
const routeLivro = require("./routes/routeLivro");
const routeAutor = require("./routes/routeAutor");
const routeCategoria = require('./routes/routeCategoria');

require("./database");

const port = process.env.PORT || 3003;

app.use(express.json());
app.use("/api/livro", routeLivro);
app.use("/api/autor", routeAutor);
app.use("/api/categoria",routeCategoria);

app.listen(port, ()=> {
    console.log("listening on port:",port);
});

app.get("/", (req, res) => {
    const msg = {
        message: "Hello Wrold",
        status:200,
    };

    res.status(msg.status).json(msg);
});
