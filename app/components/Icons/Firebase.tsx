import { IconProps } from './types'

export function Firebase(props: IconProps) {
  return (
    <a
      href="https://console.firebase.google.com"
      target="_blank"
      className="flex flex-col items-center gap-2 hover:cursor-pointer hover:animate-pulse hover:scale-[125%] transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="2rem"
        height="2rem"
        {...props}
      >
        <path
          fill="#ff9100"
          d="M11.84 29.2c1.17.47 2.44.75 3.78.8c1.81.06 3.52-.31 5.06-1.02c-1.84-.72-3.51-1.78-4.93-3.1a8.5 8.5 0 0 1-3.9 3.32Z"
        ></path>
        <path
          fill="#ffc400"
          d="M15.74 25.88c-3.25-3-5.22-7.35-5.05-12.12c0-.15.01-.31.02-.46a8.5 8.5 0 0 0-4.39.05c-.87 1.52-1.39 3.26-1.46 5.13c-.17 4.82 2.75 9.03 6.98 10.73a8.37 8.37 0 0 0 3.9-3.32Z"
        ></path>
        <path
          fill="#ff9100"
          d="M15.74 25.88a8.4 8.4 0 0 0 1.27-4.15c.14-4.02-2.56-7.47-6.3-8.44c0 .15-.02.31-.02.46a15.69 15.69 0 0 0 5.05 12.12Z"
        ></path>
        <path
          fill="#dd2c00"
          d="M16.59 2c-2.13 1.7-3.81 3.95-4.83 6.54a15.6 15.6 0 0 0-1.05 4.75a8.41 8.41 0 0 1 6.3 8.44a8.27 8.27 0 0 1-1.27 4.15a15.8 15.8 0 0 0 4.93 3.1c3.7-1.71 6.32-5.38 6.47-9.73c.1-2.82-.98-5.33-2.51-7.45c-1.62-2.24-8.04-9.79-8.04-9.79Z"
        ></path>
      </svg>
      <p>Firebase</p>
    </a>
  )
}
