const db = require('../data/db-config');

module.exports = {
    addProject,
    getProjects,
    getProjectById,
    addTask,
    getTasksByProjectId,
    addResource,
    getResources,
    getResourcesByProjectId,
    addResourceToProject
};

function addProject(project) {
    return db('projects').insert(project);
}

function getProjects() {
    return db('projects').select('*');
}

function getProjectById(id) {
    return db('projects')
        .where({ id })
        .select('*')
        .first();
}

function addTask(task) {
   return db('tasks').insert(task);
}

function getTasksByProjectId(project_id) {
    return db('tasks as t')
         .select('t.*', 'p.name as project_name', 'p.description as project_description')
         .where({ project_id })
        .join('projects as p', 't.project_id', 'p.id');
       
};

function addResource(resource) {
    return db('resources').insert(resource);
}

function getResources() {
    return db('resources').select('*');
}

function getResourcesByProjectId(project_id) {
    return db('resources as r')
        .select('r.*')
        .join('project_resources as p', 'r.id', 'p.resource_id')
        .where('p.project_id', project_id)
        
}

function addResourceToProject(resource_id, project_id) {
    return db('project_resources').insert({ project_id, resource_id });
}