import React , { useState, useEffect }from 'react'
import { Cabecalho , ContainerProdutos, ConjuntoDeCartoes } from './styled'
import UmProduto from '../Produtos/UmProduto/UmProduto'

const Produto = () => {
    const [ordenacao, setOrdenacao] = useState("Crescente")
    const [produtos, setProdutos] = useState([
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
        
      }]);

      useEffect(() => {
        setProdutos(produtos)
        setOrdenacao(ordenacao)
      }, []);

      const produtosOrdenados = produtos.sort((a, b) => {
        if (produtos.ordenacao === "Crescente") {
          return a.preco - b.preco 
        } else {
          return b.preco - a.preco
        }
      });

      const produtosMapeados = produtosOrdenados.map((produto) => {
        return (
          <UmProduto produto={produto}
          key={produto.id}
          imagem={produto.photo}
          nome={produto.name}
          preco={produto.price}
          />
        )
      });

    return (
        <div>
            <Cabecalho>
            <p>Quantidade de produtos: {produtos.id} </p>
            <h2> Todos os Produtos:</h2>
            <label>
              Ordenação:
              <select onChange={(e) => setOrdenacao(e.target.value)}>
                <option value={"Crescente"}>Crescente</option>
                <option value={"Decrescente"}>Decrescente</option>
              </select>
            </label>
        </Cabecalho><hr/>
        <ContainerProdutos>
            <ConjuntoDeCartoes> {produtosMapeados} </ConjuntoDeCartoes>
        </ContainerProdutos>
            
        </div>
    )
}

export default Produto;