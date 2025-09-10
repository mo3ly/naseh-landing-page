interface ArrowRightIconProperties {
  className?: string
  fill?: string
}

export default function ArrowRightIcon({
  className = '',
  fill = '#0E2345',
}: ArrowRightIconProperties) {
  return (
    <svg
      className={className}
      width='32'
      height='33'
      viewBox='0 0 32 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M23.6395 17.2945C23.9324 17.0016 23.9324 16.5267 23.6395 16.2338L18.8665 11.4609C18.5736 11.168 18.0987 11.168 17.8058 11.4609C17.5129 11.7538 17.5129 12.2286 17.8058 12.5215L22.0485 16.7642L17.8058 21.0068C17.5129 21.2997 17.5129 21.7746 17.8058 22.0675C18.0987 22.3604 18.5736 22.3604 18.8665 22.0675L23.6395 17.2945ZM8.95178 16.7642V17.5142H23.1091V16.7642V16.0142H8.95178V16.7642Z'
        fill={fill}
      />
    </svg>
  )
}
