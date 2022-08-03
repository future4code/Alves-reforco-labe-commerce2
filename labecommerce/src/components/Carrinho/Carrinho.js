import React from 'react'
import { useNavigate } from 'react-router-dom'

const Carrinho = () => {
    const navigate = useNavigate()


const Produto = () => {
        navigate("/")      }

  return (
    <div>
        <h2>Carrinho</h2>
        <button onClick={Produto}>Produto</button>    
    </div>
  )
}

export default Carrinho