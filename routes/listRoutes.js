//building router using node package express
const router = require('express').Router()
//bring in path to combine directory paths
const { join } = require('path')
//bring in node package 'fs'
const { writeFile, appendFile, readFile } = require('fs')
const { promisify } = require('util')
const rf = promisify(readFile)
const wf = promisify(writeFile)

//assigning req.body (from POST) a unique ID
let notesId= 0

//get notes from database
router.get('/api/notes', (req, res) =>{
  //get notes from database (formatted in JSON) 
  rf('../db/db.json', 'utf8')
    .then(notesData => {
      //json parse into object
      notesData = JSON.parse(notesData)
      //sends JSON data (notes) back to html
      res.json(notesData)
    })
    .catch(err => console.error(err))
})

//save the notes to database (notes coming from user input, saving to database)
router.post('/api/notes/', (req, res) => {
  //console.log user input
  console.log(req.body)
  let newNote = req.body.id
  

  // //read notes from the file
  // rf('../db/db.json', 'utf8')
  //   .then()
})

// router.delete()
// router.delete('api/notes/:id', (req, res) => {

// })

//export router out to server
module.exports = router