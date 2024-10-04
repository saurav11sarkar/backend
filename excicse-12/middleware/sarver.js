const express = require('express');
const app = express();


const simpleLogic = (req, res, next) => {
    console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`)

    if (req.query.name === 'saurav') {
        return res.json({ Massage: "Bad request" })
    }

    next()
}

// googlebal middleware
app.use(simpleLogic)

app.get('/', (req, res) => {
    res.json({ massage: 'Hello' })
})
app.get('/hello', (req, res) => {
    res.send("What is your name")
})

app.listen(5000, () => {
    console.log('Application running on port 5000')
})