require("express-async-errors");

const AppError = require("./utils/AppError");
const express = require("express"),
    app = express(),
    PORT = 3000;

const routes = require("./routes");

app.use(express.json());
app.use(routes);

app.use((error, req, res, next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    }

    console.error(error);

    return res.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});

app.get("/message/:id", (req, res) => {
    res.send(`Id da mensagem: ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
