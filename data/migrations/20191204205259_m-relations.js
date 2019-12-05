exports.up = function(knex) {
  return knex.schema.createTable("m_relationships", tbl => {
    tbl.increments();
    tbl
      .integer("monster_tag")
      .unsigned()
      .references("id")
      .inTable("m_tags")
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
  return knex.schema.dropTableIfExists("m_relationships");
};
