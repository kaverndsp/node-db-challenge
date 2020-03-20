const express = require('express');
const projects = require('../model/db-helper.js');

const router = express.Router();


router.post('/', (req, res) => {
    if(!req.body.name) {
        res.status(400).json({ errorMessage: "Project name is required" });
    }
    else {
        projects.addProject(req.body)
            .then(project => {
                res.status(201).json(project);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ errorMessage: 'Something went wrong with the server' });
            });
    }
});


router.get('/', (req, res) => {
    projects.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: "Something went wrong with the server" });
        });
});


router.post('/:id/tasks', (req, res) => {
   
    if(!req.body.description) {
        res.status(400).json({ errorMessage: "Task description is required" });
    }
    else {
        projects.addTask(req.body)
            .then(task => {
                res.status(201).json(task);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ errorMessage: "Something went wrong with the server" });
            });
    }
});


router.get('/:id/tasks', (req, res) => {
    const { id: project_id } = req.params;
    projects.getTasksByProjectId(project_id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: "Something went wrong getting the server" });
        });
});


router.post('/:id/resources', (req, res) => {
    const { id: project_id } = req.params;
    const { resource_id } = req.body;
   
        projects.addResourceToProject(resource_id, project_id)
            .then(resource => {
                res.status(201).json(resource);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: "Something went wrong with the server" });
            });
    
});


router.post('/resources', (req, res) => {
    const resource = req.body;
    if(!resource.name) {
        res.status(400).json({ error: "Resource name is required" });
    }
    else {
        projects.addResource(resource)
            .then(created => {
                res.status(201).json(created);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: "Something went wrong with the server" });
            })
    }
});


router.get('/resources', (req, res) => {
    projects.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Something went wrong with the server" });
        });
});


module.exports = router;