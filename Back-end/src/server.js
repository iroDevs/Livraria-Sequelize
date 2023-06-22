const express = require("express");
const app = express();
const routeLivro = require("./routes/routeLivro");

const port = 3333;

app.use("/api/livro", routeLivro);

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
