'use client'

import { useEffect, useRef } from 'react'

const LightRay = () => {
  const interactiveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interBubble = interactiveRef.current
    if (!interBubble) return

    let curX = 0
    let curY = 0
    let tgX = 0
    let tgY = 0

    function move() {
      curX += (tgX - curX) / 20
      curY += (tgY - curY) / 20
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
      }
      requestAnimationFrame(() => {
        move()
      })
    }

    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      tgX = event.clientX
      tgY = event.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    move()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 애니메이션 정의 */}
      <style jsx global>{`
        @keyframes moveInCircle {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes moveVertical {
          0% {
            transform: translateY(-50%);
          }
          50% {
            transform: translateY(50%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes moveHorizontal {
          0% {
            transform: translateX(-50%) translateY(-10%);
          }
          50% {
            transform: translateX(50%) translateY(10%);
          }
          100% {
            transform: translateX(-50%) translateY(-10%);
          }
        }

        .g1 {
          animation: moveVertical 30s ease infinite;
        }

        .g2 {
          animation: moveInCircle 20s reverse infinite;
          transform-origin: calc(50% - 400px);
        }

        .g3 {
          animation: moveInCircle 40s linear infinite;
          transform-origin: calc(50% + 400px);
        }

        .g4 {
          animation: moveHorizontal 40s ease infinite;
          transform-origin: calc(50% - 200px);
        }

        .g5 {
          animation: moveInCircle 20s ease infinite;
          transform-origin: calc(50% - 800px) calc(50% + 200px);
        }
      `}</style>

      <div className="w-full h-full bg-[rgba(var(--background))]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fixed top-0 left-0 w-0 h-0"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div
          className="w-full h-full"
          style={{ filter: 'url(#goo) blur(40px)' }}
        >
          <div className="g1 absolute opacity-100 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,#f0f9e8cc_0,#f0f9e800_50%)] bg-no-repeat mix-blend-hard-light" />
          <div className="g2 absolute opacity-100 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,#e5f0b0cc_0,#e5f0b000_50%)] bg-no-repeat mix-blend-hard-light" />
          <div className="g3 absolute opacity-100 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-32 -translate-x-64 bg-[radial-gradient(circle_at_center,#cbdd62cc_0,#cbdd6200_50%)] bg-no-repeat mix-blend-hard-light" />
          <div className="g4 absolute opacity-70 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,#8bb455cc_0,#8bb45500_50%)] bg-no-repeat mix-blend-hard-light" />
          <div className="g5 absolute opacity-100 w-full h-full scale-150 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,#498428cc_0,#49842800_50%)] bg-no-repeat mix-blend-hard-light" />
          <div
            ref={interactiveRef}
            className="absolute opacity-70 w-full h-full -top-1/2 -left-1/2 bg-[radial-gradient(circle_at_center,#aedd66cc_0,#aedd6600_50%)] bg-no-repeat mix-blend-hard-light"
          />
        </div>
      </div>
    </div>
  )
}

export default LightRay
