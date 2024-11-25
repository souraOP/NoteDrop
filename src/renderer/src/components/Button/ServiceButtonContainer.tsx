import { AddNewNoteButton, DeleteNoteButton } from '@/components'
import { ComponentProps } from 'react'

export const ServiceButtonContainer = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <AddNewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
