//building router using node package express
const router = require('express').Router()
//bring in path to combine directory paths
const { join } = require('path')
//bring in node package 'fs'
const { writeFile, appendFile, readFile } = require('fs')

//get notes
router.get('/api/notes', (req, res) =>{
  //get notes from database (formatted in JSON) 
  fs.readFile('../db/db.json', 'utf8')
    .then(notesData => {
      //json parse into object
      notesData = JSON.parse(notesData)
      //sends JSON data
      res.json(notesData)
    })
    .catch(err => console.error(err))
})


//save the notes to database
// router.post('/api/notes/', (req, res) => {
  
// })

// router.delete()
// router.delete('api/notes/:id', (req, res) => {

// })

//export router out to server
module.exports = router