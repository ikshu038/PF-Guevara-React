import React from 'react'
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';

const CartItem = ({item, quantity}) => {
    const {deleteProduct} = useContext(CartContext);
    console.log (item)

    return (
        <div className="product d-flex flex-wrap align-items-center justify-content-between p-3">
            <img className="product__img" src={item.image} />
            <div className="product__name">
                <p className="fs-5 text-center title">Producto</p>
                <p className="fs-4 text-center text">{item.name}</p>
            </div>
            <div className="product__amount d-flex align-items-center">
                {/* <p className="fs-2 m-3 quit">-</p> esto es para sacar y el de abajo para agregar, capaz despues le doy la funcionalidad*/}
                <div>
                    <p className="fs-5 text-center title">Cantidad</p>
                    <p className="fs-4 text-center text">{quantity}</p>
                </div>
                {/* <p className="fs-2 m-3 add">+</p> */}
            </div>
            <div className="product__total">
                <p className="fs-5 text-center title">Precio</p>
                <p className="fs-4 text-center text">{item.price}</p>
            </div>
            <button className="btn btn-danger" onClick={() => deleteProduct(item.id)}>Eliminar {item.name}</button>
        </div>
    )
}

export default CartItem