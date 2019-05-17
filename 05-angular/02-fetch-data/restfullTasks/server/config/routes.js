// routes go in here

const ResttaskController = require('../controllers/resttask.controller');

module.exports = function(app) {
  console.log('Loading routes... ');

  //GET: Retrieve all Tasks
  app.get('/tasks', function(request, response) {
    ResttaskController.index(request, response);
  });

  //GET: Retrieve a Task by ID
  app.get('/tasks/:_id', function(request, response) {
    ResttaskController.show(request, response);
  });

  //POST: Create a Task
  app
    .post('/tasks', function(request, response) {
      ResttaskController.create(request, response);
    })

    //PUT: Update a Task by ID
    .put('/tasks/:_id', function(request, response) {
      ResttaskController.update(request, response);
    });

  //DELETE: Delete a Task by ID
  app.delete('/tasks/:_id', function(request, response) {
    ResttaskController.destroy(request, response);
  });
};
