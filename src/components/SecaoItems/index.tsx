import { ImageProps } from "../../types/Image";
import { ItemProps } from "../../types/Item";
import { CardItem } from "../CardItem";
import * as Style from "./style";

interface ISecaoItemsProps {
  titulo: string,
  items: ItemProps[],
  imagem: ImageProps[]
}

export const SecaoItems = ({ items, titulo }:ISecaoItemsProps) => {
    return (
    <Style.Container>
      <h2 className="titulo">{titulo}</h2>
      <div className="containerItens">
        { items.map(item => <CardItem item={item} key={item.id}/>) }
      </div>
    </Style.Container>
  )
}