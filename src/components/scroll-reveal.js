"use client"

import { useEffect } from "react"
import sal from "sal.js"
import "sal.js/dist/sal.css"

const ScrollReveal = () => {
  useEffect(() => {
    sal({
      threshold: 0.2,
      once: true,
      disabled: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    })
  }, [])

  return null
}

export default ScrollReveal
