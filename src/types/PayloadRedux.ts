import { ItemProps } from "./Item"

export type PayloadReduxPros = {
  id: number,
  payload: ItemProps,
  valorAtualizado: number,
  valorQuantidade: number,
  itemOpcao: boolean
}