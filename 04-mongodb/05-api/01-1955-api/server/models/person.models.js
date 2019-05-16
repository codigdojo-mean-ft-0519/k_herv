const mongoose = require('mongoose');
const { Schema } = mongoose; 

const PersonSchema = Schema ({
    name: { 
        type: String, 
        required: true, 
        trim: true,
    },
}, {timestamps: true});

module.exports = mongoose.model("Person", PersonSchema);