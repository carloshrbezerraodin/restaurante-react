export type ItemModifierProps = {
  availabilityType: string,
  available: boolean,
  id: number,
  maxChoices: number,
  name: string,
  position: number,
  price: number,
  qty?: number
  visible: number
  
}

export type ModifierProps = {
  id: number,
  items: ItemModifierProps[],
  maxChoices: number,
  minChoices: number,
  name: string
}