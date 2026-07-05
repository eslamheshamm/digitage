"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import sal from "sal.js"
import "sal.js/dist/sal.css"

const ScrollReveal = () => {
  const pathname = usePathname()
  const instance = useRef(null)

  // sal only scans for [data-sal] elements when called, so it must re-scan
  // after every client-side navigation or newly mounted elements stay hidden
  useEffect(() => {
    if (instance.current) {
      instance.current.update()
    } else {
      instance.current = sal({
        threshold: 0.2,
        once: true,
        disabled: window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches,
      })
    }
  }, [pathname])

  return null
}

export default ScrollReveal
