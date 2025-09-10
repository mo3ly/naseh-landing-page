'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ArrowRightIcon from './icons/ArrowRightIcon'
import ChevronRightIcon from './icons/ChevronRightIcon'
import NotificationIcon from './icons/NotificationIcon'
import SearchIcon from './icons/SearchIcon'
import ThemeIcon from './icons/ThemeIcon'
import UserIcon from './icons/UserIcon'

interface MobileNavigationProperties {
  isOpen: boolean
  onClose: () => void
}

const navigationItems = [
  { label: 'Law Firms', href: '/law-firms' },
  { label: 'Naseh Services', href: '/services' },
  { label: 'My Consultations', href: '/consultations' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Publications', href: '/publications' },
]

export default function MobileNavigation({
  isOpen,
  onClose,
}: MobileNavigationProperties) {
  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className='mobile-nav-overlay fixed inset-0 z-40 bg-black/50 lg:hidden'
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onClose()
            }
          }}
          role='button'
          tabIndex={0}
          aria-label='Close mobile menu'
        />
      )}

      {/* Mobile Navigation Sidebar */}
      <div
        className={`mobile-nav-sidebar bg-naseh-primary fixed top-0 left-0 z-50 h-full w-80 max-w-[85vw] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex h-full flex-col'>
          {/* Header with Close Button */}
          <div className='flex items-start justify-between px-4 py-3 text-white'>
            {/* Logo */}
            <div className='px-4 pt-2 pb-4'>
              <Image
                src='/naseh-logo-white.svg'
                alt='Naseh'
                width={78}
                height={65}
              />
            </div>
            <div className='flex items-center space-x-4'>
              <button
                type='button'
                onClick={onClose}
                className='mt-2 rounded-full p-1 transition-colors duration-200 hover:bg-white/10'
                aria-label='Close mobile menu'
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18 6L6 18M6 6L18 18'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className='px-4 pb-6'>
            <div className='search-input-container relative'>
              <input
                type='text'
                placeholder='Search'
                className='search-input focus:ring-naseh-secondary w-full rounded-full bg-[#7A828E] px-4 py-2 pr-12 pl-4 text-white placeholder-[#C0C0C0] focus:ring-2 focus:outline-none'
              />
              <button
                type='button'
                className='search-button absolute top-1/2 right-1 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#1A2B40] transition-colors duration-200 hover:bg-[#0E2345]'
                aria-label='Search'
              >
                <SearchIcon className='h-4 w-4' fill='white' fillOpacity={1} />
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className='flex-1 px-4'>
            <ul className='space-y-1'>
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className='flex items-center justify-between rounded-lg px-4 py-3 text-white'
                    onClick={onClose}
                  >
                    <span className='text-base font-medium'>{item.label}</span>
                    <ChevronRightIcon
                      className='size-3.5 text-white'
                      fill='white'
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Request Legal Service Button */}
          <div className='px-4 pb-6'>
            <button
              type='button'
              className='text-naseh-primary flex w-full items-center justify-between rounded-full bg-white px-6 py-2 transition-colors duration-200 hover:bg-white/90'
            >
              <span className='text-base font-semibold'>
                Request Legal Service
              </span>
              <div className='bg-naseh-primary flex h-8 w-8 items-center justify-center rounded-full'>
                <ArrowRightIcon className='size-8' fill='white' />
              </div>
            </button>
          </div>

          {/* Bottom Controls */}
          <div className='border-t border-white/20 px-4 py-4'>
            <div className='flex items-center justify-between'>
              {/* Notifications */}
              <button type='button' className='p-2'>
                <NotificationIcon className='h-6 w-6' fill='white' />
              </button>

              {/* Language Toggle */}
              <div className='flex items-center space-x-2'>
                <button
                  type='button'
                  className='flex items-center space-x-2 rounded-lg px-3 py-2 text-white'
                >
                  <span className='text-sm font-medium'>EN</span>
                  <svg
                    width='22'
                    height='15'
                    viewBox='0 0 22 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.0513 7.47833C18.0513 9.13519 16.7081 10.4783 15.0513 10.4783C13.3944 10.4783 12.0513 9.13519 12.0513 7.47833C12.0513 5.82148 13.3944 4.47833 15.0513 4.47833C16.7081 4.47833 18.0513 5.82148 18.0513 7.47833Z'
                      stroke='white'
                      strokeWidth='1.5'
                    />
                    <path
                      d='M15.0513 1.47833H7.05127C3.73756 1.47833 1.05127 4.16462 1.05127 7.47833C1.05127 10.792 3.73756 13.4783 7.05127 13.4783H15.0513C18.365 13.4783 21.0513 10.792 21.0513 7.47833C21.0513 4.16462 18.365 1.47833 15.0513 1.47833Z'
                      stroke='white'
                      strokeWidth='1.5'
                    />
                  </svg>

                  <span className='text-sm font-medium'>AR</span>
                </button>
              </div>

              {/* Theme Toggle */}
              <button type='button' className='p-2'>
                <ThemeIcon className='h-6 w-6' fill='#C1B06C' />
              </button>
            </div>

            {/* User Profile */}
            <button type='button' className='p-2'>
              <UserIcon className='h-6 w-6' fill='#189E76' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
