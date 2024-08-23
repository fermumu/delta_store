import React, { useContext } from 'react';
import { CartContext } from '../contex/CartContext';
import { Link } from 'react-router-dom';
import './Carrito.css';

export default function Carrito() {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className='container'>
      <div className="title">
        <h1 className='main-title'>Carrito de Compras</h1>
      </div>
      <table>
        <thead className='title-head'>
          <tr>
            <th className='title-table'>Producto</th>
            <th className='title-table'>Precio</th>
            <th className='title-table'>Cantidad</th>
            <th className='title-table'>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((prod) => (
            <tr key={prod.id}>
              <td>
                <div className="prod-cart">
                  <h2>{prod.titulo}</h2>
                  <img className="product-img" src={prod.imagen} alt={prod.titulo} />
                </div>
              </td>
              <td>$ {prod.precio}</td>
              <td>{prod.cantidad}</td>
              <td>$ {prod.precio * prod.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      
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
