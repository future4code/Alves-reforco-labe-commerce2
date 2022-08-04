import styled from 'styled-components'

export const Menu = styled.div `
    position:absolute;
    top: 20px;
    left:0;
    right:0;
    display:flex;
    padding:20px;
    background: rgb(33,9,59);
    background: linear-gradient(90deg, rgba(33,9,59,1) 0%, rgba(130,60,241,0.8575805322128851) 99%);
    height:20px;
`

export const Container = styled.ul `
    align-items:center;
    display:flex;
    list-style:none;
`
export const Logo = styled.img `
    width:90px;
    height: 90px;
    position: relative;
    
    :hover,
    button:focus {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
`

export const ImgTexto = styled.img `
    width:200px;
    height: 250px;
    position: relative;
    :hover,
    button:focus {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
`
export const ImgCarrinho = styled.img `
    width:40px;
    height: 40px;
    margin-left: 800px;
    :hover,
    button:focus {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
`


export const Nav = styled.li `
    color: white;
    margin:20px;
    font-weight: bold;
      &:hover {
        cursor:pointer;
    }
`;

/* <C.Nav onClick={Carrinho}>
            <C.TextoBotao> Itens Adicionados
            </C.TextoBotao>
            </C.Nav>  
 */           
// export const TextoBotao = styled.p `
// margin-top: 10px;
// margin-left: 600px;
//     :hover,
// button:focus {
//   color: white;  
//   border-bottom: 3px solid white;
//   -webkit-transform: scale(1.1);
//   transform: scale(1.1);
// }
// `
