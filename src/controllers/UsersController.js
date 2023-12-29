const AppError = require("../utils/AppError"),
    sqliteConnection = require("../database/sqlite"),
    { hash } = require("bcryptjs");

class UsersController {
    async create(req, res) {
        const { name, email, password } = req.body,
            database = await sqliteConnection();

        const checkUserExist = await database.get(
            "SELECT * FROM users WHERE email = (?)",
            [email]
        );

        if (checkUserExist) {
            throw new AppError("Este email já está em uso.");
        }

        const hashedPassword = await hash(password, 8);

        await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword]
        );

        return res.status(201).json({});
    }

    async update(req, res) {
        const { name, email } = req.body,
            { id } = req.params;

        const database = await sqliteConnection(),
            user = await database.get("SELECT * FROM users WHERE id = (?)", [
                id,
            ]);

        if (!user) {
            throw new AppError("Usuário não encontrado.");
        }

        const userWithUpdatedEmail = await database.get(
            "SELECT * FROM users WHERE email = (?)",
            [email]
        );

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este email já está em uso!");
        }

        user.name = name;
        user.email = email;

        await database.run(
            `
            UPDATE users SET
            name = ?,
            email = ?,
            updated_at = ?
            WHERE id = ?
        `,
            [user.name, user.email, new Date(), id]
        );

        return res.json();
    }
}

module.exports = UsersController;
