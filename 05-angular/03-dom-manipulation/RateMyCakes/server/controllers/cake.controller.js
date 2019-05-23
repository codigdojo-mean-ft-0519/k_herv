const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');

module.exports = {
  //GET: Retrieve all Cake
  index(request, response) {
    Cake.find({})
      .populate('ratings')
      .then(cakes => response.json(cakes))
      .catch(error => response.json(error));
  },
  //GET: Retrieve a Cake by ID
  show(request, response) {
    console.log("From our controller...", request.params)
    Cake.findOne(request.params)
      .then(cake => {
        response.json(cake ? cake : 'Not in there');
      })
      .catch(error => response.json(error));
  },

  //POST: Create a Cake
  create(request, response) {
    console.log('creating cake...', request.body);
    Cake.create(request.body)
      .then(cake => response.json(cake))
      .catch(error => response.json(error));
  },

  //PUT: Update a Cake by ID
  update(request, response) {
    console.log('request stuff', request.params, request.body);
    Cake.findByIdAndUpdate(request.params._id, request.body, {
        new: true
      })
      .then(cake => response.json(cake))
      .catch(error => response.json(error));
  },

};
