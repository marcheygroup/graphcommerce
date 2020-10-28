// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

import { ProductImageFragment, ProductImageFragmentDoc } from './ProductImage.gql'
import { ProductVideoFragment, ProductVideoFragmentDoc } from './ProductVideo.gql'

export const ProductPageGalleryFragmentDoc: DocumentNode<ProductPageGalleryFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductPageGallery' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductInterface' } },
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'sku' }, arguments: [], directives: [] },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media_gallery' },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: '__typename' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'label' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'position' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'disabled' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProductImage' },
                  directives: [],
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProductVideo' },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...ProductImageFragmentDoc.definitions,
    ...ProductVideoFragmentDoc.definitions,
  ],
}
export type ProductPageGallery_VirtualProduct_Fragment = Pick<Types.VirtualProduct, 'sku'> & {
  media_gallery?: Types.Maybe<
    Array<
      Types.Maybe<
        | ({ __typename: 'ProductImage' } & Pick<
            Types.ProductImage,
            'label' | 'position' | 'disabled'
          > &
            ProductImageFragment)
        | ({ __typename: 'ProductVideo' } & Pick<
            Types.ProductVideo,
            'label' | 'position' | 'disabled'
          > &
            ProductVideoFragment)
      >
    >
  >
}

export type ProductPageGallery_SimpleProduct_Fragment = Pick<Types.SimpleProduct, 'sku'> & {
  media_gallery?: Types.Maybe<
    Array<
      Types.Maybe<
        | ({ __typename: 'ProductImage' } & Pick<
            Types.ProductImage,
            'label' | 'position' | 'disabled'
          > &
            ProductImageFragment)
        | ({ __typename: 'ProductVideo' } & Pick<
            Types.ProductVideo,
            'label' | 'position' | 'disabled'
          > &
            ProductVideoFragment)
      >
    >
  >
}

export type ProductPageGallery_DownloadableProduct_Fragment = Pick<
  Types.DownloadableProduct,
  'sku'
> & {
  media_gallery?: Types.Maybe<
    Array<
      Types.Maybe<
        | ({ __typename: 'ProductImage' } & Pick<
            Types.ProductImage,
            'label' | 'position' | 'disabled'
          > &
            ProductImageFragment)
        | ({ __typename: 'ProductVideo' } & Pick<
            Types.ProductVideo,
            'label' | 'position' | 'disabled'
          > &
            ProductVideoFragment)
      >
    >
  >
}

export type ProductPageGallery_BundleProduct_Fragment = Pick<Types.BundleProduct, 'sku'> & {
  media_gallery?: Types.Maybe<
    Array<
      Types.Maybe<
        | ({ __typename: 'ProductImage' } & Pick<
            Types.ProductImage,
            'label' | 'position' | 'disabled'
          > &
            ProductImageFragment)
        | ({ __typename: 'ProductVideo' } & Pick<
            Types.ProductVideo,
            'label' | 'position' | 'disabled'
          > &
            ProductVideoFragment)
      >
    >
  >
}

export type ProductPageGallery_GroupedProduct_Fragment = Pick<Types.GroupedProduct, 'sku'> & {
  media_gallery?: Types.Maybe<
    Array<
      Types.Maybe<
        | ({ __typename: 'ProductImage' } & Pick<
            Types.ProductImage,
            'label' | 'position' | 'disabled'
          > &
            ProductImageFragment)
        | ({ __typename: 'ProductVideo' } & Pick<
            Types.ProductVideo,
            'label' | 'position' | 'disabled'
          > &
            ProductVideoFragment)
      >
    >
  >
}

export type ProductPageGallery_ConfigurableProduct_Fragment = Pick<
  Types.ConfigurableProduct,
  'sku'
> & {
  media_gallery?: Types.Maybe<
    Array<
      Types.Maybe<
        | ({ __typename: 'ProductImage' } & Pick<
            Types.ProductImage,
            'label' | 'position' | 'disabled'
          > &
            ProductImageFragment)
        | ({ __typename: 'ProductVideo' } & Pick<
            Types.ProductVideo,
            'label' | 'position' | 'disabled'
          > &
            ProductVideoFragment)
      >
    >
  >
}

export type ProductPageGalleryFragment =
  | ProductPageGallery_VirtualProduct_Fragment
  | ProductPageGallery_SimpleProduct_Fragment
  | ProductPageGallery_DownloadableProduct_Fragment
  | ProductPageGallery_BundleProduct_Fragment
  | ProductPageGallery_GroupedProduct_Fragment
  | ProductPageGallery_ConfigurableProduct_Fragment
