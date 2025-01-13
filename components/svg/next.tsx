import type { SVGProps } from 'react'
import * as React from 'react'

const Next = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 180 180"
    width={18}
    {...props}
  >
    <mask
      height={180}
      id="a"
      maskUnits="userSpaceOnUse"
      width={180}
      x={0}
      y={0}
      style={{
        maskType: 'alpha',
      }}
    >
      <circle cx={90} cy={90} r={90} />
    </mask>
    <g mask="url(#a)">
      <circle cx={90} cy={90} data-circle="true" r={90} />
      <path
        d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 0 0 9.509-7.325Z"
        fill="url(#b)"
      />
      <path fill="url(#c)" d="M115 54h12v72h-12z" />
    </g>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="b"
        x1={109}
        x2={144.5}
        y1={116.5}
        y2={160.5}
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="c"
        x1={121}
        x2={120.799}
        y1={54}
        y2={106.875}
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

export default Next
