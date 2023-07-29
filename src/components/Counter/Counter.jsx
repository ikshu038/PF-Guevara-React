import React from 'react'
import './Counter.css'
import { useState } from 'react'

const Counter = ({min, max, functionToAdd}) => {
    const [counter, setCounter] = useState(min)

    const add = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }

    const decrease = () => {
        if (counter > min) {
            setCounter(counter - 1)
        }
    }
  
    return (
    <div className='counter'>
        <button className='decrease' onClick={decrease}>-</button>
        <p className='number'>{counter}</p>
        <button className='add' onClick={add}>+</button>
        <button className="buy-button" onClick={() => functionToAdd(counter)}>Comprar</button>
    </div>
  )
}

export default Counter