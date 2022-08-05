import React from "react";
import { ConjuntoDeItens } from "./styled";

function Itens(props) {
    return (
        <ConjuntoDeItens>
            <p> {props.quantidade} </p>
            <p> {props.nome} </p>
            <button onClick={props.onClick}>Remover</button>
        </ConjuntoDeItens>
    )
}

export default Itens;