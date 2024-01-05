const { Router } = require("express"),
    tagsRoutes = Router();

const TagsController = require("../controllers/TagsController"),
    notesController = new NotesController();

tagsRoutes.get("/", notesController.index);

module.exports = notesRoutes;
