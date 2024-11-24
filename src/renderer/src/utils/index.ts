import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cs = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
