import React from 'react'
import './cart.css'
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, emptyCart, total, cartQuantity } = useContext(CartContext);

    if (cartQuantity === 0) {
        return (
            <div className='container'>
                <h2 className='text-center'> No hay productos en el carrito. </h2>
                <Link to="/"><p className='text-center fs-3'>Ver Productos</p></Link>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className="contenedor__products row">
                <div className="products col-12 col-xl-9">
                    {cart.map(product => <CartItem key={product.item.id} {...product} />)}
                </div>
                <div className="totals col-12 col-xl-3 mt-4">
                    <div className="total__total">
                        <div className="total__total--title">Total</div>
                        <div className="total__total--total">{total}</div>
                    </div>
                    <div className="total__mate">
                        <div className="total__mate--title">Cantidad total</div>
                        <div className="total__mate--total">{cartQuantity}</div>
                    </div>
                </div>
                <button className='mt-5' onClick={emptyCart}>VACIAR CARRITO</button>
                <Link className="btn btn-success mt-5 confirm-cart" to="/checkout"> Finalizar Compra </Link>
            </div>
        </div>
    )
}

export default Cart


