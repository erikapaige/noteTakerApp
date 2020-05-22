class Notes {
  constructor () {
    this.notes = []
    //takes in new note and pushes to array
    this.addNote = note => {
      this.notes.push(note)
    }
    //returns array of notes
    this.getNotes = () => this.items
    //takes in notes and checks one similar doesn't exist
    this.updateNote = text => {
      this.notes.forEach(item => {
        if (note.body === body){
          note.isDone = !note.isDone
        }
      })
    }
    this.deleteNote = text => {
      this.notes = this.notes.filter(note =>
        if (note.body == body) {
          return false
        } else {
          return true
        }
      })
  }
}

module.exports = Notes