const mongoose = require('mongoose');
const {Schema} = mongoose;

const pollSchema = new Schema({
    question: String,
    answers: Array,
    respondedUsers: Array,
    active: Boolean,
    createdDate: Date
})

mongoose.model('polls', pollSchema);