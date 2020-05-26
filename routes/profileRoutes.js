const {Path} = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAdmin = require('../middlewares/requireAdmin');

const User = mongoose.model('users')


module.exports = (app) => {
    app.patch('/api/users/updateProfile', requireLogin, async (req, res) =>{
        try{
            const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body)
            res.status(200).send("success")
        }catch(err){
            res.send(err)
        }
    })
}