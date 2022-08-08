import React , { useEffect, useState }from 'react'
import { Filtros, ConjuntoDeCartoes, ContainerOrdenacao, ContainerProdutos, H4, Label, MenuFiltros, ConjuntoDoCarrinho } from './styled'
import UmProduto from '../Produtos/UmProduto/UmProduto'
import ProdutosCarrinho from '../Produtos/ProdutosCarrinho/ProdutosCarrinho' 

// Array de produtos
import { produtos } from '../../constants/produtos'



const Produto = () => {
    const [ordenacao, setOrdenacao] = useState(1)
    const [itemCarrinho, setItemCarrinho] = useState([])
    const [inputValorMin, setInputValorMin] = useState(40)
    const [inputValorMax, setInputValorMax] = useState(120)
    const [inputNomeProduto, setInputNomeProduto] = useState("")

    useEffect((itemCarrinho) => {
      let listaCarrinho = localStorage.getItem("lista")
      const carrinhoConvertido = JSON.parse(listaCarrinho)
      carrinhoConvertido && setItemCarrinho(itemCarrinho)
    }, [])

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
        <div>
          <Filtros>
            <MenuFiltros>
                <Label>
                  <H4>Valor Minimo (R$): </H4>
                  <input
                    type={'number'}
                    placeholder='R$ 40'
                    id={"minimo"}
                    name={"Mínimo"}
                    min={0}
                    max={200}
                    valorMin={inputValorMin}  
                    onChangeMin={(e) => setInputValorMin(e.terget.value)}
                  />
                </Label>
                <Label>
                  <H4>Valor Máximo (R$):</H4>
                  <input 
                    type={'number'}
                    placeholder={'R$ 120'}
                    min={0}
                    max={200}
                    id={"maximo"}
                    name={"Máximo"}
                    valorMax={inputValorMax}
                    onChangeMax={(e) => setInputValorMax(e.target.value)}
                  />
                </Label>
                <Label>
                <H4>Busca por nome: </H4>
                  <input 
                    type={'text'}
                    placeholder={'Camisetas'}valorNome={inputNomeProduto}
                    onChangeNome={(e) => setInputNomeProduto(e.target.value)}
                  />
                </Label>
            </MenuFiltros>
          </Filtros>
          <ConjuntoDoCarrinho>
            <h2>Carrinho:</h2>
            {itemCarrinho.map((item) => {
              return (
                <ProdutosCarrinho
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
            .map((produto, indice) => {
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