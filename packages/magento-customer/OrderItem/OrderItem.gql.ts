// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

import { MoneyFragment, MoneyFragmentDoc } from '../../magento-store/Money.gql'

export const OrderItemFragmentDoc: DocumentNode<OrderItemFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'OrderItem' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderItemInterface' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'product_sku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'product_url_key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'product_name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'selected_options' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity_ordered' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product_sale_price' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Money' } }],
            },
          },
        ],
      },
    },
    ...MoneyFragmentDoc.definitions,
  ],
}
export type OrderItem_DownloadableOrderItem_Fragment = Pick<
  Types.DownloadableOrderItem,
  'id' | 'product_sku' | 'product_url_key' | 'product_name' | 'quantity_ordered'
> & {
  selected_options?: Types.Maybe<Array<Types.Maybe<Pick<Types.OrderItemOption, 'label' | 'value'>>>>
  product_sale_price: MoneyFragment
}

export type OrderItem_BundleOrderItem_Fragment = Pick<
  Types.BundleOrderItem,
  'id' | 'product_sku' | 'product_url_key' | 'product_name' | 'quantity_ordered'
> & {
  selected_options?: Types.Maybe<Array<Types.Maybe<Pick<Types.OrderItemOption, 'label' | 'value'>>>>
  product_sale_price: MoneyFragment
}

export type OrderItem_OrderItem_Fragment = Pick<
  Types.OrderItem,
  'id' | 'product_sku' | 'product_url_key' | 'product_name' | 'quantity_ordered'
> & {
  selected_options?: Types.Maybe<Array<Types.Maybe<Pick<Types.OrderItemOption, 'label' | 'value'>>>>
  product_sale_price: MoneyFragment
}

export type OrderItemFragment =
  | OrderItem_DownloadableOrderItem_Fragment
  | OrderItem_BundleOrderItem_Fragment
  | OrderItem_OrderItem_Fragment
