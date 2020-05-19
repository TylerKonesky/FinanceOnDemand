const mongoose = require('mongoose');
const { Schema } = mongoose;
const articleSchema = require('./Article')

const userSchema = new Schema({
    googleId: String,
    name: String,
    userType: {type: String, default: 'regular'},
    userEmail: String, 
    username: {type: String, default: ''}, 
    googleEmail: {type: String, default: ''},
    articlesPublished: [articleSchema],
    articlesDraft: [articleSchema], 
    subscription: {type: Boolean, default: false},
    registered: {type: Boolean, default: false},
    emailValidated: {type: Boolean, default: false},
    contactPhone: {type: String, default: ''}

    
})

mongoose.model('users', userSchema);