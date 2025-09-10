interface EmailIconProps {
  className?: string
  width?: string | number
  height?: string | number
}

export default function EmailIcon({
  className = '',
  width = 33,
  height = 33,
}: EmailIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 33 33'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M30.0014 8.77799C30.0014 7.31133 28.8014 6.11133 27.3347 6.11133H6.00138C4.53472 6.11133 3.33472 7.31133 3.33472 8.77799V24.778C3.33472 26.2447 4.53472 27.4447 6.00138 27.4447H27.3347C28.8014 27.4447 30.0014 26.2447 30.0014 24.778V8.77799ZM27.3321 8.77832L16.6654 15.445L5.99878 8.77832H27.3321ZM27.3321 24.7777H5.99878V11.4443L16.6654 18.111L27.3321 11.4443V24.7777Z'
        fill='#C1B06C'
      />
    </svg>
  )
}
