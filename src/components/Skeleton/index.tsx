import { CSS } from '@stitches/react'

import { SkeletonContainer } from './styles'

interface SkeletonProps {
  width: number | string
  height: number | string
  borderRadius?: number | string
  css?: CSS
}

export function Skeleton({ width, height, borderRadius = 0, css }: SkeletonProps) {
  return (
    <SkeletonContainer
      css={{
        width,
        height,
        borderRadius,
        ...css,
      }}
    />
  )
}
