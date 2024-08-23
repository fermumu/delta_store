import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (path) => {
    setIsOpen(false); // Cierra el menú
    navigate(path);   // Navega a la nueva ruta
  };

  return (
    <>
      <div className="menu-container">
        <FontAwesomeIcon 
          icon={faBars} 
          size="2x" 
          className="menu-icon" 
          onClick={toggleMenu} 
        />
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={menuRef}>
        <div className="sidebar-content">
          <h2>Menú</h2>
          <ul>
            <li>
              <Link 
                to="/adminProducts" 
                className="nav-link"
                onClick={() => handleLinkClick('/adminProducts')}
              >
                Administrador de productos
              </Link>
            </li>
            <li>
              <Link 
                to="/adminPedidos" 
                className="nav-link"
                onClick={() => handleLinkClick('/adminPedidos')}
              >
                Pedidos
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && <div className="overlay active" onClick={toggleMenu}></div>}
    </>
  );
}

