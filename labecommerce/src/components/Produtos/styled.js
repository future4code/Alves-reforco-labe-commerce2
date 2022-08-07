import styled from "styled-components";

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ConjuntoDeCartoes = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
  margin: 10px 0;
`
export const ContainerProdutos= styled.div`
    position: relative;
    margin: auto;
    border: 1px solid black;
    width: 70vw;
    min-height: 105vh;
    max-height: 150vh;
    padding: 2rem;
    
    
`
export const Div = styled.div`
    display: flex;
    position: absolute;
   
`