import { Fab } from '@material-ui/core'
import Icon from '@material-ui/icons/Close'
import ApolloErrorAlert from '@reachdigital/next-ui/Form/ApolloErrorAlert'
import useFormGqlMutation from '@reachdigital/react-hook-form/useFormGqlMutation'
import React from 'react'
import {
  RemoveItemFromCartMutationVariables,
  RemoveItemFromCartDocument,
} from './RemoveItemFromCart.gql'

type RemoveItemFromCartProps = RemoveItemFromCartMutationVariables &
  Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'>

export default function RemoveItemFromCartFab(props: RemoveItemFromCartProps) {
  const { cartId, cartItemId, ...formProps } = props
  const form = useFormGqlMutation(RemoveItemFromCartDocument, {
    defaultValues: { cartId, cartItemId },
  })
  const { handleSubmit, formState, error } = form
  const submitHandler = handleSubmit(() => {})

  return (
    <form noValidate onSubmit={submitHandler} {...formProps}>
      <Fab aria-label='Remove Product' size='small' type='submit' disabled={formState.isSubmitting}>
        <Icon fontSize='small' />
      </Fab>
      <ApolloErrorAlert error={error} />
    </form>
  )
}
