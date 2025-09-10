interface LocationIconProps {
  className?: string
  width?: string | number
  height?: string | number
}

export default function LocationIcon({
  className = '',
  width = 33,
  height = 33,
}: LocationIconProps) {
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
        d='M16.668 3.44531C21.828 3.44531 26.0014 7.61865 26.0014 12.7786C26.0014 19.7786 16.668 30.112 16.668 30.112C16.668 30.112 7.33472 19.7786 7.33472 12.7786C7.33472 7.61865 11.508 3.44531 16.668 3.44531ZM9.99878 12.779C9.99878 16.579 13.8921 22.3923 16.6654 25.9523C19.4921 22.3656 23.3321 16.619 23.3321 12.779C23.3321 9.09897 20.3454 6.1123 16.6654 6.1123C12.9854 6.1123 9.99878 9.09897 9.99878 12.779ZM16.6681 16.112C14.8271 16.112 13.3347 14.6196 13.3347 12.7786C13.3347 10.9377 14.8271 9.44531 16.6681 9.44531C18.509 9.44531 20.0014 10.9377 20.0014 12.7786C20.0014 14.6196 18.509 16.112 16.6681 16.112Z'
        fill='#C1B06C'
      />
    </svg>
  )
}
