import React, { useEffect, useRef, useState } from "react"
import styles from "./Switch.module.css"

interface Props {
  checked: boolean
  onChange: (value: boolean) => void
  height?: number
  width?: number
  activeThumbColor?: string
  activeTrackColor?: string
  inActiveThumbColor?: string
  inActiveTrackColor?: string
  thumbClassName?: string
  trackClassName?: string
  mainClassName?: string
  id?: string
}

function Switch(props: Props) {
  const {
    checked,
    onChange,
    activeTrackColor = "#0097EB",
    inActiveTrackColor = "#D3D3D3",
    activeThumbColor = "#FFFFFF",
    inActiveThumbColor = "#FFFFFF",
    width = 56,
    height = 28,
    mainClassName,
    thumbClassName,
    trackClassName,
    id = ""
  } = props

  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState<number>(0)

  useEffect(() => {
    const handleHeight = () => {
      if (containerRef) {
        if (typeof containerRef?.current?.clientHeight === "number") {
          setContainerHeight(containerRef?.current?.clientHeight)
        }
      }
    }
    handleHeight()
  }, [containerRef])

  return (
    <div
      id={id}
      className={`${styles.mainContainer} ${mainClassName}`}
      ref={containerRef}
      onClick={() => {
        onChange(!checked)
      }}
      style={{
        width,
        height
      }}
    >
      <div className={styles.switchContainer}>
        <div
          className={`${checked ? styles.trackActive : styles.track} ${trackClassName}`}
          style={{
            backgroundColor: checked ? activeTrackColor : inActiveTrackColor,
            borderRadius: "calc(100vw / 2)"
          }}
        ></div>
        <div
          className={`${checked ? styles.thumbActive : styles.thumb} ${thumbClassName}`}
          style={{
            left: checked ? `calc(100% - ${containerHeight}px)` : "0%",
            backgroundColor: checked ? activeThumbColor : inActiveThumbColor,
            height: `${containerHeight * 0.95}px`,
            width: `${containerHeight * 0.95}px`,
            marginLeft: `${containerHeight * 0.025}px`
          }}
        ></div>
      </div>
    </div>
  )
}

export default Switch
