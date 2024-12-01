// this is inside the main nodejs component, and going to implement the read write functions from nodejs fs

import { appDirectoryName, fileEncoding } from '@shared/constant'
import { NoteInfo } from '@shared/models'
import { GetNotes } from '@shared/types'
import { promises as fs } from 'fs'
import { readdir, stat } from 'fs-extra'
import { homedir } from 'os'

// Installed fs-extra library which adds file system methods that aren't included in the native fs module
// https://www.npmjs.com/package/fs-extra

// get the root directory of our notes application

export const getRootDirectory = () => {
  return `${homedir()}/${appDirectoryName}`
}

// get the Notes from the directory with .md extension
export const getAllNotes: GetNotes = async () => {
  // 1. get the root directory before accesing any notes
  const rootDirectory = getRootDirectory()

  // 2. check if the directory exists, if exists -> exit, if not then create the directory
  try {
    await fs.access(rootDirectory)
    console.log('Directory Exists')

    // 3. Read all the files that are stored inside this directory
    const allFileNames = await readdir(rootDirectory, {
      // allFileNames will contain a list of string which contains all the file names stored inside this rootDirectory
      encoding: fileEncoding,
      withFileTypes: false
    })

    // 4. Filter out only the files that have the .md extension
    const filteredNotes = allFileNames.filter((file) => file.endsWith('.md'))

    // 5. lastly execute the getInfo..() from the filteredNotes
    return Promise.all(filteredNotes.map(getNoteInfoFromFileName))
  } catch (err) {
    await fs.mkdir(rootDirectory)
    console.log('Directory Created!')
    return []
  }
}

export const getNoteInfoFromFileName = async (fileName: string): Promise<NoteInfo> => {
  const statsOfFile = await stat(`${getRootDirectory()}/${fileName}`)

  return {
    title: fileName.replace(/\.md$/, ''), // regular expression taken from AI.. it will take the fileName without the .md extension
    lastUpdatedTime: statsOfFile.mtimeMs // this returns the last edit times in ms the file was edited
  }
}