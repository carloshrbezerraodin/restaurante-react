import { ImageProps } from "./Image"
import { ItemProps } from "./Item"

export type SectionProps = {
  description?: null,
  id: number,
  images: ImageProps[],
  items: ItemProps[],
  name: string,
  position: number,
  visible: number
}