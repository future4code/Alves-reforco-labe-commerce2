import styled from "styled-components";

export const CardContainer = styled.div`
  border: 3px solid #FF00FF;
  display: flex;
  flex-direction: column;
  height: 65vh;
  margin: 2rem 1rem;
  background-color: #DCDCDC;
`

export const FotoProduto = styled.img`
    width: 100%;
    height: 37vh;
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
      text-align: center;
    }
    h1, h2 {
      margin: 0 auto;
      padding: 8px;
      font-size: 20px;
      font-weight: 800;
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