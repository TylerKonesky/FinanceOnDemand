const mongoose = require('mongoose');
const { Schema } = mongoose;

const factSchema = new Schema({
    fact: String,
    imageURL: String,
    createdDate: Date
    
})

mongoose.model('facts', factSchema);