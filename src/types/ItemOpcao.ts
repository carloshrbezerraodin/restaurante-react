import { ItemProps } from "./Item"
import { ItemModifierProps } from "./Modifier"

export type ItemOpcaoProps = {
  id: number,
  item: ItemProps,
  opcaoItem: ItemModifierProps | undefined,
  price: number,
  valorQuantidade?: number
}