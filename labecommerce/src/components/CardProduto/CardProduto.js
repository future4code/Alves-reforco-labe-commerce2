import React from 'react'
import { CardContainer, FotoProduto, Infos, Botao  } from './styles'


const CardProduto = (props) => {
  
  return (
    <CardContainer>
        <FotoProduto src={props.fotoProduto} alt={props.nomeProduto}/>
        <Infos>
          <h3> {props.nomeProduto} </h3>
          <p> {props.descricao} </p>
          <h5> {props.preco} </h5>
        </Infos>
        <Botao
          onclick={() => {}}
          name={"Carrinho"}
        >Adicionar ao Carrinho<span role="img" aria-label="cart">🛒</span></Botao>
    </CardContainer>
  )
}

export default CardProduto