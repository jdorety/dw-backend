exports.up = function(knex) {
  return knex.schema.createTable("monsters", tbl => {
    tbl.increments();
    tbl.string("name", 255);
    tbl.integer("armor");
    tbl.string("attack");
    tbl.string("damage");
    tbl.text("description");
    tbl.integer("HP");
    tbl.string("instinct");
    tbl.text("moves");
    tbl.integer("page");
    tbl.string("special_qualities");
    tbl.string("url");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("monsters");
};
