// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const CreateCustomerAddressDocument: DocumentNode<
  CreateCustomerAddressMutation,
  CreateCustomerAddressMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCustomerAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'prefix' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'firstname' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'middlename' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'lastname' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'suffix' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'telephone' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'street' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'postcode' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'region' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CustomerAddressRegionInput' },
            },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'company' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'countryCode' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CountryCodeEnum' } },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'vatId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'defaultBilling' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          },
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'defaultShipping' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCustomerAddress' },
            arguments: [
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
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'id' },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
}
export type CreateCustomerAddressMutationVariables = Types.Exact<{
  prefix?: Types.Maybe<Types.Scalars['String']>
  firstname: Types.Scalars['String']
  middlename?: Types.Maybe<Types.Scalars['String']>
  lastname: Types.Scalars['String']
  suffix?: Types.Maybe<Types.Scalars['String']>
  telephone?: Types.Maybe<Types.Scalars['String']>
  street: Array<Types.Scalars['String']>
  city: Types.Scalars['String']
  postcode: Types.Scalars['String']
  region: Types.CustomerAddressRegionInput
  company: Types.Scalars['String']
  countryCode: Types.CountryCodeEnum
  vatId: Types.Scalars['String']
  defaultBilling: Types.Scalars['Boolean']
  defaultShipping: Types.Scalars['Boolean']
}>

export type CreateCustomerAddressMutation = {
  createCustomerAddress?: Types.Maybe<Pick<Types.CustomerAddress, 'id'>>
}
