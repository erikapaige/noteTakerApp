//bring in express server
const express = require('express')
//bring in join method from path
const { join } = require('path')
//build new express app
const app = express()

//build server.js 'boiler plate' (declare middlewear)
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//bringing in routes from 'routes file'
app.use(require('./routes/listRoutes.js'))

app.listen(3000, () => console.log('http://localhost:3000'))