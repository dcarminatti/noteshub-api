const { Router } = require("express"),
  tagsRoutes = Router();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const TagsController = require("../controllers/TagsController"),
  tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.indexedDB);

module.exports = tagsRoutes;
