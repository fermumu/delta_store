import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config/config'

export default function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;
  console.log(categoria);
  
  
  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
    getDocs(q)
      .then((resp)=>{
        setProductos(
          resp.docs.map((doc) => {
            return{
              ...doc.data(),id:doc.id
            }
          })
        );
        
      })
  },[categoria])
  
  return (
    <div>
      <ItemList productos = {productos}  categoria = {categoria}/>
    </div>
  )
} 
