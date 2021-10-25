import { NextComponentType, NextPageContext } from 'next'
import { NextRouter } from 'next/router'
import React from 'react'
import { RouterProxy } from './context/pageRouterContext'

/**
 * Default (no overlay):
 *
 * ```tsx
 * const default: PageOptions = {
 *   overlayGroup: undefined,
 *   sharedKey: ({ router }) => router.pathname,
 * } as PageOptions
 * ```
 *
 * Overlay:
 *
 * ```tsx
 * const overlay: PageOptions = {
 *   overlayGroup: 'bottom',
 *   sharedKey: ({ router }) => router.asPath,
 * }
 * ```
 *
 * Shared overlay between routes:
 *
 * ```tsx
 * const overlay: PageOptions = {
 *   overlayGroup: 'bottom',
 *   sharedKey: ({ router }) => 'account',
 * }
 * ```
 *
 * SharedComponent between routes:
 *
 * ```tsx
 * function MySharedComponent({children}: {children:React.ReactNode}) {
 *    return <div>I'm shared {children}</div>
 * }
 *
 * const overlay: PageOptions = {
 *   sharedKey: ({ router }) => 'account',
 *   SharedComponent: MySharedComponent
 * }
 * ```
 */
export type PageOptions<T extends Record<string, unknown> = Record<string, unknown>> = {
  /**
   * Is the page an overlay? Provide a string to which 'group' they belong
   *
   * You probably want to provide as few different keys as possible.
   *
   * Default:
   *
   * ```tsx
   * const overlay: PageOptions = {
   *   overlay: undefined,
   * }
   * ```
   *
   * Stack overlays for the `bottom` area:
   *
   * ```tsx
   * const overlay: PageOptions = {
   *   overlay: 'bottom',
   * }
   * ```
   */
  overlayGroup?: string

  /**
   * FramerNextPages uses Framer Motion's <AnimatePresence/> to animate pages in and out. From the
   * [docs](https://www.framer.com/api/motion/animate-presence/#usage):
   *
   * *In React, changing a component's key makes React treat it as an entirely new component. So the
   * old one is unmounted before the new one is mounted. So by changing the key of a single child of
   * AnimatePresence, we can easily make animated page transitions! 🎉*
   *
   * To create transitions we need to let React know if we should create a new component. We do this
   * by specifying a 'sharedKey'. By default this key is the same as the pathname:
   *
   * Default:
   *
   * ```tsx
   * const overlay: PageOptions = {
   *   sharedKey: ({ pathname }) => pathname, // e.g. becomes: pages/page/[id]
   * }
   * ```
   *
   * Create a separate overlay per URL:
   *
   * ```tsx
   * const overlay: PageOptions = {
   *   sharedKey: ({ asPath }) => asPath, // e.g. becomes: pages/page/123
   * }
   * ```
   *
   * Create a shared overlay for multiple routes:
   *
   * ```tsx
   * const overlay: PageOptions = {
   *   sharedKey: () => 'my-shared-key', // add to multiple pages
   * }
   * ```
   */
  sharedKey?: (router: NextRouter) => string | undefined

  /**
   * Create a SharedLayout to share a wrapping component between multiple routes.
   *
   * In combination with sharedKey it is probably useful to create a SharedLayout
   *
   * To make the `SharedLayout` component work, make sure that those pages have the same `sharedKey`
   */
  SharedComponent?: React.FC<any>
  /** Pass props to the SharedComponent */
  sharedProps?: Partial<Omit<T, 'children'>>

  up?: UpPage
}

export type PageComponent<T = Record<string, unknown>> = NextComponentType<NextPageContext, T> & {
  pageOptions?: PageOptions<Record<string, unknown>>
}

/** Provide the href and title of the page that is above the current page. To navigate 'up' instead of 'back' */
export type UpPage = { href: string; title: string }

/**
 * PageItem used to store information about a page
 *
 * @private
 */
export type PageItem = {
  currentRouter: RouterProxy
  children: React.ReactNode
  historyIdx: number
  sharedKey: string
  sharedPageProps?: Record<string, unknown>
  up?: UpPage
} & Omit<PageOptions<Record<string, unknown>>, 'sharedKey'>
