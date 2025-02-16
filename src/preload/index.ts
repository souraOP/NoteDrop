import { GetNotes, ReadNote } from '@shared/types'
import { contextBridge } from 'electron'
import { ipcRenderer } from 'electron/renderer'

// check if the window is in context isolation or not
if (!process.contextIsolated) {
  throw new Error('Enable context isolation in browser window!')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // will do later
    locale: navigator.language,
    getAllNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getAllNotes', ...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args)
  })
} catch (error) {
  console.error(error)
}
