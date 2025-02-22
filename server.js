const express  = require('express');
const cors = require('cors');
const { createSecretKey } = require('crypto');

const app = express()

app.use(express.json())

app.use(cors())




app.get('/', (req,res)=>{
    res.send('Home')
})



app.get('/users/:name', (req,res)=>{
    res.send('users')
})

app.get('/posts' ,(req,res)=>{
    res.send('iam here')
})



app.listen(3000, ()=>{
    console.log('Server Is runing..........')
})


module.exports = {app}