//building router
const router = require('express').Router()

//GET information from getNotes()
router.get('/api/notes', (req, res) =>{
  console.log(req.body)
})
//export router out to server
module.exports = router