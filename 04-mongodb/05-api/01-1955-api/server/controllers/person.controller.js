const mongoose = require('mongoose');
const Person = mongoose.model("Person")

module.exports = {
    index(request, response){
        Person.find({})
            .then(person => response.json(person))
            .catch(error => response.json(error));
    },
    show(request, response){
        Person.findOne(request.params)
            .then(person => {
                response.json( person ? person: "They weren't around in 1955!");
            })
            .catch(error => response.json(error));
    },
    create(request, response){
        Person.create(request.params)
            .then(person => response.json(person))
            .catch(error => response.json(error));
    },
    destroy(request, response){
        Person.remove(request.params)
            .then(result => response.json(result))
            .catch(error => response.json(error));
    },
}