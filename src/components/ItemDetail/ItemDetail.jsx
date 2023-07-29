import React from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import Counter from '../Counter/Counter';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';

const ItemDetail = ({ name, price, image, description, stock, id }) => {
  const [addQuantity, setAddQuantity] = useState(0)

  const { addProducts } = useContext(CartContext)

  const quantityManager = (quantity) => {
    setAddQuantity(quantity)
    
    const item = { id, name, price, image }
    addProducts(item, quantity)
  }


  return (
    <div className="product-details">
      <img src={image} alt="Mate Alpaca" />
      <h1>{name}</h1>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <p className="stock">Stock: {stock}</p>
      <div className="quantity">
        <label htmlFor="quantity-mate-alpaca text-center">Cantidad:</label>
        {
        addQuantity > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<Counter min={1} max={stock} functionToAdd={quantityManager} />)
      }
      </div>

      
    </div>
  )
}

export default ItemDetail