const { Router } = require("express"),
    routes = Router();

const usersRouter = require("./users.routes");

routes.use("/users", usersRouter);

module.exports = routes;
