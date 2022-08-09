import React, { useEffect, useState } from 'react'
import { ConjuntoDoCarrinho } from './styled'
import ProdutoCarrinho from './ProdutoCarrinho/ProdutoCarrinho'

const Carrinho = () => {
    const [itemCarrinho, setItemCarrinho] = useState([])

    useEffect((itemCarrinho) => {
        let listaCarrinho = localStorage.getItem("lista")
        const carrinhoConvertido = JSON.parse(listaCarrinho)
        carrinhoConvertido && setItemCarrinho(itemCarrinho)
    }, [])

    const valorTotal = () => {
        let valorTotal = 0;
    
        for (let produto of itemCarrinho) {
          valorTotal += produto.preco * produto.quantidade;
        }
        return valorTotal.toLocaleString("pt-BR", {style: "currency",currency: "BRL",});
    };

    const removerItem = (itemID) => {
        const novosProdutos = itemCarrinho.map((item) => {
            if (item.id === itemID) {
              return {...item, quantidade: item.quantidade - 1};
            }
            return item;
        })
        .filter((item) => item.quantidade > 0 );
        setItemCarrinho(novosProdutos);
        localStorage.setItem("lista", JSON.stringify(novosProdutos))
    };

    return (
        <ConjuntoDoCarrinho>
            <h2>Carrinho:</h2>
            {itemCarrinho.map((item) => {
              return (
                <ProdutoCarrinho
                  key={item.id}
                  id={item.id}
                  itensNoCarrinho={itemCarrinho}
                  removerItem={() => removerItem(item.id)}
                  nome={item.nome}
                  quantidade={item.quantidade}
                  preco={item.preco}
                />
              )
            })
            };
            <h4>Valor total: {valorTotal()}</h4>
        </ConjuntoDoCarrinho>
    )
}
export default Carrinho 