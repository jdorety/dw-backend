const data = require("../json/monsters.json");

const tags = {
  Close: 1,
  Reach: 2,
  Messy: 3,
  Near: 4,
  Far: 5,
  Forceful: 6,
  Hand: 7
};

const monstData = [...Object.values(data)];
const monstArr = [];
for (let i of monstData) {
  monstArr.push(...i);
}
// console.log(monstArr);

const tagsArr = [];

for (let monst in monstArr) {
  let { attack_tags } = monstArr[monst];
  let attArr = attack_tags.split(",");
  attArr = attArr.map(tag => tag.trim());
  // console.log(attArr);
  if (attArr[0] !== "") {
    let arr = attArr.map(tag => {
      return {
        attack_tag: tags[tag],
        monster: parseInt(monst) + 1
      };
    });
    // console.log(arr)
    tagsArr.push(...arr);
  }
}
console.log(tagsArr);
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("a_relations")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("a_relations").insert(tagsArr);
    });
};
