import { useQuery } from '@apollo/client'
import { TextField, makeStyles, Theme } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import Button from '@reachdigital/next-ui/Button'
import useFormGqlMutation from '@reachdigital/next-ui/Form/useFormGqlMutation'
import React, { PropsWithChildren } from 'react'
import { CustomerTokenDocument } from './CustomerToken.gql'
import { SignInDocument, SignInMutationVariables } from './SignIn.gql'
import onCompleteSignInUp from './onCompleteSignInUp'

const useStyles = makeStyles(
  (theme: Theme) => ({
    form: {
      display: 'grid',
      alignItems: 'center',
      gridRowGap: theme.spacings.sm,
      gridColumnGap: theme.spacings.xs,
    },
  }),
  { name: 'SignIn' },
)

type InlineSignInFormProps = Omit<SignInMutationVariables, 'password'>

export default function SignInFormInline({ email }: PropsWithChildren<InlineSignInFormProps>) {
  const classes = useStyles()
  const { data } = useQuery(CustomerTokenDocument)
  const form = useFormGqlMutation(SignInDocument, {
    defaultValues: { email },
    onComplete: onCompleteSignInUp,
  })
  const { register, errors, handleSubmit, required, formState } = form
  const submitHandler = handleSubmit(() => {})

  const validToken = Boolean(data?.customerToken && data?.customerToken.valid)

  if (validToken) return <Alert severity='info'>Already logged in</Alert>

  return (
    <form onSubmit={submitHandler} noValidate className={classes.form}>
      <TextField
        variant='outlined'
        type='password'
        error={!!errors.password || !!errors.submission?.message}
        id='password'
        name='password'
        label='Password'
        required={required.password}
        inputRef={register({ required: required.password })}
        helperText={errors.password?.message || errors.submission?.message}
        disabled={formState.isSubmitting}
        InputProps={{
          endAdornment: (
            <Button
              type='submit'
              disabled={formState.isSubmitting}
              color='secondary'
              variant='pill'
              // size='small'
              style={{ whiteSpace: 'nowrap' }}
            >
              Log In
            </Button>
          ),
        }}
      />
    </form>
  )
}
