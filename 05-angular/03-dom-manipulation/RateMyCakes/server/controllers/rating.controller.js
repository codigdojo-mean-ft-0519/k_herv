const mongoose = require('mongoose');
const Rating = mongoose.model('Rating');
const Cake = mongoose.model('Cake');

module.exports = {
  //GET: Retrieve all Rating
  index(request, response) {
    Rating.find({})
      .then(ratings => response.json(ratings))
      .catch(error => response.json(error));
  },
  //GET: Retrieve a Rating by ID
  show(request, response) {
    console.log("From our controller...", request.params)
    Rating.findOne(request.params)
      .then(rating => {
        response.json(rating ? rating : 'Not in there');
      })
      .catch(error => response.json(error));
  },

  //POST: Create a Rating
  create(request, response) {
    console.log('creating rating...', request.body);
    Rating.create(request.body)
      .then(rating => {
        return Cake.findByIdAndUpdate(rating.cake, {
            $push: {
              ratings: rating._id
            }
          })
          .then(() => response.json(rating));
      })
      .catch(error => response.json(error));
  },

  //PUT: Update a Rating by ID
  update(request, response) {
    console.log('request stuff', request.params, request.body);
    Rating.findByIdAndUpdate(request.params._id, request.body, {
        new: true
      })
      .then(rating => response.json(rating))
      .catch(error => response.json(error));
  },

};
