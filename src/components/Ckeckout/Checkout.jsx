import React from 'react'
import './Checkout.css'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../services/config'
import { collection, addDoc } from 'firebase/firestore'

const Checkout = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const { cart, emptyCart, total } = useContext(CartContext)

  const formManajer = (e) => {
    e.preventDefault()

    if (!name || !surname || !phone || !email || !emailConfirmation) {
      setError("Por favor complete todos los campos del formulario")
      return
    }

    if (email !== emailConfirmation) {
      setError("Checkee el email, no coinciden")
      return
    }

    const order = {
      items: cart.map(product => ({
        id: product.item.id,
        name: product.item.name,
        quantity: product.quantity
      })),
      total: total,
      date: new Date(),
      name,
      surname,
      phone,
      email
    }

    addDoc(collection(db, "orders"), order)
      .then(docRef => {
        setOrderId(docRef.id);
        emptyCart();
      })
      .catch((error) => {
        console.log(error)
        setError("Error al comprar, intente mas tarde")
      }
      )
  }





  return (
    <div className='container'>
      <h2>CheckOut</h2>
      <ul>
        {
          cart.map(product => (
            <li key={product.item.id}>
              <p>{product.item.name} {product.quantity} unidades</p>
            </li>
          ))
        }
      </ul>
      <form onSubmit={formManajer}>
        <div className="form-group">
          <label> Nombre </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label> Apellido </label>
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>

        <div className="form-group">
          <label> Telefono </label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="form-group">
          <label> Email </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label> Email Confirmación </label>
          <input type="email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
        </div>

        {
          error && <p>{error}</p>
        }

        <button type='submit'>Finalizar compra</button>
      </form>
      {
        orderId && (
          <p>Tu compra ha sido finalizada con exito, para hacer el seguimiento te damos tu numero de orden: {orderId}</p>
        )
      }
    </div>
  )
}

export default Checkout