import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ColorSkycons, { ColorSkyconsType } from '../src/ColorSkycons'

it('should render a component', async () => {
  render(
    <ColorSkycons
      type={ColorSkyconsType.CLEAR_DAY}
      monochrome={true}
      color="red"
      resizeClear={true}
    />
  )
  expect(screen.queryByRole('img')).toBeInTheDocument()
})

it('should be able to re-render a component', async () => {
  const { rerender } = render(
    <ColorSkycons
      type={ColorSkyconsType.CLEAR_DAY}
      monochrome={false}
      animate={true}
      size={24}
      resizeClear={true}
    />
  )
  rerender(
    <ColorSkycons
      type={ColorSkyconsType.CLEAR_NIGHT}
      color="blue"
      animate={false}
      size={48}
      resizeClear={false}
    />
  )
  expect(screen.queryByRole('img')).toBeInTheDocument()
})
