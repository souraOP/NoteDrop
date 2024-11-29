// here I will store all the atoms that jotai uses.

import { NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { mockupNotes } from './mocks'

// notes atom will store all the notes
// it will be an array
export const noteAtom = atom<NoteInfo[]>(mockupNotes) // as of now taking notes from the mockup notes only but it will take from local files

// can be a number or null if no notes selected
export const indexOfSelectedNoteAtom = atom<number | null>(null)

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
