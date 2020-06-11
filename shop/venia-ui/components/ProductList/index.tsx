import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Container } from '@material-ui/core'
import { vpCalc } from 'components/Theme'
import ProductListItemSimple from '../ProductListItemSimple'

const useStyles = makeStyles(
  (theme: Theme) => ({
    productList: {
      display: 'grid',
      gridColumnGap: theme.gridSpacing.column,
      gridRowGap: theme.gridSpacing.gutter,
      gridTemplateColumns: `repeat(auto-fill, minmax(${vpCalc(150, 285)}, 1fr))`,
    },
  }),
  { name: 'ProductList' },
)

export default function ProductList(props: GQLProductListFragment) {
  const { items } = props
  const classes = useStyles(props)

  return (
    <Container className={classes.productList}>
      {items.map((item) => (
        <ProductListItemSimple {...item} key={item.id} />
      ))}
    </Container>
  )
}
