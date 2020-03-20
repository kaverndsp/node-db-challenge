

exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {name: "Car?", description: "It's just a car?"},
    
  ]);
};
