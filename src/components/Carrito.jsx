import React, { useContext } from 'react'
import { CartContext } from '../contex/CartContext'
import { Link } from 'react-router-dom';

export default function Carrito() {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className='container'>
      <h1 className='main-title'>Carrito</h1>
      {
        carrito.map((prod)=>(
          <div key={prod.id}>
            <br/>
            <h2>{prod.titulo}</h2>
            <p>Precio unitario: $ {prod.precio}</p>
            <p>Precio total: $ {prod.precio * prod.cantidad}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <br/>
          </div>
        ))
      }
      {  
        carrito.length > 0 ?
        <>
            <h2>Precio total: ${precioTotal()}</h2>
            <button onClick={handleVaciar}>Vaciar</button>
            <Link to="/checkout">Finalizar compra</Link>
            
        </> :
        <h2>El carrito está vacío </h2>
      }
      
    </div>
  )
}
