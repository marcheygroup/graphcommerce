import { useQuery } from '@apollo/client'
import { Container } from '@material-ui/core'
import { PageOptions } from '@reachdigital/framer-next-pages'
import { ApolloCustomerErrorFullPage, CustomerDocument } from '@reachdigital/magento-customer'
import {
  ProductReviewProductNameDocument,
  CreateProductReviewForm,
} from '@reachdigital/magento-review'
import { PageMeta, StoreConfigDocument } from '@reachdigital/magento-store'
import {
  FullPageMessage,
  responsiveVal,
  SvgImage,
  iconBox,
  Title,
  SheetShellHeader,
  AppShellTitle,
} from '@reachdigital/next-ui'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import SheetShell, { SheetShellProps } from '../../../components/AppShell/SheetShell'
import apolloClient from '../../../lib/apolloClient'

type GetPageStaticProps = GetStaticProps<SheetShellProps>

function AccountReviewsAddPage() {
  const router = useRouter()
  const { data: customerData, loading: customerLoading, error } = useQuery(CustomerDocument)
  const { sku } = router.query
  const { data: productData, loading: productLoading } = useQuery(
    ProductReviewProductNameDocument,
    {
      variables: {
        sku: sku as string,
      },
    },
  )
  const { data: storeConfigData, loading: loadingStoreConfig } = useQuery(StoreConfigDocument)

  const storeConfig = storeConfigData?.storeConfig
  const customer = customerData?.customer
  const product = productData?.products?.items?.[0]

  if (
    !storeConfig?.product_reviews_enabled ||
    productLoading ||
    loadingStoreConfig ||
    customerLoading
  )
    return <div />

  if (error && !customer && !storeConfig.allow_guests_to_write_product_reviews)
    return (
      <ApolloCustomerErrorFullPage
        error={error}
        signInHref='/account/signin'
        signUpHref='/account/signin'
      />
    )

  if (!product) {
    return (
      <FullPageMessage
        title='Product could not be found'
        description='Try a different product'
        icon={<SvgImage src={iconBox} size={148} alt='box' />}
      />
    )
  }

  return (
    <>
      <PageMeta
        title='Add review'
        metaDescription={`You are reviewing ${product?.name}`}
        metaRobots={['noindex']}
      />

      <SheetShellHeader>
        <Title size='small'>You are reviewing {product?.name}</Title>
      </SheetShellHeader>

      <AppShellTitle>You are reviewing {product?.name}</AppShellTitle>

      <Container maxWidth='md'>
        <CreateProductReviewForm
          sku={(sku as string) ?? ''}
          nickname={customer ? `${customer?.firstname} ${customer?.lastname}` : undefined}
        />
      </Container>
    </>
  )
}

const pageOptions: PageOptions<SheetShellProps> = {
  overlayGroup: 'left',
  SharedComponent: SheetShell,
  sharedProps: { variant: 'left', size: responsiveVal(320, 800) },
}
AccountReviewsAddPage.pageOptions = pageOptions

export default AccountReviewsAddPage

export const getStaticProps: GetPageStaticProps = async ({ locale }) => {
  const client = apolloClient(locale, true)
  const conf = client.query({ query: StoreConfigDocument })

  return {
    props: {
      apolloState: await conf.then(() => client.cache.extract()),
      variant: 'bottom',
      size: 'max',
      backFallbackHref: '/account',
      backFallbackTitle: 'Account',
    },
  }
}
