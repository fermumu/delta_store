import React, { useState } from 'react';
import './CreateProducts.css';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase/config/config';

export default function CreateProducts() {

  const [productoId, setProductoId] = useState("");

  const {register, handleSubmit, reset} = useForm();

  const storage = getStorage();

  const addProducts = async (data) => {
    try {
      // Crear una referencia a la carpeta de imágenes en Firebase Storage
      const storageRef = ref(storage, `productos`);

      // Subir la imagen principal
      const imageFile = data.imagen[0];
      const imageRef = ref(storageRef, imageFile.name);
      await uploadBytes(imageRef, imageFile);
      const imageURL = await getDownloadURL(imageRef);

      // Subir imagen 2 si existe
      let image2URL = "";
      if (data.imagen2.length > 0) {
        const imageFile2 = data.imagen2[0];
        const imageRef2 = ref(storageRef, imageFile2.name);
        await uploadBytes(imageRef2, imageFile2);
        image2URL = await getDownloadURL(imageRef2);
      }

      // Subir imagen 3 si existe
      let image3URL = "";
      if (data.imagen3.length > 0) {
        const imageFile3 = data.imagen3[0];
        const imageRef3 = ref(storageRef, imageFile3.name);
        await uploadBytes(imageRef3, imageFile3);
        image3URL = await getDownloadURL(imageRef3);
      }

      // Crear objeto producto con las URLs de las imágenes
      const producto = {
        titulo: data.titulo,
        descripcion: data.descripcion,
        precio: data.precio,
        categoria: data.categoria,
        imagen: imageURL,
        imagen2: image2URL,
        imagen3: image3URL,
      };

      // Guardar en Firestore
      const productosRef = collection(db, "productos");
      const docRef = await addDoc(productosRef, producto);
      setProductoId(docRef.id);

      // Resetear el formulario
      reset();
    } catch (error) {
      console.error("Error al subir el producto: ", error);
    }
  };

  if(productoId){
    return(
      <div className="container">
        <h1 className="main-title">Producto cargado con éxito</h1>
        <p>Producto creado con ID : {productoId}</p>
      </div>
    )
  }

  return (
    <div className="container-form">
      <h1 className="title-form">Crear Nuevo Producto</h1>
      <form className='formulario-productos' onSubmit={handleSubmit(addProducts)}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" className="input-form" {...register("titulo")}/>
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categoría:</label>
          <input type="text" id="categoria" name="categoria" className="input-form" {...register("categoria")} />
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" className="input-form" {...register("descripcion")}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="precio">Precio:</label>
          <input type="number" id="precio" name="precio" className="input-form" {...register("precio")} />
        </div>

        <div className="form-group">
          <label htmlFor="imagen">Imagen:</label>
          <input type="file" id="imagen" name="imagen" className="input-form" {...register("imagen")} />
        </div>

        <div className="form-group">
          <label htmlFor="imagen">Imagen 2:</label>
          <input type="file" id="imagen" name="imagen" className="input-form" {...register("imagen2")} />
        </div>

        <div className="form-group">
          <label htmlFor="imagen">Imagen 3:</label>
          <input type="file" id="imagen" name="imagen" className="input-form" {...register("imagen3")} />
        </div>

        <button type="submit" className="btn-submit">Crear Producto</button>
      </form>
    </div>
  );
}
