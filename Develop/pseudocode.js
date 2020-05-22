//SERVER.JS
  //build server.js
  //bring in express server (const express = require('express'))
  //add express boiler plate
  //bring in path
  //require 'routes file'

//ROUTES
  //build routes folder
  //build routes file 'listRoutes.js'

//JSON file
  //(already created)DB.JSON file
  //using FS module store and retrieve notes
    //module.exports(?)

//START BY BUILDING BACKEND CODE using AJAX requests from index.js

//ROUTES TO BUILD
  //GET('/notes') - return the notes.html file

  //GET('*') - return the index.html file
    //directions said to use '*' not '/'

//AXIOS ROUTES
  //GET('/api/notes/)
    // - get notes from the db.json file (input)
    // - return all data as JSON

  //POST ('api/notes')
    //new notes save on request body (req.body)
      //make sure req.body.text 
          //assign req.body.text a unique id
          // - .then (response gets unique id
          // at top, create an idNum array = 0
          // how do add this to each new note?
          //count++ each time add new note?
      // how domake sure that file doesn't already exist?
      // add to JSON file
      //define id as key and give it a value
      // to add value in objects use :
      // let newNote={destructured object}

  //DELETE ('/api/noes/:id')    
    ///get req.params.id (from API route)
    //remove with ID
    //splice notes list and set to new var

      //set in parameter (like learned Tuesday with Stackoverflow)
      //give each note a unique ID
      //remove with ID
      //rewrite note

  //writeFile
      //want to write newnote to db.json
      //push new note to db.json