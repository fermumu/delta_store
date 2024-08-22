import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Favoritos from './Favoritos';


export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
      <FontAwesomeIcon icon={faBars} size="2x" />
      </Link>
      <ul className='menu'>
        <li><Link className='menu-link' to='/'> Inicio </Link></li>
        <li className='productos-menu'>
          <Link className='menu-link' to='/productos'>Productos</Link>
          <ul className='submenu'>
            <li><Link to='/productos/medias'>Medias</Link></li>
            <li><Link to='/productos/pantalones'>Pantalones</Link></li>
            <li><Link to='/productos/remeras'>Remeras</Link></li>
            <li><Link to='/productos/buzos'>Buzos</Link></li>
          </ul>
        </li>
        <li><Link className='menu-link' to='/nosotros'> Nosotros </Link></li>
        <li><Link className='menu-link' to='/contacto'> Contacto </Link></li>
        <li><Favoritos/></li>
        <li><CartWidget/></li>
      </ul>
    </nav> 
  )
}

