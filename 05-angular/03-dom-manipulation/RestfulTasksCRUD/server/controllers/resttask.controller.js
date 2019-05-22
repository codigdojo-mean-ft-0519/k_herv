//text before controller.js in file name is model/collection/field name

const mongoose = require('mongoose');
const Resttask = mongoose.model('Resttask');

module.exports = {
  //GET: Retrieve all Tasks
  index(request, response) {
    Resttask.find({})
      .then(resttasks => response.json(resttasks)) //resttask should be plural...response means send back to client
      // .then(resttasks => response.json({tasks: resttasks })) //this matches the platform way
      .catch(error => response.json(error));
  },
  //GET: Retrieve a Task by ID
  show(request, response) {
    console.log('request params', request.params);
    Resttask.findOne(request.params)
      .then(resttask => {
        response.json(resttask ? resttask : 'Not in there');
      })
      .catch(error => response.json(error));
  },

  //POST: Create a Task
  create(request, response) {
    console.log('inside create', request.body);
    Resttask.create(request.body)
      .then(resttask => response.json(resttask))
      .catch(error => response.json(error));
  },

  //PUT: Update a Task by ID
  update(request, response) {
    console.log('updated stuff in contoller.js file', request.params, request.body);
    Resttask.findByIdAndUpdate(request.params._id, request.body, { new: true })
      .then(task => response.json(task))
      .catch(error => response.json(error));
  },

  //DELETE: Delete a Task by ID
  destroy(request, response) {
    Resttask.findByIdAndRemove(request.params._id)
      .then(result => response.json(result))
      .catch(error => response.json(error));
  },
};
