const { Router } = require("express"),
    tagsRoutes = Router();

const TagsController = require("../controllers/TagsController"),
    tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.indexedDB);

module.exports = tagsRoutes;
