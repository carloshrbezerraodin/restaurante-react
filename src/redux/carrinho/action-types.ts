import { PayloadReduxPros } from "../../types/PayloadRedux";

enum CarrinhoActionTypes {
  ADD_PRODUTO = 'carrinho/addProduto',
  REMOVE_PRODUTO = 'carrinho/removeProduto',
  INCREASE_PRODUTO = 'carrinho/incrementarProduto',
  DECREASE_PRODUTO = 'carrinho/decrementarProduto'
}

interface AddProduto {
  type: CarrinhoActionTypes.ADD_PRODUTO;
  payload: PayloadReduxPros
}

interface RemoveProduto {
  type: CarrinhoActionTypes.REMOVE_PRODUTO,
  payload: PayloadReduxPros
}

interface IncreaseProduto {
  type: CarrinhoActionTypes.INCREASE_PRODUTO,
  payload: PayloadReduxPros
}

interface DecreaseProduto {
  type: CarrinhoActionTypes.DECREASE_PRODUTO,
  payload: PayloadReduxPros
}

export type ItemCarrinhoProps = AddProduto | RemoveProduto | IncreaseProduto | DecreaseProduto;

export default CarrinhoActionTypes;