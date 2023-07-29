import React, { Children } from "react";
import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    cartQuantity: 0
})

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState ([])
    const [total, setTotal] = useState (0)
    const [cartQuantity, setCartQuantity] = useState (0)

    console.log (cart)

    const addProducts = (item, quantity) => {
        const checkIfTheItemIsInTheCartAndGetIt = cart.find (product => product.item.id === item.id)

        if (!checkIfTheItemIsInTheCartAndGetIt) {
            setCart (prev => [...prev, {item, quantity}])
            setTotal (prev => prev + (item.price * quantity))
            setCartQuantity (prev => prev + quantity)
        } else {
            const updatedCart = cart.map(product => {
                if (product.item.id === item.id) {
                    return {...product, quantity:product.quantity + quantity}
                } else {
                    return product
                }
            })
            setCart (updatedCart)
            setTotal (prev => prev + (item.price * quantity))
            setCartQuantity (prev => prev + quantity)
        }
    }

    const deleteProduct = (id) => {
        const productToDelete = cart.find(prod => prod.item.id === id)
        const updatedCart = cart.filter(prod => prod.item.id !== id)

        setCart (updatedCart)
        setCartQuantity (prev => prev - productToDelete.quantity)
        setTotal(prev => prev - (productToDelete.item.price * productToDelete.quantity))
    }

    const emptyCart = () => {
        setCart ([])
        setCartQuantity (0)
        setTotal(0)
    }

    return (
        <CartContext.Provider value={{cart, total, cartQuantity, addProducts, deleteProduct, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}