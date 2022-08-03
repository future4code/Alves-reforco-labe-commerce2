import React from 'react'
import CardProduto from './CardProduto'
import Header from '../Header/Header'
import Filtro from '../Filtro/Filtro'
import { useNavigate } from 'react-router-dom'
import Filtro from '../Filtro/Filtro'

const Produto = () => {
    const navigate = useNavigate()
    
const Carrinho = () => {
        navigate("/carrinho")      }
  return (
    <div>
        <Header/>
        <h2>Produto</h2>
        <button onClick={Carrinho}>Carrinho</button>
        <Filtro/>
        <CardProduto/>
    </div>
  )
}

export default Produto