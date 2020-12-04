import React, { useEffect, useRef } from 'react'
const Skycons = require('skycons-color')

export enum ColorSkyconsType {
  CLEAR_DAY = 'CLEAR_DAY',
  CLEAR_NIGHT = 'CLEAR_NIGHT',
  PARTLY_CLOUDY_DAY = 'PARTLY_CLOUDY_DAY',
  PARTLY_CLOUDY_NIGHT = 'PARTLY_CLOUDY_NIGHT',
  CLOUDY = 'CLOUDY',
  RAIN = 'RAIN',
  SHOWERS_DAY = 'SHOWERS_DAY',
  SHOWERS_NIGHT = 'SHOWERS_NIGHT',
  SLEET = 'SLEET',
  RAIN_SNOW = 'RAIN_SNOW',
  RAIN_SNOW_SHOWERS_DAY = 'RAIN_SNOW_SHOWERS_DAY',
  RAIN_SNOW_SHOWERS_NIGHT = 'RAIN_SNOW_SHOWERS_NIGHT',
  SNOW = 'SNOW',
  SNOW_SHOWERS_DAY = 'SNOW_SHOWERS_DAY',
  SNOW_SHOWERS_NIGHT = 'SNOW_SHOWERS_NIGHT',
  WIND = 'WIND',
  FOG = 'FOG',
  THUNDER = 'THUNDER',
  THUNDER_RAIN = 'THUNDER_RAIN',
  THUNDER_SHOWERS_DAY = 'THUNDER_SHOWERS_DAY',
  THUNDER_SHOWERS_NIGHT = 'THUNDER_SHOWERS_NIGHT',
  HAIL = 'HAIL',
}

export interface ColorSkyconsProps
  extends React.DetailedHTMLProps<
    React.CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  > {
  monochrome?: boolean
  color?: string
  animate?: boolean
  resizeClear?: boolean
  type: ColorSkyconsType
  size?: number
}

export default function ColorSkyconsComponent(props: ColorSkyconsProps) {
  const {
    monochrome = false,
    color,
    animate = true,
    resizeClear,
    type,
    style,
    size = 24,
    ...restPops
  } = props

  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const skycons = new Skycons({
      monochrome,
      color,
      resizeClear,
    })

    skycons.add(canvasRef.current, Skycons[type])
    if (animate) {
      skycons.play()
    }
    return () => {
      skycons.pause()
      skycons.remove()
    }
  }, [animate, color, type, resizeClear])

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      aria-label={type}
      role="img"
      {...restPops}
    />
  )
}
