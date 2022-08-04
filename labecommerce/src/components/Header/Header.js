import React from 'react'
import * as C from './styled'
import logo from './imagens/logo.png'
import stelara from './imagens/stelara.gif'
import carrinho from './imagens/carrinho.png'
import { goToCarrinho, goToProdutos } from '../../routes/Coordinator'

const Header = () => {
  

  return (
    <div>
      <C.Menu>
        <C.Container>
          
        <C.Nav>
                <C.ImagemLogo src={logo} onClick={goToProdutos}/>
            </C.Nav>
        <C.Nav>
                <C.ImagemTexto src={stelara} onClick={}/>
            </C.Nav>
           
            {/* <C.Nav onClick={Carrinho}>
            <C.TextoBotao> Itens Adicionados
            </C.TextoBotao>
            </C.Nav> */}
            <C.Nav>
                <C.ImagemCarrinho src={carrinho} onClick={goToCarrinho}/>
            </C.Nav>
            
        </C.Container>
    </C.Menu>
    </div>
  )
}

export default Header