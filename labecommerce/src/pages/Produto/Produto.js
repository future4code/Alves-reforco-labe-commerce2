import React from 'react'
import CardProduto from '../../components/CardProduto/CardProduto'
import Header from '../../components/Header/Header'
import Filtro from '../../components/Filtro/Filtro'
import Footer from '../../components/Footer/Footer'



const Produto = () => {
  
  
  return (
    <div>
        <Header/>
        <h1>Produto</h1>
        <Filtro/>
        <CardProduto/>
        <Footer />
    </div>
  )
}

export default Produto