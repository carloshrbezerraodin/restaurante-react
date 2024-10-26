import { useDispatch } from "react-redux";
import { ItemProps } from "../../types/Item";
import * as Style from "./style";
import { addProdutoAoCarrinho } from "../../redux/carrinho/actions";
import { conversorMoeda } from "../../utils/conversorModeda";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose  } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ItemModifierProps } from "../../types/Modifier";


interface IModalProps {
  item: ItemProps
  modalIsOpen: boolean,
  closeModal: () => void
}

export const Modal = ({ item, modalIsOpen, closeModal }: IModalProps) => {
  const [valorQuantidade, setValorQuantidade] = useState(1);
  const [opcaoItemSelecionado, setOpcaoItemSelecionado] = useState<ItemModifierProps>();

  const dispatch = useDispatch();

  const resetNumberQtd = () => {
    setValorQuantidade(1)
  }

  const handleClickAddProduto = () => {
    dispatch(addProdutoAoCarrinho(item, valorQuantidade, valorAtualizado));
    closeModal();
    resetNumberQtd();
  }

  const handleClickOpcaoProduto = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, item: ItemProps, opcaoItem: ItemModifierProps | undefined) => {
    e.preventDefault();

    const id = opcaoItem!.id;
    const preco = opcaoItem!.price;
    const valorAtualizadoOpcao = (opcaoItem!.price * valorQuantidade);
    const itemOpcao = true;

    const itemCarrinho = {
      id,
      item, 
      opcaoItem, 
      price: preco
    };

    dispatch(addProdutoAoCarrinho(itemCarrinho, valorQuantidade, valorAtualizadoOpcao, itemOpcao));

    closeModal();
    resetNumberQtd();
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape'){
      closeModal();
    }
  }, [closeModal])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  if (!modalIsOpen) return <></>

  const opcoes_lanche = item.modifiers ? "true" : "false";

  const valorAtualizado = (item.price * valorQuantidade);

  const valorAtualizadoItemOpcao = (opcaoItemSelecionado?.price === undefined ? 0 : opcaoItemSelecionado?.price * valorQuantidade);

  return (
    <Style.BackgroundModal>
      <Style.ContainerModal>
        <div onClick={closeModal} className="botaoFecharModal">
          <IoMdClose size={28}/>
        </div>
        <img 
          src={item.images?.[0].image||'https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png'}
          alt={`Imagem da comida ${item.name}`}
          className="imagemComida"
        />
        
    
        <div className="containerInfos">
          <div>
            <h1 className="titulo">{item.name}</h1>
            <p className="descricao">{item.description}</p>
          </div>
          
        </div>
        { item.modifiers && (
          <div className="containerEscolha">
            <h2 className="subtitulo">{ item.modifiers[0]!.name }</h2>
            <p className="selecionarOpcao">Select 1 option</p>
            <form>
              { item.modifiers[0]!.items.map(opcao => (
                <div key={opcao.id}>
                  {opcao.available && (
                    <div className="containerOpcao">
                      <div className="containerOpcao__Infos">
                        <label htmlFor={opcao.name}>
                          <p className="containerOpcao__Infos__labelMeat">{opcao.name}</p>
                          <p className="containerOpcao__Infos__labelPrice">{conversorMoeda(opcao.price)}</p>
                        </label>
                        <input 
                          type="radio" 
                          id={opcao.name} 
                          name="opcao"
                          value={opcao.name}
                          className="containerOpcao__input"
                          onClick={() => setOpcaoItemSelecionado(opcao)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button 
                onClick={(e) => handleClickOpcaoProduto(e, item, opcaoItemSelecionado)}
                className="botao_opcaoItem"
                >Add to Order - $ {valorAtualizadoItemOpcao}</button>
            </form>
          </div>)
        }
        <div>
          <Style.ContainerQuantidade valor={valorQuantidade} >
            <div onClick={() => setValorQuantidade(prev => prev - 1)} className="opcaoDecrementar">
              <FaMinus color="#FFF"/>
            </div>
            <input type="text" value={valorQuantidade} readOnly={true}/>
            <div onClick={() => setValorQuantidade(prev => prev + 1)}>
              <FaPlus color="#FFF"/>
            </div>
          </Style.ContainerQuantidade>
          <Style.BotaoPreco 
              onClick={handleClickAddProduto}
              opcoes_lanche={opcoes_lanche}
          >Add to Order - $ {valorAtualizado}</Style.BotaoPreco>
        </div>     
      </Style.ContainerModal>
    </Style.BackgroundModal>
  )
}