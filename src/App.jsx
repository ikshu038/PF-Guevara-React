import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import NavBar from "./Components/NavBar/NavBar"
import { CartProvider } from "./context/CartContext"

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
            
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App