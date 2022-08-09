import logo from '../../assets/icons/logo.png'
import stelara from '../../assets/icons/stelara.gif'
import carrinho from '../../assets/icons/carrinho.png'
import { Li, Nav, ContainerHeader, ImgLogo, ImgGif, ImgCarrinho } from './styled'
import React from 'react'


function Header() {
 

    return (
      <ContainerHeader>
             <Nav>
                <Li><ImgLogo src={logo} alt="Nave espacial" /></Li>
                <Li><ImgGif alt="Stelara" src={stelara}  /></Li> 
                <Li><ImgCarrinho alt="Carrinho" src={carrinho}  /></Li> 
             </Nav>
      </ContainerHeader>
    )
}

export default Header