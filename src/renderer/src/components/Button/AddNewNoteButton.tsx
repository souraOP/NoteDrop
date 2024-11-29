import { ServiceButton, ServiceButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuFileSignature } from 'react-icons/lu'

export const AddNewNoteButton = ({ ...props }: ServiceButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = () => {
    createEmptyNote()
  }
  return (
    <ServiceButton {...props} onClick={handleCreation}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ServiceButton>
  )
}
