import ArrowRightIcon from './icons/ArrowRightIcon'
import NasehIcon from './icons/NasehIcon'

export default function Services() {
  return (
    <>
      <div className='bg-naseh-primary relative flex h-[800px] w-full items-center justify-center'>
        <NasehIcon className='absolute right-0 bottom-0' />

        <div className='text-md font-poppins absolute top-16 right-0 left-0 hidden flex-wrap items-center justify-center gap-4 px-8 md:flex'>
          <span className='text-lg text-white'>Urgent Consultation</span>
          <span className='text-lg text-white'>Scheduled Consultations</span>
          <span className='text-lg text-white'>Written Consultation</span>
          <span className='text-lg text-white'>
            Contracts Drafting & Reviewing
          </span>
          <span className='text-lg text-white'>Hire A Lawyer</span>
          <span className='text-lg text-white'>Others</span>
        </div>

        <div className='absolute right-4 bottom-8 flex gap-2 md:bottom-16 md:flex-col md:items-center md:gap-6 md:space-y-10'>
          <h2 className='font-poppins rotate-0 pt-1 text-sm font-light text-white opacity-60 md:rotate-90 md:text-base md:tracking-widest'>
            SCROLL DOWN
          </h2>
          <svg
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
            className='size-7 md:size-12'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.85156 18.7503C8.85156 14.4682 10.5527 10.3614 13.5806 7.33349C16.6085 4.30556 20.7153 2.60449 24.9974 2.60449C29.2796 2.60449 33.3863 4.30556 36.4143 7.33349C39.4422 10.3614 41.1433 14.4682 41.1433 18.7503V31.2503C41.1433 35.5325 39.4422 39.6392 36.4143 42.6672C33.3863 45.6951 29.2796 47.3962 24.9974 47.3962C20.7153 47.3962 16.6085 45.6951 13.5806 42.6672C10.5527 39.6392 8.85156 35.5325 8.85156 31.2503V18.7503ZM23.4349 5.82324C20.2751 6.20517 17.3646 7.73124 15.2534 10.1131C13.1422 12.4949 11.9765 15.5675 11.9766 18.7503V31.2503C11.9766 34.7037 13.3484 38.0156 15.7903 40.4574C18.2322 42.8993 21.5441 44.2712 24.9974 44.2712C28.4508 44.2712 31.7627 42.8993 34.2046 40.4574C36.6464 38.0156 38.0183 34.7037 38.0183 31.2503V18.7503C38.0184 15.5675 36.8527 12.4949 34.7415 10.1131C32.6302 7.73124 29.7198 6.20517 26.5599 5.82324V13.2878C27.4741 13.611 28.2655 14.2097 28.8252 15.0015C29.3848 15.7932 29.6852 16.7391 29.6849 17.7087V21.8753C29.6849 23.1185 29.1911 24.3108 28.312 25.1899C27.4329 26.069 26.2406 26.5628 24.9974 26.5628C23.7542 26.5628 22.562 26.069 21.6829 25.1899C20.8038 24.3108 20.3099 23.1185 20.3099 21.8753V17.7087C20.3099 15.667 21.6141 13.9316 23.4349 13.2878V5.82324ZM24.9974 16.1462C24.583 16.1462 24.1856 16.3108 23.8926 16.6038C23.5996 16.8968 23.4349 17.2943 23.4349 17.7087V21.8753C23.4349 22.2897 23.5996 22.6871 23.8926 22.9802C24.1856 23.2732 24.583 23.4378 24.9974 23.4378C25.4118 23.4378 25.8093 23.2732 26.1023 22.9802C26.3953 22.6871 26.5599 22.2897 26.5599 21.8753V17.7087C26.5599 17.2943 26.3953 16.8968 26.1023 16.6038C25.8093 16.3108 25.4118 16.1462 24.9974 16.1462Z'
              fill='white'
            />
          </svg>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-scheherazade mb-12 text-4xl font-semibold text-white md:text-6xl'>
            Urgent Consultation
          </h1>

          <button className='font-poppins flex items-center justify-center gap-2 rounded-full border px-4 py-2'>
            <span className='hidden text-white md:block'>
              Request Urgent Consultation
            </span>
            <span className='block text-white md:hidden'>
              Book Consultation
            </span>
            <div className='flex size-8 items-center justify-center rounded-full bg-white'>
              <ArrowRightIcon className='size-6 md:size-6' />
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
