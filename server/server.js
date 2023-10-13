const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require('morgan')

app.use(
    cors({
        origin: "http://127.0.0.1:5500",
        allowedHeaders: ['Content-Type', 'Authorization'],
        methods: ["POST", "HEAD", "DELETE"],
        credentials: true
    })
)
app.use(morgan('combined'))
app.post("/data", (req, res)=>{
    res.json({name: "chuong", age: 18})
})
app.listen(3000)
