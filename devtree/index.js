import express from 'express'

const app = express()

//Routing
app.get('/', (req, res)=>{
    res.send('Hello world!')
})

app.get('/miau', (req, res)=>{
    res.send('Miau!')
})

const port = process.env.Port || 4000
app.listen(port, () => {
    console.log('Server working: port ', port)
})