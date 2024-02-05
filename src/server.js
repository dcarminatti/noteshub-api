require("express-async-errors");
require("dotenv/config");

const AppError = require("./utils/AppError"),
  routes = require("./routes"),
  uploadConfig = require("./configs/upload");

const migrationsRun = require("./database/sqlite/migrations");
migrationsRun();

const express = require("express"),
  app = express(),
  cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(routes);
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

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

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
