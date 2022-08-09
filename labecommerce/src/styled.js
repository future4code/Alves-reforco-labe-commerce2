import styled from "styled-components";

export const ContainerOrdenacao = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 1rem;
  h2 {
    font-weight: 600;
  }
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
    width: 70vw;
    min-height: 130vh;
    max-height: 150vh;
    padding-bottom: 3rem;
`

export const MenuFiltros = styled.div`
    display: flex;
    position: absolute;
   
`

export const Filtros = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    height: 10vh;
    width: 100vw;
    background-color: #DCDCDC;
    align-items: center;
    border-bottom: 2px solid grey;
`
export const DivFiltros = styled.div`
    display: flex;
    justify-content: space-around;
    
`
export const Label = styled.label`
    display: flex;
    align-items: center;
    margin: 0 1rem;
    input {
        margin: 0 1em;
    }
`

export const H4 = styled.h4`
    margin-bottom: 3px;
    color: black;
`

export const ConjuntoDoCarrinho = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 10px;
`