const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    "hrs": Number,
    "placeType": String,
    "placeName": String,
    "location": String,
    "area": String,
    "img": String,
    "keyPoints": [String],
    "heading": String,
    "whatwedo": [String],
})

const ProductModel=mongoose.model('/product',productSchema)

module.exports=ProductModel;