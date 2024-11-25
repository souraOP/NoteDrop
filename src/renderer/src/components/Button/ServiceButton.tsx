import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ServiceButtonProps = ComponentProps<'button'>

export const ServiceButton = ({ className, children, ...props }: ServiceButtonProps) => {
  return (
    <button
      className={twMerge(
        'rounded-lg px-2 py-1 border border-zinc-500/60 hover:bg-zinc-700/50 duration-100 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
