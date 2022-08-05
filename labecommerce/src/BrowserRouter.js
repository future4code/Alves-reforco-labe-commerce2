import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProdutoPage from './pages/Home/Produto/ProdutoPage';
import CarrinhoPage from './pages/Carrinho/CarrinhoPage';

export default function BrowserRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ProdutoPage />} />
                <Route path='/carrinho' element={<CarrinhoPage />} />
            </Routes>
        </Router>
    )
}

