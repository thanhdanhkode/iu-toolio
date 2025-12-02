import type { SVGProps } from "react"

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}>
      <g fill="none">
        <path
          fill="url(#SVGblp6ebTY)"
          d="M13 2a2.47 2.47 0 0 1 2.47 2.47l-.001.53H19a1 1 0 0 1 1 1l-.001 3.499l-1.53.001a2.47 2.47 0 0 0-2.464 2.307L16 11.97v.06a2.47 2.47 0 0 0 2.307 2.465l.163.005l1.529-.001l.001 3.504a1 1 0 0 1-1 1l-3.531-.001v.528a2.47 2.47 0 1 1-4.939 0v-.528H7a1 1 0 0 1-1-1l-.001-3.531h-.53a2.47 2.47 0 0 1 0-4.94H6V6a1 1 0 0 1 1-1h3.53v-.53A2.47 2.47 0 0 1 13 2"></path>
        <path
          fill="url(#SVGJPG0LdPn)"
          fillOpacity={0.7}
          d="M13 2a2.47 2.47 0 0 1 2.47 2.47l-.001.53H19a1 1 0 0 1 1 1l-.001 3.499l-1.53.001a2.47 2.47 0 0 0-2.464 2.307L16 11.97v.06a2.47 2.47 0 0 0 2.307 2.465l.163.005l1.529-.001l.001 3.504a1 1 0 0 1-1 1l-3.531-.001v.528a2.47 2.47 0 1 1-4.939 0v-.528H7a1 1 0 0 1-1-1l-.001-3.531h-.53a2.47 2.47 0 0 1 0-4.94H6V6a1 1 0 0 1 1-1h3.53v-.53A2.47 2.47 0 0 1 13 2"></path>
        <defs>
          <linearGradient
            id="SVGblp6ebTY"
            x1={5.833}
            x2={16.883}
            y1={0.889}
            y2={21.761}
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#1ec8b0"></stop>
            <stop
              offset={1}
              stopColor="#2764e7"></stop>
          </linearGradient>
          <linearGradient
            id="SVGJPG0LdPn"
            x1={14.131}
            x2={18.725}
            y1={4.456}
            y2={23.861}
            gradientUnits="userSpaceOnUse">
            <stop
              offset={0.533}
              stopColor="#ff6ce8"
              stopOpacity={0}></stop>
            <stop
              offset={1}
              stopColor="#ff6ce8"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  )
}
