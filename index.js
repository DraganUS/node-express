const express = require('express')
const app = express()
const port = 3000
const loop = require('./loop')
const fizzbazz = require('./fizzbazz')


app.listen(port, () => console.log('app is now listenig on port ' + port))

app.get('/', (req, res)=> res.send('hello world 1'))
app.get('/new', (req, res)=> res.send('hello another rout'))
app.get('/fizzbazz', fizzbazz.fizzbuzz)
app.get('/loop', loop.loopNums)
