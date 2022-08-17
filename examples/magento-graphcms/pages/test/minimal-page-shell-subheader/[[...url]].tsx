import { PageOptions } from '@graphcommerce/framer-next-pages'
import {
  extractUrlQuery,
  FilterTypes,
  getFilterTypes,
  parseParams,
  ProductListDocument,
  ProductListFilters,
  ProductListFiltersContainer,
  ProductListParams,
  ProductListParamsProvider,
  ProductListSort,
} from '@graphcommerce/magento-product'
import { SearchQuery } from '@graphcommerce/magento-search'
import { StoreConfigDocument } from '@graphcommerce/magento-store'
import { StickyBelowHeader, LayoutTitle, LayoutHeader, LinkOrButton } from '@graphcommerce/next-ui'
import { GetStaticProps } from '@graphcommerce/next-ui/Page/types'
import { Box, Container, Typography } from '@mui/material'
import { GetStaticPaths } from 'next'
import PageLink from 'next/link'
import { LayoutMinimal, LayoutMinimalProps } from '../../../components'
import { DefaultPageDocument, DefaultPageQuery } from '../../../graphql/DefaultPage.gql'
import { graphqlSsrClient, graphqlSharedClient } from '../../../lib/graphql/graphqlSsrClient'

type Props = DefaultPageQuery &
  SearchQuery & { filterTypes: FilterTypes; params: ProductListParams }
type RouteProps = { url: string[] }
type GetPageStaticPaths = GetStaticPaths<RouteProps>
type GetPageStaticProps = GetStaticProps<LayoutMinimalProps, Props, RouteProps>

function MinimalLayoutSubheader(props: Props) {
  const { params, products, filters, filterTypes } = props

  return (
    <ProductListParamsProvider value={params}>
      <LayoutHeader
        primary={
          <PageLink href='/test/minimal-page-shell' passHref>
            <LinkOrButton color='secondary' button={{ variant: 'pill' }}>
              Navigate
            </LinkOrButton>
          </PageLink>
        }
      >
        <Typography variant='h5' component='span'>
          Minimal UI
        </Typography>
      </LayoutHeader>
      <Container maxWidth='md' sx={{ height: '2000px' }}>
        <LayoutTitle>
          <Box textAlign='center' mb={3}>
            <Typography variant='h2' component='h2'>
              Minimal UI
            </Typography>
          </Box>
        </LayoutTitle>

        <StickyBelowHeader>
          <ProductListFiltersContainer>
            <ProductListSort sort_fields={products?.sort_fields} />
            <ProductListFilters aggregations={filters?.aggregations} filterTypes={filterTypes} />
          </ProductListFiltersContainer>
        </StickyBelowHeader>
      </Container>
    </ProductListParamsProvider>
  )
}

MinimalLayoutSubheader.pageOptions = {
  Layout: LayoutMinimal,
} as PageOptions

export default MinimalLayoutSubheader

export const getStaticPaths: GetPageStaticPaths = async () => {
  // Disable getStaticPaths while in development mode
  if (process.env.NODE_ENV === 'development') return { paths: [], fallback: 'blocking' }

  return Promise.resolve({
    paths: [{ params: { url: [] } }],
    fallback: 'blocking',
  })
}

export const getStaticProps: GetPageStaticProps = async ({ params, locale }) => {
  const client = graphqlSharedClient(locale)
  const conf = client.query({ query: StoreConfigDocument })
  const filterTypes = getFilterTypes(client)

  const rootCategory = (await conf).data.storeConfig?.root_category_uid ?? ''
  const staticClient = graphqlSsrClient(locale)
  const page = staticClient.query({
    query: DefaultPageDocument,
    variables: { url: 'minimal-page-shell-subheader' },
  })

  const products = staticClient.query({
    query: ProductListDocument,
    variables: { categoryUid: rootCategory },
  })

  const [url, query] = extractUrlQuery(params)
  if (!url || !query) return { notFound: true }
  const productListParams = parseParams(url, query, await filterTypes)
  if (!productListParams) return { notFound: true }

  return {
    props: {
      ...(await page).data,
      ...(await products).data,
      filterTypes: await filterTypes,
      params: productListParams,
      up: { href: '/', title: 'Home' },
      apolloState: await conf.then(() => client.cache.extract()),
    },
    revalidate: 1,
  }
}
