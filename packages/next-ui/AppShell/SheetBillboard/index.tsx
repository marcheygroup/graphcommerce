import { Container, makeStyles, Theme } from '@material-ui/core'
import { useMotionValue } from 'framer-motion'
import React, { useEffect } from 'react'
import { useMotionValueValue } from '../../../framer-utils'
import { UseStyles } from '../../Styles'
import useContentHeaderContext from '../ContentHeader/useContentHeaderContext'

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'sticky',
    },
  }),
  {
    name: 'SheetBillboard',
  },
)

type SheetBillboardBaseProps = {
  children: React.ReactNode
}

type SheetBillboardProps = SheetBillboardBaseProps & UseStyles<typeof useStyles>

/*
  SheetBillboard
 - makes the children sticky to the parent container
 - determines top offset based on header height dynamically
*/
export default function SheetBillboard(props: SheetBillboardProps) {
  const { children } = props
  const classes = useStyles(props)

  const { contentHeaderRef } = useContentHeaderContext()
  const offsetTop = useMotionValue<number>(0)

  useEffect(() => {
    if (!contentHeaderRef?.current) return () => {}

    const ro = new ResizeObserver(([entry]) => offsetTop.set(entry.contentRect.height))

    ro.observe(contentHeaderRef.current)
    return () => ro.disconnect()
  }, [contentHeaderRef, offsetTop])

  const top = useMotionValueValue(offsetTop, (v) => v)

  return (
    <Container maxWidth={false} className={classes.root} style={{ top }}>
      <>{children}</>
    </Container>
  )
}
