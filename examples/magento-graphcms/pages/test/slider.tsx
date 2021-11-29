import { PageOptions } from '@graphcommerce/framer-next-pages'
import { ProductListDocument, ProductListQuery } from '@graphcommerce/magento-product'
import { StoreConfigDocument } from '@graphcommerce/magento-store'
import { AppShellTitle, GetStaticProps, Title, AppBar } from '@graphcommerce/next-ui'
import SidebarGallery from '@graphcommerce/next-ui/FramerScroller/components/SidebarGallery'
import React from 'react'
import { LayoutFull, LayoutFullProps } from '../../components/Layout'
import apolloClient from '../../lib/apolloClient'

type Props = ProductListQuery
type GetPageStaticProps = GetStaticProps<LayoutFullProps, Props>

function TestSlider({ products }: Props) {
  if (!products?.items?.length) return <></>
  return (
    <>
      <AppBar>
        <Title size='small' component='span'>
          Product title
        </Title>
      </AppBar>

      <SidebarGallery
        sidebar={
          <>
            <AppShellTitle variant='h2' bare>
              Product Title
            </AppShellTitle>
            <ul>
              <li>Some product details</li>
              <li>Or other information</li>
              <li>Can be displayed here</li>
            </ul>
          </>
        }
        images={
          products?.items?.map((item) => ({
            src: item?.small_image?.url ?? '',
            width: 1532,
            height: 1678,
          })) ?? []
        }
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <Container>
      <m.div layout>
        <Typography variant='h2' style={{ textAlign: 'center' }}>
          Multi item slider
        </Typography>
      </m.div>
      <Multi />

      <m.div layout>
        <Typography variant='h2' style={{ textAlign: 'center' }}>
          Single item Slider
        </Typography>
      </m.div>
      <Single />
    </Container> */}
    </>
  )
}

TestSlider.pageOptions = {
  Layout: LayoutFull,
} as PageOptions
export default TestSlider

export const getStaticProps: GetPageStaticProps = async ({ locale }) => {
  const client = apolloClient(locale, true)
  const staticClient = apolloClient(locale)

  const conf = client.query({ query: StoreConfigDocument })

  // todo(paales): Remove when https://github.com/Urigo/graphql-mesh/issues/1257 is resolved
  const categoryUid = String((await conf).data.storeConfig?.root_category_uid ?? '')
  const productList = staticClient.query({
    query: ProductListDocument,
    variables: { categoryUid, pageSize: 8, filters: { category_uid: { eq: 'MTAy' } } },
  })

  return {
    props: {
      ...(await productList).data,
      up: { href: '/', title: 'Home' },
      apolloState: await conf.then(() => client.cache.extract()),
    },
  }
}
