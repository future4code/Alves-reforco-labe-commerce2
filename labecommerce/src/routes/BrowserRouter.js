import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProdutosPage from '../pages/ProdutosPage/ProdutosPage';
import CarrinhoPage from '../pages/CarrinhoPage/CarrinhoPage';
import HomePage from '../pages/HomePage/HomePage';

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

