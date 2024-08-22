import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Favoritos() {
  return (
    <div>
      <li>
        <Link className='menu-link' to='/favoritos'> 
        <FontAwesomeIcon icon={faHeart} />
          {/* <span className='numerito'> {catidadEnCarrito()}</span> */}
        </Link>
      </li>
    </div>
  )
}
