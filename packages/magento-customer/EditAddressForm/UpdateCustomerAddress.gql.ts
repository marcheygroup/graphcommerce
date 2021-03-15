// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const UpdateCustomerAddressDocument: DocumentNode<
  UpdateCustomerAddressMutation,
  UpdateCustomerAddressMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateCustomerAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'prefix' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'firstname' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'middlename' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'lastname' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'suffix' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'telephone' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'street' } },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'postcode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'region' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerAddressRegionInput' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'company' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countryCode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'CountryCodeEnum' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'vatId' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'defaultBilling' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'defaultShipping' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateCustomerAddress' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'prefix' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'prefix' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'firstname' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'firstname' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'middlename' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'middlename' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'lastname' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'lastname' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'telephone' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'telephone' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'suffix' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'suffix' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'street' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'street' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'city' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'postcode' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'postcode' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'region' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'region' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'company' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'company' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'country_code' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'countryCode' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'vat_id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'vatId' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'default_billing' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'defaultBilling' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'default_shipping' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'defaultShipping' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
}
export type UpdateCustomerAddressMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']
  prefix?: Types.Maybe<Types.Scalars['String']>
  firstname?: Types.Maybe<Types.Scalars['String']>
  middlename?: Types.Maybe<Types.Scalars['String']>
  lastname?: Types.Maybe<Types.Scalars['String']>
  suffix?: Types.Maybe<Types.Scalars['String']>
  telephone?: Types.Maybe<Types.Scalars['String']>
  street?: Types.Maybe<Array<Types.Scalars['String']> | Types.Scalars['String']>
  city?: Types.Maybe<Types.Scalars['String']>
  postcode?: Types.Maybe<Types.Scalars['String']>
  region?: Types.Maybe<Types.CustomerAddressRegionInput>
  company?: Types.Maybe<Types.Scalars['String']>
  countryCode?: Types.Maybe<Types.CountryCodeEnum>
  vatId?: Types.Maybe<Types.Scalars['String']>
  defaultBilling?: Types.Maybe<Types.Scalars['Boolean']>
  defaultShipping?: Types.Maybe<Types.Scalars['Boolean']>
}>

export type UpdateCustomerAddressMutation = {
  updateCustomerAddress?: Types.Maybe<Pick<Types.CustomerAddress, 'id'>>
}
