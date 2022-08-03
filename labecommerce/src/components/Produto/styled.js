import styled from "styled-components";
import fundo from './imagens/fundo.jpg'

export const Body = styled.div`
 background-image: url(${fundo});
margin-top: 80px;
height:100vh; 
weight: 100%; 
   
`

export const ContCard = styled.div`
margin-top: 50px;
height:100vh; 
weight: 20%; 
margin-left: 20px;    
`
export const ContFiltro = styled.div`
margin-top: 50px;
height:100vh; 
weight: 80%; 
margin-right: 20px; 
`

export const ContBody = styled.div`
display: flex;
justify-content: space-between
`