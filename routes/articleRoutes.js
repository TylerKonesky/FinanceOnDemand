const {Path} = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireAdmin = require('../middlewares/requireAdmin');

const Article = mongoose.model('articles')


module.exports = (app) => {
    app.get('/api/articles/getAllArticles', async(req, res) =>{
        try{
            const allArticles = await Article.find()
            res.send(allArticles)
        }catch(err){
            res.status(401).send(err)
        }
    })

    app.get('/api/articles/:id', async (req, res) =>{
        try{
            const article = await Article.findById(req.params.id);
            res.status(200).send(article)
        }catch(err){
            res.send("Article not found")
        }
    })

    app.post('/api/articles/new', requireLogin, async (req, res) =>{
        try{
            const newArticle = new Article({
                creatorId: req.user.id, 
                title: req.body.title,
                body: req.body.content, 
                status: 'live', 
                createdDate: Date.now()
            })
            await newArticle.save();
            res.send(newArticle)
        }catch(err){
            res.status(422).send(err)
        }
    })

}



