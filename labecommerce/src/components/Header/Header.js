import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './styled'
import logo from './imagens/logo.png'
import stelara from './imagens/stelara.gif'
import carrinho from './imagens/carrinho.png'


const Header = () => {
  const navigate = useNavigate()
  const Produto = () => {
      navigate("/")
    }

    const Carrinho = () => {
      navigate("/carrinho")
    }
  return (
    <div>
      <C.Menu>
        <C.Container>
          
        <C.Nav>
                <C.ImagemLogo src={logo} onClick={Produto}/>
            </C.Nav>
        <C.Nav>
                <C.ImagemTexto src={stelara} onClick={Produto}/>
            </C.Nav>
           
            {/* <C.Nav onClick={Carrinho}>
            <C.TextoBotao> Itens Adicionados
            </C.TextoBotao>
            </C.Nav> */}
            <C.Nav>
                <C.ImagemCarrinho src={carrinho} onClick={Carrinho}/>
            </C.Nav>
            
        </C.Container>
    </C.Menu>
    </div>
  )
}

export default Header