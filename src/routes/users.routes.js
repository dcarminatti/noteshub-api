const { Router } = require("express"),
    usersRoutes = Router();

const UsersController = require("../controllers/UsersController"),
    usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;
