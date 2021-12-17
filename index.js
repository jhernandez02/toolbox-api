const express = require('express')
const cors = require('cors')

const indexRoutes = require('./app/routes/index.route')

const allowlist = ['http://localhost:3000', 'http://localhost', 'http://165.22.231.112']

const corsOptionsDelegate = function (req, callback) {
  let corsOptions
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

const app = express()
app.use(express.json())
app.use(cors(corsOptionsDelegate))

app.use('/api/', indexRoutes)

app.listen(3001, () => {
  console.log('Servidor en el puerto 3001')
})
