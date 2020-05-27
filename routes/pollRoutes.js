const {Path} = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAdmin = require('../middlewares/requireAdmin');

const Poll = mongoose.model('polls')


module.exports = (app) => {

    app.post('/api/polls/newPoll', requireLogin, requireAdmin, async (req, res) =>{
        console.log(req.body)
        const {question, answers } = req.body;
        const answersArray = answers.split(',').map(ans => ans.trim());
        const finalAnswers = []
        answersArray.map(answer =>{
            finalAnswers.push({answer:[answer], responses: 0}) 
        })
        const newPoll = new Poll({
            question, 
            answers: finalAnswers, 
            active: false,
            respondedUsers: [],
            createdDate: Date.now()

        });

        try{
            await newPoll.save();
            const allPolls = await Poll.find()
            res.send(allPolls)
        }catch(err){
            res.status(422).send(err)
        }
    })

    app.get('/api/polls/getAllPolls', async (req, res) =>{
        try{
            const allPolls = await Poll.find();
            res.send(allPolls)
        }catch(err){
            res.status(401).send(err)
        }
    })

    app.post('/api/polls/response', requireLogin, async(req, res) =>{
        console.log(req.body) 
    })

    app.delete('/api/polls/deletePoll/:id', requireLogin, requireAdmin, async( req, res) => {
        try{
            const deletePoll = await Poll.findByIdAndDelete(req.params.id);
            const remainingPolls = await Poll.find();
            res.send(remainingPolls)
        }catch(err){
            res.status(401).send(err)
        }
    })
}