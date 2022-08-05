import React from 'react'
import Itens from '../../components/Itens/Itens'
import { ConjuntoDoCarrinho } from './styled'

const CarrinhoPage = (props) => {
    const itensDoCarrinho = props.itensCarrinho && props.itensCarrinho.map((item) => {
      return (
        <Itens
          key={item.div}  
          quantidade={item.quantidade}
          nome={item.nome}
          onClick={() => props.removerItemCarrinho(item)}
        />
      )
    });

  return (
  <></>
  )
}

export default CarrinhoPage

/* Não to conseguindo colocar o Carrinho pra renderizar somente na pag2, as duas paginas estao renderizando tudo.*/
/*
<ConjuntoDoCarrinho
carrinho={props.itensCarrinho}
valorTotal={props.valorTotal}
onClick={props.removerItemCarrinho}
>
    <h2>Carrinho:</h2>
    <div> {itensDoCarrinho} </div>
    <p>Valor total: R$ {props.valorTotal},00 </p>   
</ConjuntoDoCarrinho>
*/

