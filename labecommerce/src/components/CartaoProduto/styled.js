import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`

export const FotoProduto = styled.img`
    width: 100%;
    transform: scale(1.0);
    transition-duration: 0.5s;
    :hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
    }
`

export const Infos = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    p {
        margin-bottom: 0;
        margin-top: 2px;
    }
    h3, h5 {
        margin: 0 16px;
        padding: 10px;
    }
`

export const Botao = styled.button`
    margin: 10px;
    align-self: center;
    width: 70%;
  :hover {
  background: #1b1464 radial-gradient(circle, transparent 1%,#192C53 1%) center/15000%;
  color: #FFFFFF;
  }
`
