const data = require("../json/monsters.json");
const environments = Object.keys(data);

const seedArr = environments.map((place, index) => {
  return {
    id: index + 1,
    name: place
  };
});
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("environments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("environments").insert(seedArr);
    });
};
