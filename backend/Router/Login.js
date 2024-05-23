const express = require('express')
const bodyparser = require('body-parser')
const LoginModel = require('../Module/login-model')

const router = express.Router()


router.use(bodyparser.json())


router.get('/', (req, res) => {
    res.send("login")
})



router.get('/get', (req, res) => {
    LoginModel.find().then(response => res.send(response))
})


router.post('/post', (req, res) => {
    const login = new LoginModel(req.body)
    login.save()
        .then(response => console.log(response))
    res.send("post")
})

router.delete('/delete/:id', (req, res) => {
    LoginModel.findByIdAndDelete(req.params.id)
        .then(response => console.log(response))
    res.send("deleted")
})

router.put('/update/:id', (req, res) => {
    LoginModel.findByIdAndUpdate(req.params.id,req.body)
        .then(response => console.log(response))
    res.send("updated")
})

module.exports = router