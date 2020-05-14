const {Path} = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAdmin = require('../middlewares/requireAdmin');

const Fact = mongoose.model('facts')


module.exports = (app) => {

    app.post('/api/facts/newFact', requireLogin, requireAdmin, async (req, res) =>{
        const {imageURL, fact} = req.body;
        const newFact = new Fact({
            fact,
            imageURL,
            createdDate: Date.now()
        });

        try{
            await newFact.save();
            const allFacts = await Fact.find()
            res.send(allFacts)
        }catch(err){
            res.status(422).send(err)
        }
    })

    app.get('/api/facts/getAllFacts', async (req, res) =>{
        try{
            const allFacts = await Fact.find();
            res.send(allFacts)
        }catch(err){
            res.status(401).send(err)
        }
    })

    app.delete('/api/facts/deleteFact/:id', requireLogin, requireAdmin, async( req, res) => {
        try{
            const deleteFact = await Fact.findByIdAndDelete(req.params.id);
            const remainingFacts = await Fact.find();
            res.send(remainingFacts)
        }catch(err){
            res.status(401).send(err)
        }
    })
}