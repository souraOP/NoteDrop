import { MDXEditorMethods } from '@mdxeditor/editor'
import { savingNoteAtom, selectedNoteAtom } from '@renderer/store'
import { NoteContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import { useRef } from 'react'
import { throttle } from 'lodash'

export const useMarkdownEditorContent = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(savingNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)
  const handleAutoSave = throttle(
    async (content: NoteContent) => {
      if (!selectedNote) {
        return
      }
      console.info('Auto-saving...: ', selectedNote.title)
      await saveNote(content)
    },
    2000, // auto save every 2 secs
    {
      leading: false,
      trailing: true
    }
  )
  const handleImmediateNoteTransitionSaving = async () => {
    if(!selectedNote){
      return
    }
    handleAutoSave.cancel()
    const content=editorRef.current?.getMarkdown()
    if(content != null){
      await saveNote(content)
    }
  }
  return {
    selectedNote,
    editorRef,
    handleAutoSave,
    handleImmediateNoteTransitionSaving
  }
}
