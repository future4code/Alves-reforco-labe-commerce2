import React from 'react'
import CardProduto from '../../components/CardProduto/CardProduto'
import Header from '../../components/Header/Header'
import Filtro from '../../components/Filtro/Filtro'
import Footer from '../../components/Footer/Footer'



const Produto = () => {
    const [produtos, setProdutos] = useState([{
      id: 1,
      name: ,
      descricao: ,
      value: ,
      fotoProduto: 
    },
    {
      id: 2,
      name: 
      descricao: ,
      value: ,
      fotoProduto: 
    },
    {
      id: 3,
      name: ,
      descricao: ,
      value: ,
      fotoProduto: 
    },
    {
      id: 4,
      name: 5,
      descricao: ,
      value: ,
      fotoProduto: 
    },
    {
      id: 6,
      name: ,
      descricao: descricao,
      value: valor,
      fotoProduto: fotoProduto
    }], 
    inputNome: "",
    valorMinimo: "",
    valorMaximo: "",
    itensNoCarrinho: [],
    )
    
  
     
    
    
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