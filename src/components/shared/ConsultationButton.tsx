import ArrowRightIcon from '../icons/ArrowRightIcon'
import Button from './Button'

interface ConsultationButtonProperties {
  icon: React.ReactNode
  text: string
  onClick?: () => void
}
function ConsultationButton({
  icon,
  text,
  onClick,
}: ConsultationButtonProperties) {
  return (
    <Button
      onClick={onClick}
      className='flex w-[90%] items-center justify-between gap-1 rounded-full border bg-white px-2 py-1.5 md:w-auto md:gap-2 md:px-4 md:py-2'
      aria-label={text}
    >
      <span
        className='bg-naseh-secondary/10 flex size-6 items-center justify-center rounded-md p-1.5 md:size-8 md:p-2'
        aria-hidden='true'
      >
        {icon}
      </span>
      <span className='text-naseh-primary'>{text}</span>
      <div
        className='bg-naseh-primary flex size-6 items-center justify-center rounded-full md:size-8'
        aria-hidden='true'
      >
        <ArrowRightIcon className='size-4 md:size-6' fill='#ffffff' />
      </div>
    </Button>
  )
}

export default ConsultationButton
