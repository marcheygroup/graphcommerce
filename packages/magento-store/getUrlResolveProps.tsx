import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { PromiseValue } from 'type-fest'
import { ResolveUrlDocument, ResolveUrlQueryVariables } from './ResolveUrl.gql'

export default async function getUrlResolveProps(
  variables: ResolveUrlQueryVariables,
  client: ApolloClient<NormalizedCacheObject>,
) {
  const { data } = await client.query({ query: ResolveUrlDocument, variables })
  if (!data?.urlResolver?.id) throw Error('Page not found')
  return data
}

export type GetUrlResolveProps = PromiseValue<ReturnType<typeof getUrlResolveProps>>
