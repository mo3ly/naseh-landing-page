import EmailIcon from './icons/EmailIcon'
import InstagramIcon from './icons/InstagramIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import LocationIcon from './icons/LocationIcon'
import PhoneIcon from './icons/PhoneIcon'
import TikTokIcon from './icons/TikTokIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function Footer() {
  return (
    <footer className='font-poppins border-t bg-white text-gray-800'>
      {/* Main Footer Content */}
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Logo and Branding */}
          <div className='space-y-6 md:col-span-2 lg:col-span-1'>
            {/* Logo */}
            <div className='flex items-center space-x-3'>
              <img src='/logo.svg' alt='Naseh Logo' className='h-18 w-18' />
            </div>

            {/* Slogan */}
            <p className='text-base leading-relaxed text-gray-700'>
              Naseh - Because Legal Matters Deserve Better.
            </p>

            {/* Certification */}
            <div className='flex flex-col space-x-3'>
              <span className='text-sm text-gray-700'>Certified By</span>
              <div className='flex items-center space-x-2'>
                <img
                  src='/badges/theqa-qatar.png'
                  alt='Theqa Logo'
                  className='w-24'
                />
              </div>
            </div>
          </div>

          {/* Quick Links and Legal Links Container */}
          <div className='grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-2'>
            {/* Quick Links */}
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                Quick Links
              </h3>
              <ul className='space-y-2'>
                {[
                  'Home',
                  'About Us',
                  'Directory',
                  'Services',
                  'Blogs',
                  'Publications',
                ].map((link) => (
                  <li key={link}>
                    <a className='text-sm text-gray-600 transition-colors hover:text-gray-800'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                Legal Links
              </h3>
              <ul className='space-y-2'>
                {['Terms & Conditions', 'Privacy Policy', 'Cookies Policy'].map(
                  (link) => (
                    <li key={link}>
                      <a className='text-sm text-gray-600 transition-colors hover:text-gray-800'>
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Newsletter and Social */}
          <div className='space-y-6 md:col-span-2 lg:col-span-1'>
            {/* Newsletter */}
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                Join a Newsletter
              </h3>
              <div className='space-y-3'>
                <div>
                  <label
                    htmlFor='newsletter-email'
                    className='mb-1 block text-sm'
                  >
                    Your Email
                  </label>
                  <div className='flex space-x-1'>
                    <input
                      id='newsletter-email'
                      type='email'
                      placeholder='Enter Your Email'
                      className='flex-1 rounded-lg bg-[#F5F5F5] px-3 py-2 text-sm focus:border-transparent'
                    />
                    <button
                      type='button'
                      className='bg-naseh-primary rounded-lg px-4 py-2 text-sm font-medium text-white'
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className='flex space-x-3'>
              {/* LinkedIn */}
              <a className='bg-naseh-secondary flex h-10 w-10 items-center justify-center rounded-full'>
                <LinkedInIcon width={25} height={25} />
              </a>

              {/* Instagram */}
              <a className='bg-naseh-secondary flex h-10 w-10 items-center justify-center rounded-full'>
                <InstagramIcon width={54} height={55} />
              </a>

              {/* TikTok */}
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='bg-naseh-secondary flex h-10 w-10 items-center justify-center rounded-full'
              >
                <TikTokIcon width={54} height={55} />
              </a>

              {/* WhatsApp */}
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='bg-naseh-secondary flex h-10 w-10 items-center justify-center rounded-full'
              >
                <WhatsAppIcon width={54} height={55} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 md:mx-24'></div>

      {/* Bottom Section */}
      <div className='md:mx-20'>
        <div className='mx-auto max-w-7xl px-4 py-6'>
          <div className='flex flex-col items-start space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0'>
            {/* Copyright */}
            <div className='text-sm text-gray-600'>
              All Rights Reserved - Naseh ©
            </div>

            {/* Contact Information */}
            <div className='flex flex-col items-start space-y-2 md:flex-row md:space-y-0 md:space-x-6'>
              {/* Location */}
              <div className='flex items-center space-x-2'>
                <LocationIcon width={33} height={33} className='size-4' />

                <span className='text-sm text-gray-600'>
                  QFC Tower 1, West Bay, Doha
                </span>
              </div>

              {/* Email */}
              <div className='flex items-center space-x-2'>
                <EmailIcon width={33} height={33} className='size-4' />

                <span className='text-sm text-gray-600'>lawyers@naseh.qa</span>
              </div>

              {/* Phone */}
              <div className='flex items-center space-x-2'>
                <PhoneIcon className='size-4' />

                <span className='text-sm text-gray-600'>+974 6699 9314</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
