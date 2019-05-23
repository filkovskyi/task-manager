const express = require('express');
const taskRoutes = express.Router();

// Require Task model in our routes module
let Task = require('./task.model'); // Business model

// Defined store route
taskRoutes.route('/add').post(function (req, res) {
  let task = new Task(req.body);
  task.save()
    .then(task => {
      res.status(200).json({'task': 'task was added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
taskRoutes.route('/').get(function (req, res) {
  Task.find(function (err, task) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(task);
    }
  });
});

// Defined edit route
taskRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Task.findById(id, function (err, task) {
    res.json(task);
  });
});

//  Defined update route
taskRoutes.route('/update/:id').post(function (req, res) {
  Task.findById(req.params.id, function (err, task) {
    if (!task)
      res.status(404).send("data is not found");
    else {
      task.personName = req.body.personName;
      task.volume = req.body.volume;
      task.type = req.body.type;

      task.save().then(task => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
taskRoutes.route('/delete/:id').get(function (req, res) {
  Task.findByIdAndRemove({_id: req.params.id}, function (err, task) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = taskRoutes;
