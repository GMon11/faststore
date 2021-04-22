import { getOrderformId } from './controller/orderForm'
import type { UpdateItemsMutationMutationVariables } from './controller/__generated__/UpdateItemsMutation.graphql'
import type { OrderFormFragment_OrderFormFragment } from './controller/__generated__/OrderFormFragment_orderForm.graphql'

const getOrderFormController = () => import('./controller')

const mutationUpdateQuantity = async ({
  orderItems: items,
  allowedOutdatedData,
}: {
  orderItems: UpdateItemsMutationMutationVariables['items']
  allowedOutdatedData?: UpdateItemsMutationMutationVariables['allowedOutdatedData']
}) => {
  const id = getOrderformId()

  const orderFormController = await getOrderFormController()

  return orderFormController
    .updateItems({
      items,
      orderFormId: id,
      splitItem: null,
      allowedOutdatedData,
    })
    .then((orderForm: OrderFormFragment_OrderFormFragment) => ({
      data: orderForm,
    }))
}

export const useMutateUpdateQuantity = () => {
  return mutationUpdateQuantity
}
