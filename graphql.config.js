/**
 * GraphQL Configuration
 *
 * [GraphQL VSCode
 * exstension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
 */
module.exports = {
  projects: {
    MagentoGraphCms: {
      schema: [
        'examples/magento-graphcms/.mesh/schema.graphql',
        'packagesDev/graphql-codegen-near-operation-file/src/directive/env.graphqls',
        'packagesDev/graphql-codegen-near-operation-file/src/directive/injectable.graphqls',
      ],
      documents: [
        'examples/magento-graphcms/components/**/*.graphql',
        'examples/magento-graphcms/graphql/**/*.graphql',
        'packages/!hygraph-cli/**/*.graphql',
      ],
      extensions: {
        languageService: {
          useSchemaFileDefinitions: true,
        },
        endpoints: {
          default: {
            url: 'http://localhost:3000/api/graphql/',
          },
        },
      },
    },
    HygraphManagementApi: {
      schema: ['https://management.hygraph.com/graphql'],
      documents: ['packages/hygraph-cli/**/*.graphql'],
    },
  },
}
