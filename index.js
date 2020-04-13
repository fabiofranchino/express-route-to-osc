const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = 3005

const db = require('./modules/db.js')
const mosc = require('./modules/mosc.js')

// WEBSERVER
app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({
  extended: false
}))

app.get('/', (req, res) => {
  console.log('GET')
  res.status(200).json({ api: 'ok' })
})

app.post('/push', function (req, res) {
  const dt = req.body
  console.log(dt)
  db.write(dt)
  mosc.send(dt)
  res.status(200).json({ status: 'ok' })
})

app.listen(port, () => console.log(`Webserver ON at port ${port}!`))
