import Link from 'next/link'

import ChevronRightIcon from './icons/ChevronRightIcon'

interface NavigationItem {
  label: string
  href: string
}

interface NavigationProperties {
  items: NavigationItem[]
  className?: string
}

export default function Navigation({
  items,
  className = '',
}: NavigationProperties) {
  return (
    <nav className={`flex items-center space-x-2 ${className}`}>
      {items.map((item, index) => (
        <div key={item.label} className='flex items-center'>
          <Link
            href={item.href}
            className='text-naseh-primary font-poppins cursor-pointer text-base'
          >
            {item.label}
          </Link>
          {index < items.length - 1 && (
            <ChevronRightIcon className='ml-2 size-3' />
          )}
        </div>
      ))}
    </nav>
  )
}
