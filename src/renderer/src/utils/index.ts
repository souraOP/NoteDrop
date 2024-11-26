import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

const FormatDateHelper = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'IST'
})

export const MilisecondToDateFormatConverter = (ms: number) => FormatDateHelper.format(ms)
