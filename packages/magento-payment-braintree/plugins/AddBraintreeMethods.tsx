import {
  PaymentMethodContextProvider as Aliasje,
  PaymentMethodContextProviderProps,
} from '@graphcommerce/magento-cart-payment-method/PaymentMethodContext/PaymentMethodContext'
import type { Plugin } from '@graphcommerce/next-config'
import { braintree } from '../methods/braintree'
import { braintree_local_payment } from '../methods/braintree_local_payments'

export const component = 'PaymentMethodContextProvider'
export const exported =
  '@graphcommerce/magento-cart-payment-method/PaymentMethodContext/PaymentMethodContext'

export const plugin: Plugin<typeof Aliasje, PaymentMethodContextProviderProps> = (Component) =>
  function AddBraintreeMethods(props) {
    const { modules } = props
    return (
      <Component
        {...props}
        modules={{
          ...modules,
          braintree,
          braintree_local_payment,
        }}
      />
    )
  }

export function plugggg(Component: typeof PaymentMethodContextProvider) {
  return (props: PaymentMethodContextProviderProps) => <Component {...props} />
}
