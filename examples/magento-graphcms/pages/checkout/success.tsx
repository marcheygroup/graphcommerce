import { PageOptions } from '@graphcommerce/framer-next-pages'
import { CartItemSummary, CartSummary, InlineAccount } from '@graphcommerce/magento-cart'
import { SignupNewsletter } from '@graphcommerce/magento-newsletter'
import { PageMeta } from '@graphcommerce/magento-store'
import {
  FullPageMessage,
  GetStaticProps,
  iconParty,
  iconSadFace,
  LayoutHeader,
  IconSvg,
  LayoutTitle,
} from '@graphcommerce/next-ui'
import { enhanceStaticProps } from '@graphcommerce/next-ui/server'
import { i18n } from '@lingui/core'
import { Trans } from '@lingui/react'
import { Button, Box, Container } from '@mui/material'
import { useRouter } from 'next/router'
import { LayoutMinimal, LayoutNavigationProps, LayoutMinimalProps } from '../../components'

type Props = Record<string, unknown>
type GetPageStaticProps = GetStaticProps<LayoutNavigationProps, Props>

function OrderSuccessPage() {
  const hasCartId = !!useRouter().query.cart_id

  return (
    <>
      <PageMeta title={i18n._(/* i18n */ 'Checkout summary')} metaRobots={['noindex']} />
      <LayoutHeader floatingMd>
        {hasCartId && (
          <LayoutTitle size='small' icon={iconParty}>
            <Trans id='Thank you for your order!' />
          </LayoutTitle>
        )}
      </LayoutHeader>
      <Container maxWidth='md'>
        {!hasCartId && (
          <FullPageMessage
            title={<Trans id='You have not placed an order' />}
            icon={<IconSvg src={iconSadFace} size='xxl' />}
            button={
              <Button href='/' variant='pill' color='secondary' size='large'>
                <Trans id='Continue shopping' />
              </Button>
            }
          >
            <Trans id='Discover our collection and add items to your cart!' />
          </FullPageMessage>
        )}
        {hasCartId && (
          <>
            <LayoutTitle icon={iconParty}>
              <Trans id='Thank you for your order!' />
            </LayoutTitle>
            <CartSummary />
            <CartItemSummary />

            <SignupNewsletter />

            <InlineAccount accountHref='/account' />

            <Box textAlign='center' m={8}>
              <Button href='/' color='primary' variant='pill' size='large' id='back-to-home'>
                <Trans id='Back to home' />
              </Button>
            </Box>
          </>
        )}
      </Container>
    </>
  )
}

const pageOptions: PageOptions<LayoutMinimalProps> = {
  Layout: LayoutMinimal,
}
OrderSuccessPage.pageOptions = pageOptions

export default OrderSuccessPage

export const getStaticProps: GetPageStaticProps = enhanceStaticProps(async () => ({
  props: {
    ...(await graphqlQuery(LayoutDocument, { fetchPolicy: 'cache-first' })).data,
    up: { href: '/', title: 'Home' },
  },
}))
