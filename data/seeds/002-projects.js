
exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { name: 'Fun Project', description: "Psyche, it's not atually fun.", isCompleted: false }
    ]);
};
