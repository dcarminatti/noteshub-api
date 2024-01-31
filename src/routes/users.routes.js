const { Router } = require("express"),
  usersRoutes = Router();

const UsersController = require("../controllers/UsersController"),
  usersController = new UsersController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);

module.exports = usersRoutes;
