import { cn, MilisecondToDateFormatConverter } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type PreviewNotesProps = NoteInfo & {
  isActive: boolean // if the note is selected then make it as the current active note
} & ComponentProps<'div'>

export const PreviewNotes = ({
  title,
  content,
  lastUpdatedTime,
  isActive = false,
  className,
  ...props
}: PreviewNotesProps) => {
  const formattedDate = MilisecondToDateFormatConverter(lastUpdatedTime)
  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-lg transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="truncate mb-1 font-bold">{title}</h3>
      <span className="inline-block text-xs font-light w-full text-left mb-2">{formattedDate}</span>
    </div>
  )
}
