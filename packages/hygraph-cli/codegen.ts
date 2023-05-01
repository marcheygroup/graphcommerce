import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://management.hygraph.com/graphql',
  // documents: ['src/**/*.tsx'],
  generates: {
    'packages/hygraph-cli/src/generated/types.ts': {
      plugins: ['typescript-apollo-client-helpers', 'add'],
      config: {
        enumsAsTypes: true,
        content: '/* eslint-disable */',
      },
    },
    'packages/hygraph-cli/src/graphql/*.graphql': {
      plugins: [
        '@graphcommerce/graphql-codegen-relay-optimizer-plugin',
        'typed-document-node',
        'typescript-operations',
        'add',
      ],
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      preset: '@graphcommerce/graphql-codegen-near-operation-file',
      presetConfig: {
        extension: '.gql.ts',
        baseTypesPath: '~@graphcommerce/graphql-mesh/.mesh',
        injectables: true,
      },
      config: {
        skipTypename: true,
        namingConvention: 'keep',
        dedupeOperationSuffix: true,
        arrayInputCoercion: false,
        content: '/* eslint-disable */',
      },
    },
  },
}

export default config
