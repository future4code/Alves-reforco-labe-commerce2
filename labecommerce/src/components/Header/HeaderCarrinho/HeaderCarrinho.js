import voltar from '../../../assets/img/back-button.png'
import logo from '../../../assets/img/logo.png'
import stelara from '../../../assets/img/stelara.gif'
import { Li, Nav, ContainerHeader, ImgLogo, ImgGif, ImgCarrinho } from './styled'

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaProdutos, irParaHome } from '../../../routes/Coordinator'

function HeaderProdutos() {
    const navigate = useNavigate()

    return (
      <ContainerHeader>
             <Nav>
                <Li><ImgLogo src={logo} alt="Nave espacial"  onClick={() => irParaProdutos(navigate)} /></Li>
                <Li><ImgGif alt="Stelara" src={stelara} onClick={() => irParaHome(navigate)} /></Li>
                <Li><ImgCarrinho alt="Voltar" src={voltar} onClick={() => irParaProdutos(navigate)} /></Li> 
             </Nav>    
      </ContainerHeader>
    )
}

export default HeaderProdutos;