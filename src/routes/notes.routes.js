const { Router } = require("express"),
    notesRoutes = Router();

const NotesController = require("../controllers/NotesController"),
    notesController = new NotesController();

notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);

module.exports = notesRoutes;
