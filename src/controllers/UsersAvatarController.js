const knex = require("../database/knex"),
  AppError = require("../utils/AppError"),
  DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
  async update(req, res) {
    const user_id = req.user.id,
      avatarFilename = req.file.filename;

    const user = await knex("users").where({ id: user_id }).first(),
      diskStorage = new DiskStorage();

    if (!user) {
      throw new AppError(
        "Somente usuários autenticados podem mudar o avatar",
        401
      );
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFilename);
    user.avatar = filename;

    await knex("users").update(user).where({ id: user_id });

    return res.json(user);
  }
}

module.exports = UserAvatarController;
