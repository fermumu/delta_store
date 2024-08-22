import React from 'react';
import Items from './Items';
import { toCapital } from '../helpers/letraMay';

export default function ItemList( { productos, categoria } ) {
  return (
    <div className='container'>
      <h2 className='main-title'>{categoria ? toCapital(categoria) : 'Productos'}</h2>
      <div className='productos'>
        {productos.map((prod) => <Items productos={prod} key={prod.id}/>)}
      </div>
      
    </div>
  )
}
  