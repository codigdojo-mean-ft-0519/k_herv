//text before controller.js in file name is model/collection/field name

const mongoose = require('mongoose');
const RateMyCakes = mongoose.model('RateMyCakes');

module.exports = {
  //GET: Retrieve all Tasks
  index(request, response) {
    RateMyCakes.find({})
      .then(cakes => response.json(cakes)) //ratemycakes should be plural...response means send back to client
      // .then(ratemycakes => response.json({tasks: ratemycakes })) //this matches the platform way
      .catch(error => response.json(error));
  },
  //GET: Retrieve a Task by ID
  show(request, response) {
    console.log('request params', request.params);
    RateMyCakes.findOne(request.params)
      .then(cake => {
        response.json(cake ? cake : 'Not in there');
      })
      .catch(error => response.json(error));
  },

  //POST: Create a Task
  create(request, response) {
    console.log('inside create', request.body);
    RateMyCakes.create(request.body)
      .then(cake => response.json(cake))
      .catch(error => response.json(error));
  },

  //when we create a message, we are updating a cake

  //PUT: Update a Task by ID
  update(request, response) {
    console.log('request stuff', request.params, request.body);
    RateMyCakes.findByIdAndUpdate(request.params._id, request.body, {
      new: true,
    })
      .then(cake => response.json(cake))
      .catch(error => response.json(error));
  },
};
