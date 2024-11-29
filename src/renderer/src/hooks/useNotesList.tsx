// hook will return a list of notes that we are going to retrieve from the jotai internal state

import { indexOfSelectedNoteAtom, noteAtom } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'

export const useNotesList = ({ onSelect }: { onSelect?: () => void }) => {
  const notes = useAtomValue(noteAtom) // gets the value of the note instead of the state function
  const [indexOfSelectedNote, setIndexOfSelectedNote] = useAtom(indexOfSelectedNoteAtom)

  // after selecting a note i want the note to updated accordingly
  const handleSelectedNote = (index: number) => async () => {
    setIndexOfSelectedNote(index) // here i set the index of the selected note

    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    indexOfSelectedNote,
    handleSelectedNote
  }
}

// use this hook in the previewNotesList
