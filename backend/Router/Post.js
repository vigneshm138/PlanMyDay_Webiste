const express = require('express')
const bodyparser = require('body-parser')
const PostModel = require('../Module/userpost-model')


const router = express.Router()


router.use(bodyparser.json())


router.get('/', (req, res) => {
    res.send("post")
})



router.get('/get', (req, res) => {
    PostModel.find().then(response => res.send(response))
})


router.post('/post', (req, res) => {
    const post = new PostModel(req.body)
    post.save()
        .then(response => console.log(response))
    res.send("post")
})

router.delete('/delete/:id', (req, res) => {
    PostModel.findByIdAndDelete(req.params.id)
        .then(response => console.log(response))
    res.send("deleted")
})

router.put('/update/:id', (req, res) => {
    PostModel.findByIdAndUpdate(req.params.id, req.body)
        .then(response => console.log(response))
    res.send("updated")
})

module.exports = router