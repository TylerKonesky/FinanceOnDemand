const mongoose = require('mongoose');
const {Schema} = mongoose;

const articleSchema = new Schema({
    email: String,
    title: String,
    body: String
})