import type { SVGProps } from "react"

interface FramerMotionLogoProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function FramerMotionLogo({ size = 20, className, ...props }: FramerMotionLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`inline-block align-middle ${className || ""}`}
      {...props}
    >
      <path
        fill="#0055FF"
        d="M0 0h100v33.333H33.333L0 0zm0 33.333h66.667L100 66.667H0V33.333zm0 33.334h100V100L0 66.667z"
      />
    </svg>
  )
}
