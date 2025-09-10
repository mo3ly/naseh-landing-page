export default function Partners() {
  const partners = [
    { name: 'MS Startups', src: '/partners/ms-startups.png' },
    { name: 'QSTP', src: '/partners/qstp.png' },
    { name: 'QFC', src: '/partners/qfc.png' },
    { name: 'Falak', src: '/partners/falak.png' },
    { name: 'DIC', src: '/partners/dic.png' },
    { name: 'NAMA', src: '/partners/nama.png' },
  ]

  return (
    <div className='bg-[#FAFAFA] py-24'>
      <h2 className='mb-8 block text-center text-2xl font-bold text-black md:hidden'>
        Our Partners
      </h2>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap items-center justify-center gap-8'>
          {partners.map((partner) => (
            <div
              key={partner.name}
              className='flex items-center justify-center'
            >
              <img
                src={partner.src}
                alt={`${partner.name} logo`}
                className='h-[60px] w-[110px] object-contain grayscale md:h-[70px] md:w-[180px]'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
