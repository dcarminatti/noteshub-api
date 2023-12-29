const express = require("express"),
    app = express(),
    PORT = 3000;

const routes = require("./routes");

app.use(express.json());
app.use(routes);

app.get("/message/:id", (req, res) => {
    res.send(`Id da mensagem: ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
