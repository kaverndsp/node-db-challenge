
exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    { description: 'Shook by "fun project"', notes: "Super sad fun project was a hoax.", isCompleted: false,  project_id: 1 }
    ]);
};
