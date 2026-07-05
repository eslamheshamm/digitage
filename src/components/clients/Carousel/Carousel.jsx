"use client"

import React, { Children } from "react"

const Carousel = ({
  children,
  show,
  infiniteLoop,
  withIndicator,
  autoPlay,
  autoPlayInterval = 2500,
  renderPreviousButton,
  renderNextButton,
  containerClassName,
  wrapperClassName,
  contentWrapperClassName,
  contentClassName,
  containerProps,
  wrapperProps,
  contentWrapperProps,
  contentProps,
  indicatorContainerClassName,
  indicatorContainerProps,
  indicatorClassNames,
}) => {
  const indicatorContainerRef = React.useRef(null)

  /**
   * Total item
   */
  const length = React.useMemo(() => Children.count(children), [children])

  /**
   * Is the carousel repeating it's item
   */
  const isRepeating = React.useMemo(
    () => infiniteLoop && Children.count(children) > show,
    [children, infiniteLoop, show]
  )

  /**
   * Current Index Item of the Carousel
   */
  const [currentIndex, setCurrentIndex] = React.useState(isRepeating ? show : 0)

  /**
   * Is the carousel's transition enabled
   */
  const [isTransitionEnabled, setTransitionEnabled] = React.useState(true)

  /**
   * First touch position to be used in calculation for the swipe speed
   */
  const [touchPosition, setTouchPosition] = React.useState(null)

  /**
   * Handle if the carousel is repeating
   * and the currentIndex have been set to the last or first item
   */
  React.useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true)
      }
    }
  }, [currentIndex, isRepeating, show, length])

  React.useEffect(() => {
    if (withIndicator) {
      const active = indicatorContainerRef.current?.querySelector(
        ".dots-active"
      )
      if (active) {
        let index = active.getAttribute("data-index")
        if (index !== null && indicatorContainerRef.current?.scrollTo) {
          indicatorContainerRef.current?.scrollTo({
            left: ((Number(index) - 2) / 5) * 50,
            behavior: "smooth",
          })
        }
      }
    }
  }, [withIndicator, currentIndex])

  /**
   * Move forward to the next item.
   * When repeating, the index is clamped to the cloned tail (length + show)
   * so rapid clicks can't slide past the last slide into empty space —
   * the boundary reset in handleTransitionEnd brings it back into range.
   */
  const nextItem = React.useCallback(() => {
    setCurrentIndex(prevState => {
      if (isRepeating) {
        return prevState < length + show ? prevState + 1 : prevState
      }
      return prevState < length - show ? prevState + 1 : prevState
    })
  }, [isRepeating, length, show])

  /**
   * Move backward to the previous item (clamped at the cloned head)
   */
  const previousItem = React.useCallback(() => {
    setCurrentIndex(prevState => {
      if (isRepeating) {
        return prevState > 0 ? prevState - 1 : prevState
      }
      return prevState > 0 ? prevState - 1 : prevState
    })
  }, [isRepeating])

  /**
   * Handle when the user start the swipe gesture
   */
  const handleTouchStart = e => {
    // Save the first position of the touch
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  /**
   * Handle when the user move the finger in swipe gesture
   */
  const handleTouchMove = e => {
    // Get initial location
    const touchDown = touchPosition

    // Proceed only if the initial position is not null
    if (touchDown === null) {
      return
    }

    // Get current position
    const currentTouch = e.touches[0].clientX

    // Get the difference between previous and current position
    const diff = touchDown - currentTouch

    // Go to next item
    if (diff > 5) {
      nextItem()
    }

    // Go to previous item
    if (diff < -5) {
      previousItem()
    }

    // Reset initial touch position
    setTouchPosition(null)
  }

  /**
   * Handle when carousel transition's ended
   */
  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false)
        setCurrentIndex(length)
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false)
        setCurrentIndex(show)
      }
    }
  }

  /**
   * Safety net for the boundary reset: if transitionend never fires
   * (interrupted transition, background tab), perform the same jump
   * back into range so the carousel can't stall on the cloned slides.
   */
  React.useEffect(() => {
    if (!isRepeating) return
    if (currentIndex === 0 || currentIndex === length + show) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false)
        setCurrentIndex(currentIndex === 0 ? length : show)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, isRepeating, length, show])

  /**
   * Auto-advance one item per interval. Paused while the user hovers or
   * touches the carousel, while the tab is hidden, and disabled entirely
   * for users who prefer reduced motion.
   */
  const [isPaused, setIsPaused] = React.useState(false)

  React.useEffect(() => {
    if (!autoPlay || isPaused) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => {
      if (!document.hidden) {
        nextItem()
      }
    }, autoPlayInterval)
    return () => clearInterval(id)
  }, [autoPlay, autoPlayInterval, isPaused, nextItem])

  /**
   * Render previous items before the first item
   */
  const extraPreviousItems = React.useMemo(() => {
    let output = []
    for (let index = 0; index < show; index++) {
      output.push(Children.toArray(children)[length - 1 - index])
    }
    output.reverse()
    return output
  }, [children, length, show])

  /**
   * Render next items after the last item
   */
  const extraNextItems = React.useMemo(() => {
    let output = []
    for (let index = 0; index < show; index++) {
      output.push(Children.toArray(children)[index])
    }
    return output
  }, [children, show])

  const renderDots = React.useMemo(() => {
    let output = []

    const localShow = isRepeating ? show : 0
    const localLength = isRepeating ? length : Math.ceil(length / show)
    const calculatedActiveIndex =
      currentIndex - localShow < 0
        ? length + (currentIndex - localShow)
        : currentIndex - localShow

    for (let index = 0; index < localLength; index++) {
      let className = ""
      if (calculatedActiveIndex === index) {
        className = indicatorClassNames?.active || "dots-active"
      } else {
        if (calculatedActiveIndex === 0) {
          if (calculatedActiveIndex + index <= 2) {
            className = indicatorClassNames?.close || "dots-close"
          } else {
            className = indicatorClassNames?.far || "dots-far"
          }
        } else if (calculatedActiveIndex === localLength - 1) {
          if (Math.abs(calculatedActiveIndex - index) <= 2) {
            className = indicatorClassNames?.close || "dots-close"
          } else {
            className = indicatorClassNames?.far || "dots-far"
          }
        } else {
          if (Math.abs(calculatedActiveIndex - index) === 1) {
            className = indicatorClassNames?.close || "dots-close"
          } else {
            className = indicatorClassNames?.far || "dots-far"
          }
        }
      }
      output.push(<div key={index} data-index={index} className={className} />)
    }

    return output
  }, [currentIndex, indicatorClassNames, isRepeating, length, show])

  return (
    <div
      data-testid="carousel-container"
      className={`carousel-container ${containerClassName || ""}`}
      {...containerProps}
    >
      <div
        data-testid="carousel-wrapper"
        className={`carousel-wrapper ${wrapperClassName || ""}`}
        {...wrapperProps}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {isRepeating || currentIndex > 0 ? (
          renderPreviousButton ? (
            renderPreviousButton(previousItem, "left-arrow-button")
          ) : (
            <button
              data-testid="left-button"
              onClick={previousItem}
              className="left-arrow-button"
            >
              <span className="left-arrow" />
            </button>
          )
        ) : null}
        <div
          data-testid="carousel-content-wrapper"
          className={`carousel-content-wrapper ${contentWrapperClassName || ""}`}
          {...contentWrapperProps}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            data-testid="carousel-content"
            className={`carousel-content show-${show} ${contentClassName || ""}`}
            {...contentProps}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !isTransitionEnabled ? "none" : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && extraPreviousItems}
            {children}
            {length > show && isRepeating && extraNextItems}
          </div>
        </div>
        {isRepeating || currentIndex < length - show ? (
          renderNextButton ? (
            renderNextButton(nextItem, "right-arrow-button")
          ) : (
            <button
              data-testid="right-button"
              onClick={nextItem}
              className="right-arrow-button"
            >
              <span className="right-arrow" />
            </button>
          )
        ) : null}
      </div>
      {withIndicator && (
        <div
          data-testid="indicator-container"
          ref={indicatorContainerRef}
          className={`indicator-container ${indicatorContainerClassName || ""}`}
          {...indicatorContainerProps}
        >
          {renderDots}
        </div>
      )}
    </div>
  )
}

export default Carousel
