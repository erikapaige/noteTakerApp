//building router using node package express
const router = require('express').Router()
//bring in path to combine directory paths
const { join } = require('path')
//bring in node package 'fs'
const { writeFile, appendFile, readFile } = require('fs')
//assigning req.body (from POST) a unique ID
let notesId= 0
//empty array to push new notes into
let notesData = []

//get notes
router.get('/api/notes', (req, res) =>{
  //get notes from database (formatted in JSON) 
  readFile('../db/db.json', 'utf8')
    .then(notesData => {
      //json parse into object
      notesData = JSON.parse(notesData)
      //sends JSON data
      res.json(notesData)
    })
    .catch(err => console.error(err))
})

//save the notes to database
router.post('/api/notes/', (req, res) => {
  readFile('../db/db.json', 'utf8')
    .then()
})

// router.delete()
// router.delete('api/notes/:id', (req, res) => {

// })

//export router out to server
module.exports = router