const mongoose = require('mongoose');
const {Schema} = mongoose;

const articleSchema = new Schema({
    title: String,
    body: String,
    creatorId: String,
    likes: {type: Number, default: 0},
    status: String,
    createdDate: Date
})

mongoose.model('articles', articleSchema);