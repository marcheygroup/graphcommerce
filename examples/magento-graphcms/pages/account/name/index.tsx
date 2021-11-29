import { useQuery } from '@apollo/client'
import { PageOptions } from '@graphcommerce/framer-next-pages'
import {
  ApolloCustomerErrorFullPage,
  ChangeNameForm,
  CustomerDocument,
} from '@graphcommerce/magento-customer'
import { PageMeta, StoreConfigDocument } from '@graphcommerce/magento-store'
import {
  AppShellTitle,
  GetStaticProps,
  iconId,
  SectionContainer,
  SheetAppBar,
  Title,
} from '@graphcommerce/next-ui'
import { t, Trans } from '@lingui/macro'
import { Container, NoSsr } from '@material-ui/core'
import React from 'react'
import { LayoutSheet, LayoutSheetProps } from '../../../components/Layout/LayoutSheet'
import apolloClient from '../../../lib/apolloClient'

type GetPageStaticProps = GetStaticProps<LayoutSheetProps>

function AccountNamePage() {
  const { loading, data, error } = useQuery(CustomerDocument)
  const customer = data?.customer

  if (loading) return <div />
  if (error)
    return (
      <ApolloCustomerErrorFullPage
        error={error}
        signInHref='/account/signin'
        signUpHref='/account/signin'
      />
    )

  return (
    <>
      <SheetAppBar>
        <Title size='small' component='span' icon={iconId}>
          <Trans>Name</Trans>
        </Title>
      </SheetAppBar>
      <NoSsr>
        <Container maxWidth='md'>
          <PageMeta
            title={t`Name`}
            metaDescription={t`Update your name`}
            metaRobots={['noindex']}
          />

          <AppShellTitle icon={iconId}>Name</AppShellTitle>

          <SectionContainer labelLeft={t`Name`}>
            {customer && (
              <ChangeNameForm
                prefix={customer.prefix ?? ''}
                firstname={customer.firstname ?? ''}
                lastname={customer.lastname ?? ''}
              />
            )}
          </SectionContainer>
        </Container>
      </NoSsr>
    </>
  )
}

const pageOptions: PageOptions<LayoutSheetProps> = {
  overlayGroup: 'account',
  Layout: LayoutSheet,
}
AccountNamePage.pageOptions = pageOptions

export default AccountNamePage

export const getStaticProps: GetPageStaticProps = async ({ locale }) => {
  const client = apolloClient(locale, true)
  const conf = client.query({ query: StoreConfigDocument })

  return {
    props: {
      apolloState: await conf.then(() => client.cache.extract()),
      variant: 'bottom',
      size: 'max',
      up: { href: '/account', title: 'Account' },
    },
  }
}
