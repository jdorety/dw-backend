const knex = require("knex");

const environment = process.env.ENVIRONMENT || "development";
const config = require("../knexfile");

const db = knex(config[environment]);

module.exports = db;
