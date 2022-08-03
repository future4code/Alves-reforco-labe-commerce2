import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carrinho from './components/Carrinho/Carrinho'
import Produto from './components/Produto/Produto'

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