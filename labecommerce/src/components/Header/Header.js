import React from 'react'
import { goToCarrinho, goToProdutos } from '../../routes/Coordinator'

const Header = () => {
  return (
    <div>
      <span onClick={goToProdutos}>Astro Commerce</span>
      <button onClick={goToCarrinho}>Carrinho</button>

    </div>
  )
}

export default Header