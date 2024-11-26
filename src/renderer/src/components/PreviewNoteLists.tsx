import { mockupNotes } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { PreviewNotes } from './PreviewNotes'
import { twMerge } from 'tailwind-merge'

export const PreviewNoteLists = ({ className, ...props }: ComponentProps<'ul'>) => {
  // if there were no notes then display no notes created as of now!
  if (mockupNotes.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Created Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {mockupNotes.map((note) => (
        <PreviewNotes isActive={false} key={note.title + note.lastUpdatedTime} {...note} />
      ))}
    </ul>
  )
}
