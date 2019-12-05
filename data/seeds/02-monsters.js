const data = require("../json/monsters.json");
// associate enviroment names with proper "environments" table foreign key
const environments = {
  "Cavern Dwellers": 1,
  "Dark Woods": 2,
  "Folk of the Realm": 3,
  "Lower Depths": 4,
  "Planar Powers": 5,
  "Ravenous Hordes": 6,
  "Swamp Denizens": 7,
  "Twisted Experiments": 8,
  "Undead Legion": 9
};

const monsters = Object.entries(data);

const seedArr = [];

for (let [environment, monstList] of monsters) {
  let monstArr = monstList.map(monst => {
    return {
      name: monst.name,
      environment: environments[environment],
      armor: monst.armor,
      attack: monst.attack,
      damage: monst.damage,
      description: monst.description,
      hp: monst.hp,
      instinct: monst.instinct,
      moves: monst.moves.join("\n"),
      page: monst.page,
      special_qualities: monst.special_qualities,
      url: monst.url
    };
  });
  seedArr.push(...monstArr);
}
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("monsters")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("monsters").insert(seedArr);
    });
};
