require('dotenv').config();
const express = require("express");
const app = express();
const routeLivro = require("./routes/routeLivro");
const routeAutor = require("./routes/routeAutor");

const port = process.env.PORT || 3003;

console.log("senha: ",process.env.PASSWORD);

app.use(express.json());
app.use("/api/livro", routeLivro);
app.use("/api/autor", routeAutor);

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
