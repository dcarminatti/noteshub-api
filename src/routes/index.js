const { Router } = require("express"),
    routes = Router();

const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);

module.exports = routes;
