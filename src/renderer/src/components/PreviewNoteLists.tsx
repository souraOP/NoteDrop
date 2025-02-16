import { PreviewNotes } from '@/components'
import { useNotesList } from '@/hooks/useNotesList'
import { mockupNotes } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { isEmpty } from 'lodash'

export type PreviewNoteListsProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const PreviewNoteLists = ({ onSelect, className, ...props }: PreviewNoteListsProps) => {
  const { notes, indexOfSelectedNote, handleSelectedNote } = useNotesList({ onSelect })

  if (!notes) return null
  // if there were no notes then display no notes created as of now!
  if (isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Created Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <PreviewNotes
          key={note.title + note.lastUpdatedTime}
          isActive={indexOfSelectedNote === index} // note preview will enable if the index of the selected note matches with the index of the note
          onClick={handleSelectedNote(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
