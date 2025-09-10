import ArrowRightIcon from './icons/ArrowRightIcon'
import LanguageIcon from './icons/LanguageIcon'
import NotificationIcon from './icons/NotificationIcon'
import SearchIcon from './icons/SearchIcon'
import ThemeIcon from './icons/ThemeIcon'
import UserIcon from './icons/UserIcon'

interface ActionButtonsProperties {
  className?: string
}

export default function ActionButtons({
  className = '',
}: ActionButtonsProperties) {
  return (
    <div className={`flex items-center gap-[28px] ${className}`}>
      {/* Language Toggle */}
      <button
        className='flex items-center space-x-1 transition-opacity duration-200 hover:opacity-80'
        type='button'
      >
        <span className='text-naseh-primary font-medium'>EN</span>
        <LanguageIcon />
      </button>

      {/* Theme toggle */}
      <button
        className='transition-opacity duration-200 hover:opacity-80'
        type='button'
      >
        <ThemeIcon className='size-6' />
      </button>

      {/* Search button */}
      <button
        className='transition-opacity duration-200 hover:opacity-80'
        type='button'
      >
        <SearchIcon className='size-6' />
      </button>

      {/* Notifications button */}
      <button
        className='transition-opacity duration-200 hover:opacity-80'
        type='button'
      >
        <NotificationIcon className='size-6' />
      </button>

      {/* User button */}
      <button
        className='transition-opacity duration-200 hover:opacity-80'
        aria-label='User account'
        type='button'
      >
        <UserIcon className='size-6' />
      </button>

      {/* CTA Button */}
      <button
        className='bg-naseh-primary hover:bg-naseh-primary/90 flex h-[42px] w-[172px] cursor-pointer items-center justify-between rounded-[53px] pt-[5px] pr-[10px] pb-[5px] pl-[20px] transition-colors duration-200'
        type='button'
      >
        <span className='font-medium text-white'>Start Here</span>
        <div className='flex size-8 items-center justify-center rounded-full bg-white'>
          <ArrowRightIcon className='size-8' />
        </div>
      </button>
    </div>
  )
}
