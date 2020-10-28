import PageMeta from '@reachdigital/magento-store/PageMeta'
import React from 'react'
import { CmsPageMetaFragment } from './CmsPageMeta.gql'

export default function CmsPageMeta(props: CmsPageMetaFragment) {
  const { title, meta_title, meta_description } = props

  return (
    <PageMeta
      title={meta_title ?? title ?? ''}
      metaDescription={meta_description ?? ''}
      metaRobots='INDEX, FOLLOW'
    />
  )
}
