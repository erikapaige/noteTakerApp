//bring in express server, using node package express
const express = require('express')
//bring in join method from path, using node package path
const { join } = require('path')
//build new express app
const app = express()

//build server.js 'boiler plate' (declare middlewear)
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//bringing in routes from 'routes file'
app.use(require('./routes/listRoutes.js'))

//route to notes.html (using directory path)
app.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, './public/notes.html'))
})

//route to index.html, using '*'
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})


//express listening on the port with call back
app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))