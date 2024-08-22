import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contex/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartWidget() {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <li>
        <Link className='menu-link' to='/carrito'> 
          <FontAwesomeIcon icon={faCartShopping} />
          <span className='numerito'> {cantidadEnCarrito()}</span>
        </Link>
      </li>
    </div>
  )
}
