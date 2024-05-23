const express = require('express')
const ProductModel = require('../Module/product-module')
const bodyparser = require('body-parser')

const router = express.Router()


router.use(bodyparser.json())


router.get('/', (req, res) => {
    res.send("product")
})



router.get('/get', (req, res) => {
    ProductModel.find().then(response => res.send(response))
})


router.post('/post', (req, res) => {
    const product = new ProductModel(req.body)
    product.save()
        .then(response => console.log(response))
    res.send("post")
})

router.delete('/delete/:id', (req, res) => {
    ProductModel.findByIdAndDelete(req.params.id)
        .then(response => console.log(response))
    res.send("deleted")
})

router.put('/update/:id', (req, res) => {
    ProductModel.findByIdAndUpdate(req.params.id,req.body)
        .then(response => console.log(response))
    res.send("updated")
})

module.exports = router