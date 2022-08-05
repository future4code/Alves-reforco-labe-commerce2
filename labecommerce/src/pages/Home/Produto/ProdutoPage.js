import React from 'react'
import CartaoProduto from '../../../components/CartaoProduto/CartaoProduto'
import { Cabecalho, ConjuntoDeCartoes } from './styled';


const ProdutoPage = (props) => {
    const produtosOrdenados = props.produtos && props.produtos.sort((a, b) => {
        if(props.produtos.ordenacao === "Crescente") {
          return a.preco - b.preco
        } else {
         return b.preco - a.preco
        }
    });

    const produtosMapeados = produtosOrdenados && produtosOrdenados.map( (produto) => {
        return (
            <CartaoProduto
                key={produto.id}
                foto={produto.foto}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                onClick={() => props.onClick(produto)}
            />
        )
    }); 

  return (  
    <div>
        <Cabecalho>
            <p>Quantidade de produtos: {props.quantidade} </p>
            <label>
                Ordenação:
                <select onChange={props.onChangeCabecalho}>
                    <option value={"Crescente"}>Crescente</option>
                    <option value={"Decrescente"}>Decrescente</option>
                </select>
            </label>
        </Cabecalho>
        <ConjuntoDeCartoes>{produtosMapeados}</ConjuntoDeCartoes>
    </div>
  )
}

export default ProdutoPage