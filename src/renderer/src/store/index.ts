// here I will store all the atoms that jotai uses.

import { NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { mockupNotes } from './mocks'

// notes atom will store all the notes
// it will be an array
export const noteAtom = atom<NoteInfo[]>(mockupNotes) // as of now taking notes from the mockup notes only but it will take from local files

// can be a number or null if no notes selected
export const indexOfSelectedNoteAtom = atom<number | null>(null)

// creating new note atom
export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(noteAtom)

  const title = `Note ${notes.length + 1}` // calculate total number of notes

  const newNote: NoteInfo = {
    title,
    lastUpdatedTime: Date.now()
  }

  // update the notes atom to a newly created note
  set(noteAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)]) // making sure that the title of the new note is not same with the previous notes title

  // the new note will be at the very first index so thats why i have set the index of the new note to 0
  set(indexOfSelectedNoteAtom, 0)
})

// deleting a note atom
export const deletingNoteAtom = atom(null, (get, set) => {
  const notes = get(noteAtom)

  // deleting the note that is currently selected
  const selectedNote = get(selectedNoteAtom)

  if (!selectedNote) {
    return // since there are no notes to delete
  }

  set(
    noteAtom,
    notes.filter((note) => note.title !== selectedNote.title)
  )

  set(indexOfSelectedNoteAtom, null)
})

export const selectedNoteAtom = atom((get) => {
  const notes = get(noteAtom)
  const indexOfSelectedNote = get(indexOfSelectedNoteAtom)
  if (indexOfSelectedNote == null) {
    return null
  }
  const selectedNote = notes[indexOfSelectedNote]

  return {
    ...selectedNote,
    content: `Ich Bin Soura bro ${indexOfSelectedNote}`
  }
})
