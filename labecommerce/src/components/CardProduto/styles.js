import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-radius: 2%;
    background-color: black;
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
    h3 {
        margin-bottom: 0;
        margin-top: 2px;
    }
    h5 {
        margin-bottom: 0;
        margin-top: 5px;
        font-size: 18px;

    }
`

export const Botao = styled.button`
  color: #FFFFFF;
  align-self: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 35%;
  height: 46px;
  text-align: center;
  background-color: #fff;
  border: solid 1px #74747480;
  border-radius: 4px;
  color: #192C53;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.8s;
  background-position: center;
  :hover {
  background: #1b1464 radial-gradient(circle, transparent 1%,#192C53 1%) center/15000%;
  color: #FFFFFF;
  }
`


