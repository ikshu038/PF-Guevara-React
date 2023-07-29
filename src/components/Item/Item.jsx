import React from "react"
import './item.css'
import { Link } from "react-router-dom"

const Item = ({ id, name, price, image }) => {
    return (
        <div className="card" id="card-2">
            <img className='imgProduct' src={image} alt={name} />
            <div className="card-body d-flex flex-column">
                <p className="card-text">Id: {id}</p>
                <p className="card-text">{name}</p>
                <h5 className="card-price fw-bold">${price}</h5>
                <Link to={`/item/${id}`} className="btn btn-success ml-auto">Detalles</Link>
            </div>
        </div>
    )
}

export default Item