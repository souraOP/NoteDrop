import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const NoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const title = 'example title'
  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-zinc-400">{title}</span>
    </div>
  )
}
