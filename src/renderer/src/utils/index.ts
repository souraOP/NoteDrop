import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
const context = { locale: 'en-US' }
const FormatDateHelper = new Intl.DateTimeFormat(context.locale, {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'IST'
})

export const MilisecondToDateFormatConverter = (ms: number) => FormatDateHelper.format(ms)
