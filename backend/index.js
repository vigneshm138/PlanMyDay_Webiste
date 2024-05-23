const express = require('express')
const product = require('./Router/Product')
const login=require('./Router/Login')
const post=require('./Router/Post')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()



app.use(cors())



app.get("/", (req, res) => {
    res.send("home")
})

mongoose.connect('mongodb://127.0.0.1:27017/planmyday')

mongoose.connection.on("connected", () => {
    console.log("mongo connectd");
})

app.use("/product", product)
app.use("/login", login)
app.use("/post", post)


app.listen(4001, () => {
    console.log("server Is running");
})