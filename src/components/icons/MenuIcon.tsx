import { cn } from '@/lib/cn'

interface MenuIconProps {
  className?: string
}

export default function MenuIcon({ className }: MenuIconProps) {
  return (
    <svg
      width='20'
      height='21'
      viewBox='0 0 30 31'
      fill='none'
      className={cn('size-6', className)}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.9251 10.8875C23.6234 10.8875 25.0001 9.51078 25.0001 7.8125C25.0001 6.11423 23.6234 4.7375 21.9251 4.7375C20.2268 4.7375 18.8501 6.11423 18.8501 7.8125C18.8501 9.51078 20.2268 10.8875 21.9251 10.8875Z'
        stroke='#0E2345'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.07501 10.8875C9.77328 10.8875 11.15 9.51078 11.15 7.8125C11.15 6.11423 9.77328 4.7375 8.07501 4.7375C6.37673 4.7375 5 6.11423 5 7.8125C5 9.51078 6.37673 10.8875 8.07501 10.8875Z'
        stroke='#0E2345'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.9251 26.2625C23.6234 26.2625 25.0001 24.8858 25.0001 23.1875C25.0001 21.4892 23.6234 20.1125 21.9251 20.1125C20.2268 20.1125 18.8501 21.4892 18.8501 23.1875C18.8501 24.8858 20.2268 26.2625 21.9251 26.2625Z'
        stroke='#0E2345'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.07501 26.2625C9.77328 26.2625 11.15 24.8858 11.15 23.1875C11.15 21.4892 9.77328 20.1125 8.07501 20.1125C6.37673 20.1125 5 21.4892 5 23.1875C5 24.8858 6.37673 26.2625 8.07501 26.2625Z'
        stroke='#0E2345'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
