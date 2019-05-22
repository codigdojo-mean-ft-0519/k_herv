ninjaGoldController = require('../controllers/ninjaGold.controller');

module.exports = function(app) {
  console.log('Loading routes...');

  //GET:  Render page

  app.get('/', function(request, resposne) {
    ninjaGoldController.index(request, response);
  });
};
