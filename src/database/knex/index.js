const config = require("../../../knexfile"),
    knex = require("knex");

const connection = knex(config.development);

module.exports = connection;
