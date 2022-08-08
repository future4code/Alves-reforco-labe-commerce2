import React from 'react'
import { ConjuntoDeProdutosCarrinho } from './styled'
  

const ProdutosCarrinho = (props) => {
    return(
    <ConjuntoDeProdutosCarrinho>
        <p>{props.quantidade}</p>
        <p>{props.nome}</p>
        <p>{props.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <button onClick={props.removerItem}><span role="img" aria-label="trash">🗑️</span></button>
    </ConjuntoDeProdutosCarrinho>
    )
}
export default ProdutosCarrinho;