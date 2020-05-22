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

//route to index.html, using '*'
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})

//route to notes.html
app.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, './public/notes.html'))
})

//bringing in routes from 'routes file'
app.use(require('./routes/listRoutes.js'))


//express listening on the port with call back
app.listen(3000, () => console.log('http://localhost:3000'))