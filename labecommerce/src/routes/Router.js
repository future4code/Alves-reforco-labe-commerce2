import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carrinho from '../pages/Carrinho/Carrinho'
import Produto from '../pages/Produto/Produto'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element = {<Produto/>}/>
            <Route path = "carrinho" element = {<Carrinho/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router