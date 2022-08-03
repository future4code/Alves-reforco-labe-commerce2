import React from 'react'
import CardProduto from './CardProduto'
import Header from '../Header/Header'
import Filtro from '../Filtro/Filtro'
import { useNavigate } from 'react-router-dom'
import * as P from './styled'



const Produto = () => {
    const navigate = useNavigate()
    
const Carrinho = () => {
        navigate("/carrinho")      }
  return (
    <P.Body>
        <Header/>
        <P.ContBody>
        <P.ContCard>
        <CardProduto/>
        </P.ContCard>
        <P.ContFiltro>
        <Filtro/>
        </P.ContFiltro>
        </P.ContBody>
    </P.Body>
  )
}

export default Produto