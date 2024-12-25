const port = process.env.port || 8080
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

function randomNumberFunction (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.get('/randomNumber/:minValue/:maxValue', (req, res) => {

    const minValue = Number(req.params.minValue)
    const maxValue = Number(req.params.maxValue)

    if (isNaN(minValue) || isNaN(maxValue)) {
        return res.status(400).send({error:'Los valores deben ser números'})
    }

    const generatedNumber = randomNumberFunction(minValue, maxValue)

    console.log(`Random number between ${minValue}-${maxValue} is: ${generatedNumber}`)

    res.send({randomNumber: generatedNumber})
})

app.listen(port, () => {
    console.log(`Running server on port ${port}`)
})