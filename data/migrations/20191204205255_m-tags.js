exports.up = function(knex) {
  return knex.schema.createTable("monster_tags", tbl => {
    tbl.increments();
    tbl.string("tag_name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("monster_tags");
};
