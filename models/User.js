const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    userType: String,
    userEmail: String
    
})

mongoose.model('users', userSchema);