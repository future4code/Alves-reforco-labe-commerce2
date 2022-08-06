import React, { useState } from 'react'
import GlobalStateContext from './GlobalStateContext'

function GlobalState (props) {
    const [inpuValorMin, setInputValorMin] = useState(20)
    const [inputValorMax, setInputValorMax] = useState(1000)
    const [inputNomeProduto, setInputNomeProduto] = useState("")
    const [itensCarrinho, setItensCarrinho] = useState([])
    const [ordenacao, setOrdenacao] = useState("Crescente")
    const [valorTotal, setValorTotal] = useState(0)

    const estados = {
        inpuValorMin,
        inputValorMax,
        inputNomeProduto,
        itensCarrinho,
        ordenacao,
        valorTotal,
        setInputValorMin,
        setInputValorMax,
        setInputNomeProduto,
        setItensCarrinho,
        setOrdenacao,
        setValorTotal
    }

    const conjuntoDeProdutos = [
        {
        id: 1,
        foto: "",
        nome: "Camiseta1",
        descricao: "Descrição",
        preco: 50,
         
      },
      {
        id: 2,
        foto: "",
        nome: "Camiseta2",
        descricao: "Descrição",
        preco: 70,
         
      },
      {
        id: 3,
        foto: "",
        nome: "Camiseta3",
        descricao: "Descrição",
        preco: 65,
         
      },
      {
        id: 4,
        foto: "",
        nome: "Camiseta4",
        descricao: "Descrição",
        preco: 40,
         
      },
      {
        id: 5,
        foto: "",
        nome: "Camiseta5",
        descricao: "Descrição",
        preco: 120,
        
      },
      {
        id: 6,
        foto: "",
        nome: "Camiseta6",
        descricao: "Descrição",
        preco: 100,
        
      }]

    return (
        <GlobalStateContext.Provider value={{estados, conjuntoDeProdutos}}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState
