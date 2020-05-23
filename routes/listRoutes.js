//building router using node package express
const router = require('express').Router()
//bring in path to combine directory paths
const { join } = require('path')
//bring in node package 'fs'
const { writeFile, appendFile, readFile } = require('fs')
const { promisify } = require('util')
const wf = promisify(writeFile)

//variable set equal to db
const notes = require('../db/db.json')
//assigning req.body (from POST) a unique ID
let notesId= 0


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
  //add a unique id to data
  req.body.id = notesId
  //increase uniqueID
  notesId++

  //send newNote to db
  notes.push(newNote)
  wf ('./db/db.json', JSON.stringify(notes))
    .then(() => res.send(notes))
    .catch(() => console.error(err))
    res.json("complete")

  })


// router.delete(), use :id to set paramater
// router.delete('api/notes/:id', (req, res) => {
//   res.send('test')
//   //add parameters on req.params
//   res.json(req.params)
// })

//export router out to server
module.exports = router