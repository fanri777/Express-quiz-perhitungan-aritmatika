const router = require('express').Router()
const express = require('express')
const app = express ()
const port = 3000
const hitung = require('./controllers/hitung-controller')
const getAllHistory = require('./controllers/hitung-controller')

app.use(express.json())
app.use(router)

router.post('/hitung', hitung.hitung)
router.get('/getAllHistory', hitung.getAllHistory);


app.listen(port, () => {
    console.log('Server is Running at port 3000 !')
})