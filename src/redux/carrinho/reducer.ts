import { ItemProps } from "../../types/Item";
import { ItemOpcaoProps } from "../../types/ItemOpcao";
import CarrinhoActionTypes, { ItemCarrinhoProps } from "./action-types";

type ReduxProps = {
  payload: ItemProps | ItemOpcaoProps,
  id: number,
  valorAtualizado: number,
  valorQuantidade: number
}

interface ICarrinhoProps {
  produtos: ReduxProps[] | []
}

const initialState: ICarrinhoProps = {
  produtos: [],
}

const carrinhoReducer = (state = initialState, action: ItemCarrinhoProps) => {
  const produtoEstaNoCarrinho = state.produtos.some(produto => produto.id === action.payload.id);

  switch (action.type) {
    case CarrinhoActionTypes.ADD_PRODUTO:
      if (produtoEstaNoCarrinho){
        return { 
          ...state, 
          produtos: state.produtos.map(
          produto => produto.id === action.payload.id 
            ? { 
                ...produto,
                valorAtualizado: produto.valorAtualizado + action.payload.valorAtualizado,
                valorQuantidade: produto.valorQuantidade + action.payload.valorQuantidade 
            } 
            : produto
          ),
        }
      }
      return {
        ...state,
        produtos: [ ...state.produtos, 
          { ...action.payload, valorQuantidade: action.payload.valorQuantidade }
        ],
      }
    case CarrinhoActionTypes.REMOVE_PRODUTO:
      return {
        ...state,
        produtos: state.produtos.filter(item => item.id !== action.payload.id)
    }

    case CarrinhoActionTypes.INCREASE_PRODUTO:
      return {
        ...state,
        produtos: state.produtos.map(
          produto => produto.id === action.payload.id
          ? { ...produto, valorQuantidade: produto.valorQuantidade + 1 }
          : produto
        )
      }

    case CarrinhoActionTypes.DECREASE_PRODUTO:
      return {
        ...state,
        produtos: state.produtos.map(
          produto => produto.id === action.payload.id
          ? { ...produto, valorQuantidade: produto.valorQuantidade - 1 }
          : produto
        )  
      }

    default:
      return state;
  }
}

export default carrinhoReducer;