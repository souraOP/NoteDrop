// hook will return a list of notes that we are going to retrieve from the jotai internal state

import { indexOfSelectedNoteAtom, noteAtom } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'

export const useNotesList = () => {
  const notes = useAtomValue(noteAtom) // gets the value of the note instead of the state function
  const [indexOfSelectedNote, setIndexOfSelectedNote] = useAtom(indexOfSelectedNoteAtom)
}
