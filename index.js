const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5074;

const user = require('./data/user.json')


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('User management server is runnign')
})

app.get('/user', (req, res) => {
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('data hitting')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = user.length + 1;
    user.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`user manegement server is runnign on PORT: ${port}`)
})