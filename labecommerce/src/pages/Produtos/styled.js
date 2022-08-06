import styled from "styled-components";

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ConjuntoDeCartoes = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
  margin: 10px 0;
`
export const ContainerPage = styled.div`
    position: relative;
    margin: auto;
    border: 1px solid black;
    width: 50%;
    height: 70vh;
    top: 50%;


`
export const Div = styled.div`
    display: flex;
    position: absolute;
   
`
