import React from 'react'
import { goToCarrinho, goToProdutos } from '../../routes/Coordinator'
import Logo from '../assets/img/logo.png'
import Carrinho from '../assets/img/carrinho.png'
import Stelara from '../assets/stelara.gif'


const Header = () => {
  return (
    <Menu>
      <Container>
        <Nav>
          <Logo src={Logo} onClick={goToProdutos} />
        </Nav>  
        <Nav>
          <ImgTexto src={Stelara} />
        </Nav>  
        <Nav>
          <ImgCarrinho src={Carrinho} alt={goToCarrinho} />
        </Nav>
      </Container>
    </Menu>
  )
}

export default Header