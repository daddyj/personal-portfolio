import { IconProps } from './types'

export function Canvas(props: IconProps) {
  return (
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
      target="_blank"
      className="flex flex-col items-center gap-2 transition-all hover:scale-[125%] hover:animate-pulse hover:cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="2rem"
        height="2rem"
        {...props}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          color="currentColor"
        >
          <path d="M4 8c0-2.828 0-4.243 1.004-5.121S7.624 2 10.857 2h2.286c3.232 0 4.849 0 5.853.879C20 3.757 20 5.172 20 8v9H4zm-1 9h18"></path>
          <path d="M10.699 5.566c1.23-.176 3.268-.106 1.581 1.587c-2.108 2.115-5.272 6.876-1.581 5.29c3.69-1.588 5.272-.53 3.69 1.057M12 17v4m-7 1l3-5m11 5l-3-5"></path>
        </g>
      </svg>
      <p>Canvas</p>
    </a>
  )
}
