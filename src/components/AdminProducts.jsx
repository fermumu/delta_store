import React, { useEffect, useState } from 'react';
import './AdminProducts.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config/config';

export default function AdminProducts() {

  const [getProduto, setGetProducto] = useState([])

  const getProducts = () => {

    const productosRef = collection(db, "productos");

    getDocs(productosRef)
      .then((prod) => { 
        const productList = prod.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setGetProducto(productList);
      })
      .catch((err) => {
        console.error("Error al obtener data:", err);
        
      });
      
  };

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <div>
      <div className='product-conatiner'>
        <h1 className='title-product'>Administrador de productos</h1>
        <button className='button-product'>
          Crear Producto
        </button>
      </div>
      <div className="table-product">
        <table>
          <thead className='head-table'>
            <tr>
              <th className='title-table'>Nombre</th>
              <th className='title-table'>Categoría</th>
              <th className='title-table'>Descripción</th>
              <th className='title-table'>Precio</th>
              <th className='title-table'>Imagen</th>
              <th className='title-table'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              getProduto.map((pro) =>(
                <tr key={pro.id} className='body-table'>
                  <td className='text-table'>{pro.titulo}</td>
                  <td className='text-table'>{pro.categoria}</td>
                  <td className='text-table'>{pro.descripcion}</td>
                  <td className='text-table'>$ {pro.precio}</td>
                  <td className='text-table'> <img src={pro.imagen} alt={pro.titulo}/> </td>
                  <td className='text-table'>Editar - Eliminar</td>
                </tr>
              ))
            }
            
              
              
              
              
              
              
              
            
          </tbody>
        </table>
      </div>
    </div>
  )
}
