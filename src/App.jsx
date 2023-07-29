import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import NavBar from "./components/NavBar/NavBar"
import { CartProvider } from "./context/CartContext"
import Checkout from './components/Ckeckout/Checkout'


const App = () => {
  return (
    <>

      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:category" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App