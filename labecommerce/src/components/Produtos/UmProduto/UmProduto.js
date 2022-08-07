import React from 'react'
import { CardContainer, FotoProduto, Infos, Botao  } from './styled'

const UmProduto = (props) => {
    return(
    <CardContainer>
        <FotoProduto src={props.produto.foto} alt={props.produto.nome}/>
        <Infos>
          <h3> {props.produto.nome} </h3>
          <p> {props.produto.descricao} </p>
          <h5> R$:{props.produto.preco},00 </h5>
        </Infos>
        <Botao onclick={props.ca}>Adicionar ao Carrinho</Botao>
    </CardContainer>
    )
}
export default UmProduto;