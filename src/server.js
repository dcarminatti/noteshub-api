require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations"),
  express = require("express"),
  AppError = require("./utils/AppError"),
  routes = require("./routes"),
  cors = require("cors"),
  uploadConfig = require("./configs/upload");

const app = express(),
  PORT = 3333;

migrationsRun();
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

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
