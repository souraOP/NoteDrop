import { ServiceButton } from '@/components'
import { deletingNoteAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }) => {
  const deleteNote = useSetAtom(deletingNoteAtom)
  const handleDelete = () => {
    deleteNote()
  }

  return (
    <ServiceButton {...props} onClick={handleDelete}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ServiceButton>
  )
}
