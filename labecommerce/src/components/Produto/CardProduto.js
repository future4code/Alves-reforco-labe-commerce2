import React from 'react'
import * as P from './styledCard'
import mar from './imagens/mar.jpg'

const CardProduto = () => {

  

  return (
    <P.Card>
    <P.Img src={mar}/>
    <P.ContPreco>
      <P.Preco>Preço</P.Preco>
      </P.ContPreco>
    <p>Local</p>
    <p>Descrição</p>
    <button>Adicionar</button>
    </P.Card>
  )
}

export default CardProduto