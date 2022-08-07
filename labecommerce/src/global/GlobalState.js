import React, { useState } from 'react'

export const ProductContext = React.createContext();

function GlobalState (props) {
    const [inpuValorMin, setInputValorMin] = useState(20)
    const [inputValorMax, setInputValorMax] = useState(1000)
    const [inputNomeProduto, setInputNomeProduto] = useState("")
    const [itensCarrinho, setItensCarrinho] = useState([])
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

   

    return (
        <ProductContext.Provider value={{estados, conjuntoDeProdutos}}>
            {props.children}
        </ProductContext.Provider>
    )

}

export default GlobalState
