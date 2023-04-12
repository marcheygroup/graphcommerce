import { styled, SxProps, Theme } from '@mui/material'
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import NextImage, { ImageProps as ImagePropsBase } from 'next/image'
import React from 'react'

interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
}

interface StaticRequire {
  default: StaticImageData
}

export type StaticImport = StaticRequire | StaticImageData

export function isStaticRequire(src: StaticRequire | StaticImageData): src is StaticRequire {
  return (src as StaticRequire).default !== undefined
}

export function isStaticImageData(src: StaticRequire | StaticImageData): src is StaticImageData {
  return (src as StaticImageData).src !== undefined
}

export function isStaticImport(src: string | StaticImport): src is StaticImport {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src))
}

export function srcToString(src: StaticImport | string) {
  return isStaticImport(src) ? (isStaticRequire(src) ? src.default : src).src : src
}

type SizesString =
  | `${number}vw`
  | `${number}px`
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions#math_functions
  | `calc(${string})`
  | `min(${string})`
  | `max(${string})`
  | `clamp(${string})`
type SizesRecord = Record<number, SizesString>
export type Sizes = SizesString | SizesRecord | undefined

function isSizesRecord(sizes?: Sizes): sizes is SizesRecord {
  return typeof sizes === 'object'
}

function sizesEntries(sizes: Sizes): (readonly [number, SizesString | undefined])[] {
  if (isSizesRecord(sizes)) {
    return Object.entries(sizes)
      .map(([breakpoint, size]) => [Number(breakpoint), size] as const)
      .sort(([sizeA], [sizeB]) => sizeB - sizeA)
  }
  return [[0, sizes] as const]
}

function generateSizesString(sizes?: Sizes) {
  return sizesEntries(sizes)
    .map(([breakpoint, size]) => {
      if (breakpoint === 0) return size
      return `(min-width: ${breakpoint}px) ${size}`
    })
    .join(', ')
}

const NextImageStyled = styled(NextImage)({})

export type ImageProps = Omit<ImagePropsBase, 'sizes' | 'alt'> & {
  /** Size the image is rendered on mobile */
  sizes?: SizesString | SizesRecord

  sx?: SxProps<Theme>

  alt?: string
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, forwardedRef) => {
  const { fill, layout, width, height, sizes, alt, sx } = props

  const isFill = fill || layout === 'fill'

  let style = {}
  if (layout !== 'fixed' && !style) style = {}
  if (layout === 'responsive') style = { ...style, width: '100%', height: 'auto' }
  if (layout === 'intrinsic') style = { ...style, width: '100%', height: 'auto', maxWidth: width }
  if (layout === 'fill') style = { ...style, width: '100%', height: '100%' }

  console.log(style)
  const overrideProps: React.ComponentPropsWithRef<typeof NextImageStyled> = {
    ...props,
    width: isFill ? undefined : width,
    height: isFill ? undefined : height,
    sizes: generateSizesString(sizes),
    alt: alt ?? '',
    sx: [style, ...(Array.isArray(sx) ? sx : [sx])],
  }

  return <NextImageStyled ref={forwardedRef} {...overrideProps} />
})

Image.displayName = 'Image'
