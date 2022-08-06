import styled from 'styled-components'

export const ContainerHeader = styled.header`
    position: relative;
    background: rgb(33,9,59);
    background: linear-gradient(90deg, rgba(33,9,59,1) 0%, rgba(130,60,241,0.8575805322128851) 99%); 
`

export const Nav = styled.ul `
    list-style: none;
    padding: 0;
    width: 100vw;
    min-height: 10vh;
    max-height: 16vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; //img alinhamento H
    
    @media (max-width: 880px){
        display: flex;
    }
`

export const Li = styled.li `
    font-weight: bold;
    padding: 10px 15px;
        
    &:hover {
        cursor: pointer;
    }
`


export const ImgLogo = styled.img `
    width: 8vw;
    height: 12vh;
    
    &:hover,
    button:focus {  
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
`

export const ImgGif = styled.img `
    width: 20vw;
    height: 40vh; 
 
    &:hover,
    button:focus {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
`

export const ImgCarrinho = styled.img `
    width: 4vw;
    height: 8vh;

    &:hover,
    button:focus {
    -webkit-transform: scale(1.1);
    transform: scale(1.1); 
}
`