import logo from '../../../assets/icons/logo.png'
import stelara from '../../../assets/icons/stelara.gif'
import { Li, Nav, ContainerHeader, ImgLogo, ImgGif } from './styled'

import React from 'react'


function HeaderProdutos() {
    

    return (
      <ContainerHeader>
             <Nav>
                <Li><ImgLogo src={logo} alt="Nave espacial" /></Li>
                <Li><ImgGif alt="Stelara" src={stelara}  /></Li> 
             </Nav>    
      </ContainerHeader>
    )
}

export default HeaderProdutos;