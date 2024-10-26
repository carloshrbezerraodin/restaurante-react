import { useSelector } from "react-redux";
import { selectQuantityProducts, selectTotalValueProducts } from "../../redux/carrinho/cart.selectors";
import { RootState } from "../../redux/root-reducer";
import { ItemProps } from "../../types/Item";
import { ItemOpcaoProps } from "../../types/ItemOpcao";
import { conversorMoeda } from "../../utils/conversorModeda";
import { ItemCarrinho } from "../ItemCarrinho";
import * as Style from "./styles";

type ProdutosProps = {
  payload: ItemProps | ItemOpcaoProps,
  valorAtualizado: number,
  valorQuantidade: number,
  itemOpcao?: boolean,
  id: number
}

type CarrinhoProps = {
  produtos: ProdutosProps[]
}

const Carrinho = () => {
  const { produtos }:CarrinhoProps = useSelector((state: RootState) => state.carrinhoReducer); 

  const quantidadeProdutos = useSelector(selectQuantityProducts);
  const quantidadeTotal = useSelector(selectTotalValueProducts);

  return (
    <div>
      <h1>Carrinho ({quantidadeProdutos})</h1>
      <div>
      { produtos.map(item => {
          if(item.itemOpcao) {
            const itemOpcao = item.payload as ItemOpcaoProps;
            return (
              <ItemCarrinho
                  key={itemOpcao!.opcaoItem!.id}
                  nome={itemOpcao.item.name}
                  preco={itemOpcao!.opcaoItem!.price}
                  quantidade={item.valorQuantidade}
                  valorTotal={itemOpcao.opcaoItem!.price}
                  id={itemOpcao.opcaoItem!.id}
                  descricao={itemOpcao.opcaoItem!.name}
                />
            )
          } 
          else {
            const itemProps = item.payload as ItemProps;
            return (
              <ItemCarrinho 
                key={itemProps.id}
                nome={itemProps.name}
                preco={itemProps.price}
                quantidade={item.valorQuantidade}
                valorTotal={itemProps.price}
                id={itemProps.id}
              />
            )
          }
          } 
      )}
      </div>
      {produtos.length === 0 && <Style.ContainerMensagem>Seu carrinho está vazio</Style.ContainerMensagem>}
      <h2>Total: {conversorMoeda(quantidadeTotal)}</h2>
    </div>
  )
}

export default Carrinho;