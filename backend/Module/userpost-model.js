const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    "type": String,
    "heading": String,
    "tips": String,
    "whoPost": String
})

const PostModel = mongoose.model('/post', postSchema)

module.exports = PostModel;