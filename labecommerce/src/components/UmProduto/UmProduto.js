import React from 'react'
import { CardContainer, FotoProduto, Infos } from './styled'
  

const UmProduto = (props) => {
    return(
    <CardContainer>
        <FotoProduto src={props.foto} alt={props.nome}/>
        <Infos>
          <h1> {props.nome} </h1>
          <p> {props.descricao} </p>
          <h2>{props.preco}</h2>
        </Infos>
        <button 
          onClick={props.adicionarItem}
          nome={"Carrinho"}
          >Adicionar ao Carrinho</button>
    </CardContainer>
    )
}
export default UmProduto;