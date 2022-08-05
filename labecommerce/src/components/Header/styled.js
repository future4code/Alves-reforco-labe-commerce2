import styled from 'styled-components'

export const Container = styled.div `
    position: sticky;
    top: 0%;
    width: 100vw;
    height: 14vh;
    display: flex;
    padding: 0.3rem;
    background: rgb(33,9,59);
    background: linear-gradient(90deg, rgba(33,9,59,1) 0%, rgba(130,60,241,0.8575805322128851) 99%);
    
`

export const Menu = styled.ul `
    align-items: center;
    display: flex;
    flex-direction: row;
    list-style: none;
`
export const BotaoIcone = styled.li `
    margin: 0px;
    font-weight: bold;
      &:hover {
        cursor: pointer;
    }
`;

// Só usei boder pra visuializar melhor, tirar no projeto final.
export const Logo = styled.img `
    width: 8vw;
    height: 12vh;
    position: relative;
    :hover,
    button:focus {
    border: 0.1rem solid white;   
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
`

export const ImgTexto = styled.img `
    width: 20vw;
    height: 40vh;
    position: relative;
    :hover,
    button:focus {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
`
// Só usei boder pra visuializar melhor, tirar no projeto final.
export const ImgCarrinho = styled.img `
    width: 4vw;
    height: 8vh;
    margin-left: 50rem;
    :hover,
    button:focus {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    border: 0.1rem solid white; 
}
`