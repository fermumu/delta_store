import React from 'react'
import { Link } from 'react-router-dom'

export default function Items( {productos} ) {
  return (
    <div className='producto'>
      <img src={productos.imagen} alt={productos.titulo}/>
      <div>
        <h4>{productos.titulo}</h4>
        <p>Precio: {productos.precio}</p>
        <p>Categoria: {productos.categoria}</p>
        <p>{productos.descripcion}</p>
        <Link className='ver-mas' to={`/item/${productos.id}`}>Ver mas..</Link>
      </div>
      
    </div>
  )
}
