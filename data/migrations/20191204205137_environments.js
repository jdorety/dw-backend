exports.up = function(knex) {
  return knex.schema.createTable("environments", tbl => {
    tbl.increments();
    tbl.string("name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("environments");
};
