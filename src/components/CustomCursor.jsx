import { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.left = followerX + 'px'
      follower.style.top = followerY + 'px'
      requestAnimationFrame(animateFollower)
    }

    const onMouseEnterInteractive = () => {
      setIsHovering(true)
    }

    const onMouseLeaveInteractive = () => {
      setIsHovering(false)
    }

    document.addEventListener('mousemove', moveCursor)
    animateFollower()

    const interactiveEls = document.querySelectorAll('a, button, [data-cursor="pointer"]')
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor hidden md:block"
        style={{
          width: isHovering ? '12px' : '20px',
          height: isHovering ? '12px' : '20px',
          background: isHovering ? 'rgba(123, 97, 255, 0.9)' : 'rgba(0, 245, 212, 0.8)',
          transition: 'width 0.3s, height 0.3s, background 0.3s',
        }}
      />
      <div
        ref={followerRef}
        className="custom-cursor-follower hidden md:block"
        style={{
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          borderColor: isHovering ? 'rgba(123, 97, 255, 0.5)' : 'rgba(0, 245, 212, 0.4)',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s',
        }}
      />
    </>
  )
}

export default CustomCursor
