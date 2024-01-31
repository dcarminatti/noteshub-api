const { Router } = require("express"),
  usersRoutes = Router();

const multer = require("multer"),
  uploadConfig = require("../configs/upload"),
  upload = multer(uploadConfig.MULTER);

const UsersController = require("../controllers/UsersController"),
  usersController = new UsersController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"));

module.exports = usersRoutes;
