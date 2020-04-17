import React from 'react'
import { CssBaseline } from '@material-ui/core'
import Head from 'next/head'
import Error from 'next/error'
import PageMeta from '../PageMeta'
import ThemedProvider, { theme } from '../Theme'
import { LayoutPage } from '../../lib/layout'
import Header from '../Header'
import PageLoadIndicator from '../PageLoadIndicator'

export type PageWithLayoutFull<T = {}> = LayoutPage<
  GQLGetPageLayoutQuery & T,
  GQLGetPageLayoutQuery
>

const LayoutFull: PageWithLayoutFull['layout'] = ({ children, pages, mainMenu, team }) => {
  if (!pages)
    return <Error statusCode={404} title='No page loaded, please provide getStaticProps' />
  if (!pages.length || !pages[0]) return <Error statusCode={404} title='Page not found' />
  if (!mainMenu) return <Error statusCode={404} title='Main menu not loaded' />
  const page = pages[0]

  return (
    <ThemedProvider>
      <Head>
        <meta name='theme-color' content={theme.palette.primary.main} />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <CssBaseline />
      <PageMeta {...page} />
      <PageLoadIndicator />
      <Header menu={mainMenu} page={page} team={team} />
      {children}
      <script src='https://polyfill.io/v3/polyfill.min.js?features=ResizeObserver' />
    </ThemedProvider>
  )
}

export default LayoutFull
