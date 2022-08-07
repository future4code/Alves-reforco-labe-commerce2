import React from 'react'
import Footer from '../../components/Footer/Footer';
import HeaderProdutos from '../../components/Header/HeaderProdutos/HeaderProdutos' 
import Produtos from '../../components/Produtos/Produtos';



const ProdutosPage = () => {

  return (  
      <div className='produtos'>
        <HeaderProdutos />        
        <Produtos />
         
        <Footer />
    </div>

  )
}

export default ProdutosPage;