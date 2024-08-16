const express = require('express')
require('./db/mongoose')
const User = require('./models/user') 
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const multer = require('multer')


const app = express()
const port = process.env.PORT

//middleware to disable GET request
// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET request are disabled')
//     }else{
//         next()
//     }
// })

//maintenance middleware
// app.use((req, res, next) => {
//     res.status(503).send('Currently in maintenance')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,() => {
    console.log("server is up on port " + port)
})



