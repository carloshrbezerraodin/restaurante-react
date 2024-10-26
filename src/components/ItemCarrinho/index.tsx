import { useDispatch } from "react-redux";
import { conversorMoeda } from "../../utils/conversorModeda";
import * as Style from "./styles";
import { decreaseProdutoDoCarrinho, increaseProdutoDoCarrinho, removeProdutoDoCarrinho } from "../../redux/carrinho/actions";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoMdClose  } from "react-icons/io";

interface IItemCarrinhoProps {
  nome: string,
  preco: number,
  quantidade: number,
  valorTotal: number,
  id: number,
  descricao?: string,
}

const iconProps = {
  size: 14,
  color: "#FFF"
}

export const ItemCarrinho = ({ nome, quantidade, valorTotal, id, descricao }: IItemCarrinhoProps) => {
  const dispatch = useDispatch();

  const handleClickDeleteItem = () => {
    dispatch(removeProdutoDoCarrinho(id))
  }

  const handleClickIncreaseItem = () => {
    dispatch(increaseProdutoDoCarrinho(id));
  }

  const handleClickDecreaseItem = () => {
    dispatch(decreaseProdutoDoCarrinho(id))
  }


  return (
    <>
      <Style.Container>
        <div className="containerInfos">
          <div className="containerInfos__item">
            <h2 className="nomeItem">{nome}</h2>
            {descricao && <p className="descricaoItem">{descricao}</p>}
          </div>
          <p className="precoItem">{conversorMoeda(valorTotal)}</p>
          
        </div>
        <div className="containerQtd">
          { quantidade <= 1 
          ? <div onClick={handleClickDeleteItem}><IoMdClose {...iconProps}/></div> 
          : <div onClick={handleClickDecreaseItem}><FaMinus {...iconProps}/></div>
          }
          <input type="text" readOnly={true} value={quantidade}/>
          <div onClick={handleClickIncreaseItem}><FaPlus {...iconProps}/></div>
        </div>
      </Style.Container>
    </>
  )
}