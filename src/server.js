const express = require('express')
//Express App
const app = express()

//Middlewares
app.use(express.json())
app.use((req, res, next) => {
    console.log(`Request path is ${req.path}  and request method is ${req.method}`)
})

//Routes


app.listen(4000, () => { 
    console.log(`App listening on port ${app.port}`)
})