import React from 'react'
import { goToProdutos } from '../../routes/Coordinator'

const Carrinho = () => {
    
  return (
    <div>
        <h2>Carrinho</h2>
        <button onClick={goToProdutos}>Produto</button>    
    </div>
  )
}

export default Carrinho