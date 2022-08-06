import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProdutosPage from '../pages/Produtos/ProdutosPage';
import CarrinhoPage from '../pages/Carrinho/CarrinhoPage';
import HomePage from '../pages/Home/HomePage';

export default function BrowserRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/produtos' element={<ProdutosPage />} />
                <Route path='/carrinho' element={<CarrinhoPage />} />
            </Routes>
        </Router>
    )
}

