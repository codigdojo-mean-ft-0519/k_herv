const PersonController = require("../controllers/person.controller");

module.exports = function(app){
    console.log("Loading routes... ");

    //Shows a full colleciton of all 1955 persons
    app.get('/', function (request, response) {
        PersonController.index(request,response);
    });

    //One persons info
    app.get("/:name", function (request,response){
        PersonController.show(request,response)
    })

    app.get("/new/:name", function (request,response){
        PersonController.create(request,response);
    })

    //Remove specified person
    app.get("/remove/:name", function (request, response){
        PersonController.destroy(request, response);
    })
}