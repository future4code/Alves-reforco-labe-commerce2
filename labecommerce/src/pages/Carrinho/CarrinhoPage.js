import React from 'react'
import { CarrinhoContainer } from './styled'
import HeaderCarrinho from '../../components/Header/HeaderCarrinho/HeaderCarrinho'
import Footer from '../../components/Footer/Footer'

const CarrinhoPage = (props) => {
    
  return (
    <CarrinhoContainer>
        <HeaderCarrinho />
          CARRINHO
        <Footer />
    </CarrinhoContainer>
  )
}

export default CarrinhoPage



