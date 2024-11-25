import { ServiceButton, ServiceButtonProps } from '@/components'
import { LuFileSignature } from 'react-icons/lu'

export const AddNewNoteButton = ({ ...props }: ServiceButtonProps) => {
  return (
    <ServiceButton {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ServiceButton>
  )
}
