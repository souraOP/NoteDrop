import { PreviewNotes } from '@/components'
import { useNotesList } from '@/hooks/useNotesList'
import { mockupNotes } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const PreviewNoteLists = ({ onSelect, className, ...props }: ComponentProps<'ul'>) => {
  const { notes, indexOfSelectedNote, handleSelectedNote } = useNotesList({ onSelect })

  // if there were no notes then display no notes created as of now!
  if (notes.length === 0) {
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
          {...note}
          onClick={handleSelectedNote(index)}
        />
      ))}
    </ul>
  )
}
