import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'

export const useMarkdownEditorContent = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  return selectedNote
}
