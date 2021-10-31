/* eslint-disable */
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { Box } from '@material-ui/core'

export default function TicketTable() {
  const tableImage = useRef(null)
  const [centerX, setCenterX] = useState(0)
  const [centerY, setCenterY] = useState(0)

  useLayoutEffect(() => {
    function updateSize() {
      const { offsetWidth } = tableImage.current
      setCenterX(offsetWidth / 2)
      setCenterY((offsetWidth * 643) / 1227 / 2)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <Box position="relative">
      <Box ref={tableImage}>
        <img src="/images/table.png" alt="table" style={{ zIndex: 1 }} />
      </Box>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, key) => {
        const positionY =
          centerY - 20 - (centerY + 5) * Math.sin((Math.PI * key * 2) / 10)
        const positionX =
          centerX - 20 + (centerX + 5) * Math.cos((Math.PI * key * 2) / 10)
        return (
          <Box
            key={key}
            position="absolute"
            sx={{ top: positionY, right: positionX }}
            zIndex={2}
          >
            <img
              src="/images/emptySeat.png"
              alt="empty seat"
              width={40}
              height={40}
              style={{ minWidth: 40, minHeight: 40 }}
            />
          </Box>
        )
      })}
    </Box>
  )
}
