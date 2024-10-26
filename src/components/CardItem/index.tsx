import { useState } from "react";
import { ItemProps } from "../../types/Item";
import { conversorMoeda } from "../../utils/conversorModeda";
import { Modal } from "../Modal";
import * as Style from "./styles";

interface ICardItemProps {
  item: ItemProps
}

export const CardItem = ({ item }: ICardItemProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClickModal = () => {
    setModalIsOpen(!modalIsOpen)
  }
  
  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <>
    <Modal 
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      item={item}
    />
    <Style.Container onClick={handleClickModal}>
      <div className="containerInfos">
        <h1 className="titulo">{item.name}</h1>
        <p className="descricao">{item.description}</p>
        <p className="preco">{conversorMoeda(item.price)}</p>
      </div>
      { item?.images?.map(imagem => <img key={imagem.id} alt="Imagem da comida" src={imagem.image} className="imagem"/>) }
    </Style.Container>
    </>
  )
}