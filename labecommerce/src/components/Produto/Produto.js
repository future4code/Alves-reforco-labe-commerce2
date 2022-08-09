import React , { useState }from 'react'


// Array de produtos
import { produtos } from '../../constants/produtos'



const Produto = () => {
    const [ordenacao, setOrdenacao] = useState(1)
    const [itemCarrinho, setItemCarrinho] = useState([])


    // itemId = ID do item sendo clicado 
    // item.id = item que está no carrinho
    const adicionarItem = (itemId) => {
      const itemNoCarrinho = itemCarrinho.find((item) => itemId === item.id);
      if (itemNoCarrinho) {
        const novosItensCarrinho = itemCarrinho.map((item) => {
          if (itemId === item.id) {
            return {...item, quantidade: item.quantidade + 1};
          }
          return item;
        });
        setItemCarrinho(novosItensCarrinho);
        console.log(novosItensCarrinho);
        localStorage.setItem("lista", JSON.stringify(novosItensCarrinho))
      } else {
        const itemAdicionado = produtos.find((item) => itemId === item.id);
        const novosItensCarrinho = [...itemCarrinho,{ ...itemAdicionado, quantidade: 1 }];
        console.log(novosItensCarrinho);
        setItemCarrinho(novosItensCarrinho);
        localStorage.setItem("lista", JSON.stringify(novosItensCarrinho))
      }
    };

  
    return (
        <div>
          <ContainerOrdenacao>
            <p>Quantidade de produtos: {produtos.length}  </p>   
            <h2> Todos os Produtos</h2>
            <label>
              Ordenação de preço:
              <select 
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
                nome={"Ordenação"}
              >
                <option value={1}>Crescente</option>
                <option value={-1}>Decrescente</option>
              </select>
            </label>
          </ContainerOrdenacao>
          <ContainerProdutos>
           <ConjuntoDeCartoes>
            {produtos.filter((produto) => {
              return (
                produto.nome.toLowerCase().includes(inputNomeProduto.toLowerCase()) ||  produto.descricao.toLowerCase().includes(inputNomeProduto.toLowerCase())
                )
            })
            .filter((produto) => {
              return (
                inputValorMin === "" || produto.preco >= inputValorMin
              );
            })
            .filter((produto) => {
              return (
                inputValorMax === "" || produto.preco <= inputValorMax
              );
            })
            .sort((produtoAtual, proximoProduto) => {
              return (
                ordenacao * (produtoAtual.preco - proximoProduto.preco)
              );
            })
            .map((produto) => {
              return (
                <UmProduto
                  key={produto.id}
                  id={produto.id}
                  foto={produto.foto}
                  nome={produto.nome}
                  descricao={produto.descricao}
                  preco={produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  carrinho={itemCarrinho}
                  adicionarItem={() => adicionarItem(produto.id)}
                />
              );
            })
            };
           </ConjuntoDeCartoes>
          </ContainerProdutos>
            
        </div>
    )
}

export default Produto;