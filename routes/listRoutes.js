//building router using node package express
const router = require('express').Router()
//bring in path to combine directory paths
const { join } = require('path')
//bring in node package 'fs'
const { writeFile, appendFile, readFile } = require('fs')
const { promisify } = require('util')
const wf = promisify(writeFile)
const rf = promisify(readFile)

//variable set equal to db
let notes = require('../db/db.json')

//get notes from database
router.get('/api/notes', (req, res) =>{
  //test to make sure test works
  // res.send('GET notes')

  res.json(notes)
})

//notes coming from user input, saving to db
router.post('/api/notes', (req, res) => {
  //test to make sure post route works
  // res.send('POST notes')

  //save data as a variable
  let newNote = req.body
  console.log(newNote)
  //add unique ID to new notes
  newNote.id = notes.length +1
  //send newNote to db
  notes.push(newNote)
  wf ('./db/db.json', JSON.stringify(notes))
    .then(() => res.send(notes))
    .catch(() => console.error(err))
    res.json("complete")
  })

// router.delete(), use :id to set paramater
router.delete('/api/notes/:id', (req, res) => {
  //check to make sure params return is ID
  // console.log(req.params)

  //filter through notes to make sure only get ones passed
  let uniqueId = parseInt(req.params.id)
 
  notes = notes.filter((notes) => {
    if (notes.id === uniqueId){
      return false
    } else {
      return true
    }
  })
 
  // re-writing the db file
  wf('./db/db.json', JSON.stringify(notes))
    .then(() => res.send(notes))
    .catch(() => console.error(err))
  res.json("complete")
})

//export router out to server
module.exports = router