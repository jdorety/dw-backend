exports.up = function(knex) {
  return knex.schema.createTable("a_tags", tbl => {
    tbl.increments();
    tbl.string("tag_name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("a_tags");
};
