// here I will store all the atoms that jotai uses.

import { NoteInfo, NoteContent } from '@shared/models'
import { atom } from 'jotai'
import { mockupNotes } from './mocks'
import { unwrap } from 'jotai/utils'

const loadNotes = async () => {
  const notes = await window.context.getAllNotes()
  return notes.sort((a, b) => b.lastUpdatedTime - a.lastUpdatedTime)
}

const notesAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

export const noteAtom = unwrap(notesAsync, (prev) => prev)

// export const noteAtom = atom<NoteInfo[]>(mockupNotes) // as of now taking notes from the mockup notes only but it will take from local files

// can be a number or null if no notes selected
export const indexOfSelectedNoteAtom = atom<number | null>(null)

// creating new note atom
export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(noteAtom)

  if (!notes) return

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

  if (!selectedNote || !notes) {
    return // since there are no notes to delete
  }

  set(
    noteAtom,
    notes.filter((note) => note.title !== selectedNote.title)
  )
  set(indexOfSelectedNoteAtom, null)
})

const selectedNoteAtomAsync = atom(async (get) => {
  const notes = get(noteAtom)
  const indexOfSelectedNote = get(indexOfSelectedNoteAtom)
  if (indexOfSelectedNote == null || !notes) {
    return null
  }
  const selectedNote = notes[indexOfSelectedNote]

  const contentOfNote = await window.context.readNote(selectedNote.title)

  return {
    ...selectedNote,
    content: contentOfNote
  }
})

export const selectedNoteAtom = unwrap(
  selectedNoteAtomAsync,
  (prev) =>
    prev ?? {
      // if note content is empty or new
      title: '',
      content: '',
      lastUpdatedTime: Date.now()
    }
)

export const savingNoteAtom = atom(null, async (get, set, updatedContent: NoteContent) => {
  const notes = get(noteAtom)
  const selectedNote = get(selectedNoteAtom)
  if (!notes || !selectedNote) {
    return
  }
  await window.context.writeNote(selectedNote.title, updatedContent)
  // update time
  set(
    noteAtom,
    notes.map((note) => {
      if (note.title === selectedNote.title) {
        return {
          ...note,
          lastUpdatedTime: Date.now()
        }
      }
      return note
    })
  )
})
