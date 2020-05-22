//building router
const router = require('express').Router()
//bring in path to combine directory paths
const { join } = require('path')

//GET index.html using '*'
// router.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"))
// })

// // //GET notes.html using /notes (get ID from start btn)
// router.get('/notes', (req, res) => {
//   res.sendFile(join(__dirname, './public/notes.html'))
// })

// //GET information from getNotes
// router.get('/api/notes', (req, res) =>{
//   console.log(req.body)
// })


// router.delete()

//export router out to server
module.exports = router