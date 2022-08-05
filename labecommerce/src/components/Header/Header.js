import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import carrinho from '../../assets/img/carrinho.png'
import logo from '../../assets/img/logo.png'
import stelara from '../../assets/img/stelara.gif'
import { BotaoIcone, Menu, Container, Logo, ImgTexto, ImgCarrinho } from './styled'

export default  function Header() {
    
    return (
      <Router>
        <Container>
             <Menu>
                <BotaoIcone>
                    <Link to='/'><Logo src={logo} /></Link>
                </BotaoIcone>
                <BotaoIcone>
                    <ImgTexto src={stelara} />
                </BotaoIcone>
                <BotaoIcone>
                    <Link to='/carrinho'><ImgCarrinho src={carrinho} /></Link>
                </BotaoIcone> 
             </Menu>
        </Container>
      </Router>
    )
}