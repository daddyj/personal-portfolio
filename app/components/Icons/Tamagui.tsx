import { IconProps } from "./types";

export function Tamagui(props: IconProps) {
  return (
    <a href="https://tamagui.dev" target="_blank" className="flex flex-col items-center gap-2 hover:cursor-pointer hover:animate-pulse hover:scale-[125%] transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="2rem"
        height="2rem"
        {...props}
      >
        <path
          fill="#ff8ee8"
          d="M15.98 28.09h1.87l1.88-1.87v-1.87l3.75-3.74v-3.73l1.87-1.87h1.88l1.87-1.87V9.4l-1.87-1.87h-3.75L19.73 3.8h-9.37L4.73 9.4v5.61l-1.87 1.87v3.73l7.5 7.48h1.87l1.88-1.87h1.87z"
        ></path>
        <g fill="#671e65">
          <path d="M9.43 2.93h11.29v1.86H9.43zM7.57 4.79h1.86v1.86H7.57z"></path>
          <path d="M5.72 6.64h1.86V8.5H5.72zM3.86 8.5h1.86v7.43H3.86zM2 15.93h1.86v5.57H2zm1.86 5.57h1.86v1.86H3.86zm1.86 1.86h1.86v1.86H5.72zm1.85 2h1.86v1.86H7.57zm1.86 1.85h3.71v1.86H9.43zm3.71-1.85v1.85H15v1.86h3.72v-1.86h-1.86v-1.85zm5.58-2h2v3.86h-2zm2-1.86h1.86v1.86h-1.86zm1.85-5.57h1.86v5.57h-1.86zm1.86-1.86h3.71v1.86h-3.71zm3.71-3.71h-5.57v1.85h5.57v1.86H30V8.5h-1.86zm-5.57-3.72h5.57V8.5h-5.57z"></path>
          <path d="M20.72 4.79h1.86v1.86h-1.86zm-1.86 1.85h1.86V8.5h-1.86zM13.14 8.5H15v1.86h-1.86zm0 7.43v3.71H15v-3.71zm-1.85 3.71h1.86v1.86h-1.86zm-1.86-1.86v1.86h1.86v-3.71H9.43z"></path>
        </g>
      </svg>
      <p>Tamagui UI</p>
    </a>
  )
}
