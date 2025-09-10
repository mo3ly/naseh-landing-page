interface ChevronRightIconProperties {
  className?: string
  fill?: string
}

export default function ChevronRightIcon({
  className = 'size-4',
  fill = '#0E2345',
}: ChevronRightIconProperties) {
  return (
    <svg
      className={className}
      width='8'
      height='14'
      viewBox='0 0 8 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.62207 13.4317L0.501801 12.2484L5.69292 6.76505L0.501801 1.28173L1.62207 0.0984039L7.93346 6.76505L1.62207 13.4317Z'
        fill={fill}
      />
    </svg>
  )
}
