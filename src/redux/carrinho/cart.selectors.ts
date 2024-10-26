import { RootState } from "../root-reducer"

export const selectQuantityProducts = (rootReducer: RootState) => {
  return rootReducer.carrinhoReducer.produtos.reduce((acc, curr) => acc + curr.valorQuantidade ,0)
}

export const selectTotalValueProducts = (rootReducer: RootState) => {
  return rootReducer.carrinhoReducer.produtos.reduce((acc, curr) => acc + (curr.valorQuantidade * curr.payload.price) ,0)
}