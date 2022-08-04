import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import * as R from './styled'

const Carrinho = () => {
    const navigate = useNavigate()


const Produto = () => {
        navigate("/")      }

  return (
    <R.Body>
      <Header/>
        <h2>Carrinho</h2>
        <button onClick={Produto}>Produto</button>    
    </R.Body>
  )
}

export default Carrinho