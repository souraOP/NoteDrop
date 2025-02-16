import { GetNotes, ReadNote, WriteNote } from '@shared/types'

declare global {
  interface Window {
    context: {
      locale: string // for local operating date time purpose
      getAllNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
    }
  }
}
