exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("a_tags")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("a_tags").insert([
        { id: 1, tag_name: "Close" },
        { id: 2, tag_name: "Reach" },
        { id: 3, tag_name: "Messy" },
        { id: 4, tag_name: "Near" },
        { id: 5, tag_name: "Far" },
        { id: 6, tag_name: "Forceful" },
        { id: 7, tag_name: "Hand" }
      ]);
    });
};
