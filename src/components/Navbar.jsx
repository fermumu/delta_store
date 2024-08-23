import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import Favoritos from './Favoritos';
import Menu from './Menu';


export default function Navbar() {
  return (
    <nav className='navbar'>
      <Menu/>
      <ul className='menu'>
        <li><Link className='menu-link' to='/'> Inicio </Link></li>
        <li className='productos-menu'>
          <Link className='menu-link' to='/productos'>Productos</Link>
          <ul className='submenu'>
            <li><Link to='/productos/grandes'>Grandes</Link></li>
            <li><Link to='/productos/medianos'>Medianos</Link></li>
            <li><Link to='/productos/pequeños'>Pequeños</Link></li>
            <li><Link to='/productos/accesorios'>Accesorios</Link></li>
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

