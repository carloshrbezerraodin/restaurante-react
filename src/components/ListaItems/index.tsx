import { SectionProps } from "../../types/Section";
import { SecaoItems } from "../SecaoItems";
import * as Styles from "./styles";

interface IListaItemProps {
  secao: SectionProps[] | undefined,
}

export const ListaItems = ({ secao }: IListaItemProps) => { 
  return (
    <Styles.Container>
      {secao?.map(item => (
        <SecaoItems items={item.items} titulo={item.name} key={item.id} imagem={item.images}/>
      ))}
    </Styles.Container>
  )
}