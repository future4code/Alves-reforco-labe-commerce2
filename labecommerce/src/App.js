import React from 'react'
import BrowserRouter from './routes/BrowserRouter';

export const UserContext = React.createContext();

function App() {
    return (
        <UserContext.Provider >
            <BrowserRouter />
        </UserContext.Provider>
      )
};

export default App;

//Carrinho não ta renderizando na segunda página
/* <CarrinhoPage
carrinho={itensCarrinho}
valorTotal={valorTotal}
onClick={removerItemCarrinho}
/> */
