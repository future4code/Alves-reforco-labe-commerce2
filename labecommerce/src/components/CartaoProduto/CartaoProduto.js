import React from 'react'
import { CardContainer, FotoProduto, Infos, Botao  } from './styled'


const CartaoProduto = (props) => {
  
  return (
    <CardContainer>
        <FotoProduto src={props.foto} alt={props.nome}/>
        <Infos>
          <h3> {props.nome} </h3>
          <p> {props.descricao} </p>
          <h5> {props.valor} </h5>
        </Infos>
        <Botao onclick={props.onclick}>Adicionar ao Carrinho</Botao>
    </CardContainer>
  )
}

export default CartaoProduto