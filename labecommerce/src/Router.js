import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Produtos from './components/Produtos/Produtos'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Produtos/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}