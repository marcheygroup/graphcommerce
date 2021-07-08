import { makeStyles } from '@material-ui/core'
import { useViewportScroll } from 'framer-motion'
import React from 'react'
import { UseStyles } from '../../Styles'
import ContentHeader, { ContentHeaderProps } from '../ContentHeader'

const useStyles = makeStyles(() => ({
  sheetHeader: {
    marginBottom: 62,
  },
}))

type PageContentHeaderProps = Omit<ContentHeaderProps, 'scrollY'> & UseStyles<typeof useStyles>

export default function PageContentHeader(props: PageContentHeaderProps) {
  const { scrollY } = useViewportScroll()
  const classes = useStyles(props)

  return <ContentHeader {...props} classes={classes} scrollY={scrollY} noClose />
}
