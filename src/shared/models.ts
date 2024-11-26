// in this file we have the type of data to store in our note app

// first we have the Information about the Note, say the Note Title and the time created (prefereably in miliseconds)
export type NoteInfo = {
  title: string
  lastUpdatedTime: number
}

// secondly we have the content of the note i.e, in markdown format
export type NoteContent = string
