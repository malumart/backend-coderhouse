import express from 'express';


const app = express ()

app.get('/', (req, res) =>{
    res.send('servidor funcionando')
})

app.get('/saludo', (req, res) =>{
    res.send('estoy desde express')
})

app.listen(8081, () => {
    console.log('server up desde localhost')
})