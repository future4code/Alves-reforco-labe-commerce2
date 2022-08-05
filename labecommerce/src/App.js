import React, { useState } from 'react'
import Header from './components/Header/Header';
import BrowserRouter from './BrowserRouter';
import Filtros from './components/Filtros.js/Filtros';
import { conjuntoDeProdutos } from './constants/conjuntoDeProdutos/conjuntoDeProdutos';
import ProdutoPage from './pages/Home/Produto/ProdutoPage';
import CarrinhoPage from './pages/Carrinho/CarrinhoPage';
import { Conjunto } from './styled';

function App() {
    const [inpuValorMin, setInputValorMin] = useState(20)
    const [inputValorMax, setInputValorMax] = useState(1000)
    const [inputNomeProduto, setInputNomeProduto] = useState("")
    const [itensCarrinho, setItensCarrinho] = useState([])
    const [ordenacao, setOrdenacao] = useState("Crescente")
    const [valorTotal, setValorTotal] = useState(0)

      // Manipulação dos filtros: nome, valor maximo e valor minimo.
    const onChangeInputNomeProduto = (e) => {
    setInputNomeProduto(e.target.value)
    }

    const onChangeInputValorMin = (e) => {
    setInputValorMin(e.target.value)
    }
  
    const onChangeInputValorMax = (e) => {
    setInputValorMax(e.target.value)
    }

    // Filtrar produtos de acordo com os valores minimo e maximo.
    const filtrarProdutos = () => {
        const conjuntoFiltradosMinimo = conjuntoDeProdutos.filter( (produto) => {
            if(inpuValorMin) {
                return produto.preco >= inpuValorMin
            } else {
                return produto
            }
        });

        const conjuntFiltradosMaximo = conjuntoFiltradosMinimo.filter( (produto) => {
            if(inputValorMax) {
                return produto.preco <= inputValorMax
            } else {
                return produto
            }
        });

        const conjuntoFiltrado = conjuntFiltradosMaximo.filter( (produto)  => {
            return produto.nome.includes(inputNomeProduto)
        })

        return conjuntoFiltrado;
    }

    // Ordenação Crescente dos Produtos .
    const onChangeOrdenarProdutos = (e) => {
        setOrdenacao(e.target.value)
    }

    //Acidionar produto no Carrinho.
    // item.id -> produto clicado.
    // produto.id -> produto no Carrinho.
    const addProdutosCarrinho = (produto) => {
        const produtoNoCarrinho = itensCarrinho.filter((item) => {
            if(item.id === produto.id) {
                return item
            } else {
                return false
            }
        });

     if (produtoNoCarrinho.lenght === 0) {
        produto.quantidade = 1;
        const novoCarrinho = [produto, ...itensCarrinho]
        setItensCarrinho(novoCarrinho)
     } else {
        const novoCarrinho = itensCarrinho.map( (item) => {
            if(produto.id === item.id) {
                return {...item, quantidade: item.quantidade + 1} 
            } else {
                return item;
            }
        });
        setItensCarrinho(novoCarrinho)
        }
        adicionarValorTotal(produto.preco);
    };

    const removerItemCarrinho = (itemParaRemovar) => {
        if(itemParaRemovar.quantidade === 1) {
            const novoCarrinho = itensCarrinho.filter((item) => {
                if(item.id !== itemParaRemovar.id) {
                    return item
                } else {
                    return false
                }
            });
            setItensCarrinho(novoCarrinho)
        } else {
            const novoCarrinho = itensCarrinho.map((item) => {
                if((itemParaRemovar.id === item.id) && (item.quantidade >= 1)) {
                    return {...item, quantidade: item.quantidade - 1}
                } else {
                    return item 
                }  
            });
            setItensCarrinho(novoCarrinho)
        };
    }

    // Adicionar Valor Total 
    //function usado em addProdutosCarrinho
    const adicionarValorTotal = (valor) => {
        setValorTotal(valorTotal + valor)
    }

    // Remover Valor Total 
    const removerValorTotal = (valor) => {
        setValorTotal(valorTotal - valor)
    } 
    
    const conjuntoFiltrado = filtrarProdutos()

    return (
       <div>
            <BrowserRouter />
            <Header />
            <Conjunto> 
                <Filtros  
                    minimo={inpuValorMin}
                    maximo={inputValorMax}
                    nomeProduto={inputNomeProduto}
                    onChangeMin={onChangeInputValorMin}
                    onChangeMax={onChangeInputValorMax}
                    onChangeNome={onChangeInputNomeProduto}
                />
                <ProdutoPage
                    quantidade={conjuntoFiltrado.lenght}
                    onChangeCabecalho={onChangeOrdenarProdutos}
                    ordenacao={ordenacao}
                    produtos={conjuntoFiltrado}
                    onClick={addProdutosCarrinho}
                />   
            </Conjunto>
          
       </div> 
    )
}

export default App;

//Carrinho não ta renderizando na segunda página
/* <CarrinhoPage
carrinho={itensCarrinho}
valorTotal={valorTotal}
onClick={removerItemCarrinho}
/> */
