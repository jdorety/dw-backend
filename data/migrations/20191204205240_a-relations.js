exports.up = function(knex) {
  return knex.schema.createTable("a_relationships", tbl => {
    tbl.increments();
    tbl
      .integer("attack_tag")
      .unsigned()
      .references("id")
      .inTable("a_tags")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("monster")
      .unsigned()
      .references("id")
      .inTable("monsters")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("a_relationships");
};
