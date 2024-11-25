import { ServiceButton } from '@/components'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }) => {
  return (
    <ServiceButton {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ServiceButton>
  )
}
