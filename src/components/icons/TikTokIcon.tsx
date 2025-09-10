interface TikTokIconProps {
  className?: string
  width?: string | number
  height?: string | number
}

export default function TikTokIcon({
  className = '',
  width = 54,
  height = 55,
}: TikTokIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 54 55'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect
        x='0.666626'
        y='0.77832'
        width='53.3333'
        height='53.3333'
        rx='26.6667'
        fill='#C1B06C'
      />
      <path
        d='M32.6139 20.5784C31.8293 19.7112 31.3969 18.5977 31.397 17.4451H27.8498V31.2228C27.823 31.9686 27.498 32.6752 26.9433 33.1934C26.3886 33.7116 25.6476 34.0011 24.8766 34.0006C23.2465 34.0006 21.8919 32.7117 21.8919 31.1117C21.8919 29.2006 23.7975 27.7673 25.7605 28.3562V24.8451C21.8001 24.334 18.3333 27.3117 18.3333 31.1117C18.3333 34.8117 21.5016 37.4451 24.8651 37.4451C28.4697 37.4451 31.397 34.6117 31.397 31.1117V24.1228C32.8354 25.1227 34.5624 25.6591 36.3333 25.6562V22.2228C36.3333 22.2228 34.1751 22.3228 32.6139 20.5784Z'
        fill='white'
      />
    </svg>
  )
}
