// routes go in here

const RestcakeController = require('../controllers/ratemycakes.controller');

module.exports = function(app) {
  console.log('Loading routes... ');

  //GET: Retrieve all Cakes
  app.get('/cakes', function(request, response) {
    RestcakeController.index(request, response);
  });

  //GET: Retrieve a Cake by ID...only for the bottom component and then need messages, too
  app.get('/cakes/:_id', function(request, response) {
    RestcakeController.show(request, response);
  });

  //POST: Create a Cake
  app.post('/cakes', function(request, response) {
    RestcakeController.create(request, response);
  });

  //POST: Create a Rating
  app
    .post('/cakes', function(request, response) {
      RestcakeController.create(request, response);
    })

    //PUT: Update a Cake by ID
    .put('/cakes/:_id', function(request, response) {
      RestcakeController.update(request, response);
    });
};
