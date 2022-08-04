import React from 'react'
import CardProduto from '../../components/CardProduto/CardProduto'
import Header from '../../components/Header/Header'
import Filtro from '../../components/Filtro/Filtro'
import Footer from '../../components/Footer/Footer'



const Produto = () => {
    const [produtos, setProdutos] = useState([{
      id: 1,
      fotoProduto: "",
      name: "Camiseta1",
      descricao: "Descrição",
      preco: 50,
       
    },
    {
      id: 2,
      fotoProduto: "",
      name: "Camiseta2",
      descricao: "Descrição",
      preco: 70,
       
    },
    {
      id: 3,
      fotoProduto: "",
      name: "Camiseta3",
      descricao: "Descrição",
      preco: 65,
       
    },
    {
      id: 4,
      fotoProduto: "",
      name: "Camiseta4",
      descricao: "Descrição",
      preco: 40,
       
    },
    {
      id: 5,
      fotoProduto: "",
      name: "Camiseta5",
      descricao: "Descrição",
      preco: 120,
      
    },
    {
      id: 6,
      fotoProduto: "",
      name: "Camiseta6",
      descricao: "Descrição",
      preco: 100,
      
    }])
    const [inputNomeProduto, setInputNomeProduto] = useState("")
    const [inpuValorMin, setInputValorMin] = useState("")
    const [inputValorMax, setInputValorMax] = useState("")
    const [itensNoCarrinho, setItensCarrinho] = useState([])
  
    // Inputs controlados, do filtro
    onChangeInputNomeProduto = (e) => {
      setInputNomeProduto(e.target.value)
    }

    onChangeInputValorMin = (e) => {
      setInputValorMin(e.target.value)
    }
    
    onChangeInputValorMax = (e) => {
      setInputValorMax(e.target.value)
    }


    
  return (
    
    <AppContainer>
        <Header/>
        <h1>Produto</h1>
        <Filtro/>
        <CardProduto/>
        <Footer />
    </AppContainer>
  )
}

export default Produto