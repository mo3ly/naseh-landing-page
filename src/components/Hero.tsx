'use client'

import { useState } from 'react'

import CalendarIcon from './icons/CalendarIcon'
import DocumentIcon from './icons/DocumentIcon'
import PhoneIcon from './icons/PhoneIcon'
import Button from './shared/Button'
import ConsultationButton from './shared/ConsultationButton'

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='container mx-auto mt-20 mb-20 flex w-full flex-col items-center space-y-8 text-center'>
        <h1 className='text-naseh-primary font-scheherazade px-6 text-2xl md:px-0 md:text-6xl'>
          <span className='hidden md:block'>
            Your Legal Needs, Covered in One Click
          </span>
          <span className='block font-semibold md:hidden'>
            Book a Legal Session Instantly. Naseh Makes It Effortless.
          </span>
        </h1>
        <p className='text-naseh-gray font-poppins mb-20 text-sm font-light md:max-w-[600px] md:text-base'>
          <span className='hidden md:block'>
            Whether it's a quick question or a complex contract, Naseh connects
            you to the right lawyer fast — no confusion, no hassle.
          </span>
          <span className='block md:hidden'>
            Whether it's a quick question or a complex contract, Naseh connects
            you to the right lawyer fast.
          </span>
        </p>
        <Button
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className='bg-naseh-primary font-scheherazade mb-10 h-14 w-[90%] rounded-[16px] text-lg font-semibold text-white md:h-14 md:w-[460px] md:text-2xl'
        >
          Start Your Legal Request
        </Button>

        {isOpen && (
          <div className='flex w-full flex-col items-center justify-center space-y-2 md:mt-10 md:flex-row md:space-y-0 md:space-x-4'>
            <ConsultationButton
              icon={<PhoneIcon />}
              text='Request Urgent Consultation'
            />

            <ConsultationButton
              icon={<CalendarIcon />}
              text='Book Schedule Consultation'
            />

            <ConsultationButton
              icon={<DocumentIcon />}
              text='Request Legal Services'
            />
          </div>
        )}

        {/* badges */}
        <div className='mt-10 flex items-center justify-between md:gap-[104px]'>
          <img
            src='/badges/ssl-encryption.png'
            alt='SSL Encryption badge'
            height={47}
            width={92}
            className='h-8 w-auto grayscale md:h-[47px] md:w-[92px]'
          />

          <div className='flex items-center'>
            <img
              src='/badges/PDPPL-Compliant.png'
              alt='PDPPL-Compliant'
              className='me-4 h-10 grayscale md:me-0 md:h-16'
            />
            <span className='hidden w-[28px] text-[12px] md:block'>
              PDPPL Compliant
            </span>
          </div>

          <img
            src='/badges/theqa-qatar.png'
            alt='Theqa qatar logo'
            width={118}
            height={49}
            className='h-8 w-auto grayscale md:h-[49px] md:w-[118px]'
          />
        </div>
      </div>
    </>
  )
}
