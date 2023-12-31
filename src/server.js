require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const express = require("express"),
    app = express(),
    PORT = 3333;

const routes = require("./routes");
migrationsRun();

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

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
