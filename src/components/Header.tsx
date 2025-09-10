'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ActionButtons from './ActionButtons'
import ArrowRightIcon from './icons/ArrowRightIcon'
import MenuIcon from './icons/MenuIcon'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const navigationItems = [
  { label: 'Law firm', href: '/' },
  { label: 'Naseh services', href: '/' },
  { label: 'Blogs', href: '/' },
  { label: 'Publications', href: '/' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className='container mx-auto flex h-20 w-full items-center justify-between px-4 py-[30px] sm:px-8 md:pt-[62px]'>
        {/* Mobile menu button */}
        <button
          className='cursor-pointer p-1 lg:hidden'
          aria-label='Open mobile menu'
          type='button'
          onClick={toggleMobileMenu}
        >
          <MenuIcon />
        </button>

        {/* Mobile action button */}
        <button
          className='bg-naseh-primary hover:bg-naseh-primary/90 flex h-[36px] w-[140px] cursor-pointer items-center justify-between rounded-[53px] pt-[4px] pr-[8px] pb-[4px] pl-[16px] transition-colors duration-200 lg:hidden'
          type='button'
        >
          <span className='text-sm font-medium text-white'>Start Here</span>
          <div className='flex size-6 items-center justify-center rounded-full bg-white'>
            <ArrowRightIcon className='size-6' />
          </div>
        </button>

        {/* Mobile logo */}
        <Link href='/' className='lg:hidden' aria-label='Naseh'>
          <Image
            src='/logo.svg'
            alt="Naseh's logo"
            width={78}
            height={65}
            className='h-[42px] w-[52px] sm:h-[65px] sm:w-[78px]'
            priority
          />
        </Link>

        <div className='hidden lg:flex lg:items-center lg:space-x-6'>
          {/* Logo */}
          <Link href='/' className='flex-shrink-0' aria-label='Naseh'>
            <Image
              src='/logo.svg'
              alt="Naseh's logo"
              width={78}
              height={65}
              className='h-[40px] w-[48px] sm:h-[65px] sm:w-[78px]'
              priority
            />
          </Link>

          <Navigation items={navigationItems} />
        </div>

        {/* Desktop Navigation and Action buttons */}
        <div className='hidden lg:flex lg:items-center lg:space-x-6'>
          <ActionButtons />
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}
