import { debounce } from '@material-ui/core'
import useFormGqlMutation from '@reachdigital/next-ui/Form/useFormGqlMutation'
import TextInputNumber from '@reachdigital/next-ui/TextInputNumber'
import React, { useRef } from 'react'
import {
  UpdateItemQuantityMutationVariables,
  UpdateItemQuantityDocument,
} from './UpdateItemQuantity.gql'

export default function UpdateItemQuantity(props: UpdateItemQuantityMutationVariables) {
  const { cartId, cartItemId, quantity } = props
  const form = useFormGqlMutation(UpdateItemQuantityDocument, {
    defaultValues: { cartId, cartItemId, quantity },
    mode: 'onChange',
  })
  const { register, errors, handleSubmit, required, formState } = form

  // @todo TextInputNumber can't handle a callback ref
  const ref = useRef<HTMLInputElement>(null)
  register(ref.current, { required: required.quantity })

  return (
    <form noValidate onChange={debounce(() => handleSubmit(() => {})(), 600)}>
      <TextInputNumber
        size='small'
        variant='outlined'
        inputProps={{ min: 1 }}
        error={!!errors.quantity}
        id={`quantity-${cartItemId}`}
        name='quantity'
        required={required.quantity}
        inputRef={ref}
        helperText={errors.quantity?.message}
        disabled={formState.isSubmitting}
      />
    </form>
  )
}
