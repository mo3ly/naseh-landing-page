interface LinkedInIconProps {
  className?: string
  width?: string | number
  height?: string | number
}

export default function LinkedInIcon({
  className = '',
  width = 25,
  height = 25,
}: LinkedInIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M7.60803 5.44509C7.60777 5.97552 7.3968 6.48413 7.02154 6.85901C6.64628 7.2339 6.13747 7.44436 5.60703 7.44409C5.0766 7.44383 4.568 7.23286 4.19311 6.8576C3.81823 6.48234 3.60777 5.97353 3.60803 5.44309C3.6083 4.91266 3.81927 4.40406 4.19453 4.02917C4.56979 3.65429 5.0786 3.44383 5.60903 3.44409C6.13947 3.44436 6.64807 3.65533 7.02295 4.03059C7.39784 4.40585 7.6083 4.91466 7.60803 5.44509ZM7.66803 8.92509H3.66803V21.4451H7.66803V8.92509ZM13.988 8.92509H10.008V21.4451H13.948V14.8751C13.948 11.2151 18.718 10.8751 18.718 14.8751V21.4451H22.668V13.5151C22.668 7.34509 15.608 7.57509 13.948 10.6051L13.988 8.92509Z'
        fill='white'
      />
    </svg>
  )
}
