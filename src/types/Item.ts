import { ImageProps } from "./Image"
import { ModifierProps } from "./Modifier"

export type ItemProps = {
  alcoholic?: number,
  availabilityType: string,
  available: boolean,
  description?: string,
  id: number,
  modifiers?: ModifierProps[]
  images?: ImageProps[],
  name: string,
  position: number,
  price: number,
  quantidade: number,
  sku: string,
  visible?: number
}