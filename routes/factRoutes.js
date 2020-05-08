const {Path} = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAdmin = require('../middlewares/requireAdmin');

const Fact = mongoose.model('facts')


module.exports = (app) => {

    app.post('/api/facts/newFact', requireLogin, requireAdmin, async (req, res) =>{
        const {imageUrl, fact} = req.body;
        console.log(req.body)
        const newFact = new Fact({
            fact,
            imageUrl,
            createdDate: Date.now()
        });

        try{
            await newFact.save();
            res.send(newFact)
        }catch(err){
            res.status(422).send(err)
        }
    })
}