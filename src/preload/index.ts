import { contextBridge } from 'electron'

// check if the window is in context isolation or not
if (!process.contextIsolated) {
  throw new Error('Enable context isolation in browser window!')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // will do later
  })
} catch (error) {
  console.error(error)
}
